import React, { useState } from 'react'
import { Checkbox, Modal } from '@material-ui/core';
import TvShowDetails from './TvShowDetails';
import { connect } from 'react-redux';
import { setFavorites } from '../state/actions';

function TvShow(props) {
    const { showInfo, actionSetFavorite, isFavorite } = props;

    const [showModal, setShowModal] = useState(false)
    const [checked, setChecked] = useState(isFavorite)


    const handleOpen = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const handleFavCheck = () => {
        if (checked && window.confirm(`Are you sure you want to delete ${showInfo.name} from your favorites?`)) {
            setChecked(false);
            actionSetFavorite(showInfo.id)
        }
        else {
            setChecked(true);
            actionSetFavorite(showInfo.id)
        }
    }

    return (
        <div className="show-container">
            <img onClick={handleOpen} src={showInfo.image && showInfo.image.medium} />
            <h2 onClick={handleOpen}>{showInfo.name}</h2>
            <Checkbox checked={checked} onChange={handleFavCheck}/>

            <Modal open={showModal} onClose={handleClose} className="details-modal">
                <TvShowDetails showInfo={showInfo} isChecked={checked} handleCheck={handleFavCheck} />
            </Modal>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    actionSetFavorite: (id) => dispatch(setFavorites(id))
})

export default connect(() => {}, mapDispatchToProps)(TvShow);

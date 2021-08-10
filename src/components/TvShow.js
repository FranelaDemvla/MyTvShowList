import React, { useState } from 'react'
import { Checkbox, Modal } from '@material-ui/core';
import TvShowDetails from './TvShowDetails';

export default function TvShow(props) {
    const [showModal, setShowModal] = useState(false)

    const { showInfo, isFavorite } = props;

    const handleOpen = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    return (
        <div className="show-container">
            <img onClick={handleOpen} src={showInfo.image && showInfo.image.medium} />
            <h2 onClick={handleOpen}>{showInfo.name}</h2>
            <Checkbox value={isFavorite} />

            <Modal open={showModal} onClose={handleClose} className="details-modal">
                <TvShowDetails showInfo={showInfo} />
            </Modal>
        </div>
    )
}

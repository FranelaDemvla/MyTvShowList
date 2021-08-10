import React, { useState, useEffect, useCallback } from 'react'
import { TextField, InputAdornment } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { connect } from "react-redux";
import { getShowList, getFilteredShows } from "../state/actions";
import debounce from '../utils/debounce';

function Filter(props) {
    const [query, setQuery] = useState("")

    const {actionGetShowList, actionGetFilteredShows} = props;

    const searchProps = {
        startAdornment: (
            <InputAdornment position="start">
                <Search/>
            </InputAdornment>
        )
    }

    const handleSearchBox = useCallback(debounce(async (e) => {
        const {value} = e.target; 

        setQuery(value);
        if(value === '')
            await actionGetShowList();
        else
            await actionGetFilteredShows(e.target.value);
    }, 1000), []);

    return (
        <div>
            <h1>MyTvShowList</h1>
            <TextField placeholder="Search whatever" InputProps={searchProps} onChange={handleSearchBox}/>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    actionGetFilteredShows: (query) => dispatch(getFilteredShows(query)),
    actionGetShowList: () => dispatch(getShowList())
})

export default connect(() => {}, mapDispatchToProps)(Filter);
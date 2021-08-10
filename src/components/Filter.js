import React from 'react'
import { TextField, InputAdornment } from "@material-ui/core";
import { Search } from "@material-ui/icons";

export default function Filter() {

    const searchProps = {
        startAdornment: (
            <InputAdornment position="start">
                <Search/>
            </InputAdornment>
        )
    }

    return (
        <div>
            <h1>MyTvShowList</h1>
            <TextField placeholder="Search whatever" InputProps={searchProps}/>
        </div>
    )
}

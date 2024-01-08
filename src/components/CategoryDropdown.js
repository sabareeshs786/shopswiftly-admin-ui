import React, { useEffect } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function CategoryDropdown({ category, allCate, setCategory }) {

    return (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                label="Category"
            >
                <MenuItem value="" key={-1}>
                    <em>...</em>
                </MenuItem>
                {
                    allCate && allCate.length > 0 &&
                    allCate.map((category, i) => <MenuItem key={i} value={category}>{category}</MenuItem>)
                }

            </Select>
        </FormControl>
    )
}

export default CategoryDropdown
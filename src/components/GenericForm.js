import { Checkbox, FormControl, FormControlLabel, Input, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useContext, useId} from 'react'
import { GenericProductContext } from '../context/GenericProductContext';

function GenericForm({brand, setBrand, category, setCategory, allCate}) {
    const pnameId = useId();
    const brandId = useId();
    const categoryId = useId();
    const currencyId = useId();
    const mpId = useId();
    const spId = useId();
    const highlightsId = useId();
    const descId = useId();
    const keywordsId = useId();
    const sellersId = useId();

    const { pname, setPname, currency, setCurrency, sp, setSp, mp, setMp,
        desc, setDesc, keywords, setKeywords, highlights, setHighlights,
        availability, setAvailability, sellers, setSellers, bestSeller,
        setBestseller, getNumericVal, pnameRef, errorFields, removeErrField,
        currencySymbolMap } = useContext(GenericProductContext);

    return (
        <div className="card custom-card">
            <div className="card-body">
                <h6>Common fields</h6>
                <div class="row">
                    <div className="col-md-3 mb-3">
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                            <TextField
                                id={pnameId}
                                label="Product name *"
                                variant="standard"
                                multiline
                                rows={1}
                                placeholder='Enter product name'
                                value={pname}
                                onChange={(e) => { setPname(e.target.value); removeErrField('pname') }}
                                inputRef={pnameRef}
                            />
                            {errorFields && errorFields?.includes('pname') && <p style={{ color: 'red', fontSize: '0.8rem' }}>{"This field is required"}</p>}
                        </FormControl>
                    </div>
                    <div className="col-md-2 mb-3">
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                            <TextField
                                id={brandId}
                                label="Brand *"
                                variant="standard"
                                placeholder='Enter brand'
                                value={brand}
                                onChange={(e) => { setBrand(e.target.value); removeErrField('brand') }}
                            />
                            {errorFields && errorFields?.includes('brand') && <p style={{ color: 'red', fontSize: '0.8rem' }}>{"This field is required"}</p>}
                        </FormControl>
                    </div>
                    <div className="col-md-2 mb-3">
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 10, width: '100%' }}>
                            <InputLabel id={categoryId}>Category *</InputLabel>
                            <Select
                                labelId={categoryId}
                                value={category}
                                onChange={(e) => { setCategory(e.target.value); removeErrField('category') }}
                                label="Category"
                            >
                                <MenuItem value="" key={-1}>
                                    <em>--Select--</em>
                                </MenuItem>
                                {
                                    allCate && allCate.length > 0 &&
                                    allCate.map((category, i) => <MenuItem key={i} value={category}>{category}</MenuItem>)
                                }

                            </Select>
                            {errorFields && errorFields?.includes('category') && <p style={{ color: 'red', fontSize: '0.8rem' }}>{"This field is required"}</p>}
                        </FormControl>
                    </div>
                    <div className="col-md-1 mb-3">
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 6, width: '100%' }}>
                            <InputLabel id={currencyId}>Currency</InputLabel>
                            <Select
                                labelId={currencyId}
                                value={currency}
                                onChange={(e) => { setCurrency(e.target.value); removeErrField('currency') }}
                                placeholder='Enter currency'
                            >
                                {
                                    Object.keys(currencySymbolMap).map((curr, i) => <MenuItem value={curr}>{curr} {currencySymbolMap[curr]}</MenuItem>)
                                }
                            </Select>
                            {errorFields && errorFields?.includes('currency') && <p style={{ color: 'red', fontSize: '0.8rem' }}>{"This field is required"}</p>}
                        </FormControl>
                    </div>
                    <div className='col-md-2 mb-3'>
                        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                            <InputLabel htmlFor={mpId}>Marked Price *</InputLabel>
                            <Input
                                id={mpId}
                                startAdornment={<InputAdornment position="start">{currencySymbolMap[currency]}</InputAdornment>}
                                value={mp}
                                onChange={(e) => { setMp(getNumericVal(e)); removeErrField('mp') }}
                            />
                            {errorFields && errorFields?.includes('mp') && <p style={{ color: 'red', fontSize: '0.8rem' }}>{"This field is required"}</p>}
                        </FormControl>
                    </div>
                    <div className='col-md-2 mb-3'>
                        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                            <InputLabel htmlFor={spId}>Selling Price *</InputLabel>
                            <Input
                                id={spId}
                                startAdornment={<InputAdornment position="start">{currencySymbolMap[currency]}</InputAdornment>}
                                value={sp}
                                onChange={(e) => { setSp(getNumericVal(e)); removeErrField('sp') }}
                            />
                            {errorFields && errorFields?.includes('sp') && <p style={{ color: 'red', fontSize: '0.8rem' }}>{"This field is required"}</p>}
                        </FormControl>
                    </div>
                </div>

                <div class="row">
                    <div className="col-md-3 mb-3">
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                            <TextField
                                id={highlightsId}
                                label="Highlights"
                                variant="standard"
                                multiline
                                rows={1}
                                placeholder='Enter highlights'
                                value={highlights}
                                onChange={(e) => setHighlights(e.target.value)}
                            />
                        </FormControl>
                    </div>
                    <div className="col-md-3 mb-3">
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                            <TextField
                                id={descId}
                                label="Description"
                                variant="standard"
                                multiline
                                rows={1}
                                placeholder='Enter description'
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                            />
                        </FormControl>
                    </div>
                    <div className="col-md-3 mb-3">
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                            <TextField
                                id={keywordsId}
                                label="Keywords *"
                                variant="standard"
                                multiline
                                rows={1}
                                placeholder='Enter keywords'
                                value={keywords}
                                onChange={(e) => { setKeywords(e.target.value); removeErrField('keywords') }}
                            />
                            {errorFields && errorFields?.includes('keywords') && <p style={{ color: 'red', fontSize: '0.8rem' }}>{"This field is required"}</p>}
                        </FormControl>
                    </div>
                    <div className="col-md-3 mb-2">
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                            <TextField
                                id={sellersId}
                                label="Sellers"
                                variant="standard"
                                multiline
                                rows={1}
                                placeholder='Enter sellers'
                                value={sellers}
                                onChange={(e) => setSellers(e.target.value)}
                            />
                        </FormControl>
                    </div>
                </div>

                <div class="row">
                    <div className="col-md-3 mb-2">
                        <FormControlLabel
                            control={<Checkbox checked={availability} onChange={(e) => setAvailability(e.target.checked)} />}
                            label="Availability"
                        />
                    </div>
                    <div className="col-md-3 mb-2">
                        <FormControlLabel
                            control={<Checkbox checked={bestSeller} onChange={(e) => setBestseller(e.target.checked)} />}
                            label="Bestseller"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GenericForm
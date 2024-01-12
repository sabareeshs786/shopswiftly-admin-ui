import { FormControl, Input, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

function MobileSpecForm() {
    const { modelNo, setModelNo, modelName, setModelName, color, setColor, screenSize, setScreenSize,
        screenSizeUnit, setScreenSizeUnit, resolution, setResolution, resolutionType, setResolutionType,
        os, setOs, pbrand, setPbrand, pmodel, setPmodel, pnoOfCores, setPnoOfCores, pClockSpeed, setPClockSpeed,
        ramSize, setRamSize, ramUnit, setRamUnit, storageSize, setStorageSize, storageUnit, setStorageUnit,
        primaryCamera, setPrimaryCamera, secondaryCamera, setSecondaryCamera, batteryCapacity, setBatteryCapacity,
        batteryCapacityUnit, setBatteryCapacityUnit, networkType, setNetworkType, simType, setSimType,
        speciality, setSpeciality, features, setFeatures, browseType, setBrowseType, manufacturerWarranty,
        setManufacturerWarranty, inBoxWarrenty, setInBoxWarrenty,
        getNumericVal } = useContext(ProductContext);

    return (
        <>
            <div className="row">
                <h6>Model details</h6>
                <div className="col-md-3 mb-3">
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <TextField
                            id="standard-basic"
                            label="Model Number"
                            variant="standard"
                            placeholder='Enter model number'
                        // value={pname}
                        // onChange={(e) => { setPname(e.target.value); removeErrField('pname') }}
                        // inputRef={pnameRef}
                        />
                    </FormControl>
                </div>
                <div className="col-md-3 mb-3">
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <TextField
                            id="standard-basic"
                            label="Model Name"
                            variant="standard"
                            placeholder='Enter model name'
                        // value={pname}
                        // onChange={(e) => { setPname(e.target.value); removeErrField('pname') }}
                        // inputRef={pnameRef}
                        />
                    </FormControl>
                </div>
                <div className="col-md-3 mb-3">
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <TextField
                            id="standard-basic"
                            label="Color"
                            variant="standard"
                            placeholder='Enter color'
                        // value={pname}
                        // onChange={(e) => { setPname(e.target.value); removeErrField('pname') }}
                        // inputRef={pnameRef}
                        />
                    </FormControl>
                </div>
            </div>

            <div className='row'>
                <h6>Display details</h6>
                <div className="col-md-2 mb-3">
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <InputLabel id="demo-simple-select-standard-label">Screen size unit</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            // value={category}
                            // onChange={(e) => { setCategory(e.target.value); removeErrField('category') }}
                            label="Screensize unit"
                        >
                            <MenuItem value={'inch'}>inch</MenuItem>
                            <MenuItem value={'cm'}>cm</MenuItem>
                            <MenuItem value={'mm'}>mm</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='col-md-2 mb-3'>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">Screen width</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                        // value={mp}
                        // onChange={(e) => { handleInputChangeMp(e); removeErrField('mp') }}
                        />
                    </FormControl>
                </div>
                <div className='col-md-2 mb-3'>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">Screen height</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                        // value={mp}
                        // onChange={(e) => { handleInputChangeMp(e); removeErrField('mp') }}
                        />
                    </FormControl>
                </div>
                <div className='col-md-2 mb-3'>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">Resolution width</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                        // value={mp}
                        // onChange={(e) => { handleInputChangeMp(e); removeErrField('mp') }}
                        />
                    </FormControl>
                </div>
                <div className='col-md-2 mb-3'>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">Resolution height</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                        // value={mp}
                        // onChange={(e) => { handleInputChangeMp(e); removeErrField('mp') }}
                        />
                    </FormControl>
                </div>
                <div className='col-md-2 mb-3'>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <TextField
                            id="standard-basic"
                            label="Resolution Type"
                            variant="standard"
                            placeholder='Enter resolution type'
                        // value={pname}
                        // onChange={(e) => { setPname(e.target.value); removeErrField('pname') }}
                        // inputRef={pnameRef}
                        />
                    </FormControl>
                </div>
            </div>

            <div className='row'>
                <h6>Operating system details</h6>
                <div className='col-md-2 mb-3'>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <TextField
                            id="standard-basic"
                            label="OS Name"
                            variant="standard"
                            placeholder='Enter OS name'
                        // value={pname}
                        // onChange={(e) => { setPname(e.target.value); removeErrField('pname') }}
                        // inputRef={pnameRef}
                        />
                    </FormControl>
                </div>
            </div>
            <div className="row">
                <h6>Processor details</h6>
                <div className='col-md-3 mb-3'>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <TextField
                            id="standard-basic"
                            label="Processor brand"
                            variant="standard"
                            placeholder='Enter processor brand'
                        // value={pname}
                        // onChange={(e) => { setPname(e.target.value); removeErrField('pname') }}
                        // inputRef={pnameRef}
                        />
                    </FormControl>
                </div>
                <div className='col-md-3 mb-3'>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <TextField
                            id="standard-basic"
                            label="Processor model"
                            variant="standard"
                            placeholder='Enter processor model'
                        // value={pname}
                        // onChange={(e) => { setPname(e.target.value); removeErrField('pname') }}
                        // inputRef={pnameRef}
                        />
                    </FormControl>
                </div>
                <div className='col-md-3 mb-3'>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <TextField
                            id="standard-basic"
                            label="Number of cores"
                            variant="standard"
                            placeholder='Enter no of cores'
                        // value={pname}
                        // onChange={(e) => { setPname(e.target.value); removeErrField('pname') }}
                        // inputRef={pnameRef}
                        />
                    </FormControl>
                </div>
                <div className='col-md-3 mb-3'>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <TextField
                            id="standard-basic"
                            label="Clock speed"
                            variant="standard"
                            placeholder='Enter clock speed'
                        // value={pname}
                        // onChange={(e) => { setPname(e.target.value); removeErrField('pname') }}
                        // inputRef={pnameRef}
                        />
                    </FormControl>
                </div>
            </div>

            <div className='row'>
                <h6>Memory & Storage details</h6>
                <div className='col-md-2 mb-3'>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">RAM size</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            endAdornment={<InputAdornment position="end"><b>GB</b></InputAdornment>}
                        // value={mp}
                        // onChange={(e) => { handleInputChangeMp(e); removeErrField('mp') }}
                        />
                    </FormControl>
                </div>
                <div className="col-md-2 mb-3">
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <InputLabel id="demo-simple-select-standard-label">RAM size unit</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            // value={category}
                            // onChange={(e) => { setCategory(e.target.value); removeErrField('category') }}
                            label="Screensize unit"
                        >
                            <MenuItem value={'GB'}>GB</MenuItem>
                            <MenuItem value={'MB'}>MB</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='col-md-2 mb-3'>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">Storage size</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            endAdornment={<InputAdornment position="end"><b>GB</b></InputAdornment>}
                        // value={mp}
                        // onChange={(e) => { handleInputChangeMp(e); removeErrField('mp') }}
                        />
                    </FormControl>
                </div>
                <div className="col-md-2 mb-3">
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <InputLabel id="demo-simple-select-standard-label">Storage size unit</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            // value={category}
                            // onChange={(e) => { setCategory(e.target.value); removeErrField('category') }}
                            label="Screensize unit"
                        >
                            <MenuItem value={'GB'}>GB</MenuItem>
                            <MenuItem value={'MB'}>MB</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>

            <div className='row'>
                <h6>Camera details</h6>
                <div className='col-md-2 mb-3'>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">Primary camera 1</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            endAdornment={<InputAdornment position="end"><b>MP</b></InputAdornment>}
                        // value={mp}
                        // onChange={(e) => { handleInputChangeMp(e); removeErrField('mp') }}
                        />
                    </FormControl>
                </div>
                <div className='col-md-2 mb-3'>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">Primary camera 2</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            endAdornment={<InputAdornment position="end"><b></b>MP</InputAdornment>}
                        // value={mp}
                        // onChange={(e) => { handleInputChangeMp(e); removeErrField('mp') }}
                        />
                    </FormControl>
                </div>
                <div className='col-md-2 mb-3'>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">Primary camera 3</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            endAdornment={<InputAdornment position="end">MP</InputAdornment>}
                        // value={mp}
                        // onChange={(e) => { handleInputChangeMp(e); removeErrField('mp') }}
                        />
                    </FormControl>
                </div>
                <div className='col-md-2 mb-3'>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">Secondary camera 1</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            endAdornment={<InputAdornment position="end">MP</InputAdornment>}
                        // value={mp}
                        // onChange={(e) => { handleInputChangeMp(e); removeErrField('mp') }}
                        />
                    </FormControl>
                </div>
                <div className='col-md-2 mb-3'>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">Secondary camera 2</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            endAdornment={<InputAdornment position="end">MP</InputAdornment>}
                        // value={mp}
                        // onChange={(e) => { handleInputChangeMp(e); removeErrField('mp') }}
                        />
                    </FormControl>
                </div>
                <div className='col-md-2 mb-3'>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">Secondary camera 3</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            endAdornment={<InputAdornment position="end">MP</InputAdornment>}
                        // value={mp}
                        // onChange={(e) => { handleInputChangeMp(e); removeErrField('mp') }}
                        />
                    </FormControl>
                </div>
            </div>

            <div className='row'>
                <h6>Battery details</h6>
                <div className='col-md-2 mb-3'>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">Battery Capacity</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            endAdornment={<InputAdornment position="end">mAh</InputAdornment>}
                        // value={mp}
                        // onChange={(e) => { handleInputChangeMp(e); removeErrField('mp') }}
                        />
                    </FormControl>
                </div>
            </div>

            <div className='row'>
                <h6>Network details</h6>
                <div className='col-md-3 mb-3'>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <TextField
                            id="standard-basic"
                            label="Network Type"
                            variant="standard"
                            placeholder='Enter network type'
                        // value={pname}
                        // onChange={(e) => { setPname(e.target.value); removeErrField('pname') }}
                        // inputRef={pnameRef}
                        />
                    </FormControl>
                </div>
            </div>

            <div className='row'>
                <h6>Sim details</h6>
                <div className='col-md-3 mb-3'>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <TextField
                            id="standard-basic"
                            label="SIM Type"
                            variant="standard"
                            placeholder='Enter sim type'
                        // value={pname}
                        // onChange={(e) => { setPname(e.target.value); removeErrField('pname') }}
                        // inputRef={pnameRef}
                        />
                    </FormControl>
                </div>
            </div>

            <div className='row'>
                <h6>Other details</h6>
                <div className='col-md-3 mb-3'>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <TextField
                            id="standard-basic"
                            label="Speciality"
                            variant="standard"
                            placeholder='Enter speciality'
                        // value={pname}
                        // onChange={(e) => { setPname(e.target.value); removeErrField('pname') }}
                        // inputRef={pnameRef}
                        />
                    </FormControl>
                </div>
                <div className='col-md-3 mb-3'>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <TextField
                            id="standard-basic"
                            label="Features"
                            variant="standard"
                            placeholder='Enter features'
                        // value={pname}
                        // onChange={(e) => { setPname(e.target.value); removeErrField('pname') }}
                        // inputRef={pnameRef}
                        />
                    </FormControl>
                </div>
                <div className='col-md-3 mb-3'>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <TextField
                            id="standard-basic"
                            label="Manufacturer warranty"
                            variant="standard"
                            multiline
                            rows={1}
                            placeholder='Enter manufacturer warranty'
                        // value={pname}
                        // onChange={(e) => { setPname(e.target.value); removeErrField('pname') }}
                        // inputRef={pnameRef}
                        />
                    </FormControl>
                </div>
                <div className='col-md-3 mb-3'>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <TextField
                            id="standard-basic"
                            label="Inbox warranty"
                            variant="standard"
                            multiline
                            rows={1}
                            placeholder='Enter inbox warranty'
                        // value={pname}
                        // onChange={(e) => { setPname(e.target.value); removeErrField('pname') }}
                        // inputRef={pnameRef}
                        />
                    </FormControl>
                </div>
            </div>
        </>
    )
}

export default MobileSpecForm
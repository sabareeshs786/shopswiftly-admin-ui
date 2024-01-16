import { FormControl, Input, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useContext, useId } from 'react'
import { ProductContext } from '../context/ProductContext'
import { GenericProductContext } from '../context/GenericProductContext';

function MobileSpecForm() {

    const mNoId = useId();
    const mNameId = useId();
    const colorId = useId();
    const dSizeUnitId = useId();
    const dSizeId = useId();
    const rWId = useId();
    const rHId = useId();
    const rType = useId();
    const osNameId = useId();
    const pbrandId = useId();
    const pmodelId = useId();
    const pnoOfCoresId = useId();
    const pClockSpeedId = useId();
    const ramSizeId = useId();
    const ramUnitId = useId();
    const storageSizeId = useId();
    const storageUnitId = useId();
    const primaryCamera1Id = useId();
    const primaryCamera2Id = useId();
    const primaryCamera3Id = useId();
    const secondaryCamera1Id = useId();
    const secondaryCamera2Id = useId();
    const secondaryCamera3Id = useId();
    const batteryCapacityId = useId();
    const networkTypeId = useId();
    const simTypeId = useId();
    const specialityId = useId();
    const featuresId = useId();
    const manufacturerWarrantyId = useId();
    const inBoxWarrentyId = useId();

    const { getNumericVal, errorFields, removeErrField } = useContext(GenericProductContext);
    const {
        modelNo, setModelNo, modelName, setModelName, color, setColor, displaySize, setDisplaySize, displaySizeUnit, setDisplaySizeUnit, resolutionWidth, setResolutionWidth, resolutionHeight, setResolutionHeight, resolutionType, setResolutionType,
        os, setOs, pbrand, setPbrand, pmodel, setPmodel, pnoOfCores, setPnoOfCores, pClockSpeed, setPClockSpeed,
        ramSize, setRamSize, ramUnit, setRamUnit, storageSize, setStorageSize, storageUnit, setStorageUnit,
        primaryCamera, setPrimaryCamera, secondaryCamera, setSecondaryCamera, batteryCapacity, setBatteryCapacity,
        networkType, setNetworkType, simType, setSimType, speciality, setSpeciality, features, setFeatures, manufacturerWarranty,
        setManufacturerWarranty, inBoxWarrenty, setInBoxWarrenty,
    } = useContext(ProductContext);

    return (
        <>
            <div className="row">
                <h6>Model details</h6>
                <div className="col-md-3 mb-3">
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <TextField
                            id={mNoId}
                            label="Model Number *"
                            variant="standard"
                            placeholder='Enter model number'
                            value={modelNo}
                            onChange={(e) => { setModelNo(e.target.value); removeErrField('modelNo') }}
                        />
                        {errorFields && errorFields?.includes('modelNo') && <p style={{ color: 'red', fontSize: '0.8rem' }}>{"This field is required"}</p>}
                    </FormControl>
                </div>
                <div className="col-md-3 mb-3">
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <TextField
                            id={mNameId}
                            label="Model Name *"
                            variant="standard"
                            placeholder='Enter model name'
                            value={modelName}
                            onChange={(e) => { setModelName(e.target.value); removeErrField('modelName') }}
                        />
                        {errorFields && errorFields?.includes('modelName') && <p style={{ color: 'red', fontSize: '0.8rem' }}>{"This field is required"}</p>}
                    </FormControl>
                </div>
                <div className="col-md-3 mb-3">
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <TextField
                            id={colorId}
                            label="Color"
                            variant="standard"
                            placeholder='Enter color'
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                        />
                    </FormControl>
                </div>
            </div>

            <div className='row'>
                <h6>Display details</h6>
                <div className="col-md-2 mb-3">
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <InputLabel id={dSizeUnitId}>Display size unit</InputLabel>
                        <Select
                            labelId={dSizeUnitId}
                            value={displaySizeUnit}
                            onChange={(e) => setDisplaySize(e.target.value)}
                            label="Display size unit"
                        >
                            <MenuItem value={'inch'}>inch</MenuItem>
                            <MenuItem value={'cm'}>cm</MenuItem>
                            <MenuItem value={'mm'}>mm</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='col-md-2 mb-3'>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor={dSizeId}>Display size *</InputLabel>
                        <Input
                            id={dSizeId}
                            value={displaySize}
                            onChange={(e) => { setDisplaySize(getNumericVal(e)); removeErrField('displaySize') }}
                        />
                        {errorFields && errorFields?.includes('displaySize') && <p style={{ color: 'red', fontSize: '0.8rem' }}>{"This field is required"}</p>}
                    </FormControl>
                </div>
                <div className='col-md-2 mb-3'>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor={rWId}>Resolution width *</InputLabel>
                        <Input
                            id={rWId}
                            value={resolutionWidth}
                            onChange={(e) => { setResolutionWidth(getNumericVal(e)); removeErrField('resolutionWidth') }}
                        />
                        {errorFields && errorFields?.includes('resolutionWidth') && <p style={{ color: 'red', fontSize: '0.8rem' }}>{"This field is required"}</p>}
                    </FormControl>
                </div>
                <div className='col-md-2 mb-3'>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor={rHId}>Resolution height *</InputLabel>
                        <Input
                            id={rHId}
                            value={resolutionHeight}
                            onChange={(e) => { setResolutionHeight(getNumericVal(e)); removeErrField('resolutionHeight') }}
                        />
                        {errorFields && errorFields?.includes('resolutionHeight') && <p style={{ color: 'red', fontSize: '0.8rem' }}>{"This field is required"}</p>}
                    </FormControl>
                </div>
                <div className='col-md-2 mb-3'>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <TextField
                            id={rType}
                            label="Resolution Type"
                            variant="standard"
                            placeholder='Enter resolution type'
                            value={resolutionType}
                            onChange={(e) => setResolutionType(e.target.value)}
                        />
                    </FormControl>
                </div>
            </div>

            <div className='row'>
                <h6>Operating system details</h6>
                <div className='col-md-2 mb-3'>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <TextField
                            id={osNameId}
                            label="OS Name"
                            variant="standard"
                            placeholder='Enter OS name'
                            value={os}
                            onChange={(e) => { setOs(e.target.value) }}
                        />
                    </FormControl>
                </div>
            </div>
            <div className="row">
                <h6>Processor details</h6>
                <div className='col-md-3 mb-3'>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <TextField
                            id={pbrandId}
                            label="Processor brand"
                            variant="standard"
                            placeholder='Enter processor brand'
                            value={pbrand}
                            onChange={(e) => { setPbrand(e.target.value) }}
                        />
                    </FormControl>
                </div>
                <div className='col-md-3 mb-3'>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <TextField
                            id={pmodelId}
                            label="Processor model"
                            variant="standard"
                            placeholder='Enter processor model'
                            value={pmodel}
                            onChange={(e) => { setPmodel(e.target.value); }}
                        />
                    </FormControl>
                </div>
                <div className='col-md-3 mb-3'>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <TextField
                            id={pnoOfCoresId}
                            label="Number of cores"
                            variant="standard"
                            placeholder='Enter no of cores'
                            value={pnoOfCores}
                            onChange={(e) => { setPnoOfCores(getNumericVal(e)); }}
                        />
                    </FormControl>
                </div>
                <div className='col-md-3 mb-3'>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <TextField
                            id={pClockSpeedId}
                            label="Clock speed"
                            variant="standard"
                            placeholder='Enter clock speed'
                            value={pClockSpeed}
                            onChange={(e) => { setPClockSpeed(getNumericVal(e)); }}
                        />
                    </FormControl>
                </div>
            </div>

            <div className='row'>
                <h6>Memory & Storage details</h6>
                <div className='col-md-2 mb-3'>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor={ramSizeId}>RAM size *</InputLabel>
                        <Input
                            id={ramSizeId}
                            endAdornment={<InputAdornment position="end"><b>{ramUnit}</b></InputAdornment>}
                            value={ramSize}
                            onChange={(e) => { setRamSize(getNumericVal(e)); removeErrField('ramSize') }}
                        />
                        {errorFields && errorFields?.includes('ramSize') && <p style={{ color: 'red', fontSize: '0.8rem' }}>{"This field is required"}</p>}
                    </FormControl>
                </div>
                <div className="col-md-2 mb-3">
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <InputLabel id={ramUnitId}>RAM size unit</InputLabel>
                        <Select
                            labelId={ramUnitId}
                            value={ramUnit}
                            onChange={(e) => { setRamUnit(e.target.value); }}
                            label="Screensize unit"
                        >
                            <MenuItem value={'GB'}>GB</MenuItem>
                            <MenuItem value={'MB'}>MB</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='col-md-2 mb-3'>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor={storageSizeId}>Storage size *</InputLabel>
                        <Input
                            id={storageSizeId}
                            endAdornment={<InputAdornment position="end"><b>{storageUnit}</b></InputAdornment>}
                            value={storageSize}
                            onChange={(e) => { setStorageSize(getNumericVal(e)); removeErrField('storageSize') }}
                        />
                        {errorFields && errorFields?.includes('storageSize') && <p style={{ color: 'red', fontSize: '0.8rem' }}>{"This field is required"}</p>}
                    </FormControl>
                </div>
                <div className="col-md-2 mb-3">
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <InputLabel id={storageUnitId}>Storage size unit</InputLabel>
                        <Select
                            labelId={storageUnitId}
                            value={storageUnit}
                            onChange={(e) => { setStorageUnit(e.target.value); }}
                            label="Screensize unit"
                        >
                            <MenuItem value={'GB'}>GB</MenuItem>
                            <MenuItem value={'MB'}>MB</MenuItem>
                            <MenuItem value={'TB'}>TB</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>

            <div className='row'>
                <h6>Camera details</h6>
                <div className='col-md-2 mb-3'>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor={primaryCamera1Id}>Primary camera 1</InputLabel>
                        <Input
                            id={primaryCamera1Id}
                            endAdornment={<InputAdornment position="end"><b>MP</b></InputAdornment>}
                            value={primaryCamera[0]}
                            onChange={(e) => { setPrimaryCamera([getNumericVal(e), primaryCamera[1], primaryCamera[2]]); }}
                        />
                    </FormControl>
                </div>
                <div className='col-md-2 mb-3'>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor={primaryCamera2Id}>Primary camera 2</InputLabel>
                        <Input
                            id={primaryCamera2Id}
                            endAdornment={<InputAdornment position="end"><b></b>MP</InputAdornment>}
                            value={primaryCamera[1]}
                            onChange={(e) => { setPrimaryCamera([primaryCamera[0], getNumericVal(e), primaryCamera[2]]); }}
                        />
                    </FormControl>
                </div>
                <div className='col-md-2 mb-3'>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor={primaryCamera3Id}>Primary camera 3</InputLabel>
                        <Input
                            id={primaryCamera3Id}
                            endAdornment={<InputAdornment position="end">MP</InputAdornment>}
                            value={primaryCamera[2]}
                            onChange={(e) => { setPrimaryCamera([primaryCamera[0], primaryCamera[1], getNumericVal(e)]); }}
                        />
                    </FormControl>
                </div>
                <div className='col-md-2 mb-3'>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor={secondaryCamera1Id}>Secondary camera 1</InputLabel>
                        <Input
                            id={secondaryCamera1Id}
                            endAdornment={<InputAdornment position="end">MP</InputAdornment>}
                            value={secondaryCamera[0]}
                            onChange={(e) => { setSecondaryCamera([getNumericVal(e), secondaryCamera[1], secondaryCamera[2]]); }}
                        />
                    </FormControl>
                </div>
                <div className='col-md-2 mb-3'>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor={secondaryCamera2Id}>Secondary camera 2</InputLabel>
                        <Input
                            id={secondaryCamera2Id}
                            endAdornment={<InputAdornment position="end">MP</InputAdornment>}
                            value={secondaryCamera[1]}
                            onChange={(e) => { setSecondaryCamera([secondaryCamera[0], getNumericVal(e), secondaryCamera[2]]); }}
                        />
                    </FormControl>
                </div>
                <div className='col-md-2 mb-3'>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor={secondaryCamera3Id}>Secondary camera 3</InputLabel>
                        <Input
                            id={secondaryCamera3Id}
                            endAdornment={<InputAdornment position="end">MP</InputAdornment>}
                            value={secondaryCamera[2]}
                            onChange={(e) => { setSecondaryCamera([secondaryCamera[0], secondaryCamera[1], getNumericVal(e)]); }}
                        />
                    </FormControl>
                </div>
            </div>

            <div className='row'>
                <h6>Battery details</h6>
                <div className='col-md-2 mb-3'>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor={batteryCapacityId}>Battery Capacity</InputLabel>
                        <Input
                            id={batteryCapacityId}
                            endAdornment={<InputAdornment position="end">mAh</InputAdornment>}
                            value={batteryCapacity}
                            onChange={(e) => { setBatteryCapacity(getNumericVal(e)); }}
                        />
                    </FormControl>
                </div>
            </div>

            <div className='row'>
                <h6>Network details</h6>
                <div className='col-md-3 mb-3'>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <TextField
                            id={networkTypeId}
                            label="Network Type"
                            variant="standard"
                            placeholder='Enter network type'
                            value={networkType}
                            onChange={(e) => { setNetworkType(e.target.value); }}
                        />
                    </FormControl>
                </div>
            </div>

            <div className='row'>
                <h6>Sim details</h6>
                <div className='col-md-3 mb-3'>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <TextField
                            id={simTypeId}
                            label="SIM Type"
                            variant="standard"
                            placeholder='Enter sim type'
                            value={simType}
                            onChange={(e) => { setSimType(e.target.value); }}
                        />
                    </FormControl>
                </div>
            </div>

            <div className='row'>
                <h6>Other details</h6>
                <div className='col-md-3 mb-3'>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <TextField
                            id={specialityId}
                            label="Speciality"
                            variant="standard"
                            placeholder='Enter speciality'
                            value={speciality}
                            onChange={(e) => { setSpeciality(e.target.value); }}
                        />
                    </FormControl>
                </div>
                <div className='col-md-3 mb-3'>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <TextField
                            id={featuresId}
                            label="Features"
                            variant="standard"
                            placeholder='Enter features'
                            value={features}
                            onChange={(e) => { setFeatures(e.target.value); }}
                        />
                    </FormControl>
                </div>
                <div className='col-md-3 mb-3'>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <TextField
                            id={manufacturerWarrantyId}
                            label="Manufacturer warranty"
                            variant="standard"
                            multiline
                            rows={1}
                            placeholder='Enter manufacturer warranty'
                            value={manufacturerWarranty}
                            onChange={(e) => { setManufacturerWarranty(e.target.value); }}
                        />
                    </FormControl>
                </div>
                <div className='col-md-3 mb-3'>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <TextField
                            id={inBoxWarrentyId}
                            label="Inbox warranty"
                            variant="standard"
                            multiline
                            rows={1}
                            placeholder='Enter inbox warranty'
                            value={inBoxWarrenty}
                            onChange={(e) => { setInBoxWarrenty(e.target.value); }}
                        />
                    </FormControl>
                </div>
            </div>
        </>
    )
}

export default MobileSpecForm;
export default function PhoneNumber() {
    return (
        <>
            <label for="phoneNumber" className="form-label custom-label"><b>Mobile Number</b></label>
            <div className="input-group">
                <div className="col-4" >
                    <select className="form-select custom-form-select" id="countryCode" name="countryCode">
                        <option value="+91">+91</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                    </select>
                </div>
                <div className="col-8">
                    <input type="text" className="form-control"
                        name="phoneNumber" placeholder="Enter your phone number" 
                        required 
                    />
                </div>
            </div>
        </>
    )
}
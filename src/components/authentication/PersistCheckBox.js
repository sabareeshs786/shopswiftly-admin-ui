export default function PersistCheckBox({toggleCheck, check}){
    return (
        <div className="persistCheck">
            <input
                type="checkbox"
                id="persist"
                onChange={toggleCheck}
                checked={check}
            />
            <label htmlFor="persist" className='custom-label'>Trust This Device</label>
        </div>
    );
}
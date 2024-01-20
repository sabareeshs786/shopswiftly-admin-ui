import { Link } from 'react-router-dom';

export default function Help({help}){
    return (
        <div className="mb-3 help">
            <Link to="/help">{help}</Link>
        </div>
    );
};
import { Link} from 'react-router-dom';
export default function Notice(){
    return (
    <div className="mb-3" id="notice">
        By continuing, you agree to Shopswiftly's <Link to="/conditions">Conditions of Use</Link> and <Link to="/privacy-notice">Privacy Notice.</Link>
    </div>
    );
};
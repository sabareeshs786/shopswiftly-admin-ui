import { Link } from "react-router-dom";

export default function Logo({ bgBlue = true, forLogin=false}) {
    return (
        bgBlue && forLogin? <img src="/shopswiftly.png" alt="Shopswiftly Logo" /> :
            <div className="cust-logo">
                <Link to="/">
                    <img
                        src={bgBlue ? "/shopswiftly.png": "/shopswiftly-blue.png"}
                        alt="Shopswiftly Logo"
                    />
                </Link>
            </div>
    );
}
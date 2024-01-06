import { Link } from 'react-router-dom';
import '../../css/login-signup.css';
import '../../css/login.css';
import ErrorMsg from '../generic/ErrorMsg';
import LoginForm from './LoginForm';
import Notice from './Notice';
import Help from '../Help';
import LoginContext from '../../context/LoginContext';

function LoginContainer() {

    return (
        <>
            <div className="card custom-card">
                <div className="card-body">
                    <h3>Sign In</h3>
                    <ErrorMsg context={LoginContext} />
                    <LoginForm />
                    <Notice />
                    <Help help="Forget password" />
                </div>
            </div>
            <div className="separator">
                New to Shopswiftly?
            </div>
            <Link
                className="btn btn-primary createAccountButton"
                to="/signup"
                role="button"
            >Sign Up</Link>
        </>
    );
};

export default LoginContainer;
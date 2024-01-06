import { Outlet } from "react-router-dom";
import Logo from "./generic/Logo";

const LayoutAuth = () => {
    return (
        <>
            <section className="auth-container">
                <div className="image-container">
                    <Logo forLogin={true} bgBlue={true}/>
                </div>
                <Outlet />
            </section>
        </>
    )
}

export default LayoutAuth;

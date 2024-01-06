import { useContext, useEffect } from "react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import PersistCheckBox from "./PersistCheckBox";
import SubmitButton from "../generic/SubmitButton";
import LoginContext from "../../context/LoginContext";

export default function LoginForm() {
    const { handleSubmit, toggleCheck, check, userRef, userAttribs, pwd, setPwd, user} = useContext(LoginContext);
    useEffect(() => {
        userRef.current.focus();
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <EmailInput 
                    userRef={userRef} 
                    userAttribs={userAttribs}
                    user={user}
                />
                <PasswordInput 
                    pwd={pwd} 
                    setPwd={setPwd} 
                />
            </div>
            <PersistCheckBox 
                toggleCheck={toggleCheck} 
                check={check}
            />
            <SubmitButton content="Sign in" />
        </form>
    );
}
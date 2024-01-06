import { useContext, useEffect } from "react";
import EmailInput from "./EmailInput";
import PhoneNumber from "./PhoneNumber";
import PasswordInput from "./PasswordInput";
import ConfirmPassword from "./ConfirmPassword";
import SubmitButton from "../generic/SubmitButton";
import SignUpContext from "../../context/SignUpContext";

export default function SignupForm() {
    const { handleSubmit, setUserFocus, setUser, user, 
        validName, validPwd, pwd, setPwd, setPwdFocus, pwdFocus, 
        userRef } = useContext(SignUpContext);
    useEffect(() =>{
        userRef.current.focus();
    }, []);
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <EmailInput
                    forSignup={true}
                    setUserFocus={setUserFocus}
                    userRef={userRef}
                    user={user}
                    validName={validName}
                    setUser={setUser}
                />
                <PhoneNumber />
                <PasswordInput 
                    forSignup={true}
                    setPwd={setPwd}
                    pwd={pwd}
                    validPwd={validPwd}
                    setPwdFocus={setPwdFocus}
                    pwdFocus={pwdFocus}
                />
                <ConfirmPassword />
            </div>
            <SubmitButton content="Sign up"/>
        </form>
    );
}
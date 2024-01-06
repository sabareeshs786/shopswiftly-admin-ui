import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export default function PasswordInput({ pwd, setPwd, forSignup = false, validPwd, setPwdFocus, pwdFocus}) {
    return (
        <>
            <label htmlFor="password" className="form-label custom-label"><b>Password:</b></label>
            {forSignup && (<>
                <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
            </>)}
            {
                forSignup ? <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                    placeholder="Enter password"
                /> :
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        placeholder="Enter password"
                    />
            }
            { forSignup &&
                <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters.<br />
                Must include altleast one uppercase and lowercase letters, a number and a special character.<br />
            </p>
            }
        </>
    );
}
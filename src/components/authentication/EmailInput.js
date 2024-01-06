import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function EmailInput({
    userRef, userAttribs, validName, user, setUser, setUserFocus, forSignup = false
}) {
    return (
        <>
            <label htmlFor="email" className="form-label custom-label">
                <b>
                    Email address
                    {forSignup &&
                        <>
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                        </>
                    }
                </b>
            </label>
            {
                forSignup ?
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        aria-invalid={validName ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => {setUserFocus(false)}}
                        placeholder="Enter email address"
                        
                    /> :
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        aria-describedby="email"
                        ref={userRef}
                        autoComplete="off"
                        {...userAttribs}
                        placeholder="Enter email address"
                    />
            }

        </>
    );
}
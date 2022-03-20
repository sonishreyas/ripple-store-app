import { useLocation, useNavigate } from "react-router";
import { useState } from "react";
import { useRegister } from "../../context";
import { registerHandler } from "../../utils";

const Register = () => {
    const { registerState, registerDispatch } = useRegister();
    const location = useLocation();
    const navigate = useNavigate();
    const [showPassword,setShowPassword] = useState();
    const [showConfirmPassword, setShowConfirmPassword] = useState();

    const setValueHandler = (e,field,type) => {
        const fieldValue = {};
        fieldValue[field] = e.target.value;
        fieldValue["type"] = type;
        registerDispatch(fieldValue);
    }

    const setFocusHandler = (field, value, type) => {
        const focusReset = { firstName: false, lastName: false,	email: false, password: false, confirmPassword: false }
        focusReset[field] = value;
        registerDispatch({focus: focusReset, type: type});
    }

    const showPasswordHandler = () => showPassword ? setShowPassword(false) : setShowPassword(true);

    const showConfirmPasswordHandler = () => showConfirmPassword ? setShowConfirmPassword(false) : setShowConfirmPassword(true);

    return (
        <form onSubmit={(e) => registerHandler(e, location, navigate)} className="input-form register flex-column flex-gap-1 flex-wrap h-auto w-100">
            <section className={`input-container flex-column m-5 ${registerState.firstName.length > 0 || registerState.focus.firstName ? "focused":"" }`}>
                <input id="first-name" className="textbox-content p-5" type="text" name="first-name" onChange={(e) => setValueHandler(e, "firstName", "UPDATE_FIRST_NAME")} value={registerState.firstName} onFocus={() => setFocusHandler("firstName", true, "UPDATE_FOCUS")} onBlur={()=> setFocusHandler("firstName", false, "UPDATE_FOCUS")}/>
                <label htmlFor="first-name" className="textbox-label m-0 px-1"> First Name<span className="required-field">*</span>
                </label>
                <sub className="p-2 my-2 inactive-check"></sub>
            </section>

            <section className={`input-container flex-column m-5 ${registerState.lastName.length > 0 || registerState.focus.lastName ? "focused":"" }`}>
                <input id="last-name" className="textbox-content p-5" type="text" name="last-name" onChange={(e) => setValueHandler(e, "lastName", "UPDATE_LAST_NAME")} value={registerState.lastName} onFocus={() => setFocusHandler("lastName", true, "UPDATE_FOCUS")} onBlur={()=> setFocusHandler("lastName", false, "UPDATE_FOCUS")}/>
                <label htmlFor="last-name" className="textbox-label m-0 px-1"> Last Name<span className="required-field">*</span>
                </label>
                <sub className="p-2 my-2 inactive-check"></sub>
            </section>

            <section className={`input-container flex-column m-5 ${registerState.email.length > 0 || registerState.focus.email ? "focused":"" }`}>
                <input id="email" className="textbox-content p-5" type="email" name="email" onChange={(e) => setValueHandler(e, "email", "UPDATE_EMAIL")} value={registerState.email} onFocus={() => setFocusHandler("email", true, "UPDATE_FOCUS")} onBlur={()=> setFocusHandler("email", false, "UPDATE_FOCUS")}/>
                <label htmlFor="email" className="textbox-label m-0 px-1"> Email<span className="required-field">*</span>
                </label>
                <sub className="p-2 my-2 inactive-check"></sub>
            </section>

            <section className={`input-container flex-column m-5 ${registerState.password.length > 0 || registerState.focus.password ? "focused":"" }`}>
                <input id="password" className="textbox-content p-5" type={`${ registerState.showPassword.password ? "text" : "password" }`} name="password" onChange={(e) => setValueHandler(e, "password", "UPDATE_PASSWORD")} value={registerState.password} onFocus={() => setFocusHandler("password", true, "UPDATE_FOCUS")} onBlur={()=> setFocusHandler("password", false, "UPDATE_FOCUS")}/>
                <i className={`fas ${ registerState.showPassword.password ? "fa-eye-slash" : "fa-eye" } show-password`} id="show-password"
                    onClick={ () => showPasswordHandler("password") }
                ></i>
                <label htmlFor="password" className="textbox-label m-0 px-1"> Password<span className="required-field">*</span>
                </label>
                <sub className="p-2 my-2 inactive-check"></sub>
            </section>

            <section className={`input-container flex-column m-5 ${registerState.confirmPassword.length > 0 || registerState.focus.confirmPassword ? "focused":"" }`}>
                <input id="confirm-password" className="textbox-content p-5" type={`${ registerState.showPassword.confirmPassword ? "text" : "password" }`} name="confirmPassword" onChange={(e) => setValueHandler(e, "confirmPassword", "UPDATE_CONFIRM_PASSWORD")} value={registerState.confirmPassword} onFocus={() => setFocusHandler("confirmPassword", true, "UPDATE_FOCUS")} onBlur={()=> setFocusHandler("confirmPassword", false, "UPDATE_FOCUS")}/>
                <i className={`fas ${ registerState.showPassword.confirmPassword ? "fa-eye-slash" : "fa-eye" } show-password`} id="show-password"
                    onClick={ () => showPasswordHandler("confirmPassword") }
                ></i>
                <label htmlFor="confirm-password" className="textbox-label m-0 px-1"> Confirm Password<span className="required-field">*</span>
                </label>
                <sub className="p-2 my-2 inactive-check"></sub>
            </section>

            <button className="primary-btn p-5 b-radius-2 my-5 mx-0 text-bold">Register</button>
        </form>
    );
}

export { Register };
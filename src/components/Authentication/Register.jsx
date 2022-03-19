import { useLocation, useNavigate } from "react-router";
import { useRegister } from "../../context";
import { registerHandler } from "../../utils";

const Register = () => {
    const { registerState, registerDispatch } = useRegister();
    const location = useLocation();
    const navigate = useNavigate();

    const setValueHandler = (e,field) => {
        const fieldValue = {};
        fieldValue[field] = e.target.value;
        registerDispatch(fieldValue);
    }
    const setFocusHandler = (field, value) => {
        const focusReset = { firstName: false, lastName: false,	email: false, password: false, confirmPassword: false }
        focusReset[field] = value;
        registerDispatch({focus: focusReset});
    }
    const showPasswordHandler = (field) => {
        const showPassword = {...registerState.showPassword};
        if(showPassword[field])
            showPassword[field] = false;
        else
        showPassword[field] = true;
        registerDispatch({showPassword: showPassword});
    }

    return (
        <form onSubmit={(e) => registerHandler(e, location, navigate)} className="input-form register flex-column flex-gap-1 flex-wrap h-auto w-100">
            <section className={`input-container flex-column m-5 ${registerState.firstName.length > 0 || registerState.focus.firstName ? "focused":"" }`}>
                <input id="first-name" className="textbox-content p-5" type="text" name="first-name" onChange={(e) => setValueHandler(e,"firstName")} value={registerState.firstName} onFocus={() => setFocusHandler("firstName",true)} onBlur={()=> setFocusHandler("firstName",false)}/>
                <label htmlFor="first-name" className="textbox-label m-0 px-1"> First Name<span className="required-field">*</span>
                </label>
                <sub className="p-2 my-2 inactive-check"></sub>
            </section>

            <section className={`input-container flex-column m-5 ${registerState.lastName.length > 0 || registerState.focus.lastName ? "focused":"" }`}>
                <input id="last-name" className="textbox-content p-5" type="text" name="last-name" onChange={(e) => setValueHandler(e,"lastName")} value={registerState.lastName} onFocus={() => setFocusHandler("lastName",true)} onBlur={()=> setFocusHandler("lastName",false)}/>
                <label htmlFor="last-name" className="textbox-label m-0 px-1"> Last Name<span className="required-field">*</span>
                </label>
                <sub className="p-2 my-2 inactive-check"></sub>
            </section>

            <section className={`input-container flex-column m-5 ${registerState.email.length > 0 || registerState.focus.email ? "focused":"" }`}>
                <input id="email" className="textbox-content p-5" type="email" name="email" onChange={(e) => setValueHandler(e,"email")} value={registerState.email} onFocus={() => setFocusHandler("email",true)} onBlur={()=> setFocusHandler("email",false)}/>
                <label htmlFor="email" className="textbox-label m-0 px-1"> Email<span className="required-field">*</span>
                </label>
                <sub className="p-2 my-2 inactive-check"></sub>
            </section>

            <section className={`input-container flex-column m-5 ${registerState.password.length > 0 || registerState.focus.password ? "focused":"" }`}>
                <input id="password" className="textbox-content p-5" type={`${ registerState.showPassword.password ? "text" : "password" }`} name="password" onChange={(e) => setValueHandler(e,"password")} value={registerState.password} onFocus={() => setFocusHandler("password",true)} onBlur={()=> setFocusHandler("password",false)}/>
                <i className={`fas ${ registerState.showPassword.password ? "fa-eye-slash" : "fa-eye" } show-password`} id="show-password"
                    onClick={ () => showPasswordHandler("password") }
                ></i>
                <label htmlFor="password" className="textbox-label m-0 px-1"> Password<span className="required-field">*</span>
                </label>
                <sub className="p-2 my-2 inactive-check"></sub>
            </section>

            <section className={`input-container flex-column m-5 ${registerState.confirmPassword.length > 0 || registerState.focus.confirmPassword ? "focused":"" }`}>
                <input id="confirm-password" className="textbox-content p-5" type={`${ registerState.showPassword.confirmPassword ? "text" : "password" }`} name="confirmPassword" onChange={(e) => setValueHandler(e,"confirmPassword")} value={registerState.confirmPassword} onFocus={() => setFocusHandler("confirmPassword",true)} onBlur={()=> setFocusHandler("confirmPassword",false)}/>
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
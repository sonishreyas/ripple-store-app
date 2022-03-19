import { useLocation, useNavigate } from "react-router";
import { loginHandler } from "../../utils";
import {useLogin} from "../../context"
const Login = () => {

    const {loginState,loginDispatch} = useLogin();
    const location = useLocation();
    const navigate = useNavigate();

    const showPasswordHandler = () => loginState.showPassword ? loginDispatch({showPassword: false}):loginDispatch({showPassword: true});
    const setValueHandler = (e,field) => {
        const fieldValue = {};
        fieldValue[field] = e.target.value;
        loginDispatch(fieldValue);
    }
    const setTestHandler = () => loginDispatch({email: "test@gmail.com", password: "test123"});
    const setFocusHandler = (field, value) => {
        const focusReset = { email: false, password: false}
        focusReset[field] = value;
        loginDispatch({focus: focusReset});
    }    
    
    return (
        <form onSubmit={(e) => loginHandler(e,location,navigate)} className="input-form login flex-column flex-gap-1 flex-wrap h-auto w-100">
            <section className={`input-container flex-column m-5 ${loginState.email.length > 0 || loginState.focus.email ? "focused":"" }`}>
                <input id="email" className="textbox-content p-5" type="email" name="email" onChange={(e) => setValueHandler(e,"email")} value={loginState.email} onFocus={() => setFocusHandler("email",true)} onBlur={()=> setFocusHandler("email",false)}/>
                <label htmlFor="email" className="textbox-label m-0 px-1">Email<span
                        className="required-field">*</span></label>
                <sub className="email-check p-2 my-2"></sub>
            </section>
            <section className={`input-container flex-column m-5 ${loginState.password.length > 0 || loginState.focus.password ? "focused":"" }`}>
                <input id="password" className="textbox-content p-5" type={`${ loginState.showPassword ? "text" : "password" }`} name="password" onChange={(e) => setValueHandler(e,"password")} value={loginState.password} onFocus={() =>  setFocusHandler("password",true)} onBlur={()=> setFocusHandler("password",false)}/>
                <i className={`fas ${ loginState.showPassword ? "fa-eye-slash" : "fa-eye" } show-password`} id="show-password"
                    onClick={ showPasswordHandler }
                ></i>
                <label htmlFor="password" className="textbox-label m-0 px-1">Password<span
                        className="required-field">*</span></label>
                <sub className="password-check p-2 my-2"></sub>
            </section>
            <button className="outline-btn p-5 b-radius-2 my-5 mx-0 text-bold" onClick={setTestHandler}>Test Credentials</button>
            <button className="primary-btn p-5 b-radius-2 my-5 mx-0 text-bold">Login</button>
        </form>
    );
}

export { Login };
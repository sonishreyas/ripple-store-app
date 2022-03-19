import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
const loginHandler = (e, location, navigate) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {};
    for(let x of formData) {
        data[x[0]] = x[1];
    }
    const loginInfo = { email: data.email, password: data.password };
    console.log("data = ", data);
    (async () => {
        try {
            const response = await axios.post(`/api/auth/login`, loginInfo);
            // saving the encodedToken in the localStorage
            localStorage.setItem("token", response.data.encodedToken);
            navigate(location.state.state)
        } catch (error) {
            console.log(error);
        }
    })();
};
const Login = () => {
    // loginHandler();
    const [showPassword, setShowPassword] = useState(false);
    const showPasswordHandler = () => showPassword ? setShowPassword(false):setShowPassword(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [focus,setFocus] = useState(false);
    // const [emailFocus, setEmailFocus]
    const setEmailHandler = (e) => setEmail(e.target.value);
    const setPasswordHandler = (e) => setPassword(e.target.value);
    const setTestHandler = () => {
        setEmail("test@gmail.com");
        setPassword("test123");
    }

    // const defaultLoginState = {
    //     email: "",
    //     password: "",

    // }
    // const [loginState, loginDispatch] = useReducer(loginReducer,defaultLoginState);
    const location = useLocation();
    const navigate = useNavigate();
    // const goBackHandle = () => {
    //     navigate(location.state.state);
    // }
    return (
        <form onSubmit={(e) => loginHandler(e,location,navigate)} className="input-form login flex-column flex-gap-1 flex-wrap h-auto w-100">
            <section className={`input-container flex-column m-5 ${email.length > 0 || focus ? "focused":"" }`}>
                <input id="email" className="textbox-content p-5" type="email" name="email" onChange={setEmailHandler} value={email} onFocus={() => setFocus(true)} onBlur={()=>setFocus(false)}/>
                <label htmlFor="email" className="textbox-label m-0">Email<span
                        className="required-field">*</span></label>
                <sub className="email-check p-2 my-2"></sub>
            </section>
            <section className={`input-container flex-column m-5 ${password.length > 0 || focus ? "focused":"" }`}>
                <input id="password" className="textbox-content p-5" type={`${ showPassword ? "text" : "password" }`} name="password" onChange={setPasswordHandler} value={password} onFocus={() => setFocus(true)} onBlur={()=>setFocus(false)}/>
                <i className={`fas ${ showPassword ? "fa-eye-slash" : "fa-eye" } show-password`} id="show-password"
                    onClick={ showPasswordHandler }
                ></i>
                <label htmlFor="password" className="textbox-label m-0">Password<span
                        className="required-field">*</span></label>
                <sub className="password-check p-2 my-2"></sub>
            </section>
            <section
                className="password-container flex-row justify-content-space-between align-center flex-gap-1 mb-5 flex-wrap">
                <section className="remember-me-container my-5">
                    <input type="checkbox" name="remember-me-btn" id="remember-me-btn my-2" aria-label="Remember me checkbox"/> Remember Me
                </section>
                <section className="forget-password-container my-5">
                    <a href="#" className="link-btn my-2">Forget Password</a>
                </section> 
            </section>
            <button className="outline-btn p-5 b-radius-2 my-5 mx-0 text-bold" onClick={setTestHandler}>Test Credentials</button>
            <button className="primary-btn p-5 b-radius-2 my-5 mx-0 text-bold">Login</button>
        </form>
    );
}

export { Login };
const Login = () => {
    return (
        <form className="input-form login flex-column flex-gap-1 flex-wrap h-auto w-100">
            <section className="input-container flex-column m-5">
                <input id="email" className="textbox-content p-5" type="email" name="email" />
                <label htmlFor="email" className="textbox-label m-0">Email<span
                        className="required-field">*</span></label>
                <sub className="email-check p-2 my-2"></sub>
            </section>
            <section className="input-container flex-column m-5">
                <input id="password" className="textbox-content p-5" type="password" name="password" />
                <i className="fas fa-eye show-password" id="show-password"></i>
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
            <button className="outline-btn p-5 b-radius-2 my-5 mx-0 text-bold">Test Credentials</button>
            <button className="primary-btn p-5 b-radius-2 my-5 mx-0 text-bold">Login</button>
        </form>
    );
}

export { Login };
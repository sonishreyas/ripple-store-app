import axios from "axios";
const signupHandler = async () => {
    console.log("hereee...");
    try {
        const response = await fetch.post(`/api/auth/signup`, JSON.stringify({
          firstName: "Adarsh",
          lastName: "Balika",
          email: "adarshbalika@neog.camp",
          password: "adarshBalika",
        }));
        // saving the encodedToken in the localStorage
        localStorage.setItem("token", response.data.encodedToken);
      } catch (error) {
        console.log(error);
      }
};
const Register = () => {
    signupHandler();
    return (
        <form className="input-form register flex-column flex-gap-1 flex-wrap h-auto w-100">
            <section className="input-container flex-column m-5">
                <input id="first-name" className="textbox-content p-5" type="first-name"
                    name="first-name" />
                <label htmlFor="first-name" className="textbox-label m-0">First Name<span
                        className="required-field">*</span></label>
                <sub className="p-2 my-2 inactive-check"></sub>
            </section>
            <section className="input-container flex-column m-5">
                <input id="last-name" className="textbox-content p-5" type="last-name" name="last-name" />
                <label htmlFor="last-name" className="textbox-label m-0">Last Name<span
                        className="required-field">*</span></label>
                <sub className="p-2 my-2 inactive-check"></sub>
            </section>
            <section className="input-container flex-column m-5">
                <input id="email" className="textbox-content p-5" type="email" name="email" />
                <label htmlFor="email" className="textbox-label m-0">Email<span
                        className="required-field">*</span></label>
                <sub className="email-check p-2 my-2 inactive-check"></sub>
            </section>
            <section className="input-container flex-column m-5">
                <input id="password" className="textbox-content p-5" type="password" name="password" />
                <i className="fas fa-eye show-password" id="show-password"></i>
                <label htmlFor="password" className="textbox-label m-0">Password<span
                        className="required-field">*</span></label>
                <sub className="password-check p-2 my-2 inactive-check"></sub>
            </section>
            <section className="input-container flex-column m-5">
                <input id="confirm-password" className="textbox-content p-5 confirm-password"
                    type="password" name="confirm-password" />
                <i className="fas fa-eye show-password" id="show-password"></i>

                <label htmlFor="confirm-password" className="textbox-label m-0">Confirm Password<span
                        className="required-field">*</span></label>
                <sub className="password-check p-2 my-2 confirm-password-check inactive-check"></sub>
            </section>
            <button className="primary-btn p-5 b-radius-2 my-5 mx-0 text-bold">Register</button>
        </form>
    );
}

export { Register };
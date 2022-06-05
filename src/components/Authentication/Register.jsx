import { useLocation, useNavigate } from "react-router";
import { useState, useReducer } from "react";
import { useAuth } from "context";
import { registerHandler, setValueHandler, setFocusHandler } from "utils";
import { registerReducer } from "reducers";

const Register = () => {
	const [registerState, registerDispatch] = useReducer(registerReducer, {
		email: "",
		password: "",
		firstName: "",
		lastName: "",
		confirmPassword: "",
		focus: {
			firstName: false,
			lastName: false,
			email: false,
			password: false,
			confirmPassword: false,
		},
	});
	const { authDispatch } = useAuth();
	const location = useLocation();
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState();
	const [showConfirmPassword, setShowConfirmPassword] = useState();
	const focusReset = {
		firstName: false,
		lastName: false,
		email: false,
		password: false,
		confirmPassword: false,
	};

	const showPasswordHandler = () =>
		showPassword ? setShowPassword(false) : setShowPassword(true);

	const showConfirmPasswordHandler = () =>
		showConfirmPassword
			? setShowConfirmPassword(false)
			: setShowConfirmPassword(true);

	return (
		<form
			onSubmit={(e) =>
				registerHandler(e, location, navigate, registerState, authDispatch)
			}
			className="input-form register flex-column flex-gap-1 flex-wrap h-auto w-100"
		>
			<section
				className={`input-container flex-column m-5 ${
					registerState.firstName.length > 0 || registerState.focus.firstName
						? "focused"
						: ""
				}`}
			>
				<input
					id="first-name"
					className="textbox-content p-5"
					type="text"
					name="first-name"
					onChange={(e) =>
						setValueHandler(
							e,
							"firstName",
							"UPDATE_FIRST_NAME",
							registerDispatch
						)
					}
					value={registerState.firstName}
					onFocus={() =>
						setFocusHandler(
							"firstName",
							true,
							"UPDATE_FOCUS",
							registerDispatch,
							focusReset
						)
					}
					onBlur={() =>
						setFocusHandler(
							"firstName",
							false,
							"UPDATE_FOCUS",
							registerDispatch,
							focusReset
						)
					}
				/>
				<label htmlFor="first-name" className="textbox-label m-0 px-1">
					{" "}
					First Name<span className="required-field">*</span>
				</label>
				<sub className="p-2 my-2 inactive-check"></sub>
			</section>

			<section
				className={`input-container flex-column m-5 ${
					registerState.lastName.length > 0 || registerState.focus.lastName
						? "focused"
						: ""
				}`}
			>
				<input
					id="last-name"
					className="textbox-content p-5"
					type="text"
					name="last-name"
					onChange={(e) =>
						setValueHandler(e, "lastName", "UPDATE_LAST_NAME", registerDispatch)
					}
					value={registerState.lastName}
					onFocus={() =>
						setFocusHandler(
							"lastName",
							true,
							"UPDATE_FOCUS",
							registerDispatch,
							focusReset
						)
					}
					onBlur={() =>
						setFocusHandler(
							"lastName",
							false,
							"UPDATE_FOCUS",
							registerDispatch,
							focusReset
						)
					}
				/>
				<label htmlFor="last-name" className="textbox-label m-0 px-1">
					{" "}
					Last Name<span className="required-field">*</span>
				</label>
				<sub className="p-2 my-2 inactive-check"></sub>
			</section>

			<section
				className={`input-container flex-column m-5 ${
					registerState.email.length > 0 || registerState.focus.email
						? "focused"
						: ""
				}`}
			>
				<input
					id="email"
					className="textbox-content p-5"
					type="email"
					name="email"
					onChange={(e) =>
						setValueHandler(e, "email", "UPDATE_EMAIL", registerDispatch)
					}
					value={registerState.email}
					onFocus={() =>
						setFocusHandler(
							"email",
							true,
							"UPDATE_FOCUS",
							registerDispatch,
							focusReset
						)
					}
					onBlur={() =>
						setFocusHandler(
							"email",
							false,
							"UPDATE_FOCUS",
							registerDispatch,
							focusReset
						)
					}
				/>
				<label htmlFor="email" className="textbox-label m-0 px-1">
					{" "}
					Email<span className="required-field">*</span>
				</label>
				<sub className="p-2 my-2 inactive-check"></sub>
			</section>

			<section
				className={`input-container flex-column m-5 ${
					registerState.password.length > 0 || registerState.focus.password
						? "focused"
						: ""
				}`}
			>
				<input
					id="password"
					className="textbox-content p-5"
					type={`${showPassword ? "text" : "password"}`}
					name="password"
					onChange={(e) =>
						setValueHandler(e, "password", "UPDATE_PASSWORD", registerDispatch)
					}
					value={registerState.password}
					onFocus={() =>
						setFocusHandler(
							"password",
							true,
							"UPDATE_FOCUS",
							registerDispatch,
							focusReset
						)
					}
					onBlur={() =>
						setFocusHandler(
							"password",
							false,
							"UPDATE_FOCUS",
							registerDispatch,
							focusReset
						)
					}
				/>
				<i
					className={`fas ${
						showPassword ? "fa-eye-slash" : "fa-eye"
					} show-password`}
					id="show-password"
					onClick={showPasswordHandler}
				></i>
				<label htmlFor="password" className="textbox-label m-0 px-1">
					{" "}
					Password<span className="required-field">*</span>
				</label>
				<sub className="p-2 my-2 inactive-check"></sub>
			</section>

			<section
				className={`input-container flex-column m-5 ${
					registerState.confirmPassword.length > 0 ||
					registerState.focus.confirmPassword
						? "focused"
						: ""
				}`}
			>
				<input
					id="confirm-password"
					className="textbox-content p-5"
					type={`${showConfirmPassword ? "text" : "password"}`}
					name="confirmPassword"
					onChange={(e) =>
						setValueHandler(
							e,
							"confirmPassword",
							"UPDATE_CONFIRM_PASSWORD",
							registerDispatch
						)
					}
					value={registerState.confirmPassword}
					onFocus={() =>
						setFocusHandler(
							"confirmPassword",
							true,
							"UPDATE_FOCUS",
							registerDispatch,
							focusReset
						)
					}
					onBlur={() =>
						setFocusHandler(
							"confirmPassword",
							false,
							"UPDATE_FOCUS",
							registerDispatch,
							focusReset
						)
					}
				/>
				<i
					className={`fas ${
						showConfirmPassword ? "fa-eye-slash" : "fa-eye"
					} show-password`}
					id="show-password"
					onClick={showConfirmPasswordHandler}
				></i>
				<label htmlFor="confirm-password" className="textbox-label m-0 px-1">
					{" "}
					Confirm Password<span className="required-field">*</span>
				</label>
				<sub className="p-2 my-2 inactive-check"></sub>
			</section>

			<button className="primary-btn p-5 b-radius-2 my-5 mx-0 text-bold cursor-pointer">
				Register
			</button>
		</form>
	);
};

export { Register };

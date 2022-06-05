import { Login, Register } from "./";
import { useState } from "react";
const AuthenticationTabs = () => {
	const [activeTab, setActiveTab] = useState("Login");
	const tabClickhandler = (activeTabName) => setActiveTab(activeTabName);
	return (
		<section className="authentication-tabs p-10 m-10">
			<article className="horizontal-tabs-container flex-column flex-wrap flex-gap-1 b-radius-2 p-5">
				<article className="horizontal-tabs-btn-container flex-row flex-grow-1 justify-content-center align-center">
					<button
						className={`tabs-btn p-5 flex-row flex-grow-1 justify-content-center align-center cursor-pointer ${
							activeTab === "Login" ? "horizontal-tabs-btn-active" : ""
						}`}
						onClick={() => tabClickhandler("Login")}
					>
						Login
					</button>
					<button
						className={`tabs-btn p-5 flex-row flex-grow-1 justify-content-center align-center cursor-pointer ${
							activeTab === "Register" ? "horizontal-tabs-btn-active" : ""
						}`}
						onClick={() => tabClickhandler("Register")}
					>
						Register
					</button>
				</article>

				{activeTab === "Login" && (
					<div className="horizontal-tabs-content">
						<Login />
					</div>
				)}
				{activeTab === "Register" && (
					<div className="horizontal-tabs-content">
						<Register />
					</div>
				)}
			</article>
		</section>
	);
};

export { AuthenticationTabs };

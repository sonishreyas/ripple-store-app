import { useAuth } from "context";

const Profile = () => {
	const { authState } = useAuth();
	return (
		<div className="profile-container py-5 flex-gap-1 b-radius-2 ">
			<div className="profile-header flex-row justify-content-space-between align-center flex-wrap py-5 my-0 mx-2">
				<h1 className="p-2 my-2 mx-0">Profile Details</h1>
			</div>
			<ul className="profile-list">
				<li className="no-list">
					<article className="card basic-card flex-row justify-content-center align-center flex-wrap card-shadow p-10 b-radius-2 w-max-content h-auto">
						<table className="table my-5 w-max-content h-auto">
							<tbody className="w-100">
								<tr className="table-row m-3 w-100 h-auto">
									<th className="table-head p-3">Name</th>
									<td className="table-data p-3">
										{authState.firstName} {authState.lastName}
									</td>
								</tr>
								<tr className="table-row m-3 w-100">
									<th className="table-head p-3">Email</th>
									<td className="table-data p-3">{authState.email}</td>
								</tr>
							</tbody>
						</table>
					</article>
				</li>
			</ul>
		</div>
	);
};

export { Profile };

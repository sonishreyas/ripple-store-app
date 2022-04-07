import { useAuth } from "../../context";

const Profile = () => {
	const { authState } = useAuth();
	return (
		<div class="profile-container py-5 flex-gap-1 b-radius-2 ">
			<div class="profile-header flex-row justify-content-space-between align-center flex-wrap py-5 my-0 mx-2">
				<h1 class="p-2 my-2 mx-0">Profile Details</h1>
			</div>
			<ul class="profile-list">
				<li class="no-list">
					<article class="card basic-card flex-row justify-content-center align-center flex-wrap card-shadow p-10 b-radius-2 w-max-content h-auto">
						<table class="table my-5 w-max-content h-auto">
							<tbody class="w-100">
								<tr class="table-row m-3 w-100 h-auto">
									<th class="table-head p-3">Name</th>
									<td class="table-data p-3">
										{authState.firstName} {authState.lastName}
									</td>
								</tr>
								<tr class="table-row m-3 w-100">
									<th class="table-head p-3">Email</th>
									<td class="table-data p-3">{authState.email}</td>
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

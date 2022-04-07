const Orders = () => {
	return (
		<div class="profile-container">
			<div class="profile-header flex-row justify-content-space-between align-center flex-wrap p-5 my-0 mx-5">
				<h1 class="p-2 my-2 mx-0">Orders</h1>
			</div>
			<ul class="profile-list p-5">
				<li class="no-list">
					<article class="card basic-card flex-row justify-content-center align-center flex-wrap card-shadow p-10 b-radius-2 w-100 h-auto">
						<h2 class="order-status">Order Confirmed</h2>
						<p class="secondary-font">Sun Feb 06 2022</p>
						<table class="table my-5">
							<tr class="table-row m-3">
								<th class="table-head p-3">OrderId:</th>
								<td class="table-data p-3">6648065895632</td>
							</tr>
							<tr class="table-row m-3">
								<th class="table-head p-3">Total:</th>
								<td class="table-data p-3">₹2999</td>
							</tr>
						</table>
						<article class="card horizontal border-shadow p-5 b-radius-2">
							<div class="horizontal-card-img--container flex-row justify-content-center align-center flex-wrap b-radius-2">
								<img
									src="https://raw.githubusercontent.com/sonishreyas/rippleUI/dev/components/media/images/sneaker.png"
									alt="Puma Sneakers"
									class="horizontal-card-img b-radius-2 mt-5"
								/>
							</div>
							<div class="horizontal-card-text--container flex-column flex-gap-1 p-5 b-radius-2 my-0 mx-5">
								<h1>Puma White Sneakers</h1>
								<p>PUMA</p>
								<hr />
								<p>Qty: 1</p>
							</div>
						</article>
					</article>
				</li>
			</ul>
		</div>
	);
};

export { Orders };

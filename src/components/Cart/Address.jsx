const Address = () => {
    return (
        <li class="no-list">
            <article
                class="card basic-card card-shadow cart-deliver-container flex-row justify-content-space-between m-auto card-shadow p-5 b-radius-2">
                <div class="delivery-address-container">
                    <p class="m-5">Deliver to: <b>Shreyas Soni, 411027</b></p>
                    <p class="m-5">
                        A-601, Nisarg Nirman, Pimple Saudagar, Pune, Maharashtra,
                        India.
                    </p>
                </div>
                <button class="outline-btn change-address-btn p-5 b-radius-2 mx-5 my-0 text-bold">
                    Change
                </button>
            </article>
        </li>
    )
}

export {Address}; 
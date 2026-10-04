/* =========================================================
   USWA NAZISH CLOTHING STORE
   MAIN WEBSITE JAVASCRIPT
========================================================= */


/* =========================================================
   STORE INFORMATION
========================================================= */

const STORE = {

    name: "Uswa Nazish Clothing Store",

    whatsapp: "923157540218",

    email: "uswanazish311@gmail.com",

    location: "Khanewal, Kacha Khuh",

    currency: "Rs."

};


/* =========================================================
   LOCAL STORAGE KEYS
========================================================= */

const STORAGE_KEYS = {

    cart: "uswaNazishCart",

    wishlist: "uswaNazishWishlist",

    customer: "uswaNazishCustomer"

};


/* =========================================================
   CART
========================================================= */

let cart = JSON.parse(
    localStorage.getItem(STORAGE_KEYS.cart)
) || [];


/* =========================================================
   WISHLIST
========================================================= */

let wishlist = JSON.parse(
    localStorage.getItem(STORAGE_KEYS.wishlist)
) || [];


/* =========================================================
   SAVE CART
========================================================= */

function saveCart() {

    localStorage.setItem(
        STORAGE_KEYS.cart,
        JSON.stringify(cart)
    );

    updateCartCount();

}


/* =========================================================
   SAVE WISHLIST
========================================================= */

function saveWishlist() {

    localStorage.setItem(
        STORAGE_KEYS.wishlist,
        JSON.stringify(wishlist)
    );

}


/* =========================================================
   GET PRODUCT
========================================================= */

function findProduct(productId) {

    if (
        typeof allProducts === "undefined"
    ) {

        return null;

    }

    return allProducts.find(
        product => product.id === productId
    );

}


/* =========================================================
   GET PRODUCT FINAL PRICE
========================================================= */

function getFinalPrice(product) {

    if (
        product.salePrice &&
        product.salePrice < product.price
    ) {

        return Number(product.salePrice);

    }

    return Number(product.price);

}


/* =========================================================
   ADD TO CART
========================================================= */

function addToCart(productId, quantity = 1) {

    const product =
        findProduct(productId);


    if (!product) {

        showNotification(
            "Product not found.",
            "error"
        );

        return;

    }


    const existingItem =
        cart.find(
            item =>
                item.productId === productId
        );


    if (existingItem) {

        existingItem.quantity += quantity;

    } else {

        cart.push({

            productId: productId,

            quantity: quantity

        });

    }


    saveCart();


    showNotification(
        `${product.name} added to cart 🛒`,
        "success"
    );


    openCartPreview();

}


/* =========================================================
   REMOVE FROM CART
========================================================= */

function removeFromCart(productId) {

    const product =
        findProduct(productId);


    cart =
        cart.filter(
            item =>
                item.productId !== productId
        );


    saveCart();


    renderCart();


    if (product) {

        showNotification(
            `${product.name} removed from cart.`,
            "info"
        );

    }

}


/* =========================================================
   CHANGE CART QUANTITY
========================================================= */

function changeQuantity(
    productId,
    change
) {

    const item =
        cart.find(
            item =>
                item.productId === productId
        );


    if (!item) return;


    item.quantity += change;


    if (item.quantity <= 0) {

        removeFromCart(productId);

        return;

    }


    saveCart();

    renderCart();

}


/* =========================================================
   SET CART QUANTITY
========================================================= */

function setCartQuantity(
    productId,
    quantity
) {

    const item =
        cart.find(
            item =>
                item.productId === productId
        );


    if (!item) return;


    quantity =
        parseInt(quantity);


    if (
        isNaN(quantity) ||
        quantity < 1
    ) {

        quantity = 1;

    }


    item.quantity = quantity;


    saveCart();

    renderCart();

}


/* =========================================================
   CLEAR CART
========================================================= */

function clearCart() {

    if (cart.length === 0) return;


    const confirmed =
        confirm(
            "Are you sure you want to clear your cart?"
        );


    if (!confirmed) return;


    cart = [];


    saveCart();

    renderCart();


    showNotification(
        "Cart cleared.",
        "info"
    );

}


/* =========================================================
   CART TOTAL
========================================================= */

function getCartTotal() {

    return cart.reduce(
        (total, item) => {

            const product =
                findProduct(
                    item.productId
                );


            if (!product) {

                return total;

            }


            return total +
                (
                    getFinalPrice(product) *
                    item.quantity
                );

        },
        0
    );

}


/* =========================================================
   CART ITEMS COUNT
========================================================= */

function getCartItemsCount() {

    return cart.reduce(
        (
            total,
            item
        ) => {

            return total +
                item.quantity;

        },
        0
    );

}


/* =========================================================
   UPDATE CART COUNT
========================================================= */

function updateCartCount() {

    const count =
        getCartItemsCount();


    const counters =
        document.querySelectorAll(
            ".cart-count, #cartCount"
        );


    counters.forEach(
        counter => {

            counter.textContent =
                count;

            counter.style.display =
                count > 0
                    ? "flex"
                    : "none";

        }
    );

}


/* =========================================================
   FORMAT PRICE
========================================================= */

function formatStorePrice(price) {

    return (
        "Rs. " +
        Number(price)
            .toLocaleString("en-PK")
    );

}


/* =========================================================
   RENDER CART
========================================================= */

function renderCart() {

    const containers =
        document.querySelectorAll(
            "#cartItems, .cart-items"
        );


    if (!containers.length) {

        updateCartCount();

        return;

    }


    containers.forEach(
        container => {

            if (cart.length === 0) {

                container.innerHTML = `

                    <div class="empty-cart">

                        <div class="empty-cart-icon">
                            🛒
                        </div>

                        <h3>
                            Your Cart is Empty
                        </h3>

                        <p>
                            Add some beautiful
                            products to your cart.
                        </p>

                    </div>

                `;

                return;

            }


            container.innerHTML =
                cart.map(
                    item => {

                        const product =
                            findProduct(
                                item.productId
                            );


                        if (!product) {

                            return "";

                        }


                        const price =
                            getFinalPrice(
                                product
                            );


                        const subtotal =
                            price *
                            item.quantity;


                        return `

                            <div
                                class="cart-item"
                                data-product-id="${product.id}"
                            >

                                <div class="cart-item-image">

                                    <img
                                        src="${product.image}"
                                        alt="${product.name}"
                                    >

                                </div>


                                <div class="cart-item-info">

                                    <h4>
                                        ${product.name}
                                    </h4>

                                    <span>
                                        ${product.fabric}
                                    </span>


                                    <strong>
                                        ${formatStorePrice(price)}
                                    </strong>


                                    <div class="cart-quantity">

                                        <button
                                            type="button"
                                            onclick="changeQuantity('${product.id}', -1)"
                                        >
                                            −
                                        </button>


                                        <input
                                            type="number"
                                            min="1"
                                            value="${item.quantity}"
                                            onchange="setCartQuantity('${product.id}', this.value)"
                                        >


                                        <button
                                            type="button"
                                            onclick="changeQuantity('${product.id}', 1)"
                                        >
                                            +
                                        </button>

                                    </div>


                                    <div class="cart-subtotal">

                                        Subtotal:
                                        <strong>
                                            ${formatStorePrice(subtotal)}
                                        </strong>

                                    </div>


                                    <button
                                        class="remove-cart-item"
                                        type="button"
                                        onclick="removeFromCart('${product.id}')"
                                    >
                                        🗑️ Remove
                                    </button>

                                </div>

                            </div>

                        `;

                    }
                ).join("");

        }
    );


    updateCartSummary();

}


/* =========================================================
   UPDATE CART SUMMARY
========================================================= */

function updateCartSummary() {

    const total =
        getCartTotal();


    const count =
        getCartItemsCount();


    document
        .querySelectorAll(
            "#cartTotal, .cart-total"
        )
        .forEach(
            element => {

                element.textContent =
                    formatStorePrice(total);

            }
        );


    document
        .querySelectorAll(
            "#cartSubtotal, .cart-subtotal-total"
        )
        .forEach(
            element => {

                element.textContent =
                    formatStorePrice(total);

            }
        );


    document
        .querySelectorAll(
            "#cartItemCount, .cart-item-count"
        )
        .forEach(
            element => {

                element.textContent =
                    count;

            }
        );

}


/* =========================================================
   CART PREVIEW
========================================================= */

function openCartPreview() {

    const cartModal =
        document.getElementById(
            "cartModal"
        );


    if (cartModal) {

        cartModal.classList.add("active");

        renderCart();

    }

}


/* =========================================================
   CLOSE CART
========================================================= */

function closeCart() {

    const cartModal =
        document.getElementById(
            "cartModal"
        );


    if (cartModal) {

        cartModal.classList.remove(
            "active"
        );

    }

}


/* =========================================================
   BUY NOW
========================================================= */

function buyNow(productId) {

    const product =
        findProduct(productId);


    if (!product) return;


    cart = [

        {
            productId: productId,

            quantity: 1

        }

    ];


    saveCart();

    renderCart();


    openCheckout();


}


/* =========================================================
   WISHLIST
========================================================= */

function toggleWishlist(productId) {

    const index =
        wishlist.indexOf(productId);


    if (index === -1) {

        wishlist.push(productId);


        showNotification(
            "Added to wishlist ❤️",
            "success"
        );

    } else {

        wishlist.splice(
            index,
            1
        );


        showNotification(
            "Removed from wishlist.",
            "info"
        );

    }


    saveWishlist();

    updateWishlistButtons();

}


/* =========================================================
   UPDATE WISHLIST BUTTONS
========================================================= */

function updateWishlistButtons() {

    document
        .querySelectorAll(
            ".product-wishlist"
        )
        .forEach(
            button => {

                const card =
                    button.closest(
                        ".product-card"
                    );


                if (!card) return;


                const productId =
                    card.dataset.productId;


                if (
                    wishlist.includes(
                        productId
                    )
                ) {

                    button.classList.add(
                        "active"
                    );

                    button.innerHTML =
                        "♥";

                } else {

                    button.classList.remove(
                        "active"
                    );

                    button.innerHTML =
                        "♡";

                }

            }
        );

}


/* =========================================================
   SEARCH
========================================================= */

function performSearch(value) {

    const term =
        value
            .toLowerCase()
            .trim();


    const results =
        typeof searchProducts === "function"
            ? searchProducts(term)
            : [];


    const ladiesResults =
        results.filter(
            product =>
                product.type === "Ladies"
        );


    const gentsResults =
        results.filter(
            product =>
                product.type === "Gents"
        );


    if (
        typeof renderLadiesProducts ===
        "function"
    ) {

        renderLadiesProducts(
            ladiesResults
        );

    }


    if (
        typeof renderGentsProducts ===
        "function"
    ) {

        renderGentsProducts(
            gentsResults
        );

    }


    const searchResults =
        document.getElementById(
            "searchResults"
        );


    if (searchResults) {

        searchResults.textContent =
            `${results.length} products found`;

    }

}


/* =========================================================
   SEARCH INPUTS
========================================================= */

function initializeSearch() {

    const searchInputs =
        document.querySelectorAll(
            "#productSearch, .product-search, .search-input"
        );


    searchInputs.forEach(
        input => {

            input.addEventListener(
                "input",
                function () {

                    performSearch(
                        this.value
                    );

                }
            );

        }
    );

}


/* =========================================================
   CATEGORY FILTER
========================================================= */

function initializeFilters() {

    document
        .querySelectorAll(
            "[data-filter]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    function () {

                        const filter =
                            this.dataset.filter;


                        document
                            .querySelectorAll(
                                "[data-filter]"
                            )
                            .forEach(
                                item =>
                                    item.classList.remove(
                                        "active"
                                    )
                            );


                        this.classList.add(
                            "active"
                        );


                        if (
                            filter.startsWith(
                                "ladies"
                            )

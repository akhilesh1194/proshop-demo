const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
    // Calculate Items Price
    state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );

    // Calculate Shipping Price (if order above 499 then 0 esle 60)
    state.shippingPrice = addDecimals(
        state.itemsPrice > 499 ? 0 : 60
    );

    // Calculate Tax Price (10% GST)
    state.taxPrice = addDecimals(
        Number(state.itemsPrice * 0.1).toFixed(2)
    );

    // Calculate Total Price
    state.totalPrice = (
        Number(state.itemsPrice) + 
        Number(state.shippingPrice) + 
        Number(state.taxPrice)
    ).toFixed(2);

    localStorage.setItem('cart', JSON.stringify(state));

    return state;
};    
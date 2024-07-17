import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);

    return (
        <div>
            <h2>장바구니</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {item.name} - 수량: {item.quantity} - 가격: {item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;

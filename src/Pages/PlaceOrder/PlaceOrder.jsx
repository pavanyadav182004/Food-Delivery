
import { useContext } from "react"
import "./PlaceOrder.css"
import { StoreContext } from "../../Context/StoreContext"
export default function PlaceOrder() {
    const {getTotalCartAmount}=useContext(StoreContext)
    return (
        <>
            <form className="place-order">
                {/* Left */}
                <div className="place-order-left">
                    <p className="title">Delivery Information</p>
                    <div className="multi-fields">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                    </div>
                    <input type="text" placeholder="Email Address" />
                    <input type="text" placeholder="Street" />
                    <div className="multi-fields">
                        <input type="text" placeholder=" City" />
                        <input type="text" placeholder="State" />
                    </div>
                    <div className="multi-fields">
                        <input type="text" placeholder="Pin Code" />
                        <input type="text" placeholder="Country" />
                    </div>
                    <input type="text" placeholder="Phone" />
                </div>

                {/* Right */}
                <div className="place-order-right">
                    <div className="cart-total">
                       <div className="cart-total-datails">
                            <p>Subtotal</p>
                            <p>₹{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-datails">
                            <p>Delivery Fee</p>
                            <p>{getTotalCartAmount() === 0 ? 0 : 2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-datails">
                            <b>Total</b>
                            <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
                        </div>

                        <button >PROCCED TO CHECKOUT</button>
                    </div>
                </div>
            </form>
        </>
    )
}
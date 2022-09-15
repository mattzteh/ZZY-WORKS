import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { deleteCartItem } from "../../store/cart";
import './CheckoutPage.css'
const CheckoutPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = useSelector(state => state.session.user)
    const cartItems = useSelector(state => Object.values(state.cartItems))

    let path = '/'
    
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(path)
    }

    return (
        <>
        <div className="checkout-page">

            <div className="checkout-left-column">
                <h1>ZZY WORKS</h1>

                <form 
                className="checkout-form"
                onSubmit={handleSubmit}
                >

                    <h2>Contact Information</h2>

                        <h3 className="contact-info">
                        {currentUser.firstName}
                        {` ${currentUser.lastName} `}
                        ({currentUser.email})
                        </h3>

                        <label className="email-button">
                            <input
                            className="checkbox"
                            type='checkbox'
                            />
                            Email me with news and offers
                        </label>

                    <br/>


                    <h2>Shipping Address</h2>

                    <br/>

                        <select className="country-option">
                            <option>United States of America</option>
                            <option>Canada</option>
                        </select>

                    <div className="checkout-names">
                        <input 
                        className="checkout-first-name"
                        type='text'
                        placeholder="First name"
                        />

                        <input 
                        className="checkout-last-name"
                        type='text'
                        placeholder="Last name"
                        />
                    </div>

                    <input 
                    className="checkout-company"
                    type='text'
                    placeholder="Company (optional)"
                    />

                    <input 
                    className="checkout-address"
                    type='text'
                    placeholder="Address"
                    />

                    <input
                    className="checkout-apartment"
                    type='text'
                    placeholder="Apartment, suite, etc. (optional)"
                    />

                    <div className="checkout-locations">
                        <input
                        className="checkout-city"
                        type='text'
                        placeholder="City"
                        />

                        <input
                        className="checkout-state"
                        type='text'
                        placeholder="State"
                        />

                        <input
                        className="checkout-zip"
                        type='text'
                        placeholder="Zip Code"
                        />
                    </div>

                    <input
                    className="phone"
                    type='text'
                    placeholder="Phone"
                    />

                    <div className="bottom-checkout-form">
                        <label className="save-info">
                        <input
                        className="checkbox"
                        type='checkbox'
                        />
                        Save info for next time
                        </label>

                        <button 
                        className="shipping-button"
                        >
                        Continue to Shipping
                        </button>
                    </div>
                </form>

               <Link to="/catalog">
                <button className="catalog-return">
                <i className="fa-solid fa-arrow-left"></i>
                Keep Shopping</button>
                </Link> 
            </div>

            <div className="checkout-right-column">
            </div>

        </div>
        </>
    )
}

export default CheckoutPage
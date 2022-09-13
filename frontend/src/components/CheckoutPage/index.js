import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getCartItems } from "../../store/cart"
import './CheckoutPage.css'
const CheckoutPage = () => {

    const currentUser = useSelector(state => state.session.user)

    return (
        <>
        <div className="checkout-page">

            <div className="checkout-left-column">
                <h1>ZZY WORKS</h1>

                <form className="checkout-form">

                    <h1>Contact Information</h1>

                        <h1 className="contact-info">
                        {currentUser.firstName}
                        {` ${currentUser.lastName} `}
                        ({currentUser.email})
                        </h1>

                        <label className="email-button">
                            <input
                            type='checkbox'
                            />
                            Email me with news and offers
                        </label>

                    <br/>


                    <h1>Shipping Address</h1>

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

                        <label className="save-info">
                        <input
                        // className="save-info-button"
                        type='checkbox'
                        />
                        Save info for next time
                        </label>

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
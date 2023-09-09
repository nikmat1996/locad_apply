import "../styles/signUp.css";
import React from 'react'

const SignUp = () => {
  return (
    <section className="signup">
      <div className="signup--wrap">
        <div className="signup--wrap_left">
          <h2>Sign up today and leave the logistics to us</h2>
          <p>Sign up, and we will get back to you within 24 hours to discuss what services would be best for your business needs. Or speak with us now and tell us what you need.</p>
        </div>
        <div className="signup--wrap_right">
          <form className="signup--wrap_right--form">
            <div>
              <div className="signup_input--wrap">
                <label htmlFor="form-field-name">First Name</label>
                <input placeholder="Name" type="text" id="form-field-name" />
              </div>
              <div className="signup_input--wrap">
                <label htmlFor="form-field-field_d4934a4">Last Name</label>
                <input placeholder="Name" type="text" id="form-field-field_d4934a4" />
              </div>
            </div>
            <div>
              <div className="signup_input--wrap">
                <label htmlFor="form-field-email">Email</label>
                <input placeholder="Email" type="text" id="form-field-email" />
              </div>
              <div className="signup_input--wrap">
                <label htmlFor="form-field-mobile_number">Mobile Number</label>
                <input placeholder="Mobile Number" type="text" id="form-field-mobile_number" />
              </div>
            </div>

            <div className="signup_input--wrap">
              <label htmlFor="form-field-ff_main_location">Main Fulfillment Location</label>
              <input placeholder="hello" type="Select country" id="form-field-ff_main_location" />
            </div>
            <div className="signup_input--wrap">
              <label htmlFor="form-field-monthly_orders">Monthly Orders</label>
              <input type="text" id="form-field-monthly_orders" />
            </div>
            <div className="signup_input--wrap">
              <label htmlFor="form-field-message">Company</label>
              <input placeholder="What is the name of your company?" type="text" id="form-field-message" />
            </div>
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SignUp
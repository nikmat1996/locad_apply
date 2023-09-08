import "../styles/emailSubscription.css";
import React from 'react'

const EmailSubscription = () => {
  return (
    <section className="emailSubscription">
      <h3>Get the latest industry news, best practices, and product updates!</h3>
      <div className="emailSubscription-inputContainer">
        <input type="email" placeholder="Email"/>
        <button>Subscribe</button>
      </div>
    </section>
  )
}

export default EmailSubscription
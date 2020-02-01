import React from 'react';
// import { useToasts } from "react-toast-notifications";
import './style.css';

function ContactPage() {

  // const { addToast } = useToasts();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    window.location.reload(true);
    // if(event) {
    // addToast("Thank you for contacting Kibbles and Brews", {
    //   appearance: "success", 
    //   autoDismiss: true 
    // });
    // alert("Thank You!")
}
  
  return (
    <body>
    <div className="heading">
      <div className="row">
          <div className="col-8">
          <img id="logo" src="https://tse4.mm.bing.net/th?id=OIP.lpVib3nwr4YfMvR31Yzn7gHaFj&pid=Api&P=0&w=270&h=204 " alt="logo"/>
          <h1>Kibbles {'&'} Brews</h1>
      </div>
      
      </div>
  </div>

      <section className="contact-input">
      <div className="field">
        <label className="label">Name</label>
      <div className="control">
        <input className="input" type="text"/>
      </div>
      </div>

      <div className="field">
        <label className="label">Username</label>
      <div className="control has-icons-left has-icons-right">
        <input className="input is-success" type="text"/>
        
        <span className="icon is-small is-left">
          <i className="fas fa-user"></i>
        </span>
      </div>
      </div>

      <div className="field">
        <label className="label">Email</label>
      <div className="control has-icons-left has-icons-right">
        <input className="input is-danger" type="email"/>
        <span className="icon is-small is-left">
          <i className="fas fa-envelope"></i>
        </span>
      </div>
      </div>

      <div className="field">
        <label className="label">Message</label>
      <div className="control">
        <textarea className="textarea" placeholder="Textarea"></textarea>
      </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link" onClick={handleFormSubmit}>Submit</button>
        </div>
      </div>
    
      </section>
    </body>
  )
}

export default ContactPage
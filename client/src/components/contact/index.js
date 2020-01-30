import React from 'react';
import './style.css';

function ContactPage() {

  const handleFormSubmit = event => {
    event.preventDefault();
    window.location.reload(true);
    alert("Thank You!")
  }

  return (
    <body>
      <section class="hero is-info">
        <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {"Kibbles and Brews"}
          </h1>
          <h2 class="subtitle">
            {"Contact Us"}
          </h2>
        </div>
        </div>
      </section>

      <section class="contact-input">
      <div class="field">
        <label class="label">Name</label>
      <div class="control">
        <input class="input" type="text"/>
      </div>
      </div>

      <div class="field">
        <label class="label">Username</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input is-success" type="text"/>
        
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input is-danger" type="email"/>
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
      </div>

      <div class="field">
        <label class="label">Message</label>
      <div class="control">
        <textarea class="textarea" placeholder="Textarea"></textarea>
      </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link" onClick={handleFormSubmit}>Submit</button>
        </div>
      </div>
    
      </section>
    </body>
  )
}

export default ContactPage
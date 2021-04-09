import React from 'react';
import emailjs from 'emailjs-com';

const Contact = function () {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_gw2ryuc', e.target, 'user_3ke5d9TV80hRpR6NmI9dY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <div className="container">
      <form id="contact" onSubmit={sendEmail}>
        <h3>Contact Form</h3>
        <h4>Contact us for custom quote</h4>
        <fieldset>
          <input placeholder="Your name" name="name" type="text" tabindex="1" required autofocus />
        </fieldset>
        <fieldset>
          <input placeholder="Your Email Address" type="email" name="email" tabindex="2" required />
        </fieldset>
        <fieldset>
          <input placeholder="Subject" name="subject" type="text" tabindex="3" required />
        </fieldset>
        <fieldset>
          <textarea name="message" placeholder="Type your message here...." tabindex="5" required></textarea>
        </fieldset>
        <fieldset>
          <input type="submit" id="contact-submit" data-submit="...Sending" />
        </fieldset>
      </form>
    </div>
  );
}

export default Contact;
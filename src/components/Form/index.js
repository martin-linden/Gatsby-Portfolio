import React from 'react';
import PaperPlane from '../../lotties/PaperPlane';

const ContactForm = () => (
  <>
    <div className="project-header-wrapper">
      <div id="paper-plane">
        <PaperPlane />
      </div>

      <div>
        <a href="https://github.com/martin-linden" className="contact-links">
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/martinlindensthlm/?locale=sv_SE"
          className="contact-links"
        >
          LinkedIn
        </a>
      </div>
      <h1>Let’s talk!</h1>
      <p>
        Don’t like forms? Send me an email to: <br />{' '}
        <a href="mailto:martinlinden.sthlm@gmail.com" className="send-email-link">
          martinlinden.sthlm@gmail.com
        </a>
      </p>
    </div>

    <div className="form-container">
      <div className="test">
        <form className="form" name="contact" method="post" action="#" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <label>
            Full Name
            <input className="form-input" type="text" name="name" id="name" />
          </label>
          <label>
            Email
            <input className="form-input" type="email" name="email" id="email" />
          </label>
          <label>
            Subject
            <input className="form-input" type="text" name="subject" id="subject" />
          </label>
          <label>
            Message
            <textarea name="message" id="message" rows="5" />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  </>
);

export default ContactForm;

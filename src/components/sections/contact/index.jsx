import React from 'react';

import Layout from '../../layout';

import { textPattern } from '../../../utils/constants';

const Contact = () => {
  const handleSubmit = (e) => {
    const [fullName, email, message] = e.target;
    e.preventDefault();

    window.location.href = `mailto:${
      process.env.REACT_APP_EMAIL_MAILTO
    }?&subject=Contact from portfolio - ${fullName.value}&body=${encodeURIComponent(
      message.value
    )}`;
  };

  return (
    <Layout title="Contact" id="Contact" bottomLine={false}>
      <div className="contact-wrapper">
        <form onSubmit={handleSubmit}>
          <label title="Full name" htmlFor="fullName">
            Full name
          </label>
          <input
            type="text"
            name="fullName"
            min={1}
            required
            autoComplete="off"
            pattern={textPattern}
          />

          <label title="E-mail" htmlFor="eMail">
            E-mail
          </label>
          <input type="email" name="eMail" min={4} required autoComplete="off" />

          <label title="Message" htmlFor="textArea">
            Message
          </label>
          <textarea name="textArea" min={10} required />

          <button type="submit">Send</button>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;

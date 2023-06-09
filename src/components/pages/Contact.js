import React from 'react';
import '../../styles/Contact.css';

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form action="mailto:sinthushan@gmail.com" method="get">
        <div>
          <label for="name" class="form-label">Name:</label>
          <input type="text" name="subject" class="form-control" id="name"/>
        </div>
        <div>
          <label for="email" class="form-label">Email address:</label>
          <input type="email" name="email" class="form-control" id="email" placeholder="name@example.com" />
        </div>
        <div>
          <label for="message" class="form-label">Message:</label>
          <textarea class="form-control" name="body" id="message"/>
        </div>
        <input type="submit" value="Send"/>
      </form>
    </section>
  );
}
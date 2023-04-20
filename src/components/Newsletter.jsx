import React from 'react';

const Newsletter = () => {
  return (
    <section id="newsletter" className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-details">
          <h3>
            Join my newsletter        
          </h3>
          <p>
            I regularly share my professional or personal updates on substack! 
          </p>
          <div className="newsletter-input">
            <input type="text" placeholder="email address"/>
            <button type="submit">
              Subscribe
            </button>
          </div>
        </div>
        <div className="newsletter-image">
          <img src="/inbox.png" alt="inbox-img"/>
        </div>
      </div>
    </section>
  )
}

export default Newsletter;
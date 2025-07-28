import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-8">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Feel free to reach out!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="mailto:sandaru.suranjaya@gmail.com"
              className="btn-primary flex items-center gap-3"
            >
              <span>📧</span>
              sandaru.suranjaya@gmail.com
            </a>
            
            <a 
              href="https://linkedin.com/in/sandaru-suranjaya"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-3"
            >
              <span>💼</span>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
import React from 'react';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="container-custom text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-charcoal mb-6">
          Sandaru Suranjaya
        </h1>
        <p className="text-xl md:text-2xl text-electric-blue font-medium mb-4">
          Product Builder. Data Storyteller. Innovator.
        </p>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          I help build habit-forming, data-driven digital experiences that drive engagement and transformation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={scrollToProjects}
            className="btn-primary"
          >
            See My Work
          </button>
          <a 
            href="/SandaruSuranjaya-CV.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
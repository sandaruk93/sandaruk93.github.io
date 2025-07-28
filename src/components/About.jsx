import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-8 text-center">
            About Me
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              I'm Sandaru, a Senior Product Manager with 7+ years of experience across EdTech, Gaming, and Personal Development. Currently building at Mindvalley, I thrive on translating user needs into scalable solutions. I'm also a passionate public speaker, mentor, and storyteller.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 
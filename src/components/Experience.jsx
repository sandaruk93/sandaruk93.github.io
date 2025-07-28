import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Mindvalley",
      period: "2023–Present",
      role: "Senior Product Manager",
      description: "Led roadmap for 300K+ user product."
    },
    {
      company: "Arimac",
      period: "2020–2022",
      role: "Product Manager",
      description: "Built gaming platform (100K users), launched COVID-19 misinformation counter-tool."
    },
    {
      company: "Dialog Axiata",
      period: "2018–2020",
      role: "Product Specialist",
      description: "Regional API hackathons & telco integrations."
    }
  ];

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-12 text-center">
          Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-16 bg-electric-blue"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-electric-blue rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-charcoal">{exp.company}</h3>
                      <span className="text-electric-blue font-semibold">{exp.period}</span>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-700 mb-3">{exp.role}</h4>
                    <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 
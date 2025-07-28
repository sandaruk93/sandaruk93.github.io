import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Product Strategy",
      skills: ["Go-to-Market", "Roadmapping", "Lifecycle Management"],
      icon: "🎯"
    },
    {
      title: "Data & Growth",
      skills: ["A/B Testing", "Analytics (Mixpanel, Amplitude)", "Data-driven decisions"],
      icon: "📊"
    },
    {
      title: "Leadership",
      skills: ["Public Speaking", "Team Building", "Stakeholder Alignment"],
      icon: "👥"
    }
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-12 text-center">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-2xl font-bold text-charcoal mb-6">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-electric-blue rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 
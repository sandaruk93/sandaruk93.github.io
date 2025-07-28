import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Gamifying Mindvalley",
      description: "Introduced meditation targets and streaks.",
      result: "+115% weekly engagement.",
      bgColor: "bg-gradient-to-br from-electric-blue to-navy"
    },
    {
      title: "Mindvalley NextGen App",
      description: "Redesigned UI for iPhone 16 launch. Featured globally.",
      result: "Won Malaysia's Tech Excellence Award.",
      bgColor: "bg-gradient-to-br from-navy to-electric-blue"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`${project.bgColor} p-8 text-white`}>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-lg opacity-90 mb-4">{project.description}</p>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <p className="text-lg font-semibold">Result: {project.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 
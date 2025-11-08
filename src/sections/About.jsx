import { motion } from 'framer-motion';
import { Target, Eye, Briefcase } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Who We Are',
      description:
        'Savvy Spectra Solutions is a Bangalore-based IT infrastructure and services company specializing in end-to-end technology solutions for enterprises and SMBs.',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Our Mission',
      description:
        'Simplify IT to drive growth, efficiency, and innovation. We empower businesses by providing smart, scalable, and secure technology solutions.',
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Our Vision',
      description:
        'To be a trusted, agile IT partner driving transformation through technology, helping businesses navigate the digital landscape with confidence.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-[#084A8D]">Savvy Spectra</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Building trusted partnerships through innovative IT solutions and exceptional service delivery
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
             <div className="w-16 h-16 bg-[#084A8D] rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">

                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

       
      </div>
    </section>
  );
};

export default About;

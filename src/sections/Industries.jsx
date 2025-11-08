import { motion } from 'framer-motion';
import { Code, Building2, Factory, GraduationCap, Heart, ShoppingBag, Rocket,Antenna } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'IT & ITeS',
      description: 'Technology infrastructure for software and service companies',
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'BFSI',
      description: 'Secure solutions for banking, financial services, and insurance',
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: 'Manufacturing',
      description: 'Smart infrastructure for production and logistics management',
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Education',
      description: 'Digital solutions for schools, colleges, and learning platforms',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Healthcare',
      description: 'Reliable IT systems for hospitals and medical facilities',
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: 'Retail',
      description: 'Modern solutions for e-commerce and brick-and-mortar stores',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Startups',
      description: 'Scalable infrastructure to fuel your startup growth',
    },
    {
      icon: <Antenna className="w-8 h-8" />,
      title: 'Telecommunication',
      description: 'Empowering seamless connectivity with modern network solutions',
  },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Industries <span className="text-blue-600">We Serve</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Delivering specialized IT solutions across diverse sectors with industry-specific expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{industry.description}</p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-blue-50 px-8 py-4 rounded-xl border border-blue-200">
            <p className="text-gray-700">
              <span className="font-bold text-blue-600">India-Wide Reach</span> — Serving clients across the nation with localized support
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;

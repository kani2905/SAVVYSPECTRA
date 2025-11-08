import { motion } from 'framer-motion';
import { Server, Cloud, Wrench, Shield, Lightbulb, ShoppingCart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Server className="w-10 h-10" />,
      title: 'IT Infrastructure',
      description: 'Comprehensive solutions for servers, storage, networking, and virtualization to build robust IT foundations.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: 'Cloud Solutions',
      description: 'End-to-end cloud services including migration, backup, disaster recovery, and security for seamless operations.',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: 'Managed IT Services',
      description: '24×7 proactive support, monitoring, maintenance, and AMC services to keep your business running smoothly.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Cybersecurity',
      description: 'Advanced firewall solutions, threat detection, and security protocols to protect your digital assets.',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: 'IT Consulting',
      description: 'Strategic guidance for IT planning, system integration, technology audits, and digital transformation initiatives.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <ShoppingCart className="w-10 h-10" />,
      title: 'IT Product Reselling',
      description: 'Wide range of hardware and software products including laptops, routers, switches, and cloud subscriptions.',
      color: 'from-blue-600 to-blue-700',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Core Offerings</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions tailored to meet your business needs and drive digital transformation
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>

              <div className={`relative w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              <h3 className="relative text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="relative text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

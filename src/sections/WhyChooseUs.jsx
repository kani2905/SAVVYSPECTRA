import { motion } from 'framer-motion';
import { Award, Layers, Users, MapPin, ThumbsUp,Lightbulb } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Trusted Expertise',
      description: 'Years of experience delivering enterprise-grade IT solutions with proven track record across industries.',
    },
    {
      icon: <Layers className="w-10 h-10" />,
      title: 'End-to-End Capabilities',
      description: 'Complete IT lifecycle management from planning and deployment to support and optimization.',
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Multi-Vendor Expertise',
      description: 'Certified partnerships with leading technology vendors ensuring best-in-class solutions.',
    },
    {
      icon: <MapPin className="w-10 h-10" />,
      title: 'India-Wide Reach',
      description: 'Pan-India presence with local support teams to serve your business wherever you operate.',
    },
    {
      icon: <ThumbsUp className="w-10 h-10" />,
      title: 'Customer-First Approach',
      description: 'Dedicated account management and 24×7 support ensuring your success is our priority.',
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: 'Innovation-Driven Solutions',
      description: 'Constantly evolving with modern technologies to future-proof your business.',
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why <span className="text-blue-600">Choose Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Partner with a team that understands your business needs and delivers excellence at every step
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your IT Infrastructure?</h3>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve its technology goals with smart, scalable solutions
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                const offset = 80;
                const elementPosition = element.offsetTop - offset;
                window.scrollTo({
                  top: elementPosition,
                  behavior: 'smooth',
                });
              }
            }}
            className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            aria-label="Schedule a consultation"
          >
            Schedule a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

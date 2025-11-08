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
          className="text-center mb-8"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why <span className="text-[#084A8D]">Choose Us</span>
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
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"

        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"

            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#084A8D] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
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

       
      </div>
    </section>
  );
};

export default WhyChooseUs;

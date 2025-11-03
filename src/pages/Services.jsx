import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { services } from '../data/content.js';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.6, ease: 'easeOut' }
  })
};

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services – Lumenia</title>
        <meta
          name="description"
          content="Conseil, installation et maintenance : Lumenia accompagne vos projets lumineux avec une expertise suisse premium."
        />
      </Helmet>
      <section>
        <div className="container">
          <div className="services-intro">
            <h1 className="h1">Services d’excellence</h1>
            <p>
              Du premier croquis à la maintenance continue, nos équipes orchestrent votre projet lumineux avec précision. Chaque intervention est pensée pour optimiser votre confort, votre consommation et votre signature visuelle.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                className="service-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={index + 1}
              >
                <img src={service.image} alt={service.title} loading="lazy" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.article>
            ))}
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={services.length + 1}
            style={{ marginTop: '40px' }}
          >
            <Link to="/contact" className="btn btn-primary">
              Discutons de votre projet <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

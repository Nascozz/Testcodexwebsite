import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FiArrowRight, FiStar } from 'react-icons/fi';
import { values, testimonials, news } from '../data/content.js';
import { featuredProducts, productCatalog } from '../data/products.js';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.6, ease: 'easeOut' }
  })
};

export default function Home() {
  const heroProduct = productCatalog.find((product) => product.id === featuredProducts[0]);

  return (
    <>
      <Helmet>
        <title>Lumenia – Éclairage durable et design suisse</title>
        <meta
          name="description"
          content="Découvrez Lumenia, la maison suisse qui crée des luminaires design, durables et intelligents pour sublimer vos espaces."
        />
      </Helmet>

      <section className="hero">
        <div className="container hero-grid">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="hero-copy">
            <p className="eyebrow" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>
              Conçue en Suisse, pensée pour demain
            </p>
            <h1>La lumière durable qui sublime vos espaces.</h1>
            <p>
              Chez Lumenia, nous croyons qu’une lumière peut transformer un espace. Nos luminaires combinent design suisse,
              technologie LED et matériaux durables pour offrir une expérience lumineuse unique.
            </p>
            <div style={{ display: 'flex', gap: '16px', marginTop: '28px', flexWrap: 'wrap' }}>
              <Link to="/produits" className="btn btn-primary">
                Découvrir nos solutions <FiArrowRight />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Demander un devis
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="hero-media"
          >
            <img src={heroProduct.image} alt={heroProduct.name} loading="lazy" />
          </motion.div>
        </div>
      </section>

      <section>
        <div className="container">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            Nos valeurs fondatrices
          </motion.h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="value-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={index + 1}
              >
                <span style={{ fontSize: '2rem' }}>{value.icon}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="section-header"
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}
          >
            <h2>Produits phares</h2>
            <Link to="/produits" className="btn btn-secondary">
              Voir tous les produits
            </Link>
          </motion.div>
          <div className="products-grid">
            {featuredProducts.map((productId, index) => {
              const product = productCatalog.find((item) => item.id === productId);
              return (
                <motion.article
                  key={product.id}
                  className="product-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={index + 1}
                >
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <div>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                  </div>
                  <Link to={`/produits/${product.id}`} className="btn btn-primary">
                    Explorer <FiArrowRight />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            Ils nous font confiance
          </motion.h2>
          <div className="values-grid">
            {testimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.name}
                className="testimonial-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={index + 1}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <img src={testimonial.avatar} alt={testimonial.name} loading="lazy" />
                  <div>
                    <strong>{testimonial.name}</strong>
                    <p style={{ marginTop: '4px' }}>{testimonial.role}</p>
                  </div>
                </div>
                <p>“{testimonial.message}”</p>
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, idx) => (
                    <FiStar key={idx} />
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            Actualités lumineuses
          </motion.h2>
          <div className="news-grid">
            {news.map((article, index) => (
              <motion.article
                key={article.title}
                className="news-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={index + 1}
              >
                <img src={article.image} alt={article.title} loading="lazy" />
                <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>{article.date}</span>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <motion.div
            className="cta-banner"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="h2">Vous rêvez d’un éclairage sur mesure ?</h2>
            <p>Nos experts vous accompagnent de la première idée jusqu’à l’installation finale.</p>
            <Link to="/contact" className="btn btn-primary">
              Demandez un devis gratuit <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

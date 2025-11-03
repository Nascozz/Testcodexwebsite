import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { values } from '../data/content.js';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function About() {
  return (
    <>
      <Helmet>
        <title>À propos – Lumenia</title>
        <meta
          name="description"
          content="Depuis 2014, Lumenia crée des luminaires LED durables à Lausanne. Découvrez notre atelier, notre équipe et notre vision écoconçue."
        />
      </Helmet>
      <section>
        <div className="container" style={{ display: 'grid', gap: '40px' }}>
          <div style={{ display: 'grid', gap: '20px' }}>
            <h1 className="h1">Éclairer autrement depuis 2014.</h1>
            <p>
              Fondée au bord du Léman, Lumenia est née de la rencontre entre designers, ingénieurs et artisans verriers. Nous imaginons des luminaires LED qui conjuguent précision suisse, matériaux recyclés et consommation responsable.
            </p>
            <p>
              Nos ateliers fonctionnent à 100 % à l’énergie solaire et chaque composant est pensé pour être réparable. Nous réduisons les circuits logistiques, privilégions les matières locales et recyclons nos prototypes.
            </p>
            <blockquote style={{ borderLeft: '4px solid var(--color-primary)', paddingLeft: '16px', fontSize: '1.2rem' }}>
              “Nous ne vendons pas des lampes, nous façonnons des ambiances.” — Léa Fontana, fondatrice
            </blockquote>
          </div>
          <div className="about-gallery">
            <motion.img
              src="https://images.unsplash.com/photo-1514986888952-8cd320577b68?auto=format&fit=crop&w=1200&q=80"
              alt="Équipe Lumenia"
              loading="lazy"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            />
            <motion.img
              src="https://images.unsplash.com/photo-1530023367847-a683933f4177?auto=format&fit=crop&w=1200&q=80"
              alt="Atelier de conception"
              loading="lazy"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            />
            <motion.img
              src="https://images.unsplash.com/photo-1524234107056-1c1f48f64ab7?auto=format&fit=crop&w=1200&q=80"
              alt="Prototype luminaire"
              loading="lazy"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Nos engagements</h2>
          <div className="values-grid">
            {values.map((value) => (
              <motion.div
                key={value.title}
                className="value-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <span style={{ fontSize: '2rem' }}>{value.icon}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

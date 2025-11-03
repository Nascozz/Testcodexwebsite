import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiSend, FiPhone, FiMapPin, FiMail, FiMessageCircle } from 'react-icons/fi';
import { useState } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      await fetch('https://formsubmit.co/ajax/contact@lumenia.ch', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      });
      setStatus('Merci, votre message a bien été envoyé. Nous vous répondons sous 24h.');
      event.target.reset();
    } catch (error) {
      setStatus("Une erreur est survenue. Merci de réessayer ou de nous écrire à contact@lumenia.ch.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact – Lumenia</title>
        <meta
          name="description"
          content="Besoin d’un devis ou d’un accompagnement lumineux ? Contactez Lumenia à Lausanne. Réponse garantie sous 24h."
        />
      </Helmet>
      <section>
        <div className="container contact-wrapper">
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h1 className="h1">Parlons de votre lumière</h1>
            <p>Réponse garantie sous 24h.</p>
            <label>
              Nom complet
              <input type="text" name="name" placeholder="Votre nom" required />
            </label>
            <label>
              E-mail
              <input type="email" name="email" placeholder="vous@email.ch" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" placeholder="Parlez-nous de votre projet" required />
            </label>
            <label>
              Ajouter un document (optionnel)
              <input type="file" name="attachment" accept=".pdf,.png,.jpg,.jpeg" />
            </label>
            <button type="submit" className="btn btn-primary">
              Envoyer <FiSend />
            </button>
            {status && <p style={{ color: 'var(--color-accent)', fontWeight: 600 }}>{status}</p>}
          </motion.form>
          <motion.div
            className="contact-info"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
          >
            <div>
              <h2>Nos coordonnées</h2>
              <p>
                <FiMapPin /> Rue des Lumières 18, 1003 Lausanne
              </p>
              <p>
                <FiPhone /> +41 21 555 20 20
              </p>
              <p>
                <FiMail /> contact@lumenia.ch
              </p>
            </div>
            <div className="contact-map">
              <iframe
                title="Lumenia Lausanne"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.819503188769!2d6.626072676074796!3d46.51965397110481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c31552f65ff73%3A0xb6863ad3be23d0!2sLausanne%2C%20Suisse!5e0!3m2!1sfr!2sch!4v1700000000000"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
      <a className="whatsapp-button" href="https://wa.me/41215552020" target="_blank" rel="noreferrer">
        <FiMessageCircle />
      </a>
    </>
  );
}

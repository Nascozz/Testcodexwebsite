import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import ConfiguratorPreview from '../components/ConfiguratorPreview.jsx';

const typeOptions = [
  { value: 'suspension', label: 'Suspension' },
  { value: 'mural', label: 'Applique murale' },
  { value: 'lampadaire', label: 'Lampadaire' },
  { value: 'exterieur', label: 'Extérieur' }
];

const colorOptions = [
  { value: 'noir-mat', label: 'Noir mat' },
  { value: 'blanc', label: 'Blanc' },
  { value: 'dore', label: 'Doré' },
  { value: 'argente', label: 'Argenté' }
];

const temperatureOptions = [
  { value: 'chaude', label: 'Chaude 2700K' },
  { value: 'neutre', label: 'Neutre 4000K' },
  { value: 'froide', label: 'Froide 6000K' }
];

const labels = {
  type: {
    suspension: 'Suspension',
    mural: 'Applique murale',
    lampadaire: 'Lampadaire',
    exterieur: 'Extérieur'
  },
  color: {
    'noir-mat': 'Noir mat',
    blanc: 'Blanc',
    dore: 'Doré',
    argente: 'Argenté'
  },
  temperature: {
    chaude: 'Chaude 2700K',
    neutre: 'Neutre 4000K',
    froide: 'Froide 6000K'
  }
};

const optionVariants = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 }
};

export default function Configurator() {
  const [config, setConfig] = useState({
    type: 'suspension',
    color: 'noir-mat',
    temperature: 'chaude',
    intensity: 75
  });
  const [isModalOpen, setModalOpen] = useState(false);

  const summary = useMemo(
    () => [
      `Type : ${labels.type[config.type]}`,
      `Finition : ${labels.color[config.color]}`,
      `Température : ${labels.temperature[config.temperature]}`,
      `Intensité : ${config.intensity}%`
    ],
    [config]
  );

  const handleOptionChange = (field, value) => {
    setConfig((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setModalOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Configurateur Lumenia – Composez votre luminaire</title>
        <meta
          name="description"
          content="Composez un luminaire Lumenia sur-mesure : choisissez le type, la finition, la température de lumière et son intensité puis demandez un devis personnalisé."
        />
      </Helmet>
      <section className="configurator-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="configurator-intro"
          >
            <p className="eyebrow" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
              Studio Lumenia
            </p>
            <h1>Créez la lumière qui vous ressemble.</h1>
            <p>
              Personnalisez en temps réel votre luminaire en ajustant la forme, la finition et l’ambiance lumineuse. Visualisez-le en
              3D puis partagez votre configuration à nos designers pour un devis sur-mesure.
            </p>
          </motion.div>
        </div>
      </section>
      <section>
        <div className="container configurator-grid">
          <div className="configurator-preview-card">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${config.type}-${config.color}-${config.temperature}`}
                variants={optionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <ConfiguratorPreview config={config} />
              </motion.div>
            </AnimatePresence>
            <motion.div
              className="configurator-preview-info"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
            >
              <h2>Aperçu interactif</h2>
              <p>
                Tournez autour de votre luminaire virtuel et observez comment chaque choix influence la perception des matières et
                de la lumière.
              </p>
            </motion.div>
          </div>
          <motion.div
            className="configurator-panel"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
          >
            <h2>Paramètres lumineux</h2>
            <p>Affinez chaque paramètre pour atteindre l’ambiance parfaite.</p>
            <div className="configurator-options">
              <div className="configurator-option-group">
                <span>Type de luminaire</span>
                <div className="configurator-option-grid">
                  {typeOptions.map((option) => (
                    <motion.button
                      key={option.value}
                      type="button"
                      className={`configurator-chip ${config.type === option.value ? 'active' : ''}`}
                      onClick={() => handleOptionChange('type', option.value)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {option.label}
                    </motion.button>
                  ))}
                </div>
              </div>
              <div className="configurator-option-group">
                <span>Couleur et finition</span>
                <div className="configurator-option-grid">
                  {colorOptions.map((option) => (
                    <motion.button
                      key={option.value}
                      type="button"
                      className={`configurator-chip ${config.color === option.value ? 'active' : ''}`}
                      onClick={() => handleOptionChange('color', option.value)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {option.label}
                    </motion.button>
                  ))}
                </div>
              </div>
              <div className="configurator-option-group">
                <span>Température de lumière</span>
                <div className="configurator-option-grid">
                  {temperatureOptions.map((option) => (
                    <motion.button
                      key={option.value}
                      type="button"
                      className={`configurator-chip ${config.temperature === option.value ? 'active' : ''}`}
                      onClick={() => handleOptionChange('temperature', option.value)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {option.label}
                    </motion.button>
                  ))}
                </div>
              </div>
              <div className="configurator-option-group">
                <span>Intensité lumineuse ({config.intensity}%)</span>
                <motion.input
                  type="range"
                  min="1"
                  max="100"
                  value={config.intensity}
                  onChange={(event) => handleOptionChange('intensity', Number(event.target.value))}
                  whileHover={{ scale: 1.01 }}
                />
              </div>
            </div>
            <motion.div
              className="configurator-summary"
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
            >
              <h3>Résumé de votre configuration</h3>
              <ul>
                {summary.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
            <button type="button" className="btn btn-primary" onClick={() => setModalOpen(true)}>
              Demander un devis pour ce modèle
            </button>
          </motion.div>
        </div>
      </section>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div className="configurator-modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.form
              className="configurator-modal"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <div className="configurator-modal-header">
                <h3>Demande de devis personnalisée</h3>
                <button type="button" onClick={() => setModalOpen(false)} aria-label="Fermer">
                  ×
                </button>
              </div>
              <p>Nous vous recontactons sous 24h avec une proposition adaptée.</p>
              <div className="configurator-modal-summary">
                {summary.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <label>
                Nom complet
                <input type="text" name="name" placeholder="Votre nom" required />
              </label>
              <label>
                Email professionnel
                <input type="email" name="email" placeholder="vous@entreprise.com" required />
              </label>
              <label>
                Message
                <textarea name="message" rows="4" placeholder="Partagez-nous votre projet..." />
              </label>
              <div className="modal-actions">
                <button type="submit" className="btn btn-primary">
                  Envoyer ma demande
                </button>
                <button type="button" className="btn btn-secondary" onClick={() => setModalOpen(false)}>
                  Annuler
                </button>
              </div>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

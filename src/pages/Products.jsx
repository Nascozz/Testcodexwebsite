import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { productCatalog, categories } from '../data/products.js';
import { FiFilter, FiArrowRight } from 'react-icons/fi';

const filters = [
  { id: 'all', label: 'Tous' },
  { id: categories.interieur, label: 'Intérieur' },
  { id: categories.exterieur, label: 'Extérieur' },
  { id: categories.professionnel, label: 'Professionnel' }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'all') return productCatalog;
    return productCatalog.filter((product) => product.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <Helmet>
        <title>Nos produits – Lumenia</title>
        <meta
          name="description"
          content="Explorez les luminaires Lumenia pour l’intérieur, l’extérieur et les projets professionnels. Design suisse et innovation durable."
        />
      </Helmet>
      <section>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h1 className="h1">Solutions lumineuses</h1>
            <p>
              Une collection de luminaires LED écologiques pour révéler l’atmosphère de vos espaces, qu’ils soient privés ou professionnels.
            </p>
          </div>
          <div className="products-filter" style={{ marginTop: '40px' }}>
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-chip ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                <FiFilter /> {filter.label}
              </button>
            ))}
          </div>
          <AnimatePresence mode="popLayout">
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <motion.article
                  key={product.id}
                  className="product-card"
                  layout
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={cardVariants}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <div>
                    <span style={{ color: 'var(--color-accent)', fontWeight: 600, textTransform: 'capitalize' }}>
                      {product.category}
                    </span>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                  </div>
                  <Link to={`/produits/${product.id}`} className="btn btn-primary">
                    Voir détails <FiArrowRight />
                  </Link>
                </motion.article>
              ))}
            </div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}

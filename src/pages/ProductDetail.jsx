import { useMemo } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCheckCircle, FiSend } from 'react-icons/fi';
import { productCatalog } from '../data/products.js';

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = useMemo(() => productCatalog.find((item) => item.id === productId), [productId]);

  if (!product) {
    navigate('/produits');
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{`${product.name} – Lumenia`}</title>
        <meta name="description" content={product.description} />
      </Helmet>
      <section>
        <div className="container" style={{ display: 'grid', gap: '28px' }}>
          <Link to="/produits" className="btn btn-secondary" style={{ width: 'fit-content' }}>
            <FiArrowLeft /> Retour aux produits
          </Link>
          <div className="product-detail">
            <motion.img
              src={product.image}
              alt={product.name}
              loading="lazy"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
            <div>
              <h1 className="h1">{product.name}</h1>
              <p style={{ marginTop: '16px' }}>{product.detail}</p>
              <ul className="spec-list">
                {product.specs.map((spec) => (
                  <li key={spec}>
                    <FiCheckCircle style={{ color: 'var(--color-accent)', marginRight: '8px' }} />
                    {spec}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '24px', width: 'fit-content' }}>
                Obtenir un devis <FiSend />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

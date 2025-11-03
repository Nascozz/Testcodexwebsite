import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found">
      <h1 className="h1">Page introuvable</h1>
      <p>La lumière recherchée semble s’être éteinte. Retournons à l’accueil.</p>
      <Link to="/" className="btn btn-primary">
        Revenir à l’accueil
      </Link>
    </div>
  );
}

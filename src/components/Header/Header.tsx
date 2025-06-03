import { Link } from 'react-router-dom';
import './Header.css';

export function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div>
          <div className="logo">IA Escolar</div>
        </div>
        <div>
          <nav className="nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/sobre" className="nav-link">Sobre</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
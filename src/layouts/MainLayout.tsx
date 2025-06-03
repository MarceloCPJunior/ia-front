import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import './MainLayout.css';

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}

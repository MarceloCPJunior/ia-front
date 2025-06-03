import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Sobre } from './pages/Sobre.tsx';
import UploadPage from './pages/UploadPage/UploadPage';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<UploadPage />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;

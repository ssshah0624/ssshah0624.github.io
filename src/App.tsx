import { Route, Routes } from 'react-router-dom';
import AppPage from './pages/AppPage';
import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';

function App() {
  return (
    <div className="app-shell">
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apps/:slug" element={<AppPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <SiteFooter />
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import App from '../src/App';

export default function AppRouter() {
  return;
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>;
}

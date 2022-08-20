import { Routes, Route } from 'react-router-dom';

import './styles/main.module.scss';
import styles from './styles/main.module.scss';

import { MdOutlineShoppingCart } from 'react-icons/md';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Shop } from './pages/Shop';
import { Header } from './components/Header';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;

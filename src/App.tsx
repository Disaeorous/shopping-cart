import { Routes, Route } from 'react-router-dom';

import './styles/main.module.scss';
import styles from './styles/main.module.scss';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Store } from './pages/Store';
import { Navigation as Nav } from './components/Navigation';

function App() {
  return (
    <div className={styles.container}>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/store' element={<Store />} />
      </Routes>
    </div>
  );
}

export default App;

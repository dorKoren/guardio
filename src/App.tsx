import { Routes, Route } from 'react-router-dom';
import DarkMode from './ui/dark-mode';
import ItemsArchive from './screens/items-archive';
import SingleItem from './screens/single-item';
import Wrapper from './ui/wrapper';
import './App.css';

const App = () => (
  <Wrapper>
    <DarkMode />

    <Routes>
      <Route path="/" element={<ItemsArchive />} />
      <Route path="/:itemId" element={<SingleItem />} />
    </Routes>
  </Wrapper>
);

export default App;

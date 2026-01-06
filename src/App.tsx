import './App.scss';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Main } from './components/Main/Main';
import { Dropdown } from './components/Dropdown/Dropdown';

function App() {
  return (
    <>
      <Dropdown />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;

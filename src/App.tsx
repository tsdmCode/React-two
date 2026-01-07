import './App.scss';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Main } from './components/Main/Main';
import { Dropdown } from './components/Dropdown/Dropdown';
import { Greeter } from './components/Greeter/Greeter';
import { DynamicHeader } from './components/DynamicHeader/DynamicHeader';
import { List } from './components/List/List';

function App() {
  return (
    <>
      <Dropdown />
      <Header />
      <DynamicHeader headerText="Props er cool" />
      <Main />
      <Greeter name="Mogens" />
      <List listHeader="Livretter" listItems={['Risengrød', 'Tortillas', 'Mixkebab', 'Durum', 'Pita']} />
      <List
        listHeader="Film"
        listItems={['Fear and Loathing in Las Vegas', 'Chungking Express', 'Jurassic Park', "Adam's Æbler", 'Snatch']}
      />
      <Footer />
    </>
  );
}

export default App;

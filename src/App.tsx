import './App.scss';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Main } from './components/Main/Main';
import { Dropdown } from './components/Dropdown/Dropdown';
import { Greeter } from './components/Greeter/Greeter';
import { DynamicHeader } from './components/DynamicHeader/DynamicHeader';
import { List } from './components/List/List';
import { Button } from './components/Button/Button';

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
      <Button action={() => alert('Hej 1')} size="small" theme="light" text="Prøv den her" />
      <Button action={() => alert('Hej 2')} size="medium" theme="light" text="Nej prøv mig" />
      <Button action={() => alert('Hej 3')} size="large" theme="dark" text="Jeg er størst og bedst" />
      <Footer />
    </>
  );
}

export default App;

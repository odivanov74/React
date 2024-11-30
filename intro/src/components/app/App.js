
import './App.css';
import Header from '../Header/header';
import Nav from '../nav/Nav'
import Article from '../article/Article';
import Power from '../math/power/Power';
import Factorial from '../math/factorial/Factorial';
import Fibonachi from '../math/fibonachi/Fibonachi';
import Footer from '../footer/Footer';
import data from '../article/db.json';

function App() {

  let nav = 
  {
    "Главная"   : "/index",
    "Новости"   : "/news",
    "Магазин"   : "/shop",
    "О нас"     : "/about",
    "Контакты"  : "/contacts",
  }

  let db = data;

  return (
    <div className="App">
      <Header title="Hello React" description="This is my first React App. This phrase passed using parameters over 'PROPS'"/>
      <Nav navigation={nav}/>
      <Power a={2} n={8}/>
      <Factorial a={10}/>
      <Fibonachi a={7}/>
      <Article db={db}/>      
      <Footer/>
    </div>
  );
}

export default App;

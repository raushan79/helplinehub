
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Search from './components/Search';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <Home/>
      <Test/>
      <Footer/>
    </div>
  );
}

export default App;

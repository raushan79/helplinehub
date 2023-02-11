
import { Navbar } from 'react-bootstrap';
import AddHelplineNumberForm from './components/AddHelplineNumberForm';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchBar from './components/Searchbar';


function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      {/* <SearchBar/>
      <AddHelplineNumberForm/> */}
    
      <Footer/>
    </div>
  );
}

export default App;

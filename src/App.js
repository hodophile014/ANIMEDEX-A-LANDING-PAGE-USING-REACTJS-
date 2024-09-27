import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import HeroSection from './Components/HeroSection';
import Quotes from './Components/Quotes';
import MemberShip from './Components/MemberShip';
import Pricing from './Components/Pricing';
import Footer from './Components/Footer';
import Characters from './Components/Characters';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <div className='max-w-7xl mx-auto pt-20 px-6'>
      <HeroSection/>
      <Quotes/>
      <Characters/>
      <MemberShip/>
      <Pricing/>
      <Footer/>
     </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Header from './components/header';
import Homescreen1 from './components/homescreen1';
import Our_values from './components/our_values';
import MyServices from './components/my_services';
import Testimonials from './components/testimonials';
import Clientsslider from './components/clientsslider';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
     <NavBar /> 
     <Header /> 
     <Homescreen1 /> 
     <Our_values /> 
     <MyServices /> 
     <Testimonials /> 
     <Clientsslider /> 
     <Footer />
       </div>
  );
}

export default App;

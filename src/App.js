import './App.css';
import Blog from './Pages/Blog/Blog';
import Counts from './Pages/Counts/Counts';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import News from './Pages/News/News';
import Service from './Pages/Service/Service';
import Team from './Pages/Team/Team';

function App() {
  return (
    <div className="App">
      <Home/>
      <Service/>
      <Blog/>
      <Team/>
      <Counts/>
      <News/>
      <Footer/>
      
      
    </div>
  );
}

export default App;

import './App.css';
import Header from './component/layout/header/Header.js'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Footer from './component/layout/footer/Footer.js'
import Home from './component/home/Home.js'
function App() {
  return <Router>
     <Header></Header>
     <Routes>
     <Route exact path='/' Component={Home}></Route>
     </Routes>
     <Footer></Footer>
  </Router>
 
}

export default App;

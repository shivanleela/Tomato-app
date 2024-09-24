import Navbar from "./component/Navbar/Navbar/Navbar";
import Card from "./pages/Card/Card";
import Home from "./pages/Home/Home";
import Placeorder from "./pages/Placeorder/Placeorder";
import {Routes,Route} from 'react-router-dom'
import Footer from "./component/Navbar/Fooder/Footer";
// import { useState } from "react";
// import Loginpopup from "./component/Navbar/Loginpopup/Loginpopup";

function App() {
  // const[showLogin,setshowLogin]=useState(false)
  return(
  <>
  {/* {showLogin?<Loginpopup setshowLogin={setshowLogin}/>:<></>} */}
  {/* showLogin={showLogin} setshowLogin={setshowLogin} */}
  <div className="app">
    <Navbar ></Navbar>
    <Routes>
    <Route path="/home" element={<Home></Home>}></Route>
    <Route path="/card" element={<Card></Card>}></Route>
    <Route path="/placeorder" element={<Placeorder></Placeorder>}></Route>
  </Routes>
  </div>
  <Home/>
  <Footer></Footer>
  </>
  )
}


export default App;

import { BrowserRouter,Route,Routes } from "react-router-dom";
import {Form,Home,Navbar,Footer,Segno,Makesegno,Erebu,Hamus,Arb,Kidame,Ehud,Yewedesewa}from './index.jsx'




function App() {
   
  return (

   
      <BrowserRouter>
       <Navbar/>
    <Routes>
   
      <Route path="/" element={<Home/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="/segno" element={<Segno/>}/>
      <Route path="/mak" element={<Makesegno/>}/>
      <Route path="/erebu" element={<Erebu/>}/>
      <Route path="/hamus" element={<Hamus/>}/>
      <Route path="/arb" element={<Arb/>}/>
      <Route path="/kidame" element={<Kidame/>}/>
      <Route path="/ehud" element={<Ehud/>}/>
      <Route path="/yewe" element={<Yewedesewa/>}/>
</Routes>
    <Footer/>
    </BrowserRouter>

    
    
  );
}

export default App;

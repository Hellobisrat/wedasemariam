import { BrowserRouter,Route,Routes } from "react-router-dom";
import {Form,Home,Navbar,Footer,Segno,Makesegno,Erebu,Hamus,Arb,Kidame,Ehud,Yewedesewa, Yezeweter}from './index.jsx'



function App() {
   
  return (
    <div className="min-h-dvh bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-[env(safe-area-inset-top)]">
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
      <Route path="/yezeweter" element={<Yezeweter/>}/>
    </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
    
  );
}

export default App;

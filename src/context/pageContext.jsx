import {  createContext } from 'react';
import segno from '../pages/segno.jsx';
import makesegno from '../pages/maksegno.jsx';
import erebu from '../pages/erebu.jsx';
import hamus from '../pages/hamus.jsx';
import arb from '../pages/arb.jsx';
import kidame from '../pages/kidame.jsx';
import ehud from '../pages/ehud.jsx';

const pageContext = createContext();

export const PageProvider = ({children})=>{

  return(
    <pageContext.Provider value={{segno,makesegno,erebu,hamus,arb,kidame,ehud}}>
      {children}
    </pageContext.Provider>
  )
} 

export default pageContext;
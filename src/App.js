import React from 'react';
import {Routes , Route} from 'react-router-dom';
import Main from './Main-Page';
import About from './about page';
import Contact from './contact';
import Next from './next-page';
import Portfolio from './Portfolio';
import Readmore from './Readmore';
import Error from './Error';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about/' element={<Readmore />} />
        {/* <Route path='/Portfolio' element={<Portfolio/>}/> */}
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/next/:data/:name" element={<Next/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/readmore' element={<Readmore/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;

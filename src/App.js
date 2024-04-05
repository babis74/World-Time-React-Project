// src/App.js

import React from 'react';
import ThirdNavbar from './components/ThirdNavbar';
import WorldTime from './components/WorldTime';
import './App.css';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
     
         <ThirdNavbar />
    
      <header className="App-header">
        <WorldTime />
      </header>
      <main>
        {/* Other components/content */}
      </main>
      <footer>
      <Footer />
        {/* Footer content */}
      </footer>
       <div>
   
    </div>
    </div>
  );
}

export default App;

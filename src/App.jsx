import { useState } from 'react'
import Header from './Header.jsx'

function App() {


  return (
    <>
      <Header />
      <div class="relative ...">
        <img src="https://www.bellaandduke.com/wp-content/uploads/2024/10/Bella-Duke-Dog-Hero-d.webp" alt="" className="w-full" />
        <div className="flex justify-center w-5/6 h-20 font-mono absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 class="font-serif text-8xl text-blue-100">Welcome to the Pets Boutique</h1>
        </div>
      </div>
    </>
  );
}

export default App

import Notes from "./pages/Notes"
import React from 'react'
import Sidebar from './pages/Sidebar'

function App() {
  return (
    <div >
    <main className="py-3">
      <container>
        <h1>Welcome</h1>
        <Notes className="row"/>
        <Sidebar/>
      </container>
    </main>
    </div>
  );
}

export default App;

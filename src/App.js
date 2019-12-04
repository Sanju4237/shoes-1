import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="paragraph">
         Walmart Shoes Smart Container
        </p>
        <p><a href="https://w3.ibm.com/bluepages/profile.html?uid=04644E744" target="_blank">Sashidhar Kundanamadugu(sashik12@in.ibm.com) Team Captain</a></p>
      </header>
      <div className="teammembers">
        <table id="customers">
          <tr>
            <td><a href="https://w3.ibm.com/bluepages/profile.html?uid=048565744" target="_blank">Srinivasulu Konkala(srinivasulu.konkala@in.ibm.com)</a></td>
            <td><a href="https://w3.ibm.com/bluepages/profile.html?uid=926276744" target="_blank">Supratim Maiti(supratim.Maiti@in.ibm.com)</a></td>
          </tr>
          <tr>
            <td><a href="https://w3.ibm.com/bluepages/profile.html?uid=04869Z744" target="_blank">Dipak Dutta(dirdutta@in.ibm.com)</a></td>
            <td><a href="https://w3.ibm.com/bluepages/profile.html?uid=0591B4744" target="_blank">Sanjay Tiwari(sanjayti@in.ibm.com)</a></td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import logo from '../../../src/images/logo.svg';
import './home.css';
import { Link } from "react-router";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="paragraph">
         Walmart Shoes Smart Container
        </p>
        <p><a rel="Sashidhar Kundanamadugu" href="https://w3.ibm.com/bluepages/profile.html?uid=04644E744" target="_blank">Sashidhar Kundanamadugu(sashik12@in.ibm.com) Team Captain</a></p>
        <div className="teammembers">
          <table id="customers">
            <tbody>
                <tr>
                    <td><a rel="Srinivasulu Konkala" href="https://w3.ibm.com/bluepages/profile.html?uid=048565744" target="_blank">Srinivasulu Konkala(srinivasulu.konkala@in.ibm.com)</a></td>
                    <td><a rel="Supratim Maiti" href="https://w3.ibm.com/bluepages/profile.html?uid=926276744" target="_blank">Supratim Maiti(supratim.Maiti@in.ibm.com)</a></td>
                </tr>
                <tr>
                    <td><a rel="Dipak Dutta" href="https://w3.ibm.com/bluepages/profile.html?uid=04869Z744" target="_blank">Dipak Dutta(dirdutta@in.ibm.com)</a></td>
                    <td><a rel="Sanjay Tiwari" href="https://w3.ibm.com/bluepages/profile.html?uid=0591B4744" target="_blank">Sanjay Tiwari(sanjayti@in.ibm.com)</a></td>
                </tr>
            </tbody>
          </table>
        </div>
        <p><Link to={"/product"}>PRODUCT PAGE</Link></p>
      </header>
    </div>
  );
}

export default Home;

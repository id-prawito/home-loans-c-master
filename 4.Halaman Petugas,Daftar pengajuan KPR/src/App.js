import { AiFillPrinter } from 'react-icons/ai'//print
import reactDom from 'react-dom';
import React from 'react';
import DaftarPengajuan from './Daftar';
import NavSide from './SideNav';



function App() {
  return (
    <>
    <NavSide />
    <div className="main">
      <h2 style={{textAlign: 'center'}}> Daftar Pengajuan KPR</h2>
      <div className="aksi">
        <form className="p-0 flex-fill bd-highlight">
          <input  type="cari" name="search" placeholder="Search.." />
        </form>
        <button type="button" className="btn btn-warning btn-group-sm">Download Laporan <AiFillPrinter /></button>
      </div><br/>
      <div>
        <DaftarPengajuan />
      </div>

    </div>
    </>
  );

}

// function DlButton() {
//   return <button className=""></button>
// }

export default App;

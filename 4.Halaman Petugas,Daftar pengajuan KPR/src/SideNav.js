
import { FaSignOutAlt } from 'react-icons/fa'//Signout
import { FaHome } from 'react-icons/fa'//beranda
import { FaTable } from 'react-icons/fa'//daftar
import { FaBars } from 'react-icons/fa'//icon bar
import React, { useState } from 'react';
import { render } from '@testing-library/react';


function NavSide(props)
{
    const [state,ubahState] = useState(true);
    const toggleClass = () => {
        ubahState(!state);
      };
    return (
        <>
            <div className="nm">
                <h2>Bank BRI</h2>
                <button type="button"
                    onClick={toggleClass}
                    className="btn"
                    style={{ backgroundColor: '#1e68a9',color: 'white' }}> <FaBars />
                </button>
            </div>
             <div className={state? 'sidebar' : null}>
                <React.Fragment>
                    <li > <a href="#"> <FaHome /> Beranda </a></li>
                    <li> <a href="#"> <FaTable /> Daftar Pengajuan </a></li>
                    <li> <a href="#"> <FaSignOutAlt /> Sign Out </a></li>
                </React.Fragment>

            </div>
            {/* {state === true  ? this.li : null} */}
            
        </>

    );
}
export default NavSide

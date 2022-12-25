import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <ul>
            <li><Link to={'/home'}>Home</Link></li>
            <li><Link to={'/ApproveKeuangan'}>Approve Keuangan</Link></li>
            <li><Link to={'/BuatAkun'}>Buat Akun</Link></li>
            <li><Link to={'/BuatPerintah'}>Buat Perintah</Link></li>
            <li><Link to={'/Berita'}>Berita</Link></li>
            <li><Link to={'/'}>Login</Link></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;

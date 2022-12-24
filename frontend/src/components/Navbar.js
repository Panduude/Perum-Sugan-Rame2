import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <ul>
            <li>Home</li>
            <li>Approve Keuangan</li>
            <li>Buat Akun</li>
            <li>Buat Perintah</li>
        </ul>
      </div>
    );
  }
}

export default Navbar;

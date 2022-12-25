import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListBerita = () => {
  const [beritas, setBerita] = useState([]);

  useEffect(() => {
    getBeritas();
  }, []);

  const getBeritas = async () => {
    const response = await axios.get("http://localhost:5000/beritas");
    setBerita(response.data);
  };

  return (
    <><div className="container">
      {beritas.map((berita, index) => (
        <div className="card-body">
          <img className="card-img" src=""></img>
          <p>
            {berita.desc_berita}
          </p>
        </div>
      ))}
    </div><div>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {beritas.map((berita) => (
              <tr key={berita.id}>
                <td>{berita + 1}</td>
                <td>{berita.title_berita}</td>
                <td>{berita.desc_berita}</td>
              </tr>
            ))}

          </tbody>
        </table>
      </div></>
  );
};

export default ListBerita;

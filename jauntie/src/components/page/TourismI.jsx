import '../layouts/css/turism_intern.css'

import axios from "axios";
import { useEffect, useState } from "react";

const TourismI = () => {
  const [error, setError] = useState(null);
  const [itourisms, setItourisms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/turismuri-internes?populate=Poza")
      .then(({ data }) => setItourisms(data.data))
      .catch((error) => setError(error));
  }, []);

  const handleSearch = () => {
    if (searchTerm === "") {
      // If search term is empty, show all items
      axios
        .get("http://localhost:1337/api/turismuri-internes?populate=Poza")
        .then(({ data }) => setItourisms(data.data))
        .catch((error) => setError(error));
    } else {
      // Filter itourisms based on search term
      const filteredItourisms = itourisms.filter(({ attributes }) =>
        attributes.Denumire.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setItourisms(filteredItourisms);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  if (error) {
    // Print errors if any
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <>
      <section id="tiheader">
        <header>
          <p>
            Turismul din Moldova ce ți-l poate oferi <span>Jauntie</span>
          </p>
          <hr />
        </header>
      </section>
      <section id="searchbar">
        <div id="divSB">
          <input
            type="text"
            placeholder="Găsește turismul potrivit ție"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button type="submit" name="button" onClick={handleSearch}>
            Caută
          </button>
        </div>
      </section>
      <section id="timain">
        {itourisms.map(({ id, attributes }) => (
          <a href="#" id="a-container" key={id}>
            <div className="div-container">
              <img
                id="a-img"
                src={`http://localhost:1337${attributes.Poza.data[0].attributes.url}`}
                alt=""
              />
              <p>{attributes.Denumire}</p>
            </div>
          </a>
        ))}
      </section>
    </>
  );
};

export default TourismI;

import '../layouts/css/turism_extern.css'
import axios from "axios";
import { useEffect, useState } from "react";

const TourismE = () => {
  const [error, setError] = useState(null);
  const [tours, setTours] = useState([]);
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch tours
    axios
      .get("http://localhost:5000/tours")
      .then(({ data }) => {
        // Filter tours to include only those with IDs up to 22
        const filteredTours = data.filter((tour) => tour.id <= 22);
        setTours(filteredTours);
      })
      .catch((error) => setError(error));
  
    // Fetch images
    axios
      .get("http://localhost:5000/")
      .then(({ data }) => setImages(data))
      .catch((error) => setError(error));
  }, []);

  const handleSearch = () => {
    if (searchTerm === "") {
      // If search term is empty, show all items
      axios
        .get("http://localhost:5000/tours")
        .then(({ data }) => setTours(data))
        .catch((error) => setError(error));
    } else {
      // Filter tours based on search term
      const filteredTours = tours.filter(({ title }) =>
        title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setTours(filteredTours);
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
      <section id="teheader">
        <header>
          <p>Călătoriile internaționale ce le poate oferi <span>Jauntie</span></p>
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

      <section id="temain">
        {tours.map(({ id, title }) => {
          // Find the corresponding image for each tour
          const tourImage = images.find((img) => img.tour_id === id);

          return (
            <a href="#" id="a-container" key={id}>
              <div className="div-container">
                {tourImage && <img id='a-img' src={tourImage.imgurl} alt="" />}
                <p>{title}</p>
              </div>
            </a>
          );
        })}
      </section>
    </>
  );
};

export default TourismE;
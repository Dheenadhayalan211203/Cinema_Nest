import axios from "axios";
import { useEffect, useState } from "react";
import './Allevents.css'
import Header from "../Header";


const Allevents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await axios.get("https://cinenest-server.onrender.com/all-events");
        setEvents(response.data);
        console.log(response.data);
         const eve=response.data.filter(e=>e.category==='movie')
         setEvents(eve)
      } catch (e) {
        console.log("Error in fetching the events: " + e);
      }
    }

    fetchEvents();
  }, []);

  return (
     
    <>
    <Header/>
     
       <section className="container-alleve">
        <h3>Recently Released</h3>
       <div className="eventcard">
        {events.map((data) => (
          <div  className="evcards" key={data._id}>  
            <img src={data.image} alt={data.title}   />
            <div className="rating">
              <p>{data.rating}</p>
            </div>
            <h2>{data.title}</h2>

            <div className="book">
              <h2>Book Ticket</h2>
            </div>

          </div>
        ))}
      </div>
       </section>
    </>
  );
};

export default Allevents;

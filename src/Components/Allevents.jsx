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
      } catch (e) {
        console.log("Error in fetching the events: " + e);
      }
    }

    fetchEvents();
  }, []);

  return (
     
    <>
    <Header/>
    <br></br>
       <section className="container">
       <div className="eventcard">
        {events.map((data) => (
          <div  className="evcards" key={data._id}> {/* Wrap in a parent div */}
            <img src={data.image} alt={data.title}   />
            <h2>{data.title}</h2>
            <p><i> {data.description}</i></p>
            <p> <span style={{color:'red'}}> <b>Show time</b></span> {data.time}</p>
            
             <button>Book</button>

          </div>
        ))}
      </div>
       </section>
    </>
  );
};

export default Allevents;

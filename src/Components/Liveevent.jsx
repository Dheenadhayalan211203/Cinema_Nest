import { useState, useEffect } from "react";
import "./Liveevent.css";
import axios from "axios";

const Liveevent = () => {
  const [live, setLive] = useState([]);

  useEffect(() => {
    async function fetchLiveEvents() {
      try {
        const response = await axios.get(
          "https://cinenest-server.onrender.com/all-events"
        );
        const liveEvents = response.data.filter(
          (event) => event.category === "live"
        );
        setLive(liveEvents);
        console.log(liveEvents);
      } catch (e) {
        console.log("Error in fetching live events: " + e);
      }
    }

    fetchLiveEvents();
  }, []);

  return (
    <>
       <section className="livwwhole">
       <div className="livhead">
        <h3>Live Events</h3>
      </div>
      <section className="container">
        {live.map((event) => (
          <div key={event._id} className="event-card">
            <div className="image">
              <img src={event.image} alt={event.title} />
            </div>
            <div className="info">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              {event.category === "live" ? (
                <p style={{ color: "red", fontWeight: "bold" }}>Live</p>
              ) : (
                <p>Recorded</p>
              )}
            </div>
          </div>
        ))}
      </section>
       </section>
    </>
  );
};

export default Liveevent;

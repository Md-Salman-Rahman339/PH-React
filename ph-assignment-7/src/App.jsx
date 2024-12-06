import { useState, useEffect } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Cricketers from "./components/Cricketers/Cricketers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import Footer from "./components/Footer/Footer";

function App() {
  const [coin, setCoin] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [players, setPlayers] = useState([]);
  const [showAvailable, setShowAvailable] = useState(true); 
  

  useEffect(() => {
    fetch("crick.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch player data");
        }
        return response.json();
      })
      .then((data) => setPlayers(data))
      .catch((error) => console.error(error));
  }, []);

  const addCoin = () => {
    setCoin(coin + 6000000);
  };

  const handleChoosePlayer = (player) => {
    const maxPlayer=6;
    if(selectedPlayers.length>=maxPlayer){
      alert("You cannot select more than 6 players")
      
      return;
  }

    if(selectedPlayers.some((p)=>p.Name===player.Name)){
      alert("Player Has already been selected")
      return;
    }
    if (coin < player.Price) {
      alert("Not enough coins to choose this player.");
    } else {
      setCoin(coin - player.Price);
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  const handleRemovePlayer = (player) => {
    setCoin(coin + player.Price);
    setSelectedPlayers(selectedPlayers.filter((p) => p.Name !== player.Name));
  };

  return (
    <div>
      <Navbar coin={coin} />
      <div className="flex justify-between items-center mb-4">
        <Banner addCoin={addCoin} />
       
      </div>
      <div className="flex space-x-4 justify-end mb-4">
          <button
            className={`btn ${showAvailable ? "bg-lime-400" : "btn-secondary"}`} 
            onClick={() => setShowAvailable(true)}
          >
            Available
          </button>
          <button
            className={`btn ${!showAvailable ? "bg-white-200" : "btn-secondary"}`}
            onClick={() => setShowAvailable(false)}
          >
            Selected
          </button>
        </div>

      {showAvailable ? (
        <Cricketers players={players} handleChoosePlayer={handleChoosePlayer} />
      ) : (
        <SelectedPlayers
        setShowAvailable={setShowAvailable}
          players={players}
          showAvailable={showAvailable}
          selectedPlayers={selectedPlayers}
          handleRemovePlayer={handleRemovePlayer}
        />
      )}
       <Footer></Footer>
    </div>
   
  );
}

export default App;

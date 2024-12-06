/* eslint-disable react/prop-types */
import React, { useState } from "react";

const SelectedPlayers = ({ selectedPlayers, handleRemovePlayer,setShowAvailable }) =>
    
    { 
        const maxPlayer=6;
        

        const handleplayers=()=>{
            if(selectedPlayers.length>=maxPlayer){
                alert("You cannot select more than 6 players")
                
                return;
            }
            else{
                setShowAvailable(true)
                
            }

        }
  return (
    <>
    <h1  className="justify-start text-start font-bold">Selected Player({selectedPlayers.length}/{maxPlayer})</h1>
    <div className="mt-4">
      <h2 className="text-xl font-bold">Selected Players</h2>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {selectedPlayers.map((player) => (
          <div
            key={player.Name}
            className="p-4 border border-gray-200 rounded-lg shadow-md flex items-center"
          >
            <img
              src={player.Image}
              alt={player.Name}
              className="w-20 h-20 box-border rounded-md mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">{player.Name}</h3>
              <p>Role: {player.PlayerType}</p>
              <p>Price: {player.Price}</p>
            </div>
            <button
              className="btn btn-error ml-auto text-sm px-4 py-2 rounded"
              onClick={() => handleRemovePlayer(player)}
            >
              Remove
            </button>
          </div>
        ))}
       <button
            className="btn bg-lime-400 ml-auto text-sm px-4 py-2 rounded" 
            onClick={handleplayers} 
          >
           Add More Players
          </button>
      </div>
    </div>
    </>
  );
};

export default SelectedPlayers;

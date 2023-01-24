import React from "react";
import BotCard from "./BotCard";

function BotArmy({ bots, removeBot, deleteBot }) {
  
  const armyItem = bots.map((bot) => {
    return (
      <BotCard
        key={bot.id}
        bot={bot}
        clickEvent={removeBot}
        deleteBot={deleteBot}
      />
    );
  });

  return (
    <div className="ui violet inverted segment">
        
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          {armyItem}
        </div>
      </div>
    </div>
  );
}

export default BotArmy;

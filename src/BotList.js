import React from "react";
import BotCard from "./BotCard";

function BotList({ bots, enlistBot, deleteBot }) {
  
  const botItem = bots.map((bot) => {
    return (
      <BotCard
        key={bot.id}
        bot={bot}
        clickEvent={enlistBot}
        deleteBot={deleteBot}
      />
    );
  });
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {botItem}
      </div>
    </div>
  );
}

export default BotList;
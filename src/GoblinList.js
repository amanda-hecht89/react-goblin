import React from 'react';
import Goblin from './Goblin';

export default function GoblinList(goblin) {
  return (
    <div className='goblin-list quarter'>
      visibleGoblins.map((goblin, i) => <div
      onClick={() => handleDeleteGoblin(goblin.goblin)}
      key={goblin.goblin + i}
      className='square'
      style={{background: goblin.hp}}>
    <h2>{goblin.goblin}</h2>
    <p>{goblin.hp}</p>
   
      {/* map over your goblins and render out a Goblin component for each goblin. You've seen this before. The only difference here is that you need to pass handleDeleteGoblin (a prop that is a function), as well */}
    </div>)
  );
  </div>
}

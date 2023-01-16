import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  // throw new Error('ERRROOOORRR');
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
          );
        })
      }
    </div>
  );
}

CardList.whyDidYouRender = true;
export default CardList;

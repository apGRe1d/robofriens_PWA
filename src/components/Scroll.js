import React from 'react';

const Scroll = (props) => {
  let height = '800px';
  if (screen.height > 1080) {
    height = '1000px';
  }
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: height}}>
      {props.children}
    </div>
  );
};

export default Scroll;

import React from 'react';

// class Card extends React.PureComponent {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     const {id, name, email} = this.props;
//     return (
//       <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
//         <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
//         <div>
//           <h2>{name}</h2>
//           <p>{email}</p>
//         </div>
//       </div>
//     );
//   }
// }

const Card = ({ name, email, id }) => {
  let imageSide = '200';
  if (screen.width > 1920) {
    imageSide = '400';
  }
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}.avif?size=${imageSide}x${imageSide}`} width={`${imageSide}px`} height={`${imageSide}px`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;

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
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}.avif?size=200x200`} width='200px' height='200px' />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;

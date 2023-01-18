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
      <picture>
        <source
          type="image/avif"
          srcSet={`
            https://robohash.org/${id}.avif 200w,
            https://robohash.org/${id}.avif 300w,
            https://robohash.org/${id}.avif 400w,
          `}
          width={'200px'}
          height={'200px'}
        />
        <img
          className={'robot-image'}
          alt='robots'
        />
      </picture>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;

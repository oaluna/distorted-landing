import { useState } from 'react';
import './GaiaSystem.css';
import artistsData from '../Artists/artistsData';
import worksData from '../../worksData';
import PastelFalco from '../PastelFlaco/PastelFalco';

import { millionRounder, toggleBackgroundFix } from '../Artists/functions.js';

const GaiaSystem = (props) => (
  <div className='gaiaContainer'>
    <div className='gaiaContent'>
      <GetData data={props.data} />
    </div>
  </div>
);

const GetData = (props) => {
  if (props.data === 'artists') {
    const artists = artistsData.map((item) => (
      <GaiaBox key={item.id} item={item} />
    ));
    return artists;
  } else if (props.data === 'works') {
    const artists = worksData.map((item) => (
      <GaiaBox key={item.id} item={item} />
    ));
    return artists;
  }
};

/*---  Clas for displaying single artists  ---*/

const GaiaBox = (props) => {
  const [gaiaExtraOpen, setGaiaExtraOpen] = useState(false);

  const openGaiaExtra = () => {
    if (gaiaExtraOpen !== true) {
      return setGaiaExtraOpen(true);
    } else {
      return null;
    }
  };
  const closeGaiaExtra = () => {
    if (gaiaExtraOpen === true) {
      setGaiaExtraOpen(false);
    }
  };

  const urlImg = {
    backgroundImage: 'url(' + props.item.image1.url + ')'
  };

  return (
    <div className='gaiaBox' style={urlImg} onClick={openGaiaExtra}>
      <div className='gaiaBoxTop'>
        <h3>{props.item.card.title}</h3>
      </div>

      <BoxBottom item={props.item} />

      {gaiaExtraOpen ? (
        <GaiaExtra item={props.item} closeGaiaExtra={closeGaiaExtra} />
      ) : null}
    </div>
  );
};

function BoxBottom(props) {
  if (props.item.logo.url !== null) {
    return (
      <div className='gaiaBoxBottom'>
        <img
          className='gaiaBoxLogo'
          src={props.item.logo.url}
          alt='Gaia Logo'
        />
      </div>
    );
  } else {
    if (props.item.card.number != null) {
      return (
        <div className='gaiaBoxBottom'>
          <h4> {props.item.card.text} </h4>
          <h2> {millionRounder(props.item.card.number)} </h2>
        </div>
      );
    } else {
      return <h2>Oops!</h2>;
    }
  }
}

/*---  Clas for displaying extra info about artist  ---*/

const GaiaExtra = (props) => {
  return (
    <div className='gaiaExtraContainer'>
      <div className='gaiaExtraContent'>
        <PastelFalco item={props.item} closeGaiaExtra={props.closeGaiaExtra} />
      </div>
    </div>
  );
};

export default GaiaSystem;

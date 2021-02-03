import { useState } from 'react';
import artistsData from './artistsData.js';
import './Artists.css';

import {
  millionRounder,
  socialIconSelector,
  toggleBackgroundFix
} from './functions.js';

const Artists = () => {
  const artists = artistsData.map((item) => (
    <ArtistBox key={item.id} item={item} />
  ));

  return <div className='artistsContainer'>{artists}</div>;
};

const ArtistBox = (props) => {
  const [open, setOpen] = useState(false);

  const openBox = () => {
    setOpen(true);
    toggleBackgroundFix(true);
  };

  const closeBox = () => {
    setOpen(false);
    toggleBackgroundFix(false);
  };

  const reach = millionRounder(props.item.totalReach);
  const urlImg = {
    backgroundImage: 'url(' + props.item.urlBanner + ')'
  };

  return (
    <div className='artist'>
      <div className='artistCard' style={urlImg} onClick={openBox} />
      <div className='artistName'>
        <h3>{props.item.name}</h3>
        <h3>{props.item.surname}</h3>
      </div>
      <div className='artistInfo'>
        <p>Total followers:</p>
        <h2>{reach}</h2>
        <p>Socials:</p>
        <div className='artistInfoSocials'>
          <SocialIconPrinter tag={props.item.tagYoutube} social='Youtube' />
          <SocialIconPrinter tag={props.item.tagInstagram} social='Instagram' />
          <SocialIconPrinter tag={props.item.tagFacebook} social='Facebook' />
          <SocialIconPrinter tag={props.item.tagTikTok} social='TikTok' />
          <SocialIconPrinter tag={props.item.tagTwitter} social='Twitter' />
        </div>
      </div>
      <ArtistPage open={open} item={props.item} closeBox={closeBox} />
    </div>
  );
};

const ArtistPage = (props) => {
  const [isOpen, setIsOpen] = useState(props.open);
  const handleClose = () => {
    return props.closeBox();
  };
  return (
    <div className={isOpen ? 'artistPageOpen' : 'artistPage'}>
      <div className='artistPageTopbar'>
        <h3 className='returnButton' onClick={handleClose}>
          +
        </h3>
      </div>
      <div className='artistPageContent'>
        <div className='artistPageIntro'>
          <div className='artistPageImage'>
            <img src={props.item.urlBanner} alt='banner of urls' />
          </div>
          <div className='artistPageSnippet'>
            <div className='artistPageName'>
              <h3>{props.item.name}</h3>
              <h3>{props.item.surname}</h3>
            </div>
            <div className='artistPageTags'>
              <h4 className='Tag'>Fashion</h4>
              <h4 className='Tag'>Vlogs</h4>
            </div>
            <div className='artistPageDescription'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        <div className='artistPageTab'>
          <div className='dragger' />
          <ArtistPageTabs item={props.item} />
        </div>
      </div>
    </div>
  );
};

function SocialIconPrinter(props) {
  if (props.tag !== 'none') {
    return (
      <img
        className='socialIcon'
        src={socialIconSelector(props.social)}
        alt='social media icon'
      />
    );
  } else {
    return null;
  }
}

function SocialBoxesPrinter(props) {
  // const colors = {
  //   backgroundColor: socialButtonColorSelector(props.social),
  //   boxShadow: "1px 1px 8px 1px " + socialButtonColorSelector(props.social)
  // }

  if (props.name !== 'none') {
    return (
      <a href='#social' className='socialBox'>
        <div className='socialIconBox'>
          <img className='socialIcon' src={props} alt='social media icon' />
        </div>
        <div className='socialButton'>
          <h2>732K</h2>
          <h5>@{props.name}</h5>
        </div>
      </a>
    );
  } else {
    return null;
  }
}

const ArtistPageTabs = (props) => {
  const [activePageSocials, setActivePageSocials] = useState(true);
  const [activePageWorks, setActivePageWorks] = useState(false);
  const [activePageStats, setActivePageStats] = useState(false);

  const updateActiveTab = (tabName) => {
    if (tabName === 'socials') {
      setActivePageSocials(true);
      setActivePageWorks(false);
      setActivePageStats(false);
    } else if (tabName === 'works') {
      setActivePageSocials(false);
      setActivePageWorks(true);
      setActivePageStats(false);
    } else if (tabName === 'stats') {
      setActivePageSocials(false);
      setActivePageWorks(false);
      setActivePageStats(true);
    }
  };
  return (
    <div className='tabs'>
      <div className='tabsMenu'>
        <div
          className={activePageSocials ? 'tabTitle tabTitleActive' : 'tabTitle'}
          onClick={(e) => updateActiveTab('socials')}>
          <h4>Socials</h4>
        </div>
        <div
          className={activePageWorks ? 'tabTitle tabTitleActive' : 'tabTitle'}
          onClick={(e) => this.updateActiveTab('works')}>
          <h4>Works</h4>
        </div>
        <div
          className={activePageStats ? 'tabTitle tabTitleActive' : 'tabTitle'}
          onClick={(e) => this.updateActiveTab('stats')}>
          <h4>Stats</h4>
        </div>
      </div>
      <div
        className={
          activePageSocials ? 'tabSingle tabSingleActive' : 'tabSingle'
        }>
        <div className='socialBoxes'>
          <SocialBoxesPrinter name={props.item.nameYoutube} social='Youtube' />
          <SocialBoxesPrinter
            name={props.item.tagInstagram}
            social='Instagram'
          />
          <SocialBoxesPrinter
            name={props.item.nameFacebook}
            social='Facebook'
          />
        </div>
      </div>
      <div
        className={activePageWorks ? 'tabSingle tabSingleActive' : 'tabSingle'}>
        <h3>COMING SOON!</h3>
      </div>
      <div
        className={activePageStats ? 'tabSingle tabSingleActive' : 'tabSingle'}>
        <h3>COMING SOON!</h3>
      </div>
    </div>
  );
};

export default Artists;

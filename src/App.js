import { useState } from 'react';
import Artists from './components/Artists/Artists';
import Footer from './components/Footer/Footer';
import TopBarMenu from './components/TopBarMenu/TopBarMenu';
import BrandsSection from './components/Brands/Brands';
import Banner from './components/Banner/Banner';
import YukonBox from './components/Yukon/YukonBox';
import TitanBox from './components/Titan/TitanBox';
import ServicesSection from './components/Services/Services';
import PageBanner from './components/PageBanner/PageBanner';
import GaiaSystem from './components/Gaia/GaiaSystem';
import MiraContacts from './components/MiraContacts/MiraContacts';

const App = (props) => {
  const [activePage, setActivePage] = useState('homepage');
  const [toggleAnimation, setToggleAnimation] = useState(true);

  const changePage = () => {
    return (pageName) => {
      setActivePage(pageName);
      setToggleAnimation(!toggleAnimation);
    };
  };

  return (
    <div className='App'>
      <div className='siteContainer'>
        <TopBarMenu changePage={changePage} />
        <div className='siteContent'>
          <div
            className={
              toggleAnimation
                ? 'pageContainer pageAnimation1'
                : 'pageContainer pageAnimation2'
            }>
            <div className='pageContent'>
              <div
                class='logoWrapper hideOnDesktop'
                onClick={(e) => props.showPage('homepage')}></div>
              <ShowPage pageName={activePage} changePage={changePage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const ShowPage = (props) => {
  const [addAnimation, setAddAnimation] = useState(false);

  const showPage = (pageName) => {
    if (pageName === 'homepage') {
      return (
        <div className='pageWrapperContent'>
          <Banner />
          <BrandsSection />
          <TitanBox />
          <div class='sectionTitle latestWorkTitle'>
            <h3>Take a look at our latest works:</h3>
          </div>
          <div className='yukonBoxPosition'>
            <YukonBox changePage={props.changePage} />
          </div>
          <Footer changePage={props.changePage} />
        </div>
      );
    }
    if (pageName === 'influencers') {
      return (
        <div className='pageWrapperContent'>
          <PageBanner pageName='influencers' changePage={props.changePage} />
          <GaiaSystem data={'artists'} />
          <Footer changePage={props.changePage} />
        </div>
      );
    }
    if (pageName === 'aboutus') {
      return (
        <div className='pageWrapperContent'>
          <PageBanner pageName='aboutus' changePage={props.changePage} />
          <MiraContacts />
          <Footer changePage={props.changePage} />
        </div>
      );
    }
    if (pageName === 'services') {
      return (
        <div className='pageWrapperContent'>
          <PageBanner pageName='services' changePage={props.changePage} />
          <ServicesSection />
          <Footer changePage={props.changePage} />
        </div>
      );
    }
    if (pageName === 'works') {
      return (
        <div className='pageWrapperContent'>
          <PageBanner pageName='works' changePage={props.changePage} />
          <GaiaSystem data={'works'} />
          <Footer changePage={props.changePage} />
        </div>
      );
    }
  };

  return <div className='pageWrapper'>{showPage(props.pageName)}</div>;
};

export default App;

import React, { Component } from 'react';

import Banner from './components/Banner/Banner.js';
import BrandsSection from './components/Brands/Brands.js';
import Footer from './components/Footer/Footer.js';
import GaiaSystem from './components/Gaia/GaiaSystem.js';
import MiraContacts from './components/MiraContacts/MiraContacts.js';
import PageBanner from './components/PageBanner/PageBanner.js';
import ServicesSection from './components/Services/Services.js';
import TitanBox from './components/Titan/TitanBox.js';
import TopBarMenu from './components/TopBarMenu/TopBarMenu.js';
import YukonBox from './components/Yukon/YukonBox.js';

/*--- HOMEPAGE MAIN COMPONENT ---*/

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 'homepage',
      toggleAnimation: true
    };
  }

  changePage(pageName) {
    this.setState({
      activePage: pageName,
      toggleAnimation: !this.state.toggleAnimation
    });
  }

  render() {
    return (
      <div className='siteContainer'>
        <TopBarMenu changePage={this.changePage.bind(this)} />
        <div className='siteContent'>
          <div
            className={
              this.state.toggleAnimation
                ? 'pageContainer pageAnimation1'
                : 'pageContainer pageAnimation2'
            }>
            <div className='pageContent'>
              <div
                className='logoWrapper hideOnDesktop'
                onClick={(e) => this.showPage('homepage')}></div>
              <ShowPage
                pageName={this.state.activePage}
                changePage={this.changePage.bind(this)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*--- PAGE MAIN COMPONENT ---*/

class ShowPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addAnimation: false
    };

    this.showPage = this.showPage.bind(this);
  }

  showPage(pageName) {
    if (pageName === 'homepage') {
      return (
        <div className='pageWrapperContent'>
          <Banner />
          <BrandsSection />
          <TitanBox />
          <div className='sectionTitle latestWorkTitle'>
            <h3>Take a look at our latest works:</h3>
          </div>
          <div className='yukonBoxPosition'>
            <YukonBox changePage={this.props.changePage.bind(this)} />
          </div>
          <Footer changePage={this.props.changePage.bind(this)} />
        </div>
      );
    }
    if (pageName === 'projects') {
      return (
        <div className='pageWrapperContent'>
          <PageBanner
            pageName='projects'
            changePage={this.props.changePage.bind(this)}
          />
          <GaiaSystem data={'projects'} />
          <Footer changePage={this.props.changePage.bind(this)} />
        </div>
      );
    }
    if (pageName === 'aboutus') {
      return (
        <div className='pageWrapperContent'>
          <PageBanner
            pageName='aboutus'
            changePage={this.props.changePage.bind(this)}
          />
          <MiraContacts />
          <Footer changePage={this.props.changePage.bind(this)} />
        </div>
      );
    }
    if (pageName === 'services') {
      return (
        <div className='pageWrapperContent'>
          <PageBanner
            pageName='services'
            changePage={this.props.changePage.bind(this)}
          />
          <ServicesSection />
          <Footer changePage={this.props.changePage.bind(this)} />
        </div>
      );
    }
    if (pageName === 'works') {
      return (
        <div className='pageWrapperContent'>
          <PageBanner
            pageName='works'
            changePage={this.props.changePage.bind(this)}
          />
          <GaiaSystem data={'works'} />
          <Footer changePage={this.props.changePage.bind(this)} />
        </div>
      );
    }
  }

  render() {
    return (
      <div className='pageWrapper'>{this.showPage(this.props.pageName)}</div>
    );
  }
}

export default App;

//  const App = () => {

//   const [activePage, setActivePage] = useState("homepage")
//   const [toggleAnimation, setToggleAnimation] = useState(true)

//   const handlePageChange = () => setActivePage(pageName)

// return (
// <div className="siteContainer">
//   <TopBarMenu onChange={handlePageChange} />
//   <div className="siteContent">
//     <div className={toggleAnimation ? "pageContainer pageAnimation1" : "pageContainer pageAnimation2"}>
//       <div className="siteContent">
//         <div className="logoContainer hideOnDesktop" onClick={() => showPage("homepage")}></div>
//         <ShowPage pageName={activePage} handlePageChange={handlePageChange} />
//       </div>
//     </div>
//   </div>
// </div>
// )
//  }
// const ShowPage = (props) => {
//   const [addAnimation, setAddAnimation] = useState(false)

//   const showPage = (pageName) => {
//     if (pageName === "homepage") {
//       return (
//         <div className="pageWrapperContent">
//           <Banner />
//           <BrandsSection />
//           <TitanBox />
//           <div className="sectionTitle latestWorkTitle">
//             <h3>Take a look at our latest works:</h3>
//           </div>
//           <div className="yukonBoxPosition">
//             <YukonBox changePage={props.changePage} />
//           </div>
//           <Footer handleChangePage={props.handleChangePage} />
//         </div>
//       )
//     }
//     if (pageName === "influencers") {
//       return (
//         <div className="pageWrapperContent">
//           <PageBanner
//             pageName="influencers"
//             changePage={props.handleChangePage}
//           />
//           <GaiaSystem data={"projects"} />
//           <Footer changePage={props.handleChangePage} />
//         </div>
//       );
//     }
//     if (pageName === "aboutus") {
//       return (
//         <div className="pageWrapperContent">
//           <PageBanner
//             pageName="aboutus"
//             changePage={props.handleChangePage}
//           />
//           <MiraContacts />
//           <Footer changePage={props.handleChangePage} />
//         </div>
//       );
//     }
//     if (pageName === "services") {
//       return (
//         <div className="pageWrapperContent">
//           <PageBanner
//             pageName="services"
//             changePage={props.handleChangePage}
//           />
//           <ServicesSection />
//           <Footer changePage={props.handleChangePage} />
//         </div>
//       );
//     }
//     if (pageName === "works") {
//       return (
//         <div className="pageWrapperContent">
//           <PageBanner
//             pageName="works"
//             changePage={props.handleChangePage}
//           />
//           <GaiaSystem data={"works"} />
//           <Footer changePage={props.handleChangePage} />
//         </div>
//       );
//     }
//   }
//   return (
//     <div className="pageWrapper">{showPage(this.props.pageName)}</div>
//   );
// }

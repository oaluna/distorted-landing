//import Crystal from '../Crystal/Crystal';
import './Banner.css';
//import Business from '../../business.svg';

const Banner = () => (
  <div className='bannerContainer'>
    <div className='bannerContent'>
      <h2 className='wordPrinterBack'>
        <div className='bannerTitle'>
          <p style={{fontSize: '56px', marginLeft: '50vw', fontWeight: 100}}>visit https://oscarluna.dev</p>
          <h2 className='wordPrinter'></h2>
        </div>
      </h2>
      <div className='bannerInfo'>
        <p>
          I'm a frontend developer born and raised in San Francisco, CA. I love
          working on creating stunning UI for business applications. This is a
          template for a PR landing site.
        </p>
      </div>
      <div className='crystalPosition'>
        {/* <Crystal /> */}
        {/* <h1 style={{position: 'absolute', left: '10vw', top: '15vh', fontSize: '96px'}}>Welcome!<br/> My name is <br/> <span style={{color: 'slateblue'}}>Oscar</span></h1> */}
        {/* <img
          src={Business}
          style={{
            transform: 'scale(.3, .3) rotateY(180deg) rotateX(45deg)',
            position: 'absolute',
            top: '-115vh',
            left: '-40vw'
          }}
          alt='Working on a project together'
        /> */}
        <lottie-player
          autoplay
          loop
          mode='normal'
          src='https://assets4.lottiefiles.com/packages/lf20_iorpbol0.json'
          style={{
            marginLeft: '-10vw',
            marginTop: '-5vh',
            width: '450px', height: '450px'
          }}></lottie-player>
      </div>
    </div>
  </div>
);

export default Banner;

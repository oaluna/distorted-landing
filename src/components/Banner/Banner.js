import Crystal from '../Crystal/Crystal';
import './Banner.css';
import Logo from '../../Logo'
//import Business from '../../business.svg';

const Banner = () => (
  <div className='bannerContainer'>
    <div className='bannerContent'>
      <h2 className='wordPrinterBack'>
        <div className='bannerTitle'>
          <p style={{fontSize: '56px', marginLeft: '50vw', fontWeight: 100}}>https://oscarluna.dev</p>
          <h2 className='wordPrinter'></h2>
        </div>
      </h2>
      <div className='bannerInfo'>
        <p>
          I'm a frontend developer born and raised in San Francisco, CA. I love
          creating and working on web applications. I have two years of experience as a web developer using JavaScript as well as integrated libraries or frameworks.
        </p>
      </div>
    <div className='crystalPosition'>
        <h1 style={{position: 'absolute', left: '5vw', top: '15vh', fontSize: '96px'}}>Welcome!<br/> My name is <br/> <span style={{color: 'slateblue'}}>Oscar</span></h1>
      {/*     <Crystal />
        <img
          src={Logo}
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
            marginLeft: '20vw',
            marginTop: '5vh',
            width: '250px', height: '250px'
          }}></lottie-player>
      </div>
    </div>
  </div>
);

export default Banner;

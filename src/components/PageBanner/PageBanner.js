import './PageBanner.css';

const PageBanner = (props) => {
  const showPageBanner = (pageName) => {
    if (pageName === 'influencers') {
      return (
        <div className='pageBanner'>
          <div className='pageTitle'>
            <h1>
              Lorem ipsum <span>sit amet, consectetur adipiscing elit.</span>
            </h1>
          </div>
          <div className='pageDescriptionBox'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sodales purus arcu, sit amet pulvinar mauris vulputate et.
              Maecenas sed venenatis purus.
            </p>
            <button
              className='mediumButton'
              onClick={(e) => props.handlePage('aboutus')}>
              {' '}
              Know more{' '}
            </button>
          </div>
        </div>
      );
    }
    if (pageName === 'services') {
      return (
        <div className='pageBanner'>
          <div className='pageTitle'>
            <h1>
              We create <span> tsunamis!</span>
            </h1>
          </div>
          <div className='pageDescriptionBox'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sodales purus arcu, sit amet pulvinar mauris vulputate et.
              Maecenas sed venenatis purus.
            </p>
            <button
              className='mediumButton'
              onClick={(e) => props.handlePage('works')}>
              {' '}
              See works{' '}
            </button>
          </div>
        </div>
      );
    }
    if (pageName === 'works') {
      return (
        <div className='pageBanner'>
          <div className='pageTitle' style={{ marginTop: '-10vh' }}>
            <h1>
              Like this template?
              <br />
              visit <br />
              <span>
                https://
                <br />
                lunawebdev
                <br />
                .com
              </span>{' '}
              for
              <br /> more
            </h1>
          </div>
          <div className='pageDescriptionBox'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sodales purus arcu, sit amet pulvinar mauris vulputate et.
              Maecenas sed venenatis purus.
            </p>
            <button
              className='mediumButton'
              onClick={(e) => props.handlePage('aboutus')}>
              {' '}
              Ask us anything{' '}
            </button>
          </div>
        </div>
      );
    }
    if (pageName === 'aboutus') {
      return (
        <div className='pageBanner'>
          <div className='pageTitle'>
            <h1>
              <span> Oscar Armando Luna </span>
            </h1>
          </div>
          <div className='pageDescriptionBox'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sodales purus arcu, sit amet pulvinar mauris vulputate et.
              Maecenas sed venenatis purus.
            </p>
          </div>
        </div>
      );
    }
  };

  return <div className='pageWrapper'>{showPageBanner(props.pageName)}</div>;
};

export default PageBanner;

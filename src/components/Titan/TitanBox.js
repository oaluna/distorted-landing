import './TitanBox.css';

const TitanBox = (props) => (
  <div className='sectionContainer'>
    <div className='sectionContent'>
      <div className='sectionTitle'>
        <h3>What makes us your most optimal solution</h3>
      </div>
      <div className='titanBoxContainer'>
        <div className='titanBoxContent'>
          <div className='titanBoxImage titanBoxIl1' />
          <div className='titanBoxInfo'>
            <h2>
              Strong <span className='secodnaryColor'> Engagement </span>{' '}
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sodales purus arcu, sit amet pulvinar mauris vulputate et.
              Maecenas sed venenatis purus. Phasellus nec semper libero, eget
              pharetra nulla. Sed viverra maximus lacinia. Sed condimentum lorem
              orci, vitae finibus nunc viverra a. Suspendisse volutpat imperdiet
              leo, sit amet tincidunt sapien interdum et. ( Insights, Brand
              positioning, Trends, Content strategy, Timing )
            </p>
          </div>

          <div className='titanBoxInfo'>
            <h2>
              High Quality <span className='secodnaryColor'> Content </span>{' '}
            </h2>
            <p>
              HLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sodales purus arcu, sit amet pulvinar mauris vulputate et.
              Maecenas sed venenatis purus. Phasellus nec semper libero, eget
              pharetra nulla. Sed viverra maximus lacinia.
            </p>
          </div>
          <div className='titanBoxImage titanBoxIl3' />

          <div className='titanBoxImage titanBoxIl3' />
          <div className='titanBoxInfo'>
            <h2>
              Fast and Secure <span className='secodnaryColor'> Delivery </span>{' '}
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sodales purus arcu, sit amet pulvinar mauris vulputate et.
              Maecenas sed venenatis purus. Phasellus nec semper libero, eget
              pharetra nulla. Sed viverra maximus lacinia. Sed condimentum lorem
              orci, vitae finibus nunc viverra a. Suspendisse volutpat imperdiet
              leo, sit amet tincidunt sapien interdum et.
            </p>
          </div>
          <div className='titanBoxBackground'> </div>
        </div>
      </div>
    </div>
  </div>
);

export default TitanBox;

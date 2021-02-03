import './YukonBox.css';

const YukonBox = (props) => (
  <div className='yukonBoxContainer'>
    <div className='yukonBoxContent'>
      <div className='yukonBoxImage' />
      <div className='yukonBoxInfo'>
        <h4> Latest campaign: </h4>
        <p>
          {' '}
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur...{' '}
        </p>
        <h4>Total Reach:</h4>
        <h2>
          12M<span className='secodnaryColor'>+</span>
        </h2>
      </div>

      <div className='yukonBoxButton' onClick={(e) => props.changePage('works')}>
        <i className='fas fa-angle-right' />
      </div>
    </div>
  </div>
);

export default YukonBox;

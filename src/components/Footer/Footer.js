import './Footer.css';

const Footer = (props) => (
  <div className='footer'>
    <ContactMenu changePage={props.changePage} />
    <div className='footerSocials'>
      <a href='https://www.instagram.com/socialflowagency/?hl=it'>
        <img
          src='https://socialflowagency.com/wp-content/uploads/2019/05/150-Instagram-Icon.png'
          alt='Instagram icon'
        />
      </a>
      <a href='https://www.instagram.com/socialflowagency/?hl=it'>
        <img
          src='https://socialflowagency.com/wp-content/uploads/2019/05/150-TikTok-Icon.png'
          alt='TikTok icon'
        />
      </a>
    </div>
    <div className='footerCopyrightNotice'>
      <p> Copyright © 2021 by Oscar Armando Luna. Created using React and  </p>
    </div>
  </div>
);

/*--- CONTACT MENU ---*/

const ContactMenu = (props) => (
  <div className='contactMenuContainer'>
    <h2>Let's Have a Chat</h2>
    <p>Tell us what you are looking for</p>
    <div className='contactMenu'>
      <a
        className='contactMenuItem'
        onClick={(e) => props.changePage('aboutus')}>
        <h3>Connect &#8227;</h3>
        <p>Help you connect to your audience.</p>
      </a>
      <a
        className='contactMenuItem'
        onClick={(e) => props.changePage('aboutus')}>
        <h3>Create &#8227;</h3>
        <p>Ideation and creating content together.</p>
      </a>
      <a
        className='contactMenuItem'
        onClick={(e) => props.changePage('aboutus')}>
        <h3>Advertise &#8227;</h3>
        <p>Put your Brand/Product out there.</p>
      </a>
      <a
        className='contactMenuItem'
        onClick={(e) => props.changePage('aboutus')}>
        <h3>Manage &#8227;</h3>
        <p>Manage and create content for your socials.</p>
      </a>
    </div>
  </div>
);

export { ContactMenu };
export default Footer;
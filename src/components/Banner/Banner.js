
import Crystal from "../Crystal/Crystal";
import "./Banner.css";

const Banner = () => (
      <div className="bannerContainer">
        <div className="bannerContent">
          <h2 className="wordPrinterBack">
          <div className="bannerTitle">
            visit https://lunawebdev.com
            <h2 className="wordPrinter">

            </h2>
          </div>
          </h2>
          <div className="bannerInfo">
            <p>
             I'm a frontend developer born and raised in San Francisco, CA. I love working on creating stunning UI for web applications. This is a template for a PR landing site.
            </p>
          </div>
          <div className="crystalPosition">
            <Crystal />
          </div>
        </div>
      </div>
    );


export default Banner;

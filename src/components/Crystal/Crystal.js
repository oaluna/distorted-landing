import './Crystal.css';
import SailorMoon from '../../sailormoon.svg';
const Crystal = () => (
  <div class='crystalContainer'>
    <div class='crystalContent gradient-pattern'>
      <img
        src={SailorMoon}
        style={{
          transform: 'scale(2, 2)',
          zIndex: -3
        }}
        alt='Bishoujo Senshi Sailor Moon!'
      />
      <div class='crystalShadow'>
        <img
          src={SailorMoon}
          style={{
            transform: 'scale(2, 2)',
            zIndex: -3
          }}
          alt='Bishoujo Senshi Sailor Moon!'
        />
        <div class='crystalMain'>
          <img
            src={SailorMoon}
            style={{
              transform: 'scale(2, 2)',
              zIndex: -3
            }}
            alt='Bishoujo Senshi Sailor Moon!'
          />
          <div class='crystalFragments'>
            <img
              src={SailorMoon}
              style={{
                transform: 'scale(2, 2)',
                zIndex: -3
              }}
              alt='Bishoujo Senshi Sailor Moon!'
            />
            <div class='crystalGlow'>
              <img
                src={SailorMoon}
                style={{
                  transform: 'scale(2, 2)',
                  zIndex: -3
                }}
                alt='Bishoujo Senshi Sailor Moon!'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Crystal;

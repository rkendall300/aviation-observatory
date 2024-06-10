import './App.css';
import airbus1 from './images/Airbus A220-100 4.jpg';
import airbus2 from './images/Airbus_A220-300.jpg';
import airbus3 from './images/airbus_A220.jpg';
import airbus4 from './images/Bombardier-A220.jpg';
import airbus5 from './images/JetBlue-A220.jpg';
import leftArrow from './images/left-arrow-svgrepo-com.svg';
import rightArrow from './images/right-arrow-svgrepo-com.svg';
import { useState } from 'react';

function App() {

  const [photoIndex, setPhotoIndex] = useState(0);

  // Function to handle clicking through the gallery
  const flipThrough = (e) => {
    if (e.target.id === "left-arrow") {
      // Go left
      if (photoIndex === 0) {
        setPhotoIndex(4);
      } else {
        setPhotoIndex(photoIndex - 1);
      }
    } else if (e.target.id === "right-arrow") {
      // Go right
      if (photoIndex === 4) {
        setPhotoIndex(0);
      } else {
        setPhotoIndex(photoIndex + 1);
      }
    }
  };

  // Function to select specific photo from the thumbnail
  const selectImage = (e) => {
    switch (e.target.id) {
      case "thumbnail0":
        setPhotoIndex(0);
        break;
      case "thumbnail1":
        setPhotoIndex(1);
        break;
      case "thumbnail2":
        setPhotoIndex(2);
        break;
      case "thumbnail3":
        setPhotoIndex(3);
        break;
      case "thumbnail4":
        setPhotoIndex(4);
        break;
      default:
        // Do nothing
        break;
    }
  };

  return (
    <main>
      <div id="backdrop">
        <div id="container">
          <div id="title-section">
            <h2 className="page-title">Airbus A220</h2>
          </div>
          <div id="image-section">
            <div id="image-showcase">
              <div className="arrow-holder" onClick={flipThrough}>
                <img src={leftArrow} alt="left-arrow" id="left-arrow"></img>
              </div>
              <div className="arrow-holder" onClick={flipThrough}>
                <img src={rightArrow} alt="right-arrow" id="right-arrow"></img>
              </div>
              <div id="selected-image">
                <img src={airbus1} alt="a220" id="photo0" className={(photoIndex === 0) ? "current-photo" : "photo"}></img>
                <img src={airbus2} alt="a220" id="photo1" className={(photoIndex === 1) ? "current-photo" : "photo"}></img>
                <img src={airbus3} alt="a220" id="photo2" className={(photoIndex === 2) ? "current-photo" : "photo"}></img>
                <img src={airbus4} alt="a220" id="photo3" className={(photoIndex === 3) ? "current-photo" : "photo"}></img>
                <img src={airbus5} alt="a220" id="photo4" className={(photoIndex === 4) ? "current-photo" : "photo"}></img>
              </div>
              <div id="fullscreen-holder"></div>
            </div>
            <div id="image-thumbnails">
              <img src={airbus1} alt="a220-small" id="thumbnail0" className={(photoIndex === 0) ? "current-thumbnail" : "thumbnail"} onClick={selectImage}></img>
              <img src={airbus2} alt="a220-small" id="thumbnail1" className={(photoIndex === 1) ? "current-thumbnail" : "thumbnail"} onClick={selectImage}></img>
              <img src={airbus3} alt="a220-small" id="thumbnail2" className={(photoIndex === 2) ? "current-thumbnail" : "thumbnail"} onClick={selectImage}></img>
              <img src={airbus4} alt="a220-small" id="thumbnail3" className={(photoIndex === 3) ? "current-thumbnail" : "thumbnail"} onClick={selectImage}></img>
              <img src={airbus5} alt="a220-small" id="thumbnail4" className={(photoIndex === 4) ? "current-thumbnail" : "thumbnail"} onClick={selectImage}></img>
            </div>
          </div>
          <div id="text-section">
            <h2 className="text-title">About the Airbus A220</h2>
            <p className="descriptive-text">The Airbus A220 is a family of five-abreast narrow-body airliners by Airbus Canada Limited Partnership (ACLP). It was originally developed by Bombardier and had two years in service as the Bombardier CSeries. The program was launched on 13 July 2008. The smaller A220-100 (formerly CS100) made its maiden flight on 16 September 2013, received an initial type certificate from Transport Canada on 18 December 2015, and entered service on 15 July 2016 with launch operator Swiss Global Air Lines. The longer A220-300 (formerly CS300) first flew on 27 February 2015, received an initial type certificate on 11 July 2016, and entered service with airBaltic on 14 December 2016.</p>
            <p className="descriptive-text">In July 2018, the aircraft was rebranded as the A220 after Airbus acquired a majority stake in the programme through a joint venture that became ACLP in June 2019. In August, a second A220 final assembly line opened at the Airbus Mobile facility in Alabama, supplementing the main facility in Mirabel, Quebec. In February 2020, Airbus increased its stake in ACLP to 75% through Bombardier's exit, while Investissement Québec held the remaining stake.</p>
            <p className="descriptive-text">Powered by Pratt & Whitney PW1500G geared turbofan engines under its wings, the twinjet features fly-by-wire flight controls, a carbon composite wing, an aluminium-lithium fuselage, and optimised aerodynamics for better fuel efficiency. The aircraft family offers maximum take-off weights from 63.1 to 70.9 t (139,000 to 156,000 lb), and cover a 3,450–3,600 nmi (6,390–6,670 km; 3,970–4,140 mi) range. Both launch operators recorded better-than-expected fuel burn and dispatch reliability, as well as positive feedback from passengers and crew. As of March 2024, the global A220 fleet had completed more than 1.1 million flights over 1.9 million block hours without accidents.</p>
            <p className="descriptive-text">The 35 m (115 ft) long A220-100 seats 108 to 133, while the 38.7 m (127 ft) long A220-300 seats 130 to 160. The ACJ TwoTwenty is the business jet version of the A220-100, launched in late 2020. The A220 family complements the A319neo in the Airbus range and competes with Boeing 737 MAX 7, as well as the smaller four-abreast Embraer E195-E2 and E190-E2. As of April 2024, a total of 914 A220s had been ordered of which 329 had been delivered and were all in commercial service with 21 operators. Delta Air Lines is the largest operator with 70 aircraft in its fleet.</p>
            <p className="descriptive-text bold">Known Variants: Airbus A220-100, Airbus A220-300, Airbus A220-Blue</p>
          </div>
          <div id="related-section">
            <div id="class-section" className="related-tags">
              <h3 className="related-title">Aviation Class</h3>
              <p className="class-tag tag">Jet</p>
              <p className="class-tag tag">Narrow-Body Airliner</p>
              <p className="class-tag tag">Man-made Aircraft</p>
            </div>
            <div id="engine-section" className="related-tags">
              <h3 className="related-title">Engines</h3>
              <p className="engine-tag tag">P&W 1500G</p>
              <p className="engine-tag tag">P&W 6000G</p>
              <p className="engine-tag tag">PW1524G-3</p>
              <p className="engine-tag tag">A320neo</p>
            </div>
          </div>
        </div>
        <div id="sidebar-menu">
          <p className="menu-link" id="homepage-link">Homepage</p>
          <p className="menu-link" id="airframe-link">Airframes</p>
          <p className="menu-link" id="class-link">Classes</p>
          <p className="menu-link" id="engine-link">Engines</p>
        </div>
      </div>
    </main>
  );
}

export default App;
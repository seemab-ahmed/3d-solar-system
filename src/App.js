/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import TrailerSection from "./components/trailerSection/trailerSection";
import PlanetSection from "./components/planetSection/planetSection";
import SeenOnSection from "./components/SeenOnSection/SeenOnSection";
import GamePlaySection from "./components/GamePlaySection/GamePlaySection";
import MarketPlaceSection from "./components/MarketPlaceSection/MarketPlaceSection";
import MythologySection from "./components/MythologySection/MythologySection";
import TokonomicSection from "./components/TokonomicSection/TokonomicSection";
import JoinSection from "./components/JoinSection/JoinSection";
function App() {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleWheel = (event) => {
    event.preventDefault();

    // Calculate the new zoom level
    const newZoomLevel = Math.min(
      10,
      Math.max(0.1, zoomLevel + event.deltaY * -0.005)
    );

    // Get the cursor position
    const cursorX = event.clientX;
    const cursorY = event.clientY;

    // Get the position of the cursor relative to the document
    const rect = document.documentElement.getBoundingClientRect();
    const relativeX = cursorX - rect.left;
    const relativeY = cursorY - rect.top;

    // Calculate the scaling factor
    const scaleFactor = newZoomLevel / zoomLevel;

    // Calculate the new scroll position to keep the cursor fixed
    const newScrollX = window.pageXOffset + relativeX * (scaleFactor - 1);
    const newScrollY = window.pageYOffset + relativeY * (scaleFactor - 1);

    // Update the scroll position
    window.scrollTo(newScrollX, newScrollY);

    // Update the zoom level only if it's greater than 1
    if (newZoomLevel > 1) {
      setZoomLevel(newZoomLevel);
    }
  };
  return (
    <div id="___gatsby">
      <div tabindex="-1" id="gatsby-focus-wrapper">
        <div class="pageHome__background">
          <div class="Toastify"></div>
          <div class="mainBackground font-montserrat">
            <div>
              <Navbar />
              <div
                className="space"
                onWheel={handleWheel}
                style={{
                  transform: `scale(${zoomLevel})`,
                  transition: "transform 0.1s ease-in-out",
                  overflow: "hidden", // Smooth transition
                }}
              >
                <div className="info-menu">
                  <a
                    href="#"
                    data-ix="show-hide-info-all"
                    className="all info-btn w-inline-block"
                  ></a>
                  <a
                    href="#"
                    data-ix="show-hide-info-sun"
                    className="info-btn w-inline-block"
                  >
                    <div className="color"></div>
                    <div className="btn-text">Sun</div>
                  </a>

                  <a
                    href="#"
                    data-ix="show-hide-info-venus"
                    className="info-btn w-inline-block"
                  >
                    <div className="color"></div>
                    <div className="btn-text">Kepler-186f</div>
                  </a>
                  <a
                    href="#"
                    data-ix="show-hide-info-earth"
                    className="info-btn w-inline-block"
                  >
                    <div className="color"></div>
                    <div className="btn-text">K2-18b</div>
                  </a>
                  {/* <a
          href="#"
          data-ix="show-hide-info-mars"
          className="info-btn w-inline-block"
        >
          <div className="color"></div>
          <div className="btn-text">Mars</div>
        </a> */}
                  <a
                    href="#"
                    data-ix="show-hide-info-jupiter"
                    className="info-btn w-inline-block"
                  >
                    <div className="color"></div>
                    <div className="btn-text">TRAPPIST-1e</div>
                  </a>
                  <a
                    href="#"
                    data-ix="show-hide-info-saturn"
                    className="info-btn w-inline-block"
                  >
                    <div className="color"></div>
                    <div className="btn-text">Kepler-22b</div>
                  </a>
                  {/* <a
          href="#"
          data-ix="show-hide-info-uranus"
          className="info-btn w-inline-block"
        >
          <div className="color"></div>
          <div className="btn-text">Uranus</div>
        </a> */}
                  <a
                    href="#"
                    data-ix="show-hide-info-neptune"
                    className="info-btn w-inline-block"
                  >
                    <div className="color"></div>
                    <div className="btn-text">WASP-121b</div>
                  </a>
                </div>
                <div className="galaxy">
                  <div data-ix="orbit-rotation-neptune" className="nep orbit">
                    <div className="neptune planet">
                      <div className="i-nep title-box">
                        <h3 className="title">WASP-121b</h3>
                        <div className="line"></div>
                      </div>
                    </div>
                  </div>
                  {/* <div data-ix="orbit-rotation-saturn" className="orbit ur">
          <div className="planet uranus">
            <div className="i-uran title-box">
              <h3 className="title">Uranus</h3>
              <div className="line"></div>
            </div>
          </div>
        </div> */}
                  <div data-ix="orbit-rotation-saturn" className="orbit sat">
                    <div className="planet saturn">
                      <div className="saturn-rings"></div>
                      <div className="i-sat title-box">
                        <h3 className="title">Kepler-22b</h3>
                        <div className="line"></div>
                      </div>
                    </div>
                  </div>
                  <div data-ix="orbit-rotation-jupiter" className="jup orbit">
                    <div className="jupiter planet">
                      <div className="i-jup title-box">
                        <h3 className="title">TRAPPIST-1e</h3>
                        <div className="line"></div>
                      </div>
                    </div>
                  </div>
                  {/* <div data-ix="orbit-rotation-mars" className="ma orbit">
          <div className="mars planet">
            <div className="i-mars title-box">
              <h3 className="title">Mars</h3>
              <div className="line"></div>
            </div>
          </div>
        </div> */}
                  <div data-ix="orbit-rotation-earth" className="ear orbit">
                    <div
                      data-ix="orbit-rotation-moon"
                      className="mo orbit w-hidden-main w-hidden-medium w-hidden-small w-hidden-tiny"
                    >
                      <div className="moon planet"></div>
                    </div>
                    <div className="earth planet">
                      <div className="i-ear title-box">
                        <h3 className="title">K2-18b</h3>
                        <div className="line"></div>
                      </div>
                    </div>
                  </div>
                  <div data-ix="orbit-rotation-venus" className="orbit ven">
                    <div className="planet venus">
                      <div className="i-ven title-box">
                        <h3 className="title">Kepler-186f</h3>
                        <div className="line"></div>
                      </div>
                    </div>
                  </div>
                  {/* <div data-ix="orbit-rotation-mercury" className="merc orbit">
          <div className="mercury planet">
            <div className="i-merc title-box">
              <h3 className="title">Mercury</h3>
              <div className="line"></div>
            </div>
          </div>
        </div> */}
                  <div className="center sun">
                    <div className="i-sun title-box">
                      <h3 className="title">Sun</h3>
                      <div className="line"></div>
                    </div>
                  </div>
                </div>
              </div>
              <PlanetSection />
              <TrailerSection />
              <SeenOnSection />
              <GamePlaySection />
              <MarketPlaceSection />
              <MythologySection />
              <TokonomicSection />
              <JoinSection />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

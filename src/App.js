/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

function App() {
  return (
    <div className="space">
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
  );
}

export default App;

import "./Feature.scss";
function Feature() {
  return (
    <div className="feature">
      <div className="detailFeature">
        <img src="./img/avt.png" alt="avt" className="avt"/>
        <div className="desc">
          <h1>Virtual Reality</h1>
          <p>
            A community for VR fans and novices alike, regular events and
            friendly chat.
          </p>
          <div className="information">
            <div className="leftDesc">
              <img src="./img/icon.png" alt="icon" />
              <span>5,678</span>
              <span>Online</span>
            </div>
            <div className="rightDesc">
              <img src="./img/icon.png" alt="icon" />
              <span>345,678</span>
              <span>Members</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;

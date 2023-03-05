import React from "react";
const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://www.youtube.com/watch?v=on8xDUEkDJA">
              <i className="fa fa-Facebook-square">faceBook</i>
            </a>
            <a href="https://www.youtube.com/watch?v=on8xDUEkDJA">
              <i className="fa fa-google-plus-square">Google</i>
            </a>
            <a href="https://www.youtube.com/watch?v=on8xDUEkDJA">
              <i className="fa fa-instagram">Instagram</i>
            </a>
            <a href="https://www.youtube.com/watch?v=on8xDUEkDJA">
              <i className="fa fa-twitter">Twitter</i>
            </a>
            <a href="https://www.youtube.com/watch?v=on8xDUEkDJA">
              <i className="fa fa-youtube-square">Youtube</i>
            </a>
          </div>

          <div className="Profile-details-name">
            <span className="preimary-text">
              Hello, I'M{" "}
              <span className="highlighted-text">Hemant Diwakar</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1></h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;

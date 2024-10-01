import "./profile.css";
function Profile() {
  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <div className="background-layer">
          <header>
            <h1>Profile </h1>
          </header>
        </div>

        <div className="upper-layer">
          <div className="personal-details">
            <img
              src="https://github.com/chiscookeke11/Test-pagea/blob/main/nedu.jpg?raw=true"
              className="profile-pic"
              alt="Profile-pic"
            />
            <h2>Calvin Carlo</h2>
            <h4>calvin@hotmail.com</h4>
            <a href="#">Verify kyc</a>

            <div className="detail-list">
              <h1>Personal Details</h1>

              <div className="email">
                <img
                  src="https://github.com/chiscookeke11/Test-pagea/blob/main/sui_logo.png?raw=true"
                  alt="image"
                />
              </div>
            </div>
          </div>
          <div className="asset-list">
            <div className="summary">
              <h1>Calvin Carlo</h1>
              <p>
                I have started my career as a trainee and prove my self and
                achieve all the milestone with good guidance and reach up to the
                project manager. In this journey, I understand all the procedure
                which make me a good developer, team leader, and a project
                manager.
              </p>
            </div>

            <div className="assets">
              <h1>My Assets :</h1>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

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
              src="https://github.com/chiscookeke11/Test-pagea/blob/main/carlo-img.jpg?raw=true"
              className="profile-pic"
              alt="Profile-pic"
            />
            <h2>Calvin Carlo</h2>
            <h4>calvin@hotmail.com</h4>
            <a href="#" target="_blank" className="verify">
              Verify kyc
            </a>

            <div className="p-details">
              <h1>Personal Details</h1>
            </div>

            <ul className="detail-boxes">
              <li>
                <img
                  src="https://raw.githubusercontent.com/chiscookeke11/Test-pagea/027744a31961da362f47071db998283ef6cdc65b/envelope.svg"
                  alt="image"
                />
                <span>
                  <h1>Email:</h1>{" "}
                  <small>
                    <a href="#" target="_blank">
                      calvin@hotmail.com
                    </a>
                  </small>
                </span>
              </li>

              <li>
                <img
                  src="https://raw.githubusercontent.com/chiscookeke11/Test-pagea/027744a31961da362f47071db998283ef6cdc65b/bookmark.svg"
                  alt="image"
                />
                <span>
                  <h1>Skills:</h1> <small>html, css, js, mysql</small>
                </span>
              </li>

              <li>
                <img
                  src="https://raw.githubusercontent.com/chiscookeke11/Test-pagea/0e4e435dd2d834325549c85e3a8265c55d9759f3/type-italic.svg"
                  alt="image"
                />
                <span>
                  <h1>Language: </h1> <small>English, Japanese, Chinese</small>
                </span>
              </li>

              <li>
                <img
                  src="https://raw.githubusercontent.com/chiscookeke11/Test-pagea/027744a31961da362f47071db998283ef6cdc65b/globe.svg"
                  alt="image"
                />
                <span>
                  <h1>Website: </h1>{" "}
                  <small>
                    <a href="#" target="_blank">
                      www.cristina.com
                    </a>
                  </small>
                </span>
              </li>

              <li>
                <img
                  src="https://raw.githubusercontent.com/chiscookeke11/Test-pagea/027744a31961da362f47071db998283ef6cdc65b/gift.svg"
                  alt="image"
                />
                <span>
                  <h1>Birthday:</h1> <small>2nd March, 1996</small>
                </span>
              </li>

              <li>
                <img
                  src="https://raw.githubusercontent.com/chiscookeke11/Test-pagea/027744a31961da362f47071db998283ef6cdc65b/geo-alt.svg"
                  alt="image"
                />
                <span>
                  <h1>Location:</h1> <small>Beijing, China</small>
                </span>
              </li>

              <li>
                <img
                  src="https://raw.githubusercontent.com/chiscookeke11/Test-pagea/027744a31961da362f47071db998283ef6cdc65b/telephone.svg"
                  alt="image"
                />
                <span>
                  <h1>Cell No:</h1> <small>(+12) 1254-56-4896</small>
                </span>
              </li>
            </ul>
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

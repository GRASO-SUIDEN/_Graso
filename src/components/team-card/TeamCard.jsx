import "./team-card.css";

const TeamCard = ({ image, name, role, linkedin, twitter, github }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <div className="content">
        <h2 className="profile-name">{name}</h2>
        <p className="description">{role}</p>
      </div>
      <div className="social-links">
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          <img
            src="https://raw.githubusercontent.com/chiscookeke11/Test-pagea/e56603dfe7ff3825fbe39413af7ab4ff8dfd5ab2/linkedin.svg"
            alt="LinkedIn"
          />
        </a>
        <a
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="twitter"
        >
          <img
            src="https://raw.githubusercontent.com/chiscookeke11/Test-pagea/e56603dfe7ff3825fbe39413af7ab4ff8dfd5ab2/twitter-x.svg"
            alt="Twitter"
          />
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="github"
        >
          <img
            src="https://raw.githubusercontent.com/chiscookeke11/Test-pagea/e56603dfe7ff3825fbe39413af7ab4ff8dfd5ab2/github%20(6).svg"
            alt="GitHub"
          />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;

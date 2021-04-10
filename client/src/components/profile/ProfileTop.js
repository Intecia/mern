import React from "react";
import PropTypes from "prop-types";

const ProfileTop = ({
  profile: {
    status,
    company,
    website,
    location,
    social,
    user: { name, avatar }
  }
}) => {
  return (
    <div className="profile-top bg-primary p-2">
      <img className="round-img my-1" src={avatar} alt="" />
      <h1 className="large">{name}</h1>
      <p className="lead">
        {status} {company && <span>at {company} </span>}
      </p>
      <p>{location && <span> {location}</span>}</p>
      <div className="icons my-1">
        {website && (
          <a href={website} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-globe fa-2x"></i>
          </a>
        )}
        {social &&
          social.map(soc => (
            <div key={soc._id}>
              {soc.twitter && (
                <a href={soc.twitter} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
              )}
              {soc.facebook && (
                <a
                  href={soc.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook fa-2x"></i>
                </a>
              )}
              {soc.linkedin && (
                <a
                  href={soc.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
              )}
              {soc.youtube && (
                <a href={soc.youtube} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube fa-2x"></i>
                </a>
              )}
              {soc.instagram && (
                <a
                  href={soc.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;

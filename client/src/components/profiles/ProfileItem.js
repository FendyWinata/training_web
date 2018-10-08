import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-2">
            <img src={profile.user.avatar} alt="" className="rounded-circle" />
          </div>
          <div className="col-lg-6 col-md-4 col-8">
            <h1>
              <p>{profile.user.name}</p>
            </h1>
            <h4>
              <br />
              {profile.status}{" "}
              {isEmpty(profile.company) ? null : <h6>at {profile.company}</h6>}
            </h4>
            <h6>
              {isEmpty(profile.location) ? null : (
                <span>{profile.location}</span>
              )}
            </h6>
            <Link to={`/profile/${profile.handle}`} className="btn btn-info">
              View Profile
            </Link>
          </div>
          <div className="col-md-4 d-none d-md-block">
            <h4>Skill Set</h4>
            <ul className="list-group">
              <h3>
                {profile.skills.slice(0, 4).map((skills, index) => (
                  <li key={index} className="list-group-item">
                    <i className="fa fa-check pr-1">{skills}</i>
                  </li>
                ))}
              </h3>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;

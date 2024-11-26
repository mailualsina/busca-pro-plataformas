import React from 'react';
import "../styles/user-details.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
function UserDetails ({ user }) {
  return (
    <div className="details-card">
      <FontAwesomeIcon icon={faCircleUser} />
      <h2>{user.name}</h2>
      <p>{user.fullDescription}</p>
    </div>
  );
};

export default UserDetails;

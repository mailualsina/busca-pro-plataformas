import React from 'react';
import "../styles/user-details.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
function UserDetails({ user }) {
  return (
    <div className="details-card">
      <div className='icon-container'>
        <FontAwesomeIcon style={{ fontSize: '10rem' }} icon={faCircleUser} />
      </div>
      <h2>{user.name}</h2>
      <p>{user.fullDescription}</p>
    </div>
  );
};

export default UserDetails;

import React, { useState } from 'react';
import UserDetails from './UserDetails';
import FilterBar from './FilterBar';
import "../styles/user-list.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
function UserList({ users }) {
  const [selectedUser, setSelectedUser] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleFilter = ({ location, experience, verified }) => {
    const filtered = users.filter((user) => {
      const matchesLocation = location ? user.location === location : true;
      const matchesExperience = experience ? user.experience >= experience : true;
      const matchesVerified = verified ? user.verified === verified : true;
      return matchesLocation && matchesExperience && matchesVerified;
    });
    setFilteredUsers(filtered);
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const uniqueLocations = [...new Set(users.map((user) => user.location))];

  return (
    <div>
      <div className="user-container">
        <div className="user-filter-container">
          <FilterBar locations={uniqueLocations} onFilter={handleFilter} />
          <div className="user-list">
            {filteredUsers.map((user, index) => (
              <div key={index} className="user-card">
                <div className="card-header">
                  <FontAwesomeIcon icon={faCircleUser} className='card-icon'/>
                  <h3>{user.name}</h3>
                </div>
                <p>{user.briefDescription}</p>
                <div className="button-container">
                  <button
                    className="button"
                    onClick={() => handleUserClick(user)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {selectedUser ? (<div className="userDetails"><UserDetails user={selectedUser} /></div>) : (<></>)}
      </div>
    </div>
  );
};
export default UserList;
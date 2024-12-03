import React, { useState } from 'react';
import "../styles/filter-bar.css"

const FilterBar = ({ locations, onFilter }) => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [experience, setExperience] = useState(0);
  const [verified, setVerified] = useState(false);

  const handleFilterChange = () => {
    onFilter({ location: selectedLocation, experience, verified });
  };

  return (
    <div className="filterBar">
      <div className="filterItem">
        <label>Ubicacion</label>
        <select
          value={selectedLocation}
          onChange={(e) => {
            setSelectedLocation(e.target.value);
          }}
        >
          <option value="">Cualquier parte</option>
          {locations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      <div className="filterItem">
        <label>Experiencia(años):</label>
        <div className="sliderButtons">
          {[5, 10, 20].map((value) => (
            <button
              key={value}
              className={experience === value ? 'activeButton' : 'button'}
              onClick={() => {
                setExperience(value);
              }}
            >
              +{value}
            </button>
          ))}
        </div>
      </div>

      <div className="filterItem">
        <label>
          <input
            type="checkbox"
            checked={verified}
            onChange={(e) => {
              setVerified(e.target.checked);
            }}
          />
           Verificado
        </label>
      </div>

      <div>
        <button className="apply-button" onClick={(e) => {handleFilterChange()}}>Aplicar</button>
      </div>
    </div>
  );
};

export default FilterBar;
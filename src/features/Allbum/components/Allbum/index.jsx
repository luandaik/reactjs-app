import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
Allbum.propTypes = {
    allbum: PropTypes.object.isRequired,
};

function Allbum({ allbum }) {
    return (
        <div className='allbum'>
            <div className="allbum__thumbnail">
                <img src={allbum.thumbnailUrl} alt={allbum.name} />
            </div>
            <p className='allbum__name'>{allbum.name}</p>
        </div>
    );
}

export default Allbum;
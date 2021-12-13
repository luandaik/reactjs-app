import React from 'react';
import PropTypes from 'prop-types';
import Allbum from '../Allbum';
import './style.scss'

AllbumList.propTypes = {
    allbumList: PropTypes.array.isRequired,
};

function AllbumList({allbumList}) {
    return (
        <div>
            <ul className='allbumList'>
                {allbumList.map(allbum=>(
                    <li key={allbum.id}>
                        <Allbum allbum={allbum} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AllbumList;
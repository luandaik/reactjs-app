import React from 'react';
import AllbumList from './components/AllbumList';

AllbumFeature.propTypes = {
    
};

function AllbumFeature(props) {
    const allbumList = [
        {
            id:1,
            name:'Nhạc hay 123',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/8/0/8/a/808ad7f3fb53c013953b8e4ae8ebf48e.jpg'
        },
        {
            id:2,
            name:'Nhạc hay 123',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/8/0/8/a/808ad7f3fb53c013953b8e4ae8ebf48e.jpg'
        },
        {
            id:3,
            name:'Nhạc hay 123',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/8/0/8/a/808ad7f3fb53c013953b8e4ae8ebf48e.jpg'
        },
    ];
    return (
        <div>
            <h2>Nhạc hay mỗi ngày</h2>
            <AllbumList allbumList={allbumList}/>
        </div>
    );
}

export default AllbumFeature;
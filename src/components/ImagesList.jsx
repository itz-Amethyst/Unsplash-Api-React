import React from 'react';
import './ImagesList.css';
const ImagesList = (props) => {
    return (
        <div>
            <div className="result-count-container">Result: <span>{props.Data_Image.total ? props.Data_Image.total : 0}</span></div>
           
        </div>
    )
};

export default ImagesList;


import React from 'react';
import './ImagesList.css';
const ImagesList = (props) => {
    return (
        <div>
            <div className="result-count-container">Result: <span>{props.Data_Image.total ? props.Data_Image.total : 0}</span></div>
            {(props.Data_Image.total && props.Data_Image.results) && (
                <div className="image-list">
                  {props.Data_Image.results.map((image) =>{
                    return (
                        <div className="image-card">
                            <img src={image.urls.full} alt={image.alt_description} />
                        </div>
                    )
                  })}
                </div>
            )}
        </div>
    )
};

export default ImagesList;


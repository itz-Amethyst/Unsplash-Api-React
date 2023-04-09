import React from 'react';
import './ImagesList.css';
import ImageCard from './ImageCard'
const ImagesList = (props) => {
    return (
        <div>
            <div className="result-count-container">Result: <span>{props.Data_Image.total ? props.Data_Image.total : 0}</span></div>
            {(props.Data_Image.total && props.Data_Image.results) && (
                <div className="image-list">
                  {props.Data_Image.results.map((image) =>{
                    return (
                       <ImageCard key={image.id} picture={image}/>
                    )
                  })}
                </div>
            )}
        </div>
    )
};

export default ImagesList;


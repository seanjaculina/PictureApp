import React from 'react';


class ImageCard extends React.Component{

    render(){

        const {description, urls} = this.props.image;       // destruction props to improve readability


        return(
            <div>
                <img
                    alt={description}
                    src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard;
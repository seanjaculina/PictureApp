import react from 'react';

const ImageList = (props) =>{

   const images =  props.images.map((image) =>{
        return <img src={image.urls.regular} alt="images"/>
    })


    console.log(props);
    return(
        <div>{images}</div>
    );


}

export default ImageList
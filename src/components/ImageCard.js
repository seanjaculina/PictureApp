import React from 'react';


class ImageCard extends React.Component{
    constructor(props){
        super(props);

        this.imageRef = React.createRef();
        this.state = {spans : 0};
    }
    state = {
        imageHeight: null,

    };


    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
       const height = (this.imageRef.current.clientHeight);

       const spans = Math.ceil(height / 10 + 1); // added 1 incase of needing to round up

       this.setState({spans});
    }

    render(){

        const {description, urls} = this.props.image;       // destruction props to improve readability

        return(
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard;
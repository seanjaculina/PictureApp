import React from 'react';


// use of a class base component to allow use of state
class SearchBar extends React.Component{
    state = {
        term: '',

    };

    onFormSubmit = (e) =>{
        e.preventDefault();     // this will prevent the page from refreshing or submitting the form automatically

        this.props.onSubmit(this.state.term);
    }

    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({term: e.target.value})}/>
                    </div>

                </form>
            </div>)
    }
}

export default SearchBar;
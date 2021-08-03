import React from 'react';


// use of a class base component to allow use of state
class SearchBar extends React.Component{

    render(){
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text"></input>
                    </div>

                </form>
            </div>)
    }
}

export default SearchBar;
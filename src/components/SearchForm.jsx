import React from "react";
import './SearchForm.css';

class SearchForm extends React.Component {

    state = {
        term: ''
    }

    SearchForChangeHandler = (event) =>{
        if(event.keyCode === 13){
            this.props.onSearchFormSubmit(this.state.term)
        }
    }

    SearchForSubmitHandler = (event) =>{
        this.setState({
            term: event.target.value
        })
    }

   render(){
    return(
        <div className="SearchForm">
            <input value={this.state.term} type="text" onKeyUp={this.SearchForSubmitHandler()} onChange={this.SearchForChangeHandler()} placeholder="Search Anything you want!"/>
        </div>
    )
   }
}


export default SearchForm;
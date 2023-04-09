import React from "react";
import './App.css';
import SearchForm from './components/SearchForm'

class App extends React.Component {

    onSearchFormSubmit = (value) =>{
        console.log('test')
    }

    render() {
        return (
            <div className="App">
               <SearchForm onSearchFormSubmit={this.onSearchFormSubmit()}/>
            </div>
        );
    }

}

export default App;
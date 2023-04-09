import React from "react";
import './App.css';
import axios from 'axios'
import SearchForm from './components/SearchForm'

class App extends React.Component {

    onSearchFormSubmit = (value) =>{
        console.log('test')
        axios.get("https://api.unsplash.com/search/photos" , {
            headers: {
                Authorization: "Client-ID  ???????"
            },
            params:{
                query: value
            }
        }).then((result =>{
            console.log(result.data)
        }))
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
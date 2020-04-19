import React from 'react';
import axios from 'axios'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      movies:[],
      
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount(query){
    
    var url="Your ApI Key here";
    axios.get(url+`${query?query:"harry"}`).then(res=>{
      this.setState({
        movies:res.data.Search
      })
    })
  }
  onSubmit(event){
    event.preventDefault();
    var query = this.input.value;
    // console.log(query);
    this.componentDidMount(query);
  }
  render(){
   
    const {movies} = this.state;
    console.log(movies)
    if(movies!==undefined){
    var movieList = movies.map((movie) => 
    
    <div className="col-4 movie">  
      <img src={movie.Poster!=="N/A"?movie.Poster:"https://i.imgur.com/L6a1AjW.png"}className="movieImg" />
      <p className="overview">{movie.Title}</p>
      <h3  key={movie.imdbID} className="text-center movieTitle">{movie.Year}</h3>
    </div>
    )
    }
    else{
      var movieList=<div className="alert alert-danger my-5">No movie </div>
    }
   
    return (
      <div className="App">
        <div className="jumbotron">  
            <div className="container">
            <div className="row">
            <h2 className="col-12 text-center">Search for a Movie</h2>
            <span className=" col-12 text-center"><b>Created By Harsh tyagi</b></span>
              <form onSubmit={this.onSubmit} className="col-12">
                <input className= "col-12 form-control" placeholder="Search Movies..."
                ref = {input => this.input = input}/>
              </form>
              <div>
                <ul className= "col-12 row">{movieList}</ul>
              </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
  
  
}

export default App;

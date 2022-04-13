import axios from 'axios';
import React, { Component } from 'react';
import MovieService from '../../services/MovieService';

class AddShowtoMovie extends Component {
    constructor(props){
        super(props)
        this.state={
            op:this.props.match.params.showId,
            moviearr:[]
        }
    }
    componentDidMount(){
        console.log("in movielist componentDidMount");
        MovieService.getAllMovies().then((response)=>{
           this.setState({moviearr:response.data})
           console.log(this.state.moviearr)
  
        })
      }
      addShow=(movie)=>{
          console.log("in put method of add show to movie");
        axios.put(`http://localhost:8080/movies/map/${this.state.op}`,movie)
        .then(response => {
            console.log('movie added to show  successfully', response.data);
            this.props.history.push("/Admin");
         });
      }
    render() {
        return (
            <div>
                  
           <div className='row'>
               <table striped bordered hover variant="dark">
                   <thead>
                       <tr>
                           <th>Movie Id</th>
                           <th> Movie Name</th>
                           <th>Language</th>
                           <th> Date</th>
                           <th> Rating</th>

                       </tr>
                   </thead>
                   <tbody>
                       {
                           this.state.moviearr.map((movie)=>
                           <tr key={movie.movieId}>
                               <td>{movie.movieId}</td>
                               <td>{movie.movieName}</td>
                               <td>{movie.movieLanguage}</td>
                               <td>{movie.movieDate}</td>
                               <td>{movie.movieRating}</td>
                               <td>
                                    <button className="btn btn-success" onClick={()=>this.addShow(movie)}>AddShow</button> </td>
                                   
                           </tr>)
                       }
                   </tbody>

               </table>

           </div>
            </div>
        );
    }
}

export default AddShowtoMovie;
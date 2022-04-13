import React, { Component } from 'react';
import AdminDashBoard from './AdminDashBoard';
import {Card} from 'react-bootstrap';
import adminBg from './images/AdminBg.png';
import MovieService from '../services/MovieService';

class Admin extends Component {
    constructor(props){
        super(props)
        this.state={
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

      editMovie=(movieId)=>{
        console.log("in movie edit ")
        this.props.history.push(`/Admin/EditMovie/${movieId}`)
    }
    deleteMovie=(movieId)=>{
        console.log("in delete movie");
        MovieService.deleteMovie(movieId).then((response)=>{
            this.props.history.push('/Admin')
            console.log("deleted succesfully")
        })
    }
    addTheatre=()=>{
        console.log("in add theatre");
        this.props.history.push('/Admin/AddTheatre');
    }
    viewdetails=(movieId)=>{
        console.log ("in movie view details");
        this.props.history.push(`/Admin/ViewMovie/${movieId}`);
    }

    render() {
        return (
            <div>
                <div><AdminDashBoard/></div>
                <h2 className="text-center">Movies List</h2>
                

              
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
                                    <button className="btn btn-success" onClick={()=>this.editMovie(movie.movieId)}>edit</button> </td>
                                    <td>  <button className="btn btn-danger" onClick={()=>this.deleteMovie(movie.movieId)}>delete</button></td>
                                    <td> <button className="btn btn-success" onClick={()=>this.addTheatre()}>addTheatre</button>
                                    <td>  <button className="btn btn-danger" onClick={()=>this.viewdetails(movie.movieId)}>viewdetails</button></td>
                                    
                                </td>
                           </tr>)
                       }
                   </tbody>

               </table>

           </div>
                
            </div>

        );
    }
}
 
export default Admin;
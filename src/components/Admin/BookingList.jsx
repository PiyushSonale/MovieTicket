import axios from 'axios';
import React, { Component } from 'react';
import MovieService from '../../services/MovieService';

class BookingList extends Component {
    constructor(props){
        super(props);
        this.state={
            bookingArr:[],
            movieArr:[]
        }
    }
    componentDidMount(){
        console.log("in Bookingist componentDidMount");
        axios.get(`http://localhost:8080/booking/findall`).then((response)=>{
           this.setState({bookingArr:response.data})
           console.log("in booking array");
           console.log(this.state.bookingArr)
  
        })
        console.log("in movieList Booking Components");
        MovieService.getAllMovies().then((response)=>{
            this.setState({movieArr:response.data})
            console.log(this.state.movieArr)
   
         })
      }
      ShowBooking=(movieId)=>{
        console.log("in movie edit ")
        this.props.history.push(`/Admin/showBooking/${movieId}`)
    }
    render() {
        return (
            <div>
              <div> 
            <h2 className="text-center">Booking List</h2>
            

          
       <div className='row'>
           <table striped bordered hover variant="dark">
               <thead>
                   <tr>
                       <th>Booking Id</th>
                       <th> Booking Date</th>
                       <th>Transaction Mode</th>
                       <th> Transaction status</th>
                       <th> total Cost</th>
                       <th>customerId</th>

                   </tr>
               </thead>
               <tbody>
                   {
                       this.state.bookingArr.map((booking)=>
                       <tr key={booking.transactionId}>
                           <td>{booking.bookingDate}</td>
                           <td>{booking.transactionMode}</td>
                           <td>{booking.transactionStatus}</td>
                           <td>{booking.totalCost}</td>
                           <td>{booking.customer.customerId}</td>
                           <td>
                            
                                
                            </td>
                       </tr>)
                   }
               </tbody>

           </table>

       </div>
       </div> 
       <div></div>
       <div>
       <div className='container'>
               <table className='table table-bordered table-striped'>
                   <thead>
                       <tr>
                           <th>Movie Id</th>
                           <th> Movie Name</th>
                           

                       </tr>
                   </thead>
                   <tbody>
                       {
                           this.state.movieArr.map((movie)=>
                           <tr key={movie.movieId}>
                               <td>{movie.movieId}</td>
                               <td>{movie.movieName}</td>
                               
                               <td>
                                    <button className="btn btn-success" onClick={()=>this.ShowBooking(movie.movieId)}>showBookings</button> </td>
                                   
                           </tr>)
                       }
                   </tbody>

               </table>

           </div>
       </div>
            
        </div>
        );
    }
}

export default BookingList;
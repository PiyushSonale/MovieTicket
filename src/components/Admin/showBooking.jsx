import axios from 'axios';
import React, { Component } from 'react';

class showBooking extends Component {
    constructor(props){
        super(props);
        this.state={
            op:this.props.match.params.movieId,
            bookingArr:[]
        }
    }
    componentDidMount(){
        console.log("in Bookingist componentDidMount");
        axios.get(`http://localhost:8080/booking/byMovie/${this.state.op}`).then((response)=>{
           this.setState({bookingArr:response.data})
           console.log("in booking array");
           console.log(this.state.bookingArr)
  
        })
        
      }


    render() {
        return (
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
                       

                   </tr>
               </thead>
               <tbody>
                   {
                       this.state.bookingArr.map((booking)=>
                       <tr key={booking.transactionId}>
                           <td>{booking.transactionId}</td>
                           <td>{booking.bookingDate}</td>
                           <td>{booking.transactionMode}</td>
                           <td>{booking.transactionStatus}</td>
                           <td>{booking.totalCost}</td>
                           
                           
                       </tr>)
                   }
               </tbody>

           </table>
          

       </div>
       </div> 
        );
    }
}

export default showBooking;
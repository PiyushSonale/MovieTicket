import axios from 'axios';
import React, { Component } from 'react';

class viewSeats extends Component {
    constructor(props){
        super(props);
        this.state={
            seatArr:[]
        }
    }
    componentDidMount(){
        console.log("in seatlist componentDidMount");
        axios.get(`http://localhost:8080/seats/findall`).then((response)=>{
           this.setState({seatArr:response.data})
           console.log(this.state.seatArr)
  
        })
      }
      editSeat=(seatId)=>{
        console.log("in movie edit ")
        this.props.history.push(`/Admin/EditSeat/${seatId}`)
    }
    render() {
        return (
            <div>
                
                <h2 className="text-center">Movies List</h2>
                

              
           <div className='row'>
               <table striped bordered hover variant="dark">
                   <thead>
                       <tr>
                           <th>Seat Id</th>
                           <th> Seat Number</th>
                           <th>Seat Type</th>
                           <th> Seat Price</th>
                           <th> Seat Status</th>

                       </tr>
                   </thead>
                   <tbody>
                       {
                           this.state.seatArr.map((seat)=>
                           <tr key={seat.seatId}>
                               <td>{seat.seatId}</td>
                               <td>{seat.seatNumber}</td>
                               <td>{seat.type}</td>
                               <td>{seat.price}</td>
                               <td>{seat.status}</td>
                               <td>
                               <button className="btn btn-success" onClick={()=>this.editSeat(seat.seatId)}>edit</button>  
                                    
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

export default viewSeats;
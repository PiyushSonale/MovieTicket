import React, { Component } from 'react';
import TheatreService from '../../services/TheatreService';
import  AdminDashBoard from '../AdminDashBoard';

class TheatreList extends Component {
    constructor(props){
        super(props);
        this.state={
            theatreArr:[]
        }
    }
    componentDidMount(){
        console.log("in Theatre componentDidMount");
        TheatreService.getAllTheatres().then((response)=>{
            this.setState({theatreArr:response.data})
            console.log(this.state.theatreArr)
   
         })
      }
      editTheatre=(theatreId)=>{
        console.log("in theatre edit ")
        this.props.history.push(`/Admin/EditTheatre/${theatreId}`)
    }

    deleteTheatre=(theatreId)=>{
        console.log("in delete movie");
        TheatreService.deleteTheatre(theatreId).then((response)=>{
            this.props.history.push('/TheatreList')
            console.log("deleted succesfully")
        })
    }
    addScreen=(theatreId)=>{
        console.log("in add screen")
        window.location.replace(`/Admin/AddScreen/${theatreId}`)
    }

    render() {
        return (
            
            <div>
                <div><AdminDashBoard/></div>
                <h2 className="text-center">Theatre List</h2>
                <div className='row'>
                <table striped bordered hover variant="dark">
                <thead>
                       <tr>
                           <th>Theatre Id</th>
                           <th> Theatre Name</th>
                           <th>Theatre City</th>
                           <th> Manager Name</th>
                           <th> Manager City</th>

                       </tr>

                   </thead>
                   <tbody>
                       {
                           this.state.theatreArr.map((theatre)=>
                           <tr key={theatre.theatreId}>
                               <td>{theatre.theatreId}</td>
                               <td>{theatre.theatreName}</td>
                               <td>{theatre.theatreCity}</td>
                               <td>{theatre.managerName}</td>
                               <td>{theatre.managerContact}</td>
                               <td>{theatre.screen.screenId}</td>
                               <td>
                                    <button className="btn btn-success" onClick={()=>this.editTheatre(theatre.theatreId)}>edit</button> </td>
                                    <td>  <button className="btn btn-danger" onClick={()=>this.deleteTheatre(theatre.theatreId)}>delete</button></td>
                                    <td> <button className="btn btn-success" onClick={()=>this.addScreen(theatre.theatreId)}>Add Screen</button>
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

export default TheatreList;
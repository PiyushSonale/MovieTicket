import React, { Component } from 'react';
import TheatreService from '../../services/TheatreService';

class EditTheatre extends Component {
    constructor(props){
        super(props);
        this.state={
            op1:this.props.match.params.id,
            theatre_id :'',
            theatre_name :'',
            theatre_city :'',
            manager_contact:'',
            manager_name:''
        }

    }
    componentDidMount(){
       TheatreService.getByTheatreId(this.state.op1).then((response)=>{
        let theatreob=response.data;
        this.setState({theatre_id:theatreob.theatreId,
            theatre_name:theatreob.theatreName,
            theatre_city:theatreob.theatreCity,
            manager_name:theatreob.managerName,
            manager_contact:theatreob.managerContact
           });
    })
       
    }
    editTheatre=(e)=>{
        e.preventDefault();
        console.log(this.state);
        let theatre={
            theatreId:this.state.theatre_id,
            theatreName:this.state.theatre_name,
            theatreCity:this.state.theatre_city,
            managerName:this.state.manager_name,
            managerContact:this.state.manager_contact

        }
        console.log((JSON.stringify(theatre)));
        TheatreService.editTheatre(theatre);
        console.log("Theatre details updated succesfully");

        this.props.history.push('/TheatreList');

    }
    changeTheatreIdHandler=(event)=>{this.setState({theatre_id:event.target.value});}
    changeTheatreNameHandler=(event)=>{this.setState({theatre_name:event.target.value});}
    changeTheatreCityHandler=(event)=>{this.setState({theatre_city:event.target.value});}
    changeManagerContactHandler=(event)=>{this.setState({manager_contact:event.target.value});}
    changeManagerNameHandler=(event)=>{this.setState({manager_name:event.target.value});}
    
    render() {
        return (
            <section>
  <div class="custom-container">
    
    <form  onSubmit={this.editTheatre}>
      <div class="form-row">
        <div class="form-group">
            <h1> Edit Theatre Details</h1>
            <br></br>
            <div class="input-data">
            <input
              type="text"
              class="form-control"
              formControlName="theatreId"
              required
            
              value={this.state.theatre_id} 
              onChange={this.changeTheatreIdHandler}
            />
            <div class="underline"></div>
            <label for="">Theatre Id</label>
          </div>
          <br></br>
          <div class="input-data">
            <input
              type="text"
              class="form-control"
              formControlName="theatreName"
              required
            
              value={this.state.theatre_name} 
              onChange={this.changeTheatreNameHandler}
            />
            <div class="underline"></div>
            <label for="">Theatre Name</label>
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <div class="row">
            <div class="col input-data">
              <input
                type="text"
                class="form-control"
                formControlName="theatreCity"
                required
                
              value={this.state.theatre_city} 
              onChange={this.changeTheatreCityHandler}
              />
              <div class="underline"></div>
              <label for="">Theatre City</label>
            </div>
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <div class="row">
            <div class="col input-data">
              <input
                type="text"
                class="form-control"
                formControlName="managerName"
                required
                
              value={this.state.manager_name} 
              onChange={this.changeManagerNameHandler}
              />
              <div class="underline"></div>
              <label for="">Manager Name</label>
            </div>
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <div class="row">
            <div class="col input-data">
              <input
                type="text"
                class="form-control"
                formControlName="managerContact"
                required
                
              value={this.state.manager_contact} 
              onChange={this.changeManagerContactHandler}
              />
              <div class="underline"></div>
              <label for="">Manager Contact</label>
            </div>
          </div>
        </div>
      </div>
      <div class="button">
        <button type="submit" class="btn btn-primary">Update Theatre</button>
      </div>
    </form>
  </div>
</section>
        );
    }
}

export default EditTheatre;
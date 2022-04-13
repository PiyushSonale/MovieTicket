import axios from 'axios';
import React, { Component } from 'react';
import './AddSeat.css';

class AddSeat extends Component {
 constructor(){
   super();
   this.state={
     seatNumber:'',
     seatType:'',
     seatPrice:'',
     seatStatus:''
   }
   this.changeSeatNumber=this.changeSeatNumber.bind(this);
   this.changeSeatType=this.changeSeatType.bind(this);
   this.changeSeatPrice=this.changeSeatPrice.bind(this);
   this.changeSeatStatus=this.changeSeatStatus.bind(this);

 }

 addSeat=(u)=>{
  u.preventDefault();
  console.log("in addseat method");
  let seat={
    seatNumber:this.state.seatNumber,
    type:this.state.seatType,
    price:this.state.seatPrice,
    status:this.state.seatStatus
  }
  console.log((JSON.stringify(seat)));
  axios.post(`http://localhost:8080/seats/add`,seat)
  .then(response => {
   console.log('Seat Added successfully', response.data);
   this.props.history.push("/Admin/viewSeats");
});
}
 changeSeatNumber=(event)=>{this.setState({seatNumber:event.target.value});}
 changeSeatType=(event)=>{this.setState({seatType:event.target.value});}
 changeSeatPrice=(event)=>{this.setState({seatPrice:event.target.value});}
 changeSeatStatus=(event)=>{this.setState({seatStatus:event.target.value});}

    render() {
        return (
          
            <section>
              
  <div class="custom-container">
  <h3> Add Seat</h3>
    <form onSubmit={this.addSeat}>
      <div class="form-row">
        <div class="form-group">
          <div class="input-data">
            <input
              type="text"
              class="form-control"
              formControlName="seatNumber"
              required
              value={this.state.seatNumber}
              onChange={this.changeSeatNumber}
            />
            <div class="underline"></div>
            <label for="">Seat Number</label>
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
                formControlName="type"
                required
                value={this.state.seatType}
              onChange={this.changeSeatType}
              />
              <div class="underline"></div>
              <label for="">Type</label>
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
                formControlName="price"
                required
                value={this.state.seatPrice}
                onChange={this.changeSeatPrice}
              />
              <div class="underline"></div>
              <label for="">Price</label>
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
                formControlName="status"
                required
                value={this.state.seatStatus}
                onChange={this.changeSeatStatus}
              />
              <div class="underline"></div>
              <label for="">Status</label>
            </div>
          </div>
        </div>
      </div>
      <div class="button">
        <button type="submit" class="btn btn-primary">Add Seat</button>
      </div>
    </form>
  </div>
</section>

        );
    }
}

export default AddSeat;
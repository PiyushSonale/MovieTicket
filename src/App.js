
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';

import Navigation from './components/Navigation';
import { BrowserRouter,Route,Switch} from 'react-router-dom';

import Home from './components/Home';
import Registration from './components/Registration';
import Footer from './components/Footer';
import Customer from './components/Customer';
import Admin from './components/Admin';
import Movies from './components/Movies';
import Addmovie from './components/Admin/Addmovie';
import EditMovie from './components/Admin/EditMovie';
import AddTheatre from './components/Admin/AddTheatre';
import TheatreList from './components/Admin/TheatreList';
import AddScreen from './components/Admin/AddScreen';
import EditTheatre from './components/Admin/EditTheatre';
import ScreenDashBoard from './components/Admin/ScreenDashBoard';
import ViewScreens from './components/Admin/ViewScreens';
import Addshow from './components/Admin/Addshow';
import ShowDashBoard from './components/Admin/ShowDashBoard';
import AddShowtoMovie from './components/Admin/AddShowtoMovie';
import ViewMovie from './components/Admin/ViewMovie';
import AddSeat from './components/Admin/AddSeat';
import viewSeats from './components/Admin/viewSeats';
import EditSeat from './components/Admin/EditSeat';
import BookingList from './components/Admin/BookingList';
import showBooking from './components/Admin/showBooking';


function App() {
  return (
    <div  className='container-fluid'>
      <h1>Movie Ticket Booking</h1>
      <Navigation/>
      <BrowserRouter>
         <Switch>
          <Route path="/Home" exact component ={Home}/>
          <Route path="/Login" exact component={Login}/>
          <Route path="/Registration" exact component={Registration}/>
          <Route path="/Customer" exact component={Customer}/>
          <Route path="/Admin" exact component={Admin}/>
          <Route path="/Movies" exact component={Movies}/>
          <Route path="/AddMovie" exact component={Addmovie}/>
          <Route path="/Admin/EditMovie/:id" exact component={EditMovie}/>
          <Route path="/Admin/AddTheatre" exact component={AddTheatre}/>
          <Route path="/TheatreList" exact component={TheatreList}/>
          <Route path="/Admin/EditTheatre/:id" exact component={EditTheatre}/>
          <Route path="/Admin/AddScreen/:id" exact component={AddScreen}/>
          <Route path="/Admin/ScreenDashBoard" exact component={ScreenDashBoard}/>
          <Route path="/Admin/ViewScreens/:id" exact component={ViewScreens}/>
          <Route path="/Admin/Addshow/:theatreId/:screenId" exact component={Addshow}/>
          <Route path="/Admin/ShowDashBoard/:screenId" exact component={ShowDashBoard}/>
          <Route path="/Admin/AddShowtoMovie/:showId" exact component={AddShowtoMovie}/>
          <Route path="/Admin/ViewMovie/:movieId" exact component={ViewMovie}/>
          <Route path="/Admin/AddSeat" exact component={AddSeat}/>
          <Route path="/Admin/viewSeats" exact component={viewSeats}/>
          <Route path="/Admin/EditSeat/:seatId" exact component={EditSeat}/>
          <Route path="/Admin/BookingList" exact component={BookingList}/>
          <Route path="/Admin/showBooking/:movieId" exact component={showBooking}/>
       

          
         </Switch>
      </BrowserRouter>
      <Footer/>

     
    </div>
  );
}

export default App;

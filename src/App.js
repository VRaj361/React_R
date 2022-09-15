import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { ContactUs } from './components/ContactUs';
import { Movies } from './components/Movies';
import { Link, Route, Routes } from 'react-router-dom'
import { MoviesDetail } from './components/MoviesDetail'
import { ReactForm } from './components/ReactForm';
import { EmployeeDetails } from './components/EmployeeDetails';
import {TicketDetails} from './components/TicketDetails';
import { AddTicket } from './components/AddTicket';
import {useState} from 'react';
import { SimpleForm } from './components/SimpleForm';
import { SimpleCustomHook } from './components/SimpleCustomHook';
import { UserApi } from './components/UserApi';
import { AddProductAPI } from './components/AddProductAPI';
import { DisplayProductAPI } from './components/DisplayProductAPI';
import { UpdateProduct } from './components/UpdateProduct';
import { LocalStorageBasic } from './components/LocalStorageBasic';
import { FileUpload } from './components/FileUpload';
import { SessionStorageBasic } from './components/SessionStorageBasic';
import { TableDemo } from './components/TableDemo';
import { GetLocation } from './components/GetLocation';
import { Protectedrouting } from './components/Protectedrouting';
import { Productroutinghome } from './components/Productroutinghome';
import { AboutUs } from './components/AboutUs';
import {Error404} from './components/Error404';
import {GetRequest} from './components/GetRequest'
import { Pro } from './components/ProError';
import { UseQuery } from './components/UseQuery';
import { UseQuery1 } from './components/UseQuery1';
import { UseQuery2 } from './components/UseQuery2'
import { UseQueryr } from './components/UseQueryr';
import { UseQuery3 } from './components/UseQuery3';
import {UseDemo4} from './components/UseDemo4';
import { RapidApiWeather } from './components/RapidApiWeather';
import { RapidApiStocks } from './components/RapidApiStocks';
import { MaterailUIBasic } from './components/MaterailUIBasic';
import UserContextProvider from './context/UserContextProvider';
import { UserDemo } from './context/UserDemo';
import { UserContext3 } from './context/UserContext3';
import { UserContext1 } from './context/UserContext1';
function App() {
  //javascript 
  // var name="vraj"//string
  // var num=23//int
  // var numf=12.24//float
  // var age=true//boolean
  // var st={
  //   color:"red"
  // }//css property
  // var obj = [{
  //   name: "patel",
  //   age: 23,
  //   gender: "male"
  // }, {
  //   name: "fda",
  //   age: 21,
  //   gender: "female"
  // }]//obj array
  // var o={name:"patil",
  // age:21,
  // gender:"female"}

  // //onclick
  // function run(){
  //   alert("this is alert")
  // }
  // console.log(numf)
  // // if(age){
  // //   return <div>hello world</div>
  // // }

  // var tickets=[{name:"badshah",type:"thrill"},{name:"Premi devana",type:"romance"}];
  
  // const [tickets, settickets] = useState([{name:"badshah",type:"thrill"},{name:"Premi devana",type:"romance"}])
  // const [count, setcount] = useState(1)
  // const deleteTicket=(ticket)=>{
  //   settickets(tickets.filter(t=>t.name!==ticket.name))
  // }
  // const addTicket=(ticket)=>{
  //   settickets([...tickets,ticket])
  // }
  // const countVal=(e)=>{
  //     setcount(count+e)
  //     console.log(count)
  // }


  //for product id
  // const [id, setid] = useState()
  // const setproductId=(id)=>{  
  //   setid(id)
  // }
  
  return (
    <div className="App">

      {/* <h1>Kem chho</h1>
      <h2>{name}</h2>
      <h2>ANS = {num}</h2>
      <h2>numf={numf}</h2>
      <h2 style={st}>18+ 
        {
          age?"YES":"NO"
        }
      </h2>
      {age&&<h1>hi</h1>}
      {!age&&<h1>hello</h1>}
      {obj.map((stu)=>{
        return([
          <h2>{stu.name}</h2>,
          <h2>{stu.age}</h2>,
          <h2>{stu.gender}</h2>,
        ])
      })} 
      {/* {run()} */}
      {/* <h2>{o.name}</h2> */}

      {/* <button onClick={()=>run()}>Alert</button> } */}
      {/* <Home obj={obj}/> */}

      {/* <Link className='btn btn-primary' to={'/movies'}>Movies click</Link> */}
      {/* {<ReactForm />} */}
      {/* <Movies/> */}
      {/* {<AddTicket/>} */}
      
      {/* {<AddTicket addTicket = {addTicket}/>} */}
      {/* {<TicketDetails tickets={tickets} deleteTicket={deleteTicket} countVal={countVal} count={count}/>} */}
      {/* {<SimpleCustomHook/>} */}
      {/* {<UserApi/>} */}

      {/* {<AddProductAPI/>}
      {<DisplayProductAPI />} */}
      {/* {<UpdateProduct/>} */}
      {/* <LocalStorageBasic/> */}
      {/* <FileUpload/> */}
      {/* <TableDemo/> */}
      {/* <GetLocation/> */}
      {/* <Protectedrouting/> */}
      {/* <GetRequest/> */}
      {/* <Pro/> */}
      {/* <UseQuery/> */}
      {/* <UseQueryr/> */}
      {/* <UseQuery3/> */}
      {/* <UseDemo4/> */}
      {/* <SessionStorageBasic/> */}
      {/* <RapidApiWeather/> */}
      {/* <RapidApiStocks/> */}
      {/* <MaterailUIBasic/> */}
      {/* <UserContextProvider> */}
        {/* <UserDemo/> */}
        {<UserContext1/>}
      <Routes>
        
        {/* <Route path="/movies" element={<Movies />}></Route> */}
        {/* <Route path='/movies/moviesdetail/:id' element={<MoviesDetail />}></Route> */}
        {/* <Route path='/employeeDetails/:id' element={<EmployeeDetails />}></Route> */}
        {/* <Route path={"/updateproduct/:id"} element={<UpdateProduct />}></Route> */}
        {/* { sessionStorage.getItem('name') =="string" ?
        <Route path="/home" element={<Productroutinghome />}></Route>
        :"/"}
        <Route path="*" element={<Error404/>}></Route>
        <Route path="/" element={<AboutUs/>}></Route> */}
        {/* <Route path="/usequery1" element={<UseQuery1/>}></Route>
        <Route path="/usequery2" element={<UseQuery2/>}></Route> */}
      </Routes>
      {/* </UserContextProvider> */}

    </div>
  );
}

export default App;

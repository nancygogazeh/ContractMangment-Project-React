import { useState } from "react";
import Popups from './components/Popups';
import './components/Popup.css'
import CompanyPopup from './components/CompanyPopup';
import CreateUser from './components/CreateUser'
import axios from "axios"
import { useEffect} from "react";



function Contract() {
  const [data, setData] = useState("");
  const [buttonPopup, setButtonPopup ] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenn, setIsOpenn] = useState(false);

  const inputHandler = (event) => {
    setData(event.target.value);
  };
  const [contracts, setUsers] = useState([]);
  useEffect(() => {
      getUsers();
  }, []);

  function getUsers() {
      axios.get('http://localhost/project7API/cont.php').then(function(response) {
          console.log(response.data);
          setUsers(response.data);
      });
  }

  return (
    <div >
      
  
  <section id="portfolio" className="section-bg mt-5">
  <div className="container">
    <header className="section-header">
      <h3 className="section-title">Contracts</h3>
    
      <button   onClick={() => {
          setButtonPopup(true);
        }} className='btn1' > Add Contract</button>
      <CreateUser
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        name={data}
      ></CreateUser>
    </header>
    
    <div className="row portfolio-container">
      {contracts.map((user, key) =>
      <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
        <div className="portfolio-wrap">
        
          <figure key={key}>
        
            <div>
            <h1 style={{marginTop: 50}}>{user.contractName}</h1>
            <div className='inRow'>
            <h5>{user.startdate}</h5>  <h5>{user.enddate}</h5></div>
            <h3>{user.totalCost}</h3>
            </div>
       
            
           
         <button onClick={() => {setIsOpen(true);}} className="link-preview" title="Contract Details"><i className="ion ion-eye" /></button>


      <Popups trigger={isOpen} setTrigger={setIsOpen} name={data}></Popups>
           <button  onClick={() => {setIsOpenn(true);}} data className="link-details" title="Company Details"><i className="ion ion-android-open" /></button>
             <CompanyPopup  trigger={isOpenn} setTrigger={setIsOpenn} name={data} id={user.id} > </CompanyPopup> 
          </figure> 
          <div >
          <h4><a href=" ">{user.id}</a></h4>
            <h4><a href=" ">{user.contractName}</a></h4>
            <div className='inRow'>
            <h6>{user.officerName}</h6> <h6> {user.employeeNumber}</h6></div>
           
          </div>
        </div>
      </div>   )}  
    
    </div>
  </div>
</section>



  </div>
  )
}

export default Contract


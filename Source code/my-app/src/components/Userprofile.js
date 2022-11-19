import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Userprofile() {


    const navigate = useNavigate();

    const [userInfo, setInfo]=useState({
        name:"",
        email:"",
        phone:"",
        department:''



       }) 


    const [updateMassage,setMassage]=useState('')
    const id = sessionStorage.getItem("id");

    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
        axios.get(`http://localhost/project7API/reg.php/${id}`).then(function(response) {
            setInfo(response.data);
        });
    }
    console.log(id)

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInfo(values => ({...values, [name]: value}));
    }
    const handleSubmit = (e) => {
        
        e.preventDefault();
        axios.put(`http://localhost/project7API/reg.php/${id}`, userInfo).then(function(response){
            navigate('/Userprofile');
        });
        
    }













    return (
<>
<br/><br/><br/><br/><br/><br/>
<div className="container mt-5">
  <div className="main-body">
    <div className="row">
      <div className="col-lg-8">
        <div className="card">
          <div className="card-body">



            <form onSubmit={handleSubmit}>



{/* id */}
            <div className="row mb-3">
                <div className="col-sm-3">
                  <h6 className="mb-0">Employee number</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input disabled className="form-control"  value={userInfo.id} />
                </div>
              </div>


{/* Name */}
              <div className="row mb-3">
                <div className="col-sm-3">
                  <h6 className="mb-0">Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input required name="name" type="text" className="form-control"  value={userInfo.name}     onChange={handleChange}/>
                </div>
              </div>

{/* Departmant */}              
<div className="row mb-3">
                <div className="col-sm-3">
                  <h6 className="mb-0">Department</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  
                  <select name="department" className="form-control"
                                                required onChange={handleChange} >
                                                    <option value={userInfo.department}  selected disabled>{userInfo.department} </option>
                                                    <option value='Human Resources'>Human Resources</option>
                                                    <option value={'IT'}>IT</option>
                                                    <option value={'Legal'}>Legal</option>
                                                    <option value='Accounting'>Accounting</option>
                                                </select>
                </div>
              </div>              


{/* Email */}             
              <div className="row mb-3">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input required name="email" type="email" className="form-control" value={userInfo.email}     onChange={handleChange}/>
                </div>
              </div>

{/* Phone */}              
              <div className="row mb-3">
                <div className="col-sm-3">
                  <h6 className="mb-0">Phone</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input required name="phone" type="text" className="form-control" value={userInfo.mobile}     onChange={handleChange}/>
                </div>
              </div>



              <div className="row">
                <div className="col-sm-3" />
                <div className="col-sm-9 text-secondary">
                  <button type="submit" className="btn btn-primary px-4" >Save Changes</button>
                </div>
              </div>
              <br /><br />
              <hr className="my-4" />
            </form>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-column align-items-center text-center"> <br /> <br />
              <img src={userInfo.img} alt="Admin" className="rounded-circle p-1 bg-primary" width={110} />
              <div className="mt-3">
                <br />
                <h4 />
                <br />
              </div>
            </div>
            <hr className="my-4" />
            <div className="row">
              <div className="col-lg-6">
                <label>Registration Date : </label>
              </div>
              <div className="col-lg-6">
                <p className="text-secondary mb-1">{userInfo.created_at}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



</>
  
    );
  }
  
  export default Userprofile;
  










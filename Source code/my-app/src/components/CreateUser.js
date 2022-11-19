import { React ,useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Contract (props) {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost/project7API/cont.php', inputs).then(function(response){
            console.log(response.data);
            navigate('/Contract');
        });
        
    }
    return props.trigger ? (
        <div className='cover'>
          <div className='popup-body'>
          <h3 >Add New Contract</h3>
            <button
              className="btn"
              onClick={() => {
                props.setTrigger(false);
              }}
            >
              Close
            </button>
        <div>

<form className="contactForm" onSubmit={handleSubmit}>
 
 <div className="form-group ">
   <input type="text" name="contractName" className="form-control" id="contractName" placeholder="Contract Name" onChange={handleChange} required />
   
 </div>
 <div className="form-group ">
   <input type="text" className="form-control" name="officerName" id="officerName" placeholder="Officer Name" onChange={handleChange} required />
   
 </div>

<div className="form-group">
 <input type="number" className="form-control" name="employeeNumber" id="employeeNumber" placeholder="Employee Number" onChange={handleChange} required />
 
</div>
<div className="form-group space">   
<div>Start Date: &nbsp;
<input type="date" name="startdate" onChange={handleChange} required /></div> 
<div> End Date: &nbsp;
        <input type="date" name="enddate" onChange={handleChange} required/></div>
 
</div>
<div className="form-group">
<input type="number" className="form-control" name="totalCost" id="totalCost " placeholder="Total cost" onChange={handleChange} required />
 
</div>
<div className="form-group">
<input type="text" className="form-control" name="companyName" id="companyName" placeholder="Company Name" onChange={handleChange} required />
 
</div>
<div className="form-group">
<input type="text" className="form-control" name="companyLocation" id="companyLocation" placeholder="Company Location" onChange={handleChange} required />
 
</div>
<div className="form-group">
<input type="text" className="form-control" name="companyEmployeeName" id="companyEmployeeName" placeholder="Company Employee Name" onChange={handleChange} required/>
 
</div>
<div className="form-group">
<input type="number" className="form-control" name="companyNumber" id="companyNumber" placeholder="Company Number"onChange={handleChange} required />
 
</div>
<div class="text-center"><button type="submit">Add Contract</button></div>
</form>
        </div>
        </div>
        </div>
) : (
    ""
    );};


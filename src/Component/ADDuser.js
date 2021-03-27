import React,{Component} from 'react'
import ServiceUser from '../Service/ServiceUser';
class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            first_name:'',
            last_name:'',
            email:'',
            salary:''

         }
    }
   
     handleChanges = ({ target }) => {
        this.setState({ [target.name]: target.value });
     };
     handleSave=(e)=>{
         e.preventDefault();
         let user=this.state
         console.log(JSON.stringify(user))
         ServiceUser.AddUser(user).then(
             rep=>{
                 this.props.history.push("/")
             }
         )
     }
     handleCansel=()=>{
        this.props.history.push("/")
     }
      
    
    render() { 
        const {first_name,last_name,email,salary}=this.state
        return ( 
            <div>
                <form onSubmit={this.handleSave}> 
                    <fieldset>
                    <legend> Add User </legend>
                    <label>First name</label> <br/>
                    <input type="text" name="first_name"  value={first_name} onChange={this.handleChanges}></input><br/>
                    <label>last name</label><br/>
                    <input type="text" name="last_name"  value={last_name} onChange={this.handleChanges}></input><br/>
                    <label>Email</label><br/>
                    <input type="text" name="email"  value={email} onChange={this.handleChanges}></input><br/>
                    <label>Salary</label><br/>
                    <input type="text" name="salary"  value={salary} onChange={this.handleChanges}></input><br/>
                    
                    <button className="saveB" style={{background :"rgb(27, 185, 27)"}}> Save </button>
                    <button className="cancelB" style={{background: "red"}} onClick={this.handleCansel} > Cancel </button>
                    </fieldset>
                </form>
            </div>
         );
    }
}
 
export default AddUser;
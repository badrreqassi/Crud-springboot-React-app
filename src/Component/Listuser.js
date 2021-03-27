import React,{Component} from 'react'
import ServiceUser from '../Service/ServiceUser';
class ListUser extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            users:[]
         }
    }
    componentDidMount(){
        ServiceUser.getusers().then(
            (Response)=>{
                this.setState({
                    users:Response.data
                })
            }
        )
        console.log(this.state.users)
    }
    handleGetId=(id)=>{
 
 this.props.history.push(`/updateuser${id}`)
    }
    handleDelete=(id)=>{
        ServiceUser.deleteuser(id).then(
            (Response)=>{
                this.setState({
                    users: this.state.users.filter(item =>item.id!==id ) 
                })
            }
        )

    }

    render() { 
        return ( 
            <div className="divList">
                
        <div className="cadr">
            
                          <h2> List Of Users </h2>
                
            <table >
                <thead>
                    <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th> email</th>
                    <th> salary</th>
                    <th> actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                this.state.users.map((user)=>( 
                    <tr key={user.id}>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                        <td>{user.salary}</td>
                        <td> 
                            <button onClick={()=>this.handleGetId(user.id)}> Update </button>
                            <button onClick={()=>this.handleDelete(user.id)}> Delete </button>
                        
                        </td>

                    </tr>
                    ))
                }
                </tbody>

            </table> 
        
        </div>
        </div>
                  );
    }
}
 
export default ListUser;
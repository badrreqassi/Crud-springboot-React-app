import axios from 'axios';
import React,{Component} from 'react'

const url1="http://localhost:8080/api/users"
const url2="http://localhost:8080/api/user/:id"
const url3="http://localhost:8080/api/add"

const url4="http://localhost:8080/api/delete/"


class ServiceUser extends Component {
  getusers(){
return axios.get(url1);
  }
  getUserById(id){
    return axios.get(url2+id);
      }

      AddUser(user){
        return axios.post(url3,user)
      }
      deleteuser(id){
        return axios.delete(url4+id)
      }

}
export default new ServiceUser();
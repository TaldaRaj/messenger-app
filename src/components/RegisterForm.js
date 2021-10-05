import {useState} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


const RegisterForm = () => {

    const [username,setUsername] = useState("")
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")

    const privateKey = 'ba4273d2-2229-4c57-ae31-8fd22341b651'

    const handleSubmit = async(e) => {
      e.preventDefault()
     
var data = {
	"username": username,
	"secret": password,
	"first_name": firstName,
	"last_name": lastName,
}
var headers =  {
  	'PRIVATE-KEY': privateKey
  }

//Chatengine Post Code
// var config = {
// 	method: 'post',
// 	url: 'https://api.chatengine.io/users/',
// 	headers: {
// 		'PRIVATE-KEY': '{{ba4273d2-2229-4c57-ae31-8fd22341b651}}'
// 	},
// 	data : data
// };

// axios(config)
// .then(function (response) {
// 	console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
// 	console.log(error);
//   setError("Registratio Failed!!")
// });


//My Post Code
try{
  await axios.post("https://api.chatengine.io/users/",data,{headers:headers})
  window.location.replace("/login")
}
catch(error){
  console.log(error)
  setError("Registration Failed!!")
}


  
    }
    return (
        <div className="wrapper">
        <div className="form">
          <h1 className="title">Chat Application</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="input" placeholder="First Name" required />
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="input" placeholder="Last Name" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
            <div align="center">
              <button type="submit" className="button">
                <span>Register</span>
              </button>
              <Link to="/" style={{textDecoration:"none",color:"black",textAlign:"center"}}>
            <span >Login</span>
            </Link>
            </div>
            
          
          </form>
          <h2 style={{textAlign:"center"}}>{error}</h2>
        </div>
      </div>
  
    )
}

export default RegisterForm

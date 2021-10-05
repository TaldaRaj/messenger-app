import {useState} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

export const LoginForm = () => {

    const projectId = 'cac9f54b-719a-426a-849d-bcb112a8ee20'

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")
    //const [registerClicked,setRegisterClicked] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const authObject = {'Project-ID': projectId, 'User-Name': username, 'User-Secret': password}

        try{
            await axios.get('https://api.chatengine.io/chats', { headers: authObject })
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
            setError('');
        }
        catch(error)
        {
            setError("Wrong Credentials !!!")
        }
    }

    

    return (
        <div className="wrapper">
          {/* <div className>

          </div> */}
        <div className="form">
          <h1 className="title">Chat Application</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
            <div align="center">
              <button type="submit" className="button">
                <span>Start chatting</span>
              </button>
              <Link to="/register" style={{textDecoration:"none",color:"black",textAlign:"center"}}>
            <span >Register</span>
            </Link>
            </div>

          </form>
          <h1>{error}</h1>
        </div>
      </div>
  
    )
}

import {ChatEngine} from "react-chat-engine"
import ChatFeed from "./components/ChatFeed"
import {LoginForm} from "./components/LoginForm"
import RegisterForm from "./components/RegisterForm"
import {Switch,Route} from "react-router-dom"
//import Error from "./components/Error"
import "./App.css"

function App() {

  const projectID = 'cac9f54b-719a-426a-849d-bcb112a8ee20'

  const user = localStorage.getItem('username')


  return (
    
      <Switch>
        <Route exact path="/">
          {user?
        (<ChatEngine
			height='100vh'
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			projectID={projectID}
      renderChatFeed={(chatAppProps) =>  <ChatFeed {...chatAppProps}/>}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />) : 
    (<LoginForm/>)}
        </Route>
        <Route exact path="/register">
          {user?
        (<ChatEngine
			height='100vh'
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			projectID={projectID}
      renderChatFeed={(chatAppProps) =>  <ChatFeed {...chatAppProps}/>}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />) : 
    (<RegisterForm/>)}
        </Route>
       
  
   </Switch>
  );

 
}

export default App;

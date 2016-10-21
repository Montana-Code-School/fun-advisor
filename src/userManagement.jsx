import React from 'react'
import Login from './login.jsx';
import Logout from './logout.jsx';
import SignUp from './signup.jsx';

class UserManagement extends React.Component {

 	render(){
 		if (!this.props.loggedIn){
            return (<div>
                     <Login setLogin={this.props.setLogin}/>
                     <SignUp setLogin={this.props.setLogin}/>
                    </div>)
        } else {
            return (<div> 
                    <Logout setLogin={this.props.setLogin}/>
                   </div>)
        };
 	}


}

module.exports = UserManagement;
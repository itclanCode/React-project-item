import React, {Component,Fragment} from 'React'
import jrLogo from "./jr-logo.png"
import './register.css'

class Register extends Component {

    render(){
        return (
            <Fragment>
                <div className="jr-header">
                     <div className="jr-header-user-login">
                          <span>注册</span>|<span>登陆</span>
                     </div>
                     <div className="jr-logo">
                          <img src={jrLogo} alt=""/>
                     </div>
                     <div className="jr-download"></div>
                </div>
               
            </Fragment>
        )
    }
}

export default Register
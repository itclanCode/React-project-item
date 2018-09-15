import React, {Component,Fragment} from 'React'
import jrLogo from "./jr-logo.png"
import './register.css'

class Register extends Component {

    render(){
        return (
            <Fragment>
                <div className="jr-header">
                     <div className="jr-header-user-login">
                          <span class="jr-header-user-login-btn register">注册</span>|<span class="jr-header-user-login-btn login">登陆</span>
                     </div>
                     <div className="jr-logo">
                          <img src={jrLogo} alt=""/>
                     </div>
                     <div className="jr-download">
                          <span class="js-download-con">App下载</span>
                     </div>
                </div>
               
            </Fragment>
        )
    }
}

export default Register
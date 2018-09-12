import React,{Component,Fragment} from "React"

import './header.css'
class Header extends Component {
    state = {
        title: "京东金融"
    }
    render() {
        return (
            <Fragment>
                   <div class="header border-bottom">
                         <div className="left"><i className="iconfont icon-back"></i></div>
                         <div className="title">{this.state.title}</div>
                         <div className="right">333</div>
                   </div>
            </Fragment>
        )
    }
}

export default Header
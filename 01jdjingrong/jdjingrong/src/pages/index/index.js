import React, { Component,Fragment} from 'React'
import Header from './components/Header'      // 引入头部组件
import Register from './components/Register'  // 引入注册组件
import Banner from './components/Banner'     // 引入Banner组件
import Icon from './components/icon'         // 引入图标库

class Index extends Component {

    render() {
        return (
            <Fragment>
                  <Header />
                  <Register />
                  <Banner />
                  <Icon />
            </Fragment>

        )
    } 
}

export default Index
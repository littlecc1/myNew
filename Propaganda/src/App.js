import React, {Component} from 'react';
import 'antd/dist/antd.css';
import './App.css';
import {Popover, Carousel, Button, Icon, BackTop, Drawer, Divider} from 'antd';
import {BrowserRouter as Router, Route,Link, Switch} from 'react-router-dom';
import img1 from './assets/1ps.jpg';
import img3 from './assets/3.jpg';
import img6 from './assets/hw.jpg';
import Git from './products/git.js';
import Continous from './products/continous.js';
import Quickbuild from "./products/quickBuild";
import Hr from "./others/hr.js";
import Blog from "./others/blog.js";
import Aboutus from "./others/aboutUs";
import Contactus from "./others/contactUs";
import News from "./others/news";

class App extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  };
  render() {
    const local = localStorage.getItem('locale') || navigator.language || 'zh-CN'
    const contentUs = (
      <div>
        <Link to="/news" > <p className="App-header-right-color">团队大事记</p></Link>
        <Link to="/aboutUs"> <p className="App-header-right-color">我们团队</p></Link>
        <Link to="/contactUs"><p className="App-header-right-color">联系我们</p></Link>
      </div>
    );
    const contentProduct = (
      <div >
       <Link to="/idea" > <p className="App-header-right-color">设计理念</p></Link>
       <Link to="/git"> <p className="App-header-right-color">Git工具</p></Link>
        <Link to="/quickBuild"><p className="App-header-right-color">Quick Build</p></Link>
        <Link to="/continous"><p className="App-header-right-color">持续集成</p></Link>
      </div>
    );
    return (
      <Router>
        <div>
        <div className="App-content">
        <div className="App-header">
        <div className="App-header-right">
          <div className="App-header-right-p" style={{ marginLeft: 70, clear: 'both', whiteSpace: 'nowrap' }}>
            <Popover  placement="bottomLeft"  content={contentUs} trigger="click">
              <p>关于我们</p>
            </Popover>
          </div>
          <div className="App-header-right-p" style={{ marginLeft: 70, clear: 'both', whiteSpace: 'nowrap' }}>
            <Popover  placement="bottomLeft"  content={contentProduct} trigger="click">
              <p>产品</p>
            </Popover>
          </div>
          <div className="App-header-right-p" style={{ marginLeft: 70, clear: 'both', whiteSpace: 'nowrap' }}>
            <Link to="/blog"><p className="App-header-right-color">BLOG</p></Link>
          </div>
          <div className="App-header-right-p" style={{ marginLeft: 70, clear: 'both', whiteSpace: 'nowrap' }}>
            <Link to="/hr"><p className="App-header-right-color">加入我们</p></Link>
          </div>
          <div className="App-header-right-p" style={{ marginLeft: 70, clear: 'both', whiteSpace: 'nowrap' }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </div>
        </div>
        </div>
          <Route exact path="/" component={Home} />
          <Route path="/:id" component={Child} />
      <div className="App-bottom ">
          <div className="App-bottom-div">
          <h3 className="App-bottom-div-top">联系我们</h3>
          <div className="App-bottom-div-line"><p className="App-bottom-div-p">业务咨询：</p><p className="App-bottom-div-phone">13815850831</p></div>
          <div className="App-bottom-div-line"><p className="App-bottom-div-p">总部：</p><p className="App-bottom-div-p">南京市 亚东新城区文</p></div>
            <div className="App-bottom-div-line"><p className="App-bottom-div-p">苑路9号 邮编:210023</p></div>
            <div className="App-bottom-div-line"><p className="App-bottom-div-p">Email：</p><p className="App-bottom-div-p">1501407724@qq.com</p></div>
            <div className="App-bottom-div-line"><p className="App-bottom-div-p">媒体合作：</p><a href={"http://zs.njupt.edu.cn"} className="App-bottom-div-p">zs.njupt.edu.cn</a></div>
          </div>
          <div className="App-bottom-div">
          <h3 className="App-bottom-div-top">关注我们</h3>
            <div className="App-bottom-div-line"><p className="App-bottom-div-wx"><Icon type="wechat" theme="outlined" />微信公众号：</p><p className="App-bottom-div-p">wgc13298309921</p></div>
          </div>
          <div className="App-bottom-div">
            <h3 className="App-bottom-div-top">关于我们</h3>
            <p className="App-bottom-div-p">一些介绍</p>
          </div>
        <div className="App-bottom-div">
          <h3 className="App-bottom-div-top">中文</h3>
          <h3 className="App-bottom-div-En">English</h3>
        </div>
      </div>
      </div>
          <BackTop>
            <div className="ant-back-top-inner"><Icon type="up" theme="outlined" style={{paddingTop:15}} /></div>
          </BackTop>
            <Drawer  title="快速导航" placement="right" closable={true} onClose={this.toggle}
                    visible={this.state.collapsed} >
              <div className="ant-drawer-title">菜单</div>
              <Divider />
              <div className="ant-drawer-body">
                <Link to="/" > <p className="App-drawer-word">首页</p></Link>
                <Link to="/idea" > <p className="App-drawer-word">关于我们</p></Link>
                <Link to="/git" > <p className="App-drawer-word">产品介绍</p></Link>
                <Link to="/hr" > <p className="App-drawer-word">加入我们</p></Link>
              </div>
              <div className="ant-drawer-title">社交媒体</div>
              <Divider />
              <div className="ant-drawer-body">
                <Icon className="App-drawer-icon" type="facebook" theme="outlined" />
                <Icon className="App-drawer-icon" type="wechat" theme="outlined" />
                <Icon className="App-drawer-icon" type="weibo" theme="outlined" />
                <Icon className="App-drawer-icon" type="github" theme="outlined" />
              </div>
              <div className="ant-drawer-title">联系方式</div>
              <Divider />
              <div className="ant-drawer-body">
                <div>
                  <p>业务咨询</p>
                  <p>13815850831</p>
                </div>
                <div>
                  <p>地址</p>
                  <p>南京市 亚东新城区文苑路9号</p>
                </div>
                <div>
                  <p>Email</p>
                  <p>1501407724@qq.com</p>
                </div>
              </div>
            </Drawer>
        </div>
      </Router>
    );
  }
}

const Child = ({match}) => {
  switch(match.params.id ) {
    case "git":return <Git />;
    case "continous": return <Continous />;
    case "quickBuild": return <Quickbuild/>;
    case "hr": return <Hr />;
    case "blog": return <Blog />;
    case "aboutUs": return <Aboutus />;
    case "news" :return <News />;
    case "contactUs": return <Contactus />;
    default:return <Home />;
  }
};
const Home = () => (
  <div className="App-body">
    <Carousel autoplay>
      <div><h3><img className="App-img" src={img1} alt="no img" /></h3></div>
      <div><h3><img className="App-img" src={img3} alt="no img" /></h3></div>
    </Carousel>
    <div className="App-footer">
      <div className="App-footer-button">
        <Button type="primary" shape="circle" size="large" style={{ width:100,height:100 }}><Icon type="eye" theme="outlined" className="App-footer-icon" /></Button>
        <Button type="primary" size="large" shape="circle" style={{ width:100,height:100 }}><Icon type="star" theme="outlined" className="App-footer-icon" /></Button>
        <Button type="primary" shape="circle" size="large" style={{ width:100,height:100 }}><Icon type="rocket"  theme="outlined" className="App-footer-icon" /></Button>
      </div>
      <div className="App-footer-button">
        <h2>资深软件开发团队</h2>
        <h2>多年大数据经验</h2>
        <h2>快速部署，易于使用</h2>
      </div>
      <div className="App-footer-button1">
        <h2 className="App-footer-word ">我们的主创团队全部来自国际名校，行业经验丰富，且熟知企业软件架构。</h2>
        <h2 className="App-footer-word">我们的主创团队有着多年大数据经验</h2>
        <h2 className="App-footer-word">支持多种数据源，提供灵活易用的展现模式，告别传统软件管理系统繁复、刻板的使用方式</h2>
      </div>
    </div>
    <div className="App-footer">
      <div className="App-footer-p" style={{ marginLeft: 70, clear: 'both', whiteSpace: 'nowrap' }}>
        <h2 className="App-footer-wordTitel">客户与合作伙伴</h2>
        <div style={{paddingLeft:130}}>
          <div className="App-footer-button">
            <div><img className="App-imgCus" src={img6} alt="NO IMG" /></div>
            <div><img className="App-imgCus" src={img6} alt="NO IMG" /></div>
            <div><img className="App-imgCus" src={img6} alt="NO IMG" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/*class SwitchCom extends Component {//页面跳转
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    const { location } = this.props;
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }
  render() {
    const { location }  = this.props;
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // not initial render
    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path="/" component={App} />
          <Route path="/git" component={Git} />
        </Switch>
      </div>
    );
  }
}*/
const Progaganda =() => (
    <Router>
        <Route component={App}  />
    </Router>
);

export default Progaganda;

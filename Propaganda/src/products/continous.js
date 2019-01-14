import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Icon} from 'antd';
import {Link} from 'react-router-dom';
import './product.css'
import img1 from '../assets/continous.png';
class Continous extends Component  {
  render(){
    return (
      <div>
        <div>
          <p className="Product-word-left">持续集成工具</p>
          <div className="Product-word-right">
            <Link to="/" > <p className="App-header-right-color">首页</p></Link>
            <p> / </p>
            <p>产品</p>
            <p> / </p>
            <p>持续集成工具</p>
          </div>
        </div>
        <div className="Product-imgContinous" alt="NO IMG" ><div className="Product-word"><Icon type="github" className="Product-Icon" theme="outlined" /></div><p className="Product-word">持续集成是一种软件开发实践，即团队开发成员经常集成它们的工作。每次集成都通过自动化的构建（包括编译，发布，自动化测试）来验证，从而尽早地发现集成错误。
        </p></div>
        <div>
          <div><p className="Product-title"><i>持续集成和预提交测试 （主要功能）</i></p></div>
          <div>
              <ul className="Product-title-left">
                <li> 利用监控/触发器创建和接收通知通过建立监控不打开浏览器</li>
                <li> 在提交到服务器之前运行更改测试，确保更改的有效性。</li>
                <li>  在生成目标代码的同时快速得到反馈</li>
                <li>  可以根据提交的计划进行构建</li>
                <li> 提供实时进程和日志信息的报</li>
              </ul>
              <ul className="Product-title-left">
                <li> 利用监控/触发器创建和接收通知通过建立监控不打开浏览器</li>
                <li>   发送失败通知，保证责任用户及时获得提醒</li>
                <li>    构建的统计图表可以定制</li>
                <li> 建立自动清理策略来减少磁盘空间的使用</li>
              </ul>
          </div>
          <div><p className="Product-title"><i>运行生成的同时快速得到反馈</i></p></div>
          <div className="Product-img">
            <img src={img1} />
          </div>
          <div>
              <ul className="Product-title-left">
                <li> 在一个繁忙的团队，验证构建可以由开发商经常要求</li>
                <li> 这些版本可以尽快向开发者提供快速的反馈是很重要的</li>
                <li>允许不同项目或同一项目同时在多台机器上运行</li>
                <li>此外，一个单一的构建可分为多个步骤</li>
              </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Continous;
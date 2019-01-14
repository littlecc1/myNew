import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Icon} from 'antd';
import {Link} from 'react-router-dom';
import '../products/product.css'
import img1 from '../assets/git1.png';
import img2 from '../assets/git2.png';
import img3 from '../assets/git3.png';
class Blog extends Component  {
  render(){
    return (
      <div>
        <div>
          <p className="Product-word-left">BLOG</p>
          <div className="Product-word-right">
            <Link to="/" > <p className="App-header-right-color">首页</p></Link>
            <p> / </p>
            <p>BLOG</p>
          </div>
        </div>
        <div className="Product-imgJoin" alt="NO IMG" ><div className="Product-word"><Icon type="github" className="Product-Icon" theme="outlined" /></div><p className="Product-word">加入我们，共创未来！</p></div>
        <div>
          <div><p className="Product-title"><i>我们的Git仓库特点</i></p></div>
          <div>
            <p className="Product-title-left">
              <ul>
                <li>提交搜索提示和自动完成 </li>
                <li> 通过符号，文件名和文本进行代码搜索</li>
                <li>源结构轮廓</li>
                <li>跳转到符号定义</li>
                <li>快速突出显示当前文件中的符号出现</li>
                <li>能够控制分支，目录和文件级别的写访问</li>
                <li>能够控制谁可以创建/删除标签</li>
                <li>  防止指定分支的历史被重写</li>
                <li>评论代码或diff的任何部分开始讨论</li>
              </ul>
            </p>
            <p className="Product-title-left">
              <ul>

                <li>需要根据规则批准某些用户或团队</li>
                <li>跟踪审查轮次并通知相关参与者</li>
                <li>跟踪提出的注解</li>
                <li>使用更改过滤来递增pull请求审核</li>
                <li>基于规则的投票在pull请求更新时过时</li>
                <li> 在拉取请求中跟踪提交rebase / squash</li>
                <li>可以在pull请求集成时进行rebase / squash提交</li>
                <li> 预览pull请求集成结果和构建状态</li>
              </ul>
            </p>
          </div>
          <div><p className="Product-title"><i>提交搜索提示和自动完成</i></p></div>
          <div className="Product-img">
            <img src={img1} />
          </div>
          <div><p className="Product-title"><i>源代码大纲</i></p></div>
          <div className="Product-img">
            <img src={img2} />
          </div>
          <div><p className="Product-title"><i>评论任何部分的代码或差异开始讨论</i></p></div>
          <div className="Product-img">
            <img src={img3} />
          </div>
        </div>
      </div>
    )
  }
}
export default Blog;
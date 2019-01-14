// 注意：一定是 exports，不是 export，否则会报错，报错信息是下列的中的内容不是 string
module.exports = {
  placeholder: {
    login: {
      username: '请输入邮箱',
      password: '请输入密码',
      captcha: '请输入验证码'
    },
    forgetPwdPre: {
      email: '邮箱',
      captcha: '验证码'
    },
    forgetPwd: {
      pwd: '密码',
      confirmPwd: '确认密码'
    },
    modifyPwd: {
      pwd: '当前密码',
      newPwd: '新密码',
      confirmNewPwd: '确认新密码'
    },
    modifyPhone: {
      newPhone: '新联系电话'
    },
    modifyOrganization: {
      newOrg: '新组织'
    },
    modifyEmailPre: {
      newEmail: '新邮箱'
    },
    modifyEnail: {

    }
  },
  htmlMsg: {
    login: {
      h3: '登录瀚思统一认证中心',
      p: '请输入邮箱与密码',
      btn: '登录',
      forgetPwd: '忘记密码？',
      footerFront: '2018 © 瀚思科技. All rights reserved ',
      footerBehind: '京ICP备21110142227'
    },
    forgetPwdPre: {
      h3: '申请重置密码',
      p: '请输入注册时的邮箱地址',
      btnSave: '提交',
      btnCancel: '返回'
    },
    forgetPwd: {
      h3: '申请重置密码',
      p: '请输入新的密码',
      btnSave: '提交',
      btnBack: '确认',
      back: '链接已失效，请重新发送邮件！'
    },
    forgetWait: {
      h3: '申请重置密码',
      pFront: '密码重置邮件已发送到',
      pBehind: '请注意查收！',
      btnSave: '确定',
      resetSuccess: '密码重置成功！'
    },
    userCenter: {
      h3: '瀚思用户中心',
      wordH1: '用户资料',
      wordH2: '安全设置',
      companyName: '修改组织名称',
      telNumber: '修改联系电话',
      email: '修改邮箱',
      password: '修改密码',
      back: '返回'
    },
    modifyWait: {
      h3: '修改邮箱',
      p1Front: '邮箱修改邮件已发送到',
      p1Behind: '请注意查收！',
      p2: '链接已失效，请重新发送邮件！',
      p3: '邮箱修改成功！',
      btnSave: '确定'
    },
    modifyPwd: {
      h3: '修改用户密码',
      p: '请输入您的新密码并提交',
      btnSave: '提交',
      btnBack: '返回'
    },
    modifyPhone: {
      h3: '修改联系电话',
      p: '当前联系电话：',
      btnSave: '提交',
      btnCancel: '返回'
    },
    modifyOrganization: {
      h3: '修改组织名称',
      p: '当前组织名称：',
      btnCancel: '返回',
      btnSave: '提交'
    },
    modifyEmailPre: {
      h3: '修改邮箱',
      p: '当前邮箱：',
      btnSave: '提交',
      btnCancel: '返回'
    },
    applicationCenter: {
      li1: '用户中心',
      li2: '退出',
      application: '应用列表',
      wordH1: '应用名',
      wordH2: '上次登录时间',
      btnGo: '前往'
    },
    body: {
      title: '瀚思统一认证中心'
    }

  },
  jsMsg: {
    login: {
      username: '请输入邮箱！',
      captcha: '请输入验证码！'
    },
    forgetPwdPre: {
      emailAddress: '请输入邮箱地址！',
      captcha: '请输入验证码！',
      emailFormat: '邮箱格式不正确！'
    },
    forgetPwd: {
      pwd: '请输入密码！',
      email: '密码为8~20位数字,英文,符号至少两种组合的字符！',
      confirmPwd: '请确认密码！',
      difference: '两次输入密码不同，请重输！'
    },
    modifyPwd: {
      newPwd: '请输入新密码！',
      checkPwd: '密码为8~20位数字,英文,符号至少两种组合的字符！',
      confirmNewPwd: '请确认新密码！',
      difference: '两次输入密码不同，请重新输入！',
      errorPwd: '原始密码错误！'
    },
    modifyPhone: {
      newPhone: '请输入新联系电话！',
      errorPhone: '联系电话格式不正确！',
      samePhone: '与当前联系电话相同！'
    },
    modifyOrganization: {
      newOrg: '请输入新组织！',
      sameOrg: '与当前组织相同！'
    },
    modifyEmailPre: {
      email: '请输入邮箱地址！',
      sameEmail: '与当前邮箱地址相同！',
      checkEmail: '邮箱格式不正确！',
      errorEmail: '邮箱已被注册！'
    },
    applicationCenter: {
      noApplication: '该用户无应用访问权限，请联系管理员!'
    }
  }
};

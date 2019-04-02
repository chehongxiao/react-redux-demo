#运行说明
直接在浏览器中打开index.html和index2.html即可。

#如果修改的js，需要重新编译redux，方法如下：
1. 在当前目录下执行：<br />
`npm install`

2. 然后执行：<br />
`npm run build：编译index.html`<br />
`npm run watch：监控index.js、components/Counter.js、reducers/index.js三个js的修改，并实时编译`<br />
`npm run build2：编译index2.html`<br />
`npm run watch2：监控index2.js的修改，并实时编译`<br />

#在线演示
[Redux实例演示](http://yinluhui.oschina.io/react-redux-primary-demo/webapp/view/index.html "index.html演示")<br />
[React-Redux实例演示](http://yinluhui.oschina.io/react-redux-primary-demo/webapp/view/index2.html "index2.html演示")

#资料参考
[Redux 入门教程](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html "Redux 入门教程")<br />
[react-redux 官方文档](http://www.redux.org.cn/docs/react-redux/quick-start.html "react-redux 官方文档")
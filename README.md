


#  New Project Specification & Use & Problem
### [详细介绍请查看移动端](https://github.com/flyjennyetn/react)
##  Specification 

###  Tree

 - `Utils`中不允许添加新的文件，如果需要新增公共方法，请在对应文件中添加
 - 项目中的所有公共字体、图片、插件、样式和`logo`，都在`assets`文件夹中
```sh  
├─ JYH180315                      项目名  
	├─ app                        项目配置文件       
        ├── components            组件库  
        ├── pages                 容器/页  
        ├── reducers              负责处理action的state更新。  
        ├── sagas             	  负责协调那些复杂或异步的操作。  
        ├─ store
        ├─ utils                  工具库  
		    ├── axios.js          js http库/ajax库
		    ├── axiosv.js         js http库/ajax库 参数格式不同 
		    ├── cache.js          缓存处理  
		    ├── config.js         服务器、接口配置
		    ├── crypto.js         加密解密
		    ├── index.js          公共方法
		    ├── jsonp.js          js http库/ajax库 请求格式不同 
		    ├── service.js        接口配置
		    ├── upload.js         图片上传   
		    ├── verification.js   正则校验   
	    ├── Routes.js             路由
	    ├── template.htm          入口页  
	├── assets          		  资源库   
		├── fonts                 字体库
	    ├── images           	  图片库  
	    ├── js               	  第三方组件
		    ├── axios.js          ajax请求，在ie下有问题，修改源码后挪到了此处
	    ├── scss             	  公共样式
	    ├── favicon.ico      	  logo 
	├── client          		  客户端配置  
		├── entry.dev.js          
	    ├── entry.js           	  
	    ├── entry.prod.js               	
	    ├── index.js             	
	    ├── server.js      	      端口号
	├── .babelrc                  [babel配置文件](https://inv-veri.chinatax.gov.cn) 
	├── .gitignore          		  忽略文件
	├── favicon.ico        	  	  项目icon
	├── package.json              包配置  
	├── postcss.config.js     
	├── README.md     
	├── webpack.build.js  
	├── webpack.config.js  
```
    
##  Problem

### IE

  `IE11`不支持`flex`布局



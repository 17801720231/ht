const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    host:"localhost",   //本地服务
    port:8080,      //本地端口
    proxy:{     //代理
      "/api":{      //起别名
        target:"http://127.0.0.1:3000",    //后台的接口
        changeOrigin:true,    //允许跨域
        pathRewrite:{    //重写路径
          "^/api":"/"
        }
        
      }
    }
  }
})

<template>
  <div class="dlbox">
    <h1>后台管理系统</h1>
    <div class="box">
      <el-form :model="ruleForm" :rules="rules">
        <el-form-item label="用户名" prop="name">
          <el-input type="name" class="inp" v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="pw" class="lab">
          <el-input type="pw" class="inp" v-model="ruleForm.pw"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" class="btm" @click="getfn">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- {{ruleForm.name}} -->
  </div>
</template>

<script>
import router from '@/router';
import inals from "../api/index"
export default {
  name: "Logion",
  data() {
    var validateName = (rule, value, callback) => {
      let rg = /^\w{2,6}$/;
      if (value === "") {
        callback(new Error("请输入密码"));
      }
      if(rg.test(value)){
          return
      }else{
          callback(new Error("格式不正确，文字和字符，最少2个最多6个"));
      }
    };

    var validatePass = (rule, value, callback) => {
      let rg = /^\w{2,6}$/;
      if (value === "") {
        callback(new Error("请输入密码"));
      }
      if(rg.test(value)){
          return
      }else{
          callback(new Error("格式不正确，文字和字符，最少2个最多6个"));
      }
    };

    return {
      ruleForm: {
        name: "",
        pw: "",
      },
      rules: {
        name: [{ validator: validateName, trigger: "blur" }],
        pw: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },

  methods:{
      async getfn(){
        let name = this.ruleForm.name
        let pw = this.ruleForm.pw
        let {data} = await inals.post('/logion',{name,pw})
        console.log(data)
        
        if(data.message == 'success'){
          localStorage.setItem('token',data.data.token)
          console.log(this)
          this.$message({
            message: '恭喜你，这是一条成功消息',
            type: 'success',
            onClose:()=>{
              this.$router.push('/')
            }
          });
        }

        if(data.message == 'fill'){
           this.$message({
          showClose: true,
          message: '错了哦，这是一条错误消息',
          type: 'error'
        });
        }
      }
  },
};
</script>

<style scoped>
.dlbox {
  height: 100vh;
  /* width: 100vh; */
  background: greenyellow;
}
h1 {
  text-align: center;
}
.box {
  width: 350px;
  height: 200px;
  background: #fff;
  margin: 0 auto;
  padding: 20px;
}
.inp {
  width: 280px;
  float: right;
}
.btm {
  width: 100%;
}
</style>
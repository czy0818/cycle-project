<template>

  <div class="right-container">
    <el-row class="header-container">
      <el-col :span="24">
        <div class="qr-login-container">
          <el-tag type="success" style="position: absolute;top: 0;right: 0;margin-right: 70px;margin-top: 10px">
            试试微信登录？
          </el-tag>
          <div class="qr-mask" @mouseenter="()=>{isShow=false}" @mouseleave="()=>{isShow=true}">
            <img class="qr" src="@/assets/icon/qr.svg"
                 alt="">
            <div class="qr-login" v-if="isShow">
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row class="switch-button-container">
      <el-col :span="8" :push="4">
        <div class="left-button">
          <span :class="isShowLine ? 'text' : ''" @click="passwordLogin">密码登录</span>
        </div>
      </el-col>
      <el-col :span="8" :push="4">
        <div class="right-button">
          <span :class="!isShowLine ? 'text' : ''" @click="captchaLogin">验证码登录</span>
        </div>
      </el-col>
    </el-row>


    <el-row class="input-container">
      <el-col :span="20" :offset="2">
        <div class="login-box">
          <!-- 手机号/账号输入框 -->
          <div class="input-wrapper" :class="{ 'has-value': username }">
            <input
                type="text"
                v-model="username"
                class="login-input"
                placeholder=" "
            />
            <label class="input-label">手机号/账号</label>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row class="password-input-container">
      <el-col :span="20" :push="2">
        <div class="login-box">
          <div class="input-wrapper" :class="{ 'has-value': username }">
            <input
                type="password"
                v-model="password"
                class="login-input"
                placeholder=" "
            />
            <label class="input-label">密码</label>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" style="background: #646cff;height: 30px;margin-bottom: 10px">
        111
        <div class="grid-content ep-bg-purple-dark"/>
      </el-col>
    </el-row>
    <el-row style="background: #646cff;height: 80px;margin-bottom: 10px">
      <el-col :span="24" style="background: #646cff">
        111
        <div class="grid-content ep-bg-purple-dark"/>
      </el-col>
    </el-row>
    <el-row style="background: #646cff;height: 30px;margin-bottom: 10px">
      <el-col :span="24" style="background: #646cff">
        111
        <div class="grid-content ep-bg-purple-dark"/>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import {ref} from "vue";

const isShow = ref(true)
const isShowLine = ref(true)
const username = ref("")
const password = ref("")

function passwordLogin() {
  isShowLine.value = true
  console.log("passwordLogin")
}

function captchaLogin() {
  isShowLine.value = false
  console.log("captchaLogin")
}

</script>

<style scoped>
.right-container {
  position: relative;
  color: #1a1a1a;

  .password-input-container{
    background: #646cff;
    height: 70px;
    margin-bottom: 10px;
  }

  .input-container{
    height: 70px;
    margin-bottom: 10px;
    padding: 0;
    .login-box {
      width: 100%;
    }
    .input-wrapper {
      position: relative;
      margin-bottom: 0;
    }
    .login-input {
      margin-top: 20px;
      padding: 0;
      width: 100%;
      height: 40px;
      border: none;
      border-bottom: 1px solid #eee;
      background-color: transparent;
      outline: none;
      font-size: 16px;
      transition: border-color 0.3s;
    }

    .input-label {
      position: absolute;
      left: 5px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 16px;
      color: #999;
      pointer-events: none;
      transition: all 0.3s;
    }
    /* 输入框有内容时的样式 */
    .input-wrapper.has-value .input-label {
      margin-top: 20px;
      top: 0;
      transform: translateY(-50%) scale(0.8);
    }

    .input-wrapper.has-value .login-input {
      border-bottom: 2px solid rgb(3, 187, 122);; /* 下边框变色 */
    }
  }


  .switch-button-container {
    margin-bottom: 40px;
    margin-top: 40px;
    height: 60px;
    font-size: 20px;
    span{
      cursor: pointer;
    }
    .left-button {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .text::after {
        content: "";
        position: absolute;
        bottom: 8px;
        left: 50%;
        transform: translateX(-50%);
        width: 50px;
        height: 4px;
        background: rgb(3, 187, 122);
      }
    }

    .right-button {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .text::after {
        content: "";
        position: absolute;
        bottom: 8px;
        left: 50%;
        transform: translateX(-50%);
        width: 50px;
        height: 4px;
        background: rgb(3, 187, 122);
      }
    }

  }

  .header-container {
    height: 80px;
    margin-top: 20px;
    margin-bottom: 20px;

    .qr-login-container {
      height: 50px;
      position: relative;

      .qr-mask {
        .qr-login {
          position: absolute;
          top: 0;
          right: 0;
          width: 0;
          height: 0;
          border-bottom: 50px solid #ffffff;
          border-right: 50px solid transparent;
          z-index: 2;
        }

        .qr {
          position: absolute;
          top: 0;
          right: 0;
          width: 50px;
          height: 50px;
          z-index: 1;
        }
      }
    }
  }


}
</style>
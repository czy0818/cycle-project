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
        <div class="login-box" v-if="isShowLine">
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
        <div class="login-box" v-else>
          <div class="input-wrapper" :class="{ 'has-value': username }">
            <input
                type="text"
                v-model="username"
                class="login-input"
                placeholder=" "
            />
            <label class="input-label">手机号</label>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row class="password-input-container">
      <el-col :span="20" :push="2">
        <div class="password-box" v-if="isShowLine">
          <div class="input-wrapper" :class="{ 'has-value': password }">
            <input
                type="password"
                v-model="password"
                class="password-input"
                placeholder=" "
            />
            <label class="input-label">密码</label>
            <span class="eye-icon">
          <i class="el-icon-view"></i>
        </span>
          </div>
        </div>
        <div class="captcha-box" v-else>
          <div class="input-wrapper" :class="{ 'has-value': captcha }">
            <input
                type="text"
                v-model="captcha"
                class="password-input"
                placeholder=" "
            />
            <label class="input-label">验证码</label>
            <div class="captcha-button" :class="{ 'disabled': isCounting }"  @click="getCode">
              <span>{{ countdown > 0 ? `${countdown}s后重新获取` : '获取验证码' }}</span>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row class="forget-password-container">
      <el-col :span="20" :push="2">
        <div class="forget-password">
          <span @click="">忘记密码？</span>
        </div>
      </el-col>
    </el-row>


    <el-row class="login-button-container">
      <el-col :span="24" class="col">
        <div class="login-button">
            <span class="text">登录</span>
        </div>
      </el-col>
    </el-row>

    <el-row class="register-text-container">
      <el-col :span="24">
        <div class="register-text">
          <span>没有账号？</span>
          <span class="register-title" @click="">立即注册</span>
        </div>
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
const captcha = ref("")
const countdown = ref(0)
const isCounting = ref(false)

function passwordLogin() {
  isShowLine.value = true
  console.log("passwordLogin")
}

function captchaLogin() {
  isShowLine.value = false
  console.log("captchaLogin")
}

const getCode = () => {
  // 如果倒计时未结束，直接返回
  if (countdown.value > 0) return;
  countdown.value = 60;
  isCounting.value = true;
  const timer = setInterval(() => {
    countdown.value--;
    if (countdown.value <= 0) {
      clearInterval(timer);
      isCounting.value = false;
    }
  }, 1000);
};


</script>

<style scoped>
.right-container {
  position: relative;
  color: #1a1a1a;

  .register-text-container{
    height: 30px;
    margin-bottom: 10px;
    .register-text{
      width: 100%;
      display: flex;
      justify-content: center;
      text-align: center;
      .register-title{
        color: rgb(3, 187, 122);
        border-bottom: 1px solid rgb(3, 187, 122);
      }
    }
  }

  .login-button-container {
    height: 80px;
    margin-bottom: 10px;
    padding: 0;

    .col {
      display: flex;
      justify-content: center;
      align-items: center;

      .login-button {
        height: 80%;
        width: 90%;
        border-radius: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgb(3, 187, 122);
        color: #ffffff;
        font-size: 18px;
      }
    }

  }

  .forget-password-container {
    height: 30px;
    margin-bottom: 10px;
    width: 100%;

    .forget-password {
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  .password-input-container {
    height: 70px;
    padding: 0;
    margin-bottom: 10px;


    .captcha-box {
      width: 100%;
      .captcha-button{
        width: 120px;
        height: 45px;
        line-height: 45px;
        background: transparent;
        border: 1px solid rgb(3, 187, 122);
        color: rgb(3, 187, 122);
        border-radius: 30px;
        position: absolute;
        font-size: 14px;
        cursor: pointer;
        user-select: none; /* 关键！禁止文字被选中 */
        right: 0;
        top: 0;
        display: flex;
        justify-content: center;
        text-align: center;
      }
      /* 禁用状态 */
      .captcha-button.disabled {
        cursor: not-allowed;
        opacity: 0.6;
      }
    }


    .password-box {
      width: 100%;
    }

    .input-wrapper {
      position: relative;
      margin-bottom: 0;
    }

    .password-input {
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
      left: 0;
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

    .input-wrapper.has-value .password-input {
      border-bottom: 2px solid rgb(3, 187, 122);; /* 下边框变色 */
    }

    .eye-icon {
      position: absolute;
      right: 5px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      color: #999;
    }

  }


  .input-container {
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
      left: 0;
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

    span {
      cursor: pointer;
    }

    .left-button {
      height: 100%;
      display: flex;
      justify-content: center;
      user-select: none; /* 关键！禁止文字被选中 */
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
      user-select: none; /* 关键！禁止文字被选中 */
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
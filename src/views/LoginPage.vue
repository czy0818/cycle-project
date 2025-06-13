<template>
  <div class="container">
    <el-row class="card">
      <el-col :span="12" class="left-card">
        <div class="left-card-container">
          <span class="left-title">爱骑行 更健康</span>
          <br>
          <span class="left-title2">让骑行，成为一种生活</span>
        </div>
        <img style="width: 80%;justify-content: center;align-items: center" src="../assets/image/cycle.png"  alt="">

      </el-col>
      <el-col :span="12" class="right-card">
        <LoginForm />
        <div class="grid-content ep-bg-purple-light" />
      </el-col>
    </el-row>
  </div>

</template>

<script setup>

import LoginForm from "@/components/form/LoginForm.vue";
</script>

<style scoped>
.container{
 padding: 0;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  .card{
    width: 1024px;
    height: 670px;
    padding: 0;
    border-radius: 20px 20px 20px 20px;
    overflow: hidden;
    .left-card{
      padding: 60px 0;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
      background: rgb(3, 187, 122);
      .left-card-container{
        width: 90%;
        .left-title{
          font-size: 35px;
          color: #ffffff;
          font-weight: bold;
          font-family: 微軟正黑體,serif;
        }
      }
    }
    .right-card{
      background: #ffffff;
      padding: 20px;
    }
  }
}
</style>
<template>
  <div>
    <el-steps :active="active" align-center>
        <el-step title="Step 1" description="用户角色"></el-step>
        <el-step title="Step 2" description="公司"></el-step>
        <el-step title="Step 3" description="选择你的主题色"></el-step>
    </el-steps>
    <el-card v-if="active === 0">
        <el-card title="管理员" @click="goHome">
            拥有查看所有员工信息
            编辑所有员工信息
            创建新的部门
            更改部门名称
        </el-card>
        <el-card title="普通员工" @click="goHome">
            拥有查看所有员工信息
            编辑个人信息
        </el-card>
    </el-card>
    <el-card v-if="active === 1">

    </el-card>
    <el-card v-if="active === 2">

    </el-card>

  </div>
  
</template>

<script>
export default {
    data() {
        return {
            active: 0
        }
    },
    methods: {
        goHome: function (){
            this.$router.push('/home');
        }
    }

}
</script>

<style>

</style>
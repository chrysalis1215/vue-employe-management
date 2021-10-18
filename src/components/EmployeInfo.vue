<template>
  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="头像">
      <el-upload v-model="form.avatar"></el-upload>
    </el-form-item>
    <el-form-item label="姓名">
      <el-input v-model="form.name" maxlength="10"></el-input>
    </el-form-item>
    <el-form-item label="入职时间">
    <el-date-picker v-model="value1" type="date" placeholder="Pick a day">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="所在区域">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="所属部门">
      <el-select v-model="form.region" placeholder="please select your zone">
        <el-option label="Zone one" value="shanghai"></el-option>
        <el-option label="Zone two" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="电话号码">
      <el-input v-model="form.desc" type="textarea"></el-input>
    </el-form-item>
    <el-form-item label="住址">
      <el-input v-model="form.adress" type="textarea"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">确定</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
export default {
  data() {
    return {
      status: 'edit',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    onReset() {
        console.log('reset')
    }
  },
}
</script>

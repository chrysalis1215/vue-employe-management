<template>
  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="头像">
      <div class="avatar">{{ form.name }}</div>
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </el-form-item>
    <el-form-item label="姓名">
      <el-input v-model="form.name" maxlength="10" disabled></el-input>
    </el-form-item>
    <el-form-item label="入职时间">
    <el-date-picker v-model="value1" type="date" placeholder="Pick a day">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="所在区域">
      <el-input v-model="form.region"></el-input>
    </el-form-item>
    <el-form-item label="所属部门">
      <el-select v-model="form.region" placeholder="please select your zone">
        <el-option label="技术部门" value="shanghai"></el-option>
        <el-option label="产品发展部" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="电话号码">
      <el-input v-model="form.desc" type="number"></el-input>
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
      imageUrl: '',
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
  created() {
    if (!this.$route.params.user) {
      this.noFound = true;
      return;
    }

    this.form.name = this.$route.params.user
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    onReset() {
        console.log('reset')
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  },
}
</script>

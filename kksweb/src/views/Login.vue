<script setup lang="ts">
import { onMounted, ref } from 'vue';
import axios from '../request/index';
import { ElMessage } from 'element-plus';
import UseStore from '../store/UserStore';
import router from '../router/index';
let lname = ref('');
let lpass = ref('');
let loginCheck = () => {
    axios({
        url: `/login.do`,
        method: "POST",
        data: {
            lname: lname.value,
            lpass: lpass.value
        }
    }).then((res) => {
        //请求成功
        if (res.data == 'OK') {
            ElMessage.success("验证成功，可以登录");
            const store = UseStore();
            store.saveAccount(lname.value);
            router.push('/home')
        } else if (res.data == 'Fail') {
            ElMessage.error("验证失败，禁止登录");
        }
        console.log(res);
    }).catch((err) => {
        //请求失败
        console.log(err);
    })

}

onMounted(() => {
    ElMessage.warning("如果不慎退出，请点击“直接登录”");
})

let login = function () {
    router.push('/home');
}

</script>

<template>
    <div style="background-color: pink; width: 100%; height: 100%;">
        <div style="width: 100%;height: 75%;display: flex;justify-content: center;align-items: center;">
            <div style="width: 500px; height: 300px; border-radius: 30px; background-color: rgb(255, 255, 255,0.7); ">
                <div style="width: 100%; height: 30%; line-height: 120px;">
                    <h1 style="text-align: center;">Login</h1>
                </div>
                <div style="width: 100%; height: 70%;">
                    <el-form label-width="auto">
                        <el-row>
                            <el-col :span="12" :offset="6">
                                <el-form-item label="用户名" label-position="right">
                                    <el-input v-model="lname" placeholder="请输入用户名"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12" :offset="6">
                                <el-form-item label="密码" label-position="right">
                                    <el-input v-model="lpass" placeholder="请输入密码"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8" :offset="8">
                                <el-button @click="loginCheck" class="btn" type="primary"
                                    style="width: 100%;">登录</el-button>

                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8" :offset="8">
                                <el-button @click="login" class="btn" type="primary"
                                    style="width: 100%;">无需密码，直接登录</el-button>
                            </el-col>
                        </el-row>
                    </el-form>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.btn {
    background-color: pink;
    border: none;
    border-radius: 15px;
}

.btn:hover {
    background-color: #fff;
    color: pink;
    font-weight: bold;
}
</style>

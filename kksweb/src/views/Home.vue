<script setup lang="ts">
import { ElMessage } from 'element-plus';
import router from '../router/index';
import useStore from '../store/UserStore';
import { onMounted, reactive, ref } from 'vue';

// let router = useRouter();
let store = useStore();
onMounted(() => {

});

let logout = () => {
    store.clearAccount();
    router.push('/login')
}
let toHome = () => {
    router.push('/home')
}
let center = () => {
    ElMessage.warning('未实装')
}
let pwdUpdate = () => {
    ElMessage.warning('未实装')
}

let gotoa = () => {
    router.push('/a')
}
let gotob = () => {
    router.push('/b')
}
let gotoc = () => {
    router.push('/c')
}
let gotod = () => {
    router.push('/d')
}
</script>

<template>
    <div class="common-layout" style="width: 100%; height: 100%;">
        <el-container style="width: 100%; height: 100%;">
            <el-header style="background-color:pink; display: flex; justify-content: left;">
                <div style="width: 80px; height:100%">
                    <el-button class="btn" @click="gotoa"><el-icon>
                            <HomeFilled />
                        </el-icon>主页</el-button>
                </div>
                <div style="width: 80px; height:100%"><el-button class="btn" @click="gotob"><el-icon>
                            <Grid />
                        </el-icon>库存</el-button></div>
                <div style="width: 80px; height:100%"><el-button class="btn" @click="gotoc"><el-icon>
                            <Grid />
                        </el-icon>c</el-button></div>
            </el-header>
            <el-container>

                <el-main>
                    <div>
                        <router-view></router-view>
                    </div>

                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped>
.ep-bg-purple-light {
    background-color: rgb(88, 71, 88);
}

.ep-bg-purple {
    background-color: rgb(244, 75, 244);
}

.el-row {
    margin-bottom: 20px;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.btn {
    width: 80px;
    font-size: 20px;
    height: 100%;
    background-color: pink;
    border: none;
    font-weight: bold;
}

.asidebtn:hover {
    background-color: #fff;
    color: pink;
    font-weight: bold;
}

.asidebtn {
    background-color: pink;
    border: none;
    font-weight: bold;
    font-size: 18px;
}

.btn:hover {
    background-color: #fff;
    color: pink;
    font-weight: bold;
}
</style>

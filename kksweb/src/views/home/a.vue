<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import axios from 'axios';
import { ElMessage } from 'element-plus';
import { todo, warn } from '../../model';
import { Minus, Plus } from '@element-plus/icons-vue'
let object = reactive({
    todoList: Array<todo>(),
    warnList: Array<warn>(),
});

let datas = reactive({
    list: object
});

onMounted(() => {
    axios({
        url: `http://10.10.71.100:8080/test2409/cur/notify`,
        method: "GET"
    }).then((res) => {
        datas.list.todoList = res.data.todoList;
        datas.list.warnList = res.data.warnList;
        ElMessage.success('数据获取成功');
        console.log(datas.list.todoList);
        console.log(datas.list.warnList);
    }).catch((err) => {
        //请求失败
        ElMessage.error('数据获取失败');
        console.log(err);
    })
});

const colors = [
    { color: '#f56c6c', percentage: 20 },
    { color: '#e4e80a', percentage: 40 },
    { color: '#5cb87a', percentage: 60 },
    { color: '#3ee80a', percentage: 80 },
    { color: '#6f7ad3', percentage: 100 },
]

const percentage = ref(44)
const percentage2 = ref(82)


</script>

<template style="width:100% ; height: 100%;">
    <div style="display: flex; height: 100%; border-top:1px solid #ccc ">
        <div style="width: calc(100% - 300px);; height: 1000px; padding: 20px; border-right:1px solid #ccc ">
            <el-collapse>

                <el-badge :value="12" class="item">
                    <el-icon>
                        <Clock />
                    </el-icon>
                    待办事项
                </el-badge>

                <el-collapse-item title=" 待办事项" name="1">
                    <div v-for="(o, i) in datas.list.todoList">
                        {{ i + 1 }}.{{ o.type }}:
                        <a class="a" href="{{ o.link }}" target="_blank">{{ o.title }}</a>
                    </div>

                </el-collapse-item>
                <el-icon>
                    <WarningFilled />
                </el-icon>
                <el-collapse-item title="预警信息" name="2">
                    <div v-for="(o, i) in datas.list.warnList">
                        {{ i + 1 }}.{{ o.type }}:
                        <a class="a" href="{{ o.link }}" target="_blank">{{ o.title }}</a>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
        <div style="width: 300px; height: 1000px; ;">
            <div style="text-align: center;">
                <h1>月度销售进度</h1>
            </div>
            <div style="display: flex; justify-content: center; align-items: center;height: 200px;">
                <el-progress type="dashboard" :percentage="percentage" :color="colors" />
            </div>
            <div style="text-align: center;">
                <h1>年度销售进度</h1>
            </div>
            <div style="display: flex; justify-content: center; align-items: center;height: 200px;">
                <el-progress type="dashboard" :percentage="percentage2" :color="colors" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.a {
    color: #999;
    text-decoration: none;
}

.a:hover {
    color: #333;
    text-decoration: underline;
}

.demo-progress .el-progress--line {
    margin-bottom: 15px;
    max-width: 600px;
}

.demo-progress .el-progress--circle {
    margin-right: 15px;
}

.test {
    color: #5cb87a;
}
</style>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import axios from 'axios';
import { ElMessage } from 'element-plus';

interface goods {
    "empno": number,
    "ename": string,
    "job": string,
    "mgr": number,
    "hiredate": string,
    "sal": number,
    "comm": number,
    "deptno": number
}

let datalist = reactive(new Array<goods>());
let data = reactive({
    "datalist": datalist
});


let search = () => {
    axios({
        url: 'http://localhost:8080/gkpro_1023/emp.do',
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: {
            "deptno": "10",
            "minsal": "3000",
            "maxsal": "50000"
        }
    }
    ).then(res => {
        ElMessage.success("数据查询成功")
        data.datalist = res.data
        console.log(res)
    }).catch(err => {
        ElMessage.error("数据查询失败")
        console.log(err)
    })
}




</script>

<template>
    <div>
        <button @click="search">查询</button>
    </div>
    <div style="display: flex; border-top:1px solid #ccc ;padding: 20px;">
        <el-table :data="data.datalist" border style="width: 100%">
            <el-table-column fixed prop="empno" label="empno" width="150" />
            <el-table-column prop="ename" label="ename" width="120" />
            <el-table-column prop="job" label="job" width="120" />
            <el-table-column prop="mgr" label="mgr" width="180" />
            <el-table-column prop="hiredate" label="hiredate" width="120" />
            <el-table-column prop="sal" label="sal" width="120" />
            <el-table-column prop="comm" label="comm" width="120" />
            <el-table-column prop="deptno" label="deptno" width="120" />
            <el-table-column fixed="right" label="操作" min-width="120">
                <template #default>
                    <el-button type="primary"><el-icon>
                            <Plus />
                        </el-icon>补充库存</el-button>
                    <el-button type="warning"><el-icon>
                            <Plus />
                        </el-icon>历史记录</el-button>
                    <el-button type="danger"><el-icon>
                            <Plus />
                        </el-icon>下架商品</el-button>

                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<style scoped></style>

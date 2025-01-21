<script setup lang="ts">
import { reactive, ref } from 'vue';
import axios from 'axios';
import { ElMessage } from 'element-plus';

const colors = [
    { color: '#f56c6c', percentage: 20 },
    { color: '#e6a23c', percentage: 40 },
    { color: '#5cb87a', percentage: 60 },
    { color: '#1989fa', percentage: 80 },
    { color: '#6f7ad3', percentage: 100 },
]

const percentage = ref(44)
const percentage2 = ref(82)
interface goods {
    "goodID": number,
    "goodName": string,
    "type": string,
    "price": number,
    "inventory": number
}

let gname = ''
let datalist = reactive(new Array<goods>());
let data = reactive({
    "gname": gname,
    "datalist": datalist
});


let search = () => {
    axios({
        url: 'http://10.10.71.100:8080/test2409/cur/good',
        method: "POST",
        data: { "gname": data.gname }
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
    <div style="display: flex; border-top:1px solid #ccc ;padding: 20px;">
        <div style="width: calc(100% - 300px); border-right:1px solid #ccc; ">
            <div style="display: flex; justify-content: space-between;">
                <div>
                    <el-button type="primary" size="default" @click="">新增</el-button>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <div style="width: 100px; margin-top: 5px;">
                        名称：
                    </div>
                    <el-input v-model="data.gname" placeholder="请输入"></el-input>&nbsp;
                    <el-button style="margin-top: 2px;" type="primary" size="default" @click="search">
                        <el-icon>
                            <Search />
                        </el-icon>搜索</el-button>

                </div>

            </div>
            <div style="margin: 20px;">
                <el-table :data="data.datalist" border style="width: 100%">
                    <el-table-column fixed prop="goodID" label="商品编号" width="150" />
                    <el-table-column prop="goodName" label="商品名称" width="120" />
                    <el-table-column prop="type" label="分类" width="120" />
                    <el-table-column prop="price" label="成本价" width="180" />
                    <el-table-column prop="inventory" label="库存" width="120" />
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
        </div>
        <div style="width: 300px; height: 1000px;">
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
.demo-progress .el-progress--line {
    margin-bottom: 15px;
    max-width: 600px;
}

.demo-progress .el-progress--circle {
    margin-right: 15px;
}
</style>

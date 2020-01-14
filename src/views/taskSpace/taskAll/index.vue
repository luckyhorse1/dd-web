<template>
  <div class="app-container">
    <el-card class="filter-container" shadow="never">
      <div>
        <i class="el-icon-search"></i>
        <span>筛选搜索</span>
        <el-button
          style="float:right"
          type="primary"
          @click="handleSearchList()"
          size="small">
          查询搜索
        </el-button>
        <el-button
          style="float:right;margin-right: 15px"
          @click="handleResetSearch()"
          size="small">
          重置
        </el-button>
      </div>
      <div style="margin-top: 15px">
        <el-form :inline="true" size="small" label-width="140px">
          <el-form-item label="选择城市：">
            <el-cascader
              clearable
              v-model="cityValue"
              :options="cityOptions"
              :props="{expandTrigger: 'hover'}">
            </el-cascader>
          </el-form-item>
          <el-form-item label="选择时间：">
            <el-date-picker
              class="input-width"
              value-format="yyyy-MM-dd"
              type="date"
              placeholder="请选择时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="选择薪酬：">
            <el-cascader
              clearable
              v-model="moneyValue"
              :options="moneyOptions"
              :props="{expandTrigger: 'hover'}">
            </el-cascader>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>


<script>
  export default {
    name: 'TaskAll',
    data() {
      return {
        cityValue: '',
        cityOptions: [],
        provinceList: [{id: 1, name: '北京'}, {id: 2, name: '河南'}, {id: 3, name: '浙江'}, {id: 4, name: '安徽'}, {id: 5, name: '山西'}],
        cityList: [
          [{value: 1, label: '北京'}],
          [{value: 1, label: '郑州'}, {value: 2, label: '周口'}],
          [{value: 1, label: '杭州'}, {value: 2, label: '绍兴'}],
          [{value: 1, label: '合肥'}, {value: 2, label: '六安'}],
          [{value: 1, label: '太原'}, {value: 2, label: '大同'}],
        ],

        moneyValue: '',
        moneyOptions: [
          {value: 1, label: '0-1k'}, {value: 2, label: '1k-5k'},{value: 3, label: '5k-1w'},{value: 4, label: '1w-2w'},
        ],
      }
    },
    created () {
      for (let i=0; i<this.provinceList.length; i++) {
        this.cityOptions.push({label: this.provinceList[i].name, value: this.provinceList[i].id, children: this.cityList[i]})
      }
    },
    methods: {
      handleSearchList() {
        console.log(this.value)
      }
    }
  }
</script>

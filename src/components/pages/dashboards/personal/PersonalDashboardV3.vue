<script setup lang="ts">
import 'vue-good-table/dist/vue-good-table.css'
import { ref } from 'vue'
import axios from 'axios'

interface IColumnDataType {
  label: string
  field: string
}

const columnData = ref<IColumnDataType[]>([
  {
    label: 'ID',
    field: 'id',
  },
  {
    label: 'Name',
    field: 'name',
  },
  {
    label: 'Initials',
    field: 'initials',
  },
  {
    label: 'Location',
    field: 'location',
  },
  {
    label: 'Pic',
    field: 'pic',
  },
])

interface IRowDataType {
  id: number
  name: string
  initials: string
  location: string
  pic: string
}

const isDataLoaded = ref<boolean>(false)

const windowWidth = ref(window.innerWidth)
const windowHeight = ref(window.innerHeight)
const rowData = ref<IRowDataType[]>()

const limit = reactive({
  lower: 0,
  higher: 5,
})

const getRowData = () => {
  axios.get('http://localhost:8080/companies').then((res) => {
    rowData.value = res.data
    isDataLoaded.value = true
  })
}

const checkValue = (rowItem: string | number): boolean => {
  return typeof rowItem === 'string' && rowItem.includes('svg') ? true : false
}
const elementStyle = ref({
  width: window.innerWidth,
  height: window.innerHeight,
})
const showAllData = () => {
  // console.log('window.innerHeight ', window.innerHeight)
  // console.log('window.innerwidth ', window.innerWidth)
  // window.innerHeight = 15
  // window.innerWidth = 17
  // console.log('window.innerHeight ', window.innerHeight)
  // console.log('window.innerwidth ', window.innerWidth)
  // Implement the logic to set the window size here
  // For example, setting the window size to 800x600
  // window.resizeTo(800, 600)
  // Update the data properties to reflect the new window size
  // windowWidth.value = window.innerWidth
  // windowHeight.value = window.innerHeight
  elementStyle.value.width = '300px'
  elementStyle.value.height = '300px'
  limit.higher = rowData.value?.length
}
onMounted(() => {
  getRowData()
})
</script>

<template>
  <table :style="elementStyle" class="table is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th v-for="column in columnData" :key="column.field" scope="col">
          {{ column.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rowData?.slice(limit.lower, limit.higher)" :key="row.id">
        <td v-for="(rowItem, index) in row" :key="index">
          <!-- <img v-if="checkValue(rowItem)" alt="imagehere" :src="rowItem" />
          <p v-else>{{ rowItem }}</p> -->
          {{ rowItem }}
        </td>
      </tr>
      <button v-if="rowData?.length > limit.higher" @click="showAllData">
        Show more
      </button>
    </tbody>
  </table>
  <iframe> </iframe>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

tr {
  td:nth-child(3) {
    span {
      width: 250px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: block;
    }
  }
}

input {
  margin-top: 7px;
  margin-bottom: 3px;
  margin-left: 12px;
}

.field {
  display: flex;

  label {
    margin-top: 16px;
  }
}
</style>

<script setup lang="ts">
import 'vue-good-table/dist/vue-good-table.css'
import { reactive, ref } from 'vue'
import { VueGoodTable } from 'vue-good-table-next'
import axios from 'axios'

interface IColumnDataType {
  label: string
  field: string
}

const columnData = ref<IColumnDataType[]>([
  {
    label: 'Product Name',
    field: 'product_name',
  },
  {
    label: 'Original Price',
    field: 'original_price',
  },
  {
    label: 'Sale Price',
    field: 'sale_price',
  },
  {
    label: 'Product Count',
    field: 'product_type',
  },
  {
    label: 'Description',
    field: 'description',
  },
])

interface IRowDataType {
  product_name: string
  original_price: number
  sale_price: number
  product_type: number
  description: string
}

let isDataLoaded = ref<boolean>(false)

const isEditing = ref<boolean>(false)

const rowData = ref<IRowDataType[]>()

const newRowData: IRowDataType = reactive({
  product_name: '',
  original_price: 0,
  sale_price: 0,
  product_type: 0,
  description: '',
})

const openForm = () => {
  isEditing.value = !isEditing.value
  isDataLoaded.value = !isDataLoaded.value
}
const addData = async () => {
  try {
    const postPayload = {
      product_name: newRowData.product_name,
      original_price: newRowData.original_price,
      sale_price: newRowData.sale_price,
      product_type: newRowData.product_type,
      description: newRowData.description,
    }
    axios.defaults.headers['api_key'] = 'Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH'
    const apiUrl = 'https://lobster-app-ddwng.ondigitalocean.app/product/add_new'
    await axios.post(apiUrl, postPayload)
    newRowData.product_name = ''
    newRowData.original_price = 0
    newRowData.sale_price = 0
    newRowData.product_type = 0
    newRowData.description = ''
    getRowData()
    isEditing.value = false
  } catch (error) {
    console.error('Error sending POST request:', error)
  }
}
const getRowData = () => {
  axios.defaults.headers['api_key'] = 'Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH'
  axios.get('https://lobster-app-ddwng.ondigitalocean.app/product/list').then((res) => {
    rowData.value = res.data.message
    isDataLoaded.value = true
  })
}
onMounted(() => {
  getRowData()
})
</script>

<template>
  <vue-good-table
    v-if="isDataLoaded"
    :columns="columnData"
    :rows="rowData"
    :search-options="{ enabled: true, trigger: 'enter', placeholder: 'search here' }"
    :pagination-options="{ enabled: true, mode: 'pages' }"
    initial-sort-by="{field: 'product_name', type: 'asc'}"
  />
  <button v-if="isDataLoaded" @click="openForm">Add new item</button>
  <form v-if="isEditing" @submit.prevent="addData">
    <div>
      <label>Please insert your product name</label
      ><input
        v-model="newRowData.product_name"
        type="text"
        required
        placeholder="Please enter title.."
      />
    </div>
    <div>
      <label>Please insert your product original price</label
      ><input
        v-model="newRowData.original_price"
        type="number"
        required
        placeholder="Please enter price.."
      />
    </div>
    <div>
      <label>Please insert your product sale price</label
      ><input
        v-model="newRowData.sale_price"
        type="number"
        required
        placeholder="Please enter sale price.."
      />
    </div>
    <div>
      <label>How many product you want</label
      ><input
        v-model="newRowData.product_type"
        type="number"
        required
        placeholder="Please enter product count.."
      />
    </div>
    <div>
      <label>Please insert some description</label
      ><input
        v-model="newRowData.description"
        type="text"
        required
        placeholder="Please enter some description.."
      />
    </div>
    <button type="submit">Add item</button>
  </form>
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
</style>

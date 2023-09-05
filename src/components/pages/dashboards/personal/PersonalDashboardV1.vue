<script setup lang="ts">
import 'vue-good-table/dist/vue-good-table.css'
import { reactive, ref } from 'vue'
import { VueGoodTable } from 'vue-good-table-next'
import axios from 'axios'
import { boolean } from 'zod'
import { validate } from 'vee-validate'

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

interface validation {
  product_name: boolean
  product_name_errorMessage: string
  original_price: boolean
  original_price_errorMessage: string
  sale_price: boolean
  sale_price_errorMessage: string
  product_type: boolean
  product_type_errorMessage: string
  description: boolean
  description_errorMessage: string
}

let isDataLoaded = ref<boolean>(false)

const isEditing = ref<boolean>(false)

const rowData = ref<IRowDataType[]>()

const isButtonDisabled = ref<boolean>(true)

const isError: validation = reactive({
  product_name: false,
  product_name_errorMessage: 'product name > 5 and less than 15',
  original_price: false,
  original_price_errorMessage: 'original price should be greater than 0rs',
  sale_price: false,
  sale_price_errorMessage: '',
  product_type: false,
  product_type_errorMessage: "Product count won't exceed 10",
  description: false,
  description_errorMessage: 'Description should be grater than 20 chars',
})

const newRowData: IRowDataType = reactive({
  product_name: '',
  original_price: '',
  sale_price: '',
  product_type: '',
  description: '',
})

const openForm = () => {
  isEditing.value = !isEditing.value
  isDataLoaded.value = !isDataLoaded.value
}

const buttonDisabledCheck = () => {
  if (
    newRowData.product_name.length > 0 &&
    newRowData.original_price > 0 &&
    newRowData.sale_price > 0 &&
    newRowData.product_type > 0 &&
    newRowData.description.length > 0
  ) {
    isButtonDisabled.value = false
  } else {
    isButtonDisabled.value = true
  }
}

function debounceFunc(func, delay) {
  let timeoutId: number

  return function (...args) {
    clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

// Create a debounced version of your function
const betterButtonDisabledCheck = debounceFunc(buttonDisabledCheck, 300) // Adjust the delay as needed (e.g., 300 milliseconds)

const validateFormProductName = () => {
  if (newRowData.product_name.length > 5 && newRowData.product_name.length < 15) {
    var pattern = /[^a-zA-Z0-9\s]/
    if (pattern.test(newRowData.product_name)) {
      isError.product_name = true
      isError.product_name_errorMessage =
        'product name should not contain any special character'
    } else {
      isError.product_name = false
      isError.product_name_errorMessage = ''
    }
  } else {
    isError.product_name = true
    isError.product_name_errorMessage =
      'product name should contains only 5 to 15 characters'
  }
}

const validateFormProductOriginalPrice = () => {
  if (newRowData.original_price <= 0) {
    isError.original_price = true
    isError.original_price_errorMessage = 'Original price cannot be zero or negative'
  } else {
    isError.original_price = false
    isError.original_price_errorMessage = ''
  }
}

const validateFormProductSellPrice = () => {
  if (newRowData.original_price >= newRowData.sale_price) {
    isError.sale_price = true
    isError.sale_price_errorMessage =
      'Sale Price cannot be lower than or equal to original price'
  } else {
    isError.sale_price = false
    isError.sale_price_errorMessage = ''
  }
}

const validateFormProductCount = () => {
  if (newRowData.product_type > 10) {
    isError.product_type = true
    isError.product_type_errorMessage = 'Product count should not exceed 10'
  } else {
    isError.product_type = false
    isError.product_type_errorMessage = ''
  }
}

const validateFormDescription = () => {
  if (newRowData.description.length < 20) {
    isError.description = true
    isError.description_errorMessage = 'Description should be grater than 20 chars'
  } else {
    isError.description = false
    isError.description_errorMessage = ''
  }
}

const validateForm = () => {
  validateFormProductName()
  validateFormProductOriginalPrice()
  validateFormProductSellPrice()
  validateFormProductCount()
  validateFormDescription()
  if (
    !isError.product_name &&
    !isError.original_price &&
    !isError.sale_price &&
    !isError.product_type &&
    !isError.description
  ) {
    addData()
  }
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
  <form v-if="isEditing" @submit.prevent="validateForm">
    <VField>
      <VLabel>Please insert your product name</VLabel>
      <VControl>
        <VInput
          v-model="newRowData.product_name"
          type="text"
          required
          placeholder="Please enter title.."
          @blur="betterButtonDisabledCheck"
        />
        <p v-if="isError.product_name" class="help has-text-danger">
          {{ isError.product_name_errorMessage }}
        </p>
      </VControl>
    </VField>
    <VField>
      <VLabel>Please insert your product original price</VLabel>
      <VControl>
        <VInput
          v-model="newRowData.original_price"
          type="number"
          required
          placeholder="Please enter price.."
          @change="betterButtonDisabledCheck"
        />
        <p v-if="isError.original_price" class="help has-text-danger">
          {{ isError.original_price_errorMessage }}
        </p>
      </VControl>
    </VField>
    <VField>
      <VLabel>Please insert your product sale price</VLabel>
      <VControl>
        <VInput
          v-model="newRowData.sale_price"
          type="number"
          required
          placeholder="Please enter sale price.."
          @change="betterButtonDisabledCheck"
        />
        <p v-if="isError.sale_price" class="help has-text-danger">
          {{ isError.sale_price_errorMessage }}
        </p>
      </VControl>
    </VField>
    <VField>
      <VLabel>How many product you want</VLabel>
      <VControl>
        <VInput
          v-model="newRowData.product_type"
          type="number"
          required
          placeholder="Please enter product count.."
          @change="betterButtonDisabledCheck"
        />
        <p v-if="isError.product_type" class="help has-text-danger">
          {{ isError.product_type_errorMessage }}
        </p>
      </VControl>
    </VField>
    <VField>
      <VLabel>Please insert some description</VLabel>
      <VControl>
        <VInput
          v-model="newRowData.description"
          type="text"
          required
          placeholder="Please enter some description.."
          @blur="betterButtonDisabledCheck"
        />
        <p v-if="isError.description" class="help has-text-danger">
          {{ isError.description_errorMessage }}
        </p>
      </VControl>
    </VField>
    <VButton :disabled="isButtonDisabled" color="primary" type="submit">Add item</VButton>
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

.field {
  display: flex;

  label {
    margin-top: 16px;
  }
}
</style>

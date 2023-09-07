<script setup lang="ts">
import axios from 'axios'
import { onMounted } from 'vue'
const router = useRouter()
interface IjsonData {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

interface IPageControl {
  currentPage: number
  startIndex: number
  totalPage: number
  limit: number
}

const dataList = ref<IjsonData[]>()

const currentPage = ref(1)

const checkClick = (postId: number = 1) => {
  router.push(`comments?postId=${postId}`)
}

const loadMore = () => {
  currentPage.value++
  getRowData()
}

const getRowData = () => {
  axios
    .get(
      `https://jsonplaceholder.typicode.com/comments?_limit=10&_start=${currentPage.value}`
    )
    .then((response) => {
      dataList.value = response.data
    })
    .catch((error) => {
      console.error('An error occurred:', error)
    })
}

onMounted(() => {
  getRowData()
})
</script>

<template>
  <div class="columns is-multiline mb-6">
    <div
      v-for="jsonData in dataList"
      :key="jsonData.id"
      class="column is-4"
      @click="checkClick(jsonData.postId)"
      @keypress="checkClick(jsonData.postId)"
    >
      <VCard radius="smooth" color="success">
        <h3 class="title is-5 mb-2">{{ jsonData.email }}</h3>
        <p>
          {{ jsonData.name }}
        </p>
      </VCard>
    </div>
    <button @click="loadMore">Load more</button>
  </div>
</template>

<style lang="scss"></style>

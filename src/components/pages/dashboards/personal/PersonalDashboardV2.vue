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
const dataList = ref<IjsonData[]>()

const checkClick = (postId: number = 1) => {
  router.push(`comments?postId=${postId}`)
}

onMounted(() => {
  axios.get('https://jsonplaceholder.typicode.com/comments').then((res) => {
    dataList.value = res.data
  })
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
  </div>
</template>

<style lang="scss"></style>

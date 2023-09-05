<script setup lang="ts">
import axios from 'axios'
import { onMounted, onUnmounted } from 'vue'
interface IjsonData {
  postId: number
  id: number
  name: string
  email: string
  body: string
}
const dataList = ref<IjsonData[]>()
onMounted(() => {
  axios.get('https://jsonplaceholder.typicode.com/comments').then((res) => {
    dataList.value = res.data
  })
})

const checkClick = (postId: number = 1) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then((res) => {
      console.log('res ', res.data)
    })
  // console.log('kaise ho beta ', postId)
}
</script>

<template>
  <div class="columns is-multiline mb-6">
    <RouterLink
      v-for="jsonData in dataList"
      :key="jsonData.id"
      class="column is-4"
      :to="{
        name: 'comments',
        query: { id: jsonData.postId },
      }"
      `
      @click="checkClick(jsonData.postId)"
    >
      <VCard radius="smooth" color="success">
        <h3 class="title is-5 mb-2">{{ jsonData.email }}</h3>
        <p>
          {{ jsonData.name }}
        </p>
      </VCard>
    </RouterLink>
  </div>
</template>

<style lang="scss">

</style>

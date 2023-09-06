<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios'

interface IFetchedData {
  body: string
  email: string
  id: number
  name: string
  postId: number
}

const listData = ref<IFetchedData[]>()
const route = useRoute()
onMounted(() => {
  axios
    .get(`https://jsonplaceholder.typicode.com/comments?postId=${route.query.postId}`)
    .then((res) => {
      listData.value = res.data
    })
})
</script>

<template>
  <VCard v-for="info in listData" :key="info.id" class="mt-2" radius="large" color="info">
    <h3 class="title is-5 mb-2">{{ info.email }}</h3>
    <span>{{ info.name }}</span>
    <p>
      {{ info.body }}
    </p>
  </VCard>
</template>

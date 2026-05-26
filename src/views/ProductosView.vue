<script setup>
import { ref } from 'vue'

const productos = ref([])

fetch('https://fakestoreapi.com/products')
  .then((res) => res.json())
  .then((data) => (productos.value = data))
  .catch((err) => console.log(err))
</script>
<template>
  <h1>Productos</h1>
</template>

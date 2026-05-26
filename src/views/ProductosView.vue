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
  <section class="">
    <div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
          />
        </svg>
        <p>Filtros</p>
      </div>
      <div>
        <h3>Categoria</h3>
        <button>Todos</button>
        <button>Calzado</button>
        <button>Accesorios</button>
        <button>Remeras</button>
        <button>Pantalones</button>
      </div>
      <div>
        <h3>Genero</h3>
        <button>Todos</button>
        <button>Hombre</button>
        <button>Mujer</button>
        <button>Unisex</button>
      </div>
      <div>
        <h3>Etiquetas</h3>
        <button>Ofertas</button>
        <button>Nuevo</button>
        <button>Populares</button>
      </div>
    </div>
    <div>
      <div v-for="producto in productos" :key="producto.id">
        <a href="/detalle/">
          <figure>
            <img :src="producto.image" :alt="producto.title" />
          </figure>
          <div>
            <p>{{ producto.title }}</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

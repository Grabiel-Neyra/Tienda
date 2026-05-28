<script setup>
// import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import productos from '../tienda.json' // ← importa el JSON directo

// Cuando quieras pasar a la API real, comentá la línea de arriba
// y descomentá esto:
// const productos = ref([])
// fetch('https://fakestoreapi.com/products')
//   .then((res) => res.json())
//   .then((data) => (productos.value = data))
//   .catch((err) => console.log(err))
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
        <RouterLink :to="`/detalle/${producto.id}`">
          <span v-if="!(producto.tag == null)">{{ producto.tag }}</span>
          <figure>
            <img :src="producto.image" :alt="producto.name" />
          </figure>
          <div>
            <p>{{ producto.name }}</p>
            <p>{{ producto.price }}</p>
            <div>
              <button>
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
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                Agregar
              </button>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

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
  <section class="flex">
    <div class="w-1/4">
      <div class="flex items-center gap-2.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
          />
        </svg>
        <p>Filtros</p>
      </div>
      <div class="w-3/6 border-b pt-3 pb-3 border-gray-200 pt-2.5 flex flex-col items-start">
        <h3 class="uppercase text-base font-semibold tracking-[0.15em] mb-2">Categoria</h3>
        <button class="mb-1 py-1.5 px-2 rounded-xl hover:bg-gray-100 w-full text-start">
          Todos
        </button>
        <button class="mb-1 py-1.5 px-2 rounded-xl hover:bg-gray-100 w-full text-start">
          Calzado
        </button>
        <button class="mb-1 py-1.5 px-2 rounded-xl hover:bg-gray-100 w-full text-start">
          Accesorios
        </button>
        <button class="mb-1 py-1.5 px-2 rounded-xl hover:bg-gray-100 w-full text-start">
          Remeras
        </button>
        <button class="mb-1 py-1.5 px-2 rounded-xl hover:bg-gray-100 w-full text-start">
          Pantalones
        </button>
      </div>
      <div class="w-3/6 border-b pt-3 pb-3 border-gray-200 t-2.5 flex flex-col items-start">
        <h3 class="uppercase text-base font-semibold tracking-[0.15em] mb-2">Genero</h3>
        <button class="mb-1 py-1.5 px-2 rounded-xl hover:bg-gray-100 w-full text-start">
          Todos
        </button>
        <button class="mb-1 py-1.5 px-2 rounded-xl hover:bg-gray-100 w-full text-start">
          Hombre
        </button>
        <button class="mb-1 py-1.5 px-2 rounded-xl hover:bg-gray-100 w-full text-start">
          Mujer
        </button>
        <button class="mb-1 py-1.5 px-2 rounded-xl hover:bg-gray-100 w-full text-start">
          Unisex
        </button>
      </div>
      <div class="w-3/6 border-b pt-3 pb-3 border-gray-200 t-2.5 flex flex-col items-start">
        <h3 class="uppercase text-base font-semibold tracking-[0.15em] mb-2">Etiquetas</h3>
        <button class="mb-1 py-1.5 px-2 rounded-xl hover:bg-gray-100 w-full text-start">
          Ofertas
        </button>
        <button class="mb-1 py-1.5 px-2 rounded-xl hover:bg-gray-100 w-full text-start">
          Nuevo
        </button>
        <button class="mb-1 py-1.5 px-2 rounded-xl hover:bg-gray-100 w-full text-start">
          Populares
        </button>
      </div>
    </div>
    <div class="w-3/4 flex flex-wrap gap-2.5">
      <div class="w-1/4" v-for="producto in productos" :key="producto.id">
        <RouterLink :to="`/detalle/${producto.id}`">
          <span class="absolute" v-if="!(producto.tag == null)">{{ producto.tag }}</span>
          <figure>
            <img class="rounded-3xl" :src="producto.image" :alt="producto.name" />
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

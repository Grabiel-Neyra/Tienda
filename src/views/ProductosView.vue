<script setup>
import { RouterLink } from 'vue-router'
import productos from '../tienda.json' // ← importa el JSON directo
import { computed, ref } from 'vue'

const categoriaSeleccionada = ref('Todos')
const generoSeleccionado = ref('Todos')
const etiquetaSeleccionada = ref('Todos')

const categorias = ['Todos', ...new Set(productos.map((p) => p.category))]
const generos = ['Todos', ...new Set(productos.map((p) => p.gender))]
const etiquetas = ['Todos', ...new Set(productos.map((p) => p.tag).filter((t) => t !== null))]

const productosFiltrados = computed(() => {
  return productos.filter((p) => {
    return (
      (categoriaSeleccionada.value === 'Todos' || categoriaSeleccionada.value === p.category) &&
      (generoSeleccionado.value === 'Todos' || generoSeleccionado.value === p.gender) &&
      (etiquetaSeleccionada.value === 'Todos' || etiquetaSeleccionada.value === p.tag)
    )
  })
})

const contadorDeProducto = computed(() => productosFiltrados.value.length)

// Cuando quieras pasar a la API real, comentá la línea de arriba
// y descomentá esto:
// const productos = ref([])
// fetch('https://fakestoreapi.com/products')
//   .then((res) => res.json())
//   .then((data) => (productos.value = data))
//   .catch((err) => console.log(err))
</script>

<template>
  <section>
    <div>
      <RouterLink to="/">Volver al inicio</RouterLink>
      <p>Todas las colecciones</p>
      <div>
        <h2>Tienda</h2>
        <span>{{ contadorDeProducto }}</span>
      </div>
    </div>
  </section>
  <div class="max-w-7xl mx-auto px-6 lg:px-8 py-8 lg:py-12 flex gap-10">
    <div class="max-w-1/6 min-w-1/6">
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
        <p class="font-semibold">Filtros</p>
      </div>
      <div class="w-full border-b pt-3 pb-3 border-gray-200 flex flex-col items-start">
        <h3 class="uppercase text-base font-semibold tracking-[0.15em] mb-2">Categoria</h3>
        <button
          @click="categoriaSeleccionada = categoria"
          :class="
            categoriaSeleccionada === categoria ? 'bg-black text-white' : ' hover:bg-gray-100'
          "
          class="text-base mb-1 py-1.5 px-2 rounded-xl w-full text-start"
          v-for="categoria in categorias"
          :key="categoria"
        >
          {{ categoria }}
        </button>
      </div>
      <div class="w-full border-b pt-3 pb-3 border-gray-200 t-2.5 flex flex-col items-start">
        <h3 class="uppercase text-base font-semibold tracking-[0.15em] mb-2">Genero</h3>
        <div class="flex flex-wrap gap-2.5">
          <button
            @click="generoSeleccionado = genero"
            :class="
              generoSeleccionado === genero
                ? 'bg-black text-white border-black'
                : 'hover:bg-gray-100  hover:border-gray-950 '
            "
            class="px-3 py-1.5 text-xs border font-medium rounded-full transition-all border-gray-300 text-foreground/60"
            v-for="genero in generos"
            :key="genero"
          >
            {{ genero }}
          </button>
        </div>
      </div>
      <div class="w-full border-b pt-3 pb-3 border-gray-200 t-2.5 flex flex-col items-start">
        <h3 class="uppercase text-base font-semibold tracking-[0.15em] mb-2">Etiquetas</h3>
        <div class="flex flex-wrap gap-2.5">
          <button
            @click="etiquetaSeleccionada = etiqueta"
            :class="
              etiquetaSeleccionada === etiqueta
                ? 'bg-black text-white border-black'
                : 'hover:bg-gray-100  hover:border-gray-950 '
            "
            class="px-3 py-1.5 text-xs border font-medium rounded-full transition-all border-gray-300 text-foreground/60"
            v-for="etiqueta in etiquetas"
            :key="etiqueta"
          >
            {{ etiqueta }}
          </button>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-3 lg:grid-cols-4 gap-2.5">
      <div
        class="relative cols overflow-hidden"
        v-for="producto in productosFiltrados"
        :key="producto.id"
      >
        <RouterLink class="" :to="`/detalle/${producto.id}`">
          <span
            class="absolute top-2 left-3 bg-blue-600 uppercase text-white font-semibold py-1 px-3 text-[12px] z-10 rounded-2xl"
            v-if="producto.tag !== null"
            >{{ producto.tag }}</span
          >
          <div class="relative aspect-square overflow-hidden rounded-2xl mb-4">
            <div>
              <img
                class="hover:scale-110 object-cover transition-all duration-700 ease-out rounded-2xl"
                :src="producto.image"
                :alt="producto.name"
              />
            </div>
            <div
              class="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
            >
              <button
                class="w-full bg-foreground/90 backdrop-blur-sm text-background py-3.5 flex items-center justify-center gap-2 text-sm font-medium tracking-wide hover:bg-foreground transition-colors"
              >
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
          <div>
            <p class="font-medium text-foreground text-sm tracking-tight">{{ producto.name }}</p>
            <p class="text-sm font-semibold text-foreground tabular-nums">${{ producto.price }}</p>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

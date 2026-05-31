<script setup>
import productos from '../tienda.json'
import { RouterLink } from 'vue-router'

const productosDestacados = productos.filter((p) => p.tag === 'Popular')
</script>
<template>
  <section class="relative min-h-screen overflow-hidden flex flex-col">
    <div class="absolute inset-0">
      <img
        class="object-cover w-full h-full object-center"
        src="../img/banner.jpg"
        alt="Banner-Home"
      />
      <div class="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent"></div>
      <div class="absolute inset-0 bg-linear-to-r from-white/95 via-white/70 to-white/20"></div>
      <div class="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent"></div>
    </div>
    <div
      class="z-50 relative w-full min-h-screen flex-1 max-w-7xl mx-auto px-6 lg:px-8 items-center pt-24 pb-16"
    >
      <div class="w-full lg:max-w-[55%]">
        <div
          class="bg-blue-600/10 items-center gap-2 border border-blue-600/40 inline-flex rounded-full py-1.5 px-4 mb-8 tracking-wide"
        >
          <span class="w-1.5 h-1.5 bg-blue-700 rounded-full"></span>
          <p class="uppercase font-semibold text-sm text-blue-700">Nueva Colección 2026</p>
        </div>
        <h2 class="text-7xl font-semibold mb-8 opacity-100">
          Viste lo <br />
          que <span class="text-blue-700 italic">eres</span>
        </h2>
        <p class="text-lg leading-relaxed mb-10 text-black/60 max-w-105">
          Piezas atemporales diseñadas para durar. Cada detalle, cada costura, cada material —
          elegido con intención.
        </p>
        <div class="flex gap-4 flex-col md:flex-row items-start lg:items-center mb-14">
          <RouterLink
            class="font-semibold flex gap-3 text-white bg-black px-5 py-3 rounded-full items-center"
            to="/productos"
            >Explorar Tienda
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </RouterLink>
          <RouterLink
            class="font-medium px-5 py-3 text-black/60 hover:text-black transition-colors"
            to="/contacto"
            >Contáctanos</RouterLink
          >
        </div>
      </div>
    </div>
  </section>
  <section class="py-24 bg-[#fdfdfd]">
    <div class="max-w-7xl mx-auto px-6">
      <p class="uppercase text-blue-600 tracking-widest text-xl mb-5 font-light">
        Colecciones Curadas
      </p>
      <h2 class="font-semibold tracking-tight mb-5 text-3xl">Comprar por Categoría</h2>
      <div class="grid grid-cols-1 gap-4">
        <div class="h-80">
          <RouterLink
            class="group overflow-hidden object-cover block h-full relative rounded-2xl cursor-pointer"
            to="/productos"
          >
            <div class="absolute inset-0 overflow-hidden">
              <img
                class="object-cover w-full h-full object-center"
                src="../img/card-home.jpg"
                alt=""
              />
              <div
                class="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent"
              ></div>
            </div>
            <div class="relative h-full flex flex-col justify-end p-6">
              <div class="flex items-end justify-between">
                <div>
                  <p class="uppercase text-sm font-medium tracking-[0.15em] text-white/70 mb-1">
                    50 piezas
                  </p>
                  <h3 class="text-xl font-semibold tracking-tight text-white">Coleccion Hombre</h3>
                </div>
                <div
                  class="bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-arrow-up-right w-5 h-5 text-white"
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
        <div class="h-80">
          <RouterLink
            class="group overflow-hidden object-cover block h-full relative rounded-2xl cursor-pointer"
            to="/productos"
          >
            <div class="absolute inset-0 overflow-hidden">
              <img
                class="object-cover w-full h-full object-center"
                src="../img/card-home-2.jpg"
                alt=""
              />
              <div
                class="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent"
              ></div>
            </div>
            <div class="relative h-full flex flex-col justify-end p-6">
              <div class="flex items-end justify-between">
                <div>
                  <p class="uppercase text-sm font-medium tracking-[0.15em] text-white/70 mb-1">
                    50 piezas
                  </p>
                  <h3 class="text-xl font-semibold tracking-tight text-white">Coleccion Mujere</h3>
                </div>
                <div
                  class="bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-arrow-up-right w-5 h-5 text-white"
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
        <div class="h-80">
          <RouterLink
            class="group overflow-hidden object-cover block h-full relative rounded-2xl cursor-pointer"
            to="/productos"
          >
            <div class="absolute inset-0 overflow-hidden">
              <img
                class="object-cover w-full h-full object-center"
                src="../img/card-home-3.jpg"
                alt=""
              />
              <div
                class="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent"
              ></div>
            </div>
            <div class="relative h-full flex flex-col justify-end p-6">
              <div class="flex items-end justify-between">
                <div>
                  <p class="uppercase text-sm font-medium tracking-[0.15em] text-white/70 mb-1">
                    50 piezas
                  </p>
                  <h3 class="text-xl font-semibold tracking-tight text-white">accesorios</h3>
                </div>
                <div
                  class="bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-arrow-up-right w-5 h-5 text-white"
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
        <div class="h-80">
          <RouterLink
            class="group overflow-hidden object-cover block h-full relative rounded-2xl cursor-pointer"
            to="/productos"
          >
            <div class="absolute inset-0 overflow-hidden">
              <img
                class="object-cover w-full h-full object-center"
                src="../img/card-home-4.jpg"
                alt=""
              />
              <div
                class="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent"
              ></div>
            </div>
            <div class="relative h-full flex flex-col justify-end p-6">
              <div class="flex items-end justify-between">
                <div>
                  <p class="uppercase text-sm font-medium tracking-[0.15em] text-white/70 mb-1">
                    50 piezas
                  </p>
                  <h3 class="text-xl font-semibold tracking-tight text-white">Esenciales</h3>
                </div>
                <div
                  class="bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-arrow-up-right w-5 h-5 text-white"
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
  <section class="py-24 bg-[#f5f5f7]/80">
    <div class="max-w-7xl px-6 grid grid-cols-1 gap-9">
      <p class="uppercase text-xl text-blue-600 tracking-widest font-light">Selección Especial</p>
      <h2>Colección Destacada</h2>
      <div
        class="relative cols overflow-hidden"
        v-for="producto in productosDestacados"
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
  </section>
  <section>
    <p>Quienes somos</p>
    <h3>Nació de una obsesión por lo auténtico</h3>
    <p>
      Luminous nació en 2018 con una sola premisa: que la moda debería hacerte sentir más tú mismo,
      no menos. Fundada por diseñadores independientes cansados del fast fashion, hoy somos una
      comunidad de creadores y consumidores que valoran la permanencia sobre la inmediatez.
    </p>
    <p>
      Cada colección es el resultado de meses de investigación, selección de materiales y
      colaboración estrecha con artesanos locales. No lanzamos por temporada. Lanzamos cuando algo
      vale la pena.
    </p>
    <div>
      <div>
        <img src="../img/quienes-somos-home.jpg" alt="Quienes somos" />
        <div></div>
        <div>
          <span>Atelier Luminous — Madrid, 2018</span>
        </div>
      </div>
      <div>
        <div>
          <span>6+</span>
          <span>Años de trayectoria</span>
        </div>
        <div>
          <span>12K+</span>
          <span>Clientes satisfechos</span>
        </div>
        <div>
          <span>4</span>
          <span>Colecciones al año</span>
        </div>
        <div>
          <span>100%</span>
          <span>Materiales certificados</span>
        </div>
      </div>
    </div>
    <div>
      <div></div>
      <div></div>
    </div>
  </section>
</template>

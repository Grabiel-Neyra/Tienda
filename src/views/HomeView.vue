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
      class="z-10 relative w-full min-h-screen flex-1 max-w-7xl mx-auto px-6 lg:px-8 items-center pt-24 pb-16"
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
      <p class="uppercase text-blue-600 tracking-widest text-lg mb-5 font-light">
        Colecciones Curadas
      </p>
      <h2 class="font-semibold tracking-tight mb-5 text-3xl">Comprar por Categoría</h2>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div class="h-80 lg:col-span-2">
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
        <div class="h-80 lg:col-span-2">
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
    <div class="max-w-7xl px-6 mx-auto">
      <p class="uppercase mb-5 text-lg text-blue-600 tracking-widest font-light">
        Selección Especial
      </p>
      <h2 class="font-semibold tracking-tight mb-5 text-3xl">Colección Destacada</h2>
      <div class="grid grid-cols-1 gap-9 lg:grid-cols-3">
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
              <p class="text-sm font-semibold text-foreground tabular-nums">
                ${{ producto.price }}
              </p>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
  <section class="py-24 bg-[#f5f5f7]/30">
    <div class="max-w-7xl mx-auto px-6">
      <p class="uppercase text-lg text-blue-600 tracking-widest mb-5 font-light">Quienes somos</p>
      <h2 class="font-semibold tracking-tight mb-5 text-3xl">
        Nació de una obsesión por lo <span class="text-blue-600">auténtico</span>
      </h2>
      <div class="mb-12">
        <p class="text-lg leading-relaxed mb-8 text-black/80">
          Luminous nació en 2018 con una sola premisa: que la moda debería hacerte sentir más tú
          mismo, no menos. Fundada por diseñadores independientes cansados del fast fashion, hoy
          somos una comunidad de creadores y consumidores que valoran la permanencia sobre la
          inmediatez.
        </p>
        <p class="leading-relaxed text-black/50 mb-8">
          Cada colección es el resultado de meses de investigación, selección de materiales y
          colaboración estrecha con artesanos locales. No lanzamos por temporada. Lanzamos cuando
          algo vale la pena.
        </p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="rounded-3xl lg:col-span-2 mb-8 relative aspect-4/3 overflow-hidden">
          <img
            src="../img/quienes-somos-home.jpg"
            alt="Quienes somos"
            class="h-full w-full object-cover"
          />
          <div class="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
          <div class="bottom-6 left-6 absolute">
            <span class="text-sm text-white/80 font-medium">Atelier Luminous — Madrid, 2018</span>
          </div>
        </div>
        <div class="grid-cols-2 grid lg:grid-cols-1 gap-4">
          <div
            class="flex flex-col items-start w-full p-6 gap-2 bg-white border border-gray-200 rounded-2xl"
          >
            <span class="text-3xl tracking-tight font-bold">6+</span>
            <span>Años de trayectoria</span>
          </div>
          <div
            class="flex flex-col items-start w-full p-6 gap-2 bg-white border border-gray-200 rounded-2xl"
          >
            <span class="text-3xl tracking-tight font-bold">12K+</span>
            <span>Clientes satisfechos</span>
          </div>
          <div
            class="flex flex-col items-start w-full p-6 gap-2 bg-white border border-gray-200 rounded-2xl"
          >
            <span class="text-3xl tracking-tight font-bold">4</span>
            <span>Colecciones al año</span>
          </div>
          <div
            class="flex flex-col items-start w-full p-6 gap-2 bg-white border border-gray-200 rounded-2xl"
          >
            <span class="text-3xl tracking-tight font-bold">100%</span>
            <span>Materiales certificados</span>
          </div>
        </div>
        <div class="grid-cols-1 lg:col-span-3 lg:grid-cols-3 grid gap-5">
          <div class="border text-start p-8 space-y-4 rounded-3xl bg-white border-gray-200">
            <div class="w-12 h-12 rounded-2xl flex justify-center items-center bg-blue-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-7 text-blue-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold">Diseño Intemporal</h3>
            <p class="text-black/60 leading-relaxed">
              Creamos piezas que trascienden las tendencias. Cada producto está pensado para durar
              décadas, no temporadas.
            </p>
          </div>
          <div class="border text-start p-8 space-y-4 rounded-3xl bg-white border-gray-200">
            <div class="w-12 h-12 rounded-2xl flex justify-center items-center bg-blue-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="size-7 text-blue-600"
              >
                <path
                  d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
                ></path>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold">Producción Responsable</h3>
            <p class="text-black/60 leading-relaxed">
              Trabajamos con materiales sostenibles y talleres certificados que respetan tanto al
              artesano como al planeta.
            </p>
          </div>
          <div class="border text-start p-8 space-y-4 rounded-3xl bg-white border-gray-200">
            <div class="w-12 h-12 rounded-2xl flex justify-center items-center bg-blue-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="size-7 text-blue-600"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                ></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold">Calidad Garantizada</h3>
            <p class="text-black/60 leading-relaxed">
              Cada artículo pasa por un proceso de control riguroso. Si no cumple nuestro estándar,
              no llega a tus manos.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-24 bg-color=[#fdfdfd]">
    <div class="max-w-7xl mx-auto px-6">
      <p class="uppercase text-lg text-blue-600 tracking-widest mb-5 font-light">
        Miles de Clientes Satisfechos
      </p>
      <h2 class="font-semibold tracking-tight mb-5 text-3xl text-center lg:text-left">
        Lo Que Dicen Nuestros Clientes
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 my-10">
        <div class="border border-gray-200 py-5 px-3 rounded-3xl space-y-6">
          <div class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <p>
            "La calidad no tiene igual. Cada pieza se siente diseñada con una atención obsesiva al
            detalle. Mi opción favorita para todo lo que necesita ser atemporal."
          </p>
          <div class="border-t border-gray-300 pt-3">
            <h3 class="text-md font-bold">Maya Chen</h3>
            <p class="text-sm mt-05 text-black/50">Creative Director</p>
          </div>
        </div>
        <div class="border border-gray-200 py-5 px-3 rounded-3xl space-y-6">
          <div class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <p>
            "Aprecio las marcas que entienden la sobriedad. Luminous ofrece piezas que son mínimas
            pero sustanciales — exactamente lo que mi guardarropa necesitaba."
          </p>
          <div class="border-t border-gray-300 pt-3">
            <h3 class="text-md font-bold">James Rodriguez</h3>
            <p class="text-sm mt-05 text-black/50">Architect</p>
          </div>
        </div>
        <div class="border border-gray-200 py-5 px-3 rounded-3xl space-y-6">
          <div class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <p>
            "Desde el empaque hasta el producto en sí, toda la experiencia se siente curada. El
            reloj Chronos se ha convertido en mi esencial diario. El envío fue impecable."
          </p>
          <div class="border-t border-gray-300 pt-3">
            <h3 class="text-md font-bold">Aiko Tanaka</h3>
            <p class="text-sm mt-05 text-black/50">Product Designer</p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 p-8 bg-[#f5f5f7]/80 rounded-2xl">
        <div class="text-center">
          <p class="text-2xl font-bold tracking-tight">12K+</p>
          <p class="text-md mt-1">Clientes Felices</p>
        </div>
        <div class="text-center">
          <p class="text-2xl font-bold tracking-tight">4.9+</p>
          <p class="text-md mt-1">Calificación Promedio</p>
        </div>
        <div class="text-center">
          <p class="text-2xl font-bold tracking-tight">98%</p>
          <p class="text-md mt-1">Tasa de Satisfacción</p>
        </div>
        <div class="text-center">
          <p class="text-2xl font-bold tracking-tight">24H</p>
          <p class="text-md mt-1">Envío Rápido</p>
        </div>
      </div>
    </div>
  </section>
</template>

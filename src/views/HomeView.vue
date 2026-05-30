<script setup></script>
<template>
  <section class="relative min-h-screen overflow-hidden flex flex-col">
    <div class="absolute inset-0">
      <img
        class="object-cover w-full h-full object-center"
        src="../img/banner.jpg"
        alt="Banner-Home"
      />
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
  <section>
    <p>Colecciones Curadas</p>
    <h2>Comprar por Categoría</h2>
    <div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </section>
</template>

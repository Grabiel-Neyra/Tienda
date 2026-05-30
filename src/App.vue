<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, onUnmounted, ref } from 'vue'
const menuOpen = ref(false)

// Cambio de backgraund del nav
const scrolled= ref(false)
const handleScroll=()=>{
  scrolled.value=window.scrollY>10
}
onMounted(()=> window.addEventListener('scroll',handleScroll))
onUnmounted(()=>window.removeEventListener('scroll',handleScroll))

</script>

<template>
  <header :class="['w-full fixed top-0 right-0 z-50 transition-all duration-500 bg-transparent', scrolled ? 'bg-white/60 backdrop-blur-md shadow-sm ': 'bg-transparent'  ]">
    <div class=" justify-between px-6 lg:px-10 py-6 max-w-7x1 mx-auto flex min-w-7x1">
      <div class="lg:hidden w-1/12 text-center">
        <button
          class="lg:hidden cursor-pointer"
          @click="menuOpen = !menuOpen"
          aria-label="Abrir menú"
        >
          <!-- X cuando está abierto, ☰ cuando está cerrado -->
          <svg
            v-if="menuOpen"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
          <svg
            v-else
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div class="w-2/6  text-center lg:text-start">
        <a href="/">
          <h1>LOGO</h1>
        </a>
      </div>
      <nav class="hidden lg:flex w-4/6 ">
        <ul class="flex font-serif gap-12 justify-center w-full">
          <li><RouterLink class="uppercase hover:text-blue-800" to="/">home</RouterLink></li>
          <li>
            <RouterLink class="uppercase hover:text-blue-800" to="/productos">Productos</RouterLink>
          </li>
          <li>
            <RouterLink class="uppercase hover:text-blue-800" to="/contacto">Contacto</RouterLink>
          </li>
        </ul>
      </nav>
      <div class="flex items-center w-1/6 md:w-1/12 md:gap-3 justify-end gap-5">
        <button class="cursor-pointer">
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
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
        <button class="cursor-pointer">
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
        </button>
      </div>
    </div>
    <div v-show="menuOpen" class="lg:hidden border-t border-gray-200 px-6 pb-4">
      <ul class="flex flex-col font-serif gap-4 pt-4">
        <li>
          <RouterLink class="uppercase hover:text-blue-800" to="/" @click="menuOpen = false"
            >Home</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="uppercase hover:text-blue-800"
            to="/productos"
            @click="menuOpen = false"
            >Productos</RouterLink
          >
        </li>
        <li>
          <RouterLink class="uppercase hover:text-blue-800" to="/contacto" @click="menuOpen = false"
            >Contacto</RouterLink
          >
        </li>
      </ul>
    </div>
  </header>
  <RouterView />

  <footer>
    <div>
      <span>LOGO</span>
      <div>
        <p>Mantente al tanto</p>
        <p>Accede primero a nuevos lanzamientos, ofertas exclusivas e historias de nuestro atelier.</p>
        <form class="relative"><input type="email" placeholder="Tu correo electrónico" class="w-full bg-transparent border-b border-background/20 focus:border-primary py-3 pr-12 text-sm text-background placeholder:text-background/30 focus:outline-none transition-colors" value=""><button type="submit" class="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-background/50 hover:text-primary transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-5 h-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button></form>
      </div>
    </div>
    <div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </footer>
</template>

<script setup></script>
<template>
  <section class="pb-10 lg:max-w-10/12 pt-24 border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-6">
      <p class="uppercase font-medium text-blue-600 tracking-[0.2em] mb-2 text-xs">
        Ponte en contacto
      </p>
      <h2 class="text-3xl lg:text-5xl tracking-tight font-semibold">Contacto</h2>
    </div>
  </section>
  <section class="py-24">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-10">
        <div class="space-y-5">
          <div>
            <h2>Nos encantaría saber de ti</h2>
            <p>
              Ya sea que tengas una pregunta sobre un producto, un pedido, o simplemente quieras
              saludarnos — nuestro equipo está aquí para ti.
            </p>
          </div>
          <div>
            <div class="flex">
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
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </div>
              <div>
                <p>Visítanos</p>
                <p>Calle 1234, Barrio, Ciudad, Pais</p>
              </div>
            </div>
            <div class="flex">
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
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <p>Escríbenos</p>
                <p>Tienda@gmail.com</p>
              </div>
            </div>
            <div class="flex">
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
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </div>
              <div>
                <p>Llámanos</p>
                <p>11 6869-0329</p>
              </div>
            </div>
          </div>
          <div>
            <p>Horario de Atención</p>
            <div class="">
              <div class="flex w-full justify-between">
                <div>
                  <p>Lunes - Viernes</p>
                </div>
                <div>
                  <p>10:00 - 20:00 hs</p>
                </div>
              </div>
              <div class="flex w-full justify-between">
                <div>
                  <p>Sábado</p>
                </div>
                <div>
                  <p>11:00 - 19:00 hs</p>
                </div>
              </div>
              <div class="flex w-full justify-between">
                <div>
                  <p>Domingo</p>
                </div>
                <div>
                  <p>Cerrado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form>
            <div>
              <label>Nombre</label
              ><input required type="text" placeholder="Tu nombre completo" value="" />
            </div>
            <div>
              <label class="text-xs font-medium tracking-widest uppercase text-muted-foreground"
                >Correo Electrónico</label
              ><input required type="email" placeholder="your@email.com" value="" />
            </div>
            <div>
              <label class="text-xs font-medium tracking-widest uppercase text-muted-foreground"
                >Mensaje</label
              ><textarea required placeholder="¿En qué podemos ayudarte?"></textarea>
            </div>
            <button type="submit">
              Enviar Mensaje<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<template>
  <div
    class="bg-gradient-to-t from-black to-purple-900 text-gray-300 min-h-screen bg-fixed mx-auto"
  >
    <Navigation />
    <transition name="fade" appear>
      <Nuxt class="pt-20" />
    </transition>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Open+Sans:wght@300;400;600;700&family=Raleway:wght@100;300&display=swap"); /* Roboto */
@import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);

html {
  font-family: "Montserrat", "Raleway", "Open Sans", "NanumSquare", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.font-m {
  font-family: "Montserrat", sans-serif;
}
.font-r {
  font-family: "Raleway", sans-serif;
}
.font-s {
  font-family: "Open Sans", sans-serif;
}
.font-n {
  font-family: "NanumSquare", sans-serif;
}

.invert {
  filter: invert(100%);
}
</style>

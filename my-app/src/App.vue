<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">ホームへ</router-link> |
      <router-link to="/about">違うページへ</router-link>
    </nav> -->
    <router-view/>
  </div>
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
</style>

<template>
  <div id="app" class="container">
    <div class="text-center">
    <router-link :to="{name: 'inicio'}" class="">
      <img src="@/assets/logo.png" alt="Vue">
    </router-link>
    </div>
    <router-view/>
  </div>
</template>

<template>
  <div class="inicio">
    <h1>Lista de tareas</h1>

    <ul>
      <li v-for="item of tareas" :key="item.id">
        {{item.id}} - {{item.nombre}}
        <router-link :to="{name: 'editar', params: {id: item.id}}">
          <button>Editar</button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: 'inicio',
  methods: {
    ...mapActions(['getTareas'])
  },
  computed: {
    ...mapState(['tareas'])
  },
  created() {
    this.getTareas();
  }
}
</script>

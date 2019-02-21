<template>
  <div class="inicio">
    <h1>Lista de tareas</h1>
    <router-link :to="{name: 'agregar'}" class="btn btn-lg btn-success btn-block">Agregar</router-link>
    <ul class="list-group mt-5">
      <li class="list-group-item"
      v-for="item of tareas" :key="item.id">
        <code>{{item.id}}</code> - {{item.nombre}}
      <div class="float-right">
        <router-link class="btn btn-sm btn-warning mr-2" :to="{name: 'editar', params: {id: item.id}}">Editar</router-link>
        <button class="btn btn-sm btn-danger" @click="eliminarTarea(item.id)">Eliminar</button>
      </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: 'inicio',
  methods: {
    ...mapActions(['getTareas', 'eliminarTarea'])
  },
  computed: {
    ...mapState(['tareas'])
  },
  created() {
    this.getTareas();
  }
}
</script>

import Vue from 'vue'
import Vuex from 'vuex'
import db from './firebase';
import router from './router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas: [],
    tarea: {
      id: null,
      nombre: null
    }
  },
  mutations: {
    setTareas(state, tareas) {
      state.tareas = tareas;
    },
    setTarea(state, tarea) {
      state.tarea.id = tarea.id;
      state.tarea.nombre = tarea.nombre;
    },
    eliminarTarea(state, id) {
      state.tareas = state.tareas.filter( doc => {
        return doc.id != id
      })
    }
  },
  actions: {
    getTareas({commit, state}) {        
        const tareas = [];
        db.collection('tareas').get()
        .then(snapshot =>{
          snapshot.forEach(doc => {
            // console.log(doc.id);
            // console.log(doc.data());
            let tarea = doc.data();
            tarea.id = doc.id;
            tareas.push(tarea)
          })
        })
  
        commit('setTareas', tareas);
    },
    getTarea({commit, state}, id) {
        db.collection('tareas').doc(id).get()
        .then(doc => {
          // console.log(doc.data());
          // console.log(doc.id);
          let tarea = doc.data();
          tarea.id = doc.id;
          commit('setTarea', tarea);
        })
    },
    editarTarea({commit}, tarea){
      db.collection('tareas').doc(tarea.id).update({
        nombre: tarea.nombre
      })
      .then(()=>{
        router.push({name: 'inicio'});
      })
    },
    agregarTarea({commit}, nombre) {
      db.collection('tareas').add({
        nombre: nombre
      })
      .then(doc => {
        console.log(doc.id);
        router.push({name: 'inicio'});
      })
    },
    eliminarTarea({commit, dispatch}, id) {
      db.collection('tareas').doc(id).delete()
      .then(()=>{
        console.log("La tarea fue eliminada");
        // dispatch('getTareas')
        commit('eliminarTarea', id);
      })
    }
  }
})

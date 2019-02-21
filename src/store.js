import Vue from 'vue'
import Vuex from 'vuex'
import db from './firebase';
import { stat } from 'fs';

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
    clearTarea(state) {
      state.tarea.id = null;
      state.tarea.nombre = null;
    }
  },
  actions: {
    getTareas({commit, state}) {
      if (!state.tareas.length) {        
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
      }
    },
    getTarea({commit, state}, id) {
      if (!state.tarea.id && !state.tarea.nombre) {
        db.collection('tareas').doc(id).get()
        .then(doc => {
          // console.log(doc.data());
          // console.log(doc.id);
          let tarea = doc.data();
          tarea.id = doc.id;
          commit('setTarea', tarea);
        })
      }
    },
    cleanTareaState({commit}) {
      commit('clearTarea');
    }
  }
})

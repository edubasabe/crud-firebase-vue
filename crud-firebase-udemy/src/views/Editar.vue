<template>
    <div>
        <h1>Editar</h1>
        {{id}}
        <form>
            <input type="text">
            <button>Editar</button>
        </form>
    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
    name: 'editar',
    data() {
        return {
            id: this.$route.params.id
        }
    },
    methods: {
        ...mapActions(['getTarea', 'cleanTareaState'])
    },
    created() {
        this.getTarea(this.id);
    },
    beforeDestroy() {
        this.cleanTareaState();
    }
}
</script>


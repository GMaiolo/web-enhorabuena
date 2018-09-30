<template>
<div class="modal d-block">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5>Cargar Gasto</h5>
        <button type="button" class="close" @click="close">
          <span>&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <!-- todo: pseudocopy sales -->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" :disabled="loading">
          <font-awesome-icon v-if="loading" icon="spinner" />
          <span v-else>Cargar</span>
        </button>
        <button type="button" class="btn btn-secondary" @click="close" :disabled="loading">Cancelar</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'ExpensesModal',
  computed: mapGetters('expenses', ['loading']),
  methods: mapMutations('modal', [ 'close' ])
}
</script>

<style lang="scss" scoped>
.modal-footer button {
  width: 125px;
}
</style>

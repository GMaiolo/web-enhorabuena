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
        <button type="button" class="btn btn-primary">Cargar</button>
        <button type="button" class="btn btn-secondary" @click="close">Cancelar</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { KEYS } from '@/store/constants'

export default {
  name: 'ExpensesModal',
  methods: {
    close () {
      this.$store.commit(KEYS.MODAL.CLOSE)
    }
  }
}
</script>

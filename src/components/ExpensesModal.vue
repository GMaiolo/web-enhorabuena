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
        <div class="input-group w-50 m-auto">
          <div class="input-group-prepend">
            <span class="input-group-text">$</span>
          </div>
          <input type="number" class="form-control" placeholder="Precio" v-model.number="price">
        </div>
        <!-- TODO: add categories -->
        <div class="input-group w-50 description-wrapper">
          <textarea class="form-control" rows="4" placeholder="Descripcion (opcional)" v-model="description"></textarea>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" @click="load" :disabled="posting">
          <font-awesome-icon v-if="posting" icon="spinner" />
          <span v-else>Cargar</span>
        </button>
        <button type="button" class="btn btn-secondary" @click="close" :disabled="posting">Cancelar</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'ExpensesModal',
  data: () => ({
    price: null,
    description: ''
  }),
  computed: mapGetters('expenses', [ 'posting' ]),
  methods: {
    ...mapMutations('modal', [ 'close' ]),
    ...mapActions('expenses', [ 'post' ]),
    load () {
      this.post({ price: this.price, description: this.description, category: 'TODO' })
        .then(this.close)
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-footer button {
  width: 125px;
}
.description-wrapper {
  margin: 1rem auto;
  textarea {
    max-height: 20rem;
  }
}
</style>

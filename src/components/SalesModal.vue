<template>
<div class="modal d-block pointer-events-0">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5>Cargar Venta</h5>
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
          <!-- 1: add payments input here @ credit -->
        </div>
        <div class="d-inline-block text-left mt-3">
          <div class="form-check">
            <input class="form-check-input" type="radio" id="exampleRadios1" v-model="type" value="efectivo">
            <label class="form-check-label" for="exampleRadios1">
              Efectivo
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" id="exampleRadios2" v-model="type" value="debito">
            <label class="form-check-label" for="exampleRadios2">
              Debito
            </label>
          </div>
          <div class="form-check disabled">
            <!-- TODO: enable ref: 1 -->
            <input class="form-check-input" type="radio" id="exampleRadios3" v-model="type" value="credito" disabled>
            <label class="form-check-label" for="exampleRadios3">
              Credito
            </label>
          </div>
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
  name: 'SalesModal',
  data: () => ({
    price: null,
    type: 'efectivo'
  }),
  computed: mapGetters('sales', [ 'posting' ]),
  methods: {
    ...mapMutations('modal', [ 'close' ]),
    ...mapActions('sales', [ 'post' ]),
    load () {
      this.post({ price: this.price, type: this.type })
        .then(this.close)
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-footer button {
  width: 125px;
}
</style>

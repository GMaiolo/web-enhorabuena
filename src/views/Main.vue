<template>
<div class="container">
  <section class="wrapper h-100 m-0 row no-gutters px-sm-5 px-0">
    <!-- left side -->
    <div class="col-sm-12 col-md-6 mb-md-0 mb-sm-5 mb-5" v-show="!isShowingExpenses">
      <h3 class="mb-3">Agregar Venta</h3>
      <button class="circled btn btn-primary" @click="openSalesModal">
        <font-awesome-icon icon="plus" size="3x" />
      </button>
      <div class="links mt-5">
        <router-link to="/sales" v-if="!isShowingSales">
          <font-awesome-icon icon="th-list" class="mr-1" /> Ver Ventas
        </router-link>
        <router-link to="/" class="d-inline-flex align-items-center" v-else>
          <font-awesome-icon icon="arrow-left" />
          <span class="ml-2">Volver</span>
        </router-link>
      </div>
      <div class="mt-5 d-flex align-items-center" v-if="isShowingSales">
          <SaleTotals class="m-auto" />
      </div>
    </div>
    <!-- right side -->
    <div class="col-sm-12 col-md-6" v-show="!isShowingSales">
      <h3 class="mb-3">Agregar Gasto</h3>
      <button class="circled btn btn-primary" @click="openExpensesModal">
        <font-awesome-icon icon="plus" size="3x" />
      </button>
      <div class="links mt-5">
        <router-link to="/expenses" class="" v-if="!isShowingExpenses">
          <font-awesome-icon icon="th-list" class="mr-1" /> Ver Gastos
        </router-link>
        <router-link to="/" class="d-inline-flex align-items-center" v-else>
          <font-awesome-icon icon="arrow-left" />
          <span class="ml-2">Volver</span>
        </router-link>
      </div>
    </div>
    <router-view class="col-sm-12 col-md-6"></router-view>
  </section>
</div>
</template>

<script>
import { mapMutations } from 'vuex'
import SaleTotals from '@/components/SaleTotals.vue'

export default {
  name: 'Main',
  components: { SaleTotals },
  computed: {
    isShowingSales () {
      return this.$route.name === 'sales'
    },
    isShowingExpenses () {
      return this.$route.name === 'expenses'
    }
  },
  methods: mapMutations('modal', {
    openExpensesModal: 'openExpenses',
    openSalesModal: 'openSales'
  }),
  beforeMount () {
    this.$store.dispatch('sales/get')
    this.$store.dispatch('expenses/get')
  }
}
</script>

<style lang="scss" scoped>
.container {
  z-index: 0;
  padding: 7rem 0;
}
.wrapper {
  transition: filter .2s;
}
.circled {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
  }
}

</style>

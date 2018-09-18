<template>
<div class="container">
  <section class="wrapper w-100 h-100 d-flex align-items-top justify-content-center">
    <!-- left side -->
    <div class="btn-container m-2" v-show="!isShowingExpensesTable">
      <button class="circled btn btn-primary mt-3 mb-4" @click="openSalesModal">
        <font-awesome-icon icon="plus" size="3x" />
      </button>
      <h3 class="mb-3">Agregar Venta</h3>
      <router-link to="/sales" tag="button" class="text-light btn btn-primary mr-auto" v-if="!isShowingSalesTable">
        <font-awesome-icon icon="th-list" class="mr-1" /> Ver Ventas
      </router-link>
      <router-link to="/" tag="button" class="btn btn-primary text-light d-inline-flex align-items-center" v-else>
        <font-awesome-icon icon="arrow-left" />
        <span class="ml-2">Volver</span>
      </router-link>
    </div>
    <!-- middle -->
    <div class="vertical-rule bg-light mr-5 ml-5" v-show="isVanillaRoute"></div>
    <!-- right side -->
    <div class="btn-container m-2" v-show="!isShowingSalesTable">
      <button class="circled btn btn-primary mt-3 mb-4" @click="openExpensesModal">
        <font-awesome-icon icon="plus" size="3x" />
      </button>
      <h3 class="mb-3">Agregar Gasto</h3>
      <router-link to="/expenses" tag="button" class="text-light btn btn-primary" v-if="!isShowingExpensesTable">
        <font-awesome-icon icon="th-list" class="mr-1" /> Ver Gastos
      </router-link>
      <router-link to="/" tag="button" class="btn btn-primary text-light d-inline-flex align-items-center" v-else>
        <font-awesome-icon icon="arrow-left" />
        <span class="ml-2">Volver</span>
      </router-link>
    </div>
    <div class="vertical-rule bg-light mr-5 ml-5" v-show="!isVanillaRoute"></div>
    <router-view></router-view>
  </section>
</div>
</template>

<script>
import { KEYS } from '@/store/constants'

export default {
  name: 'Main',
  computed: {
    isShowingSalesTable () {
      return this.$route.name === 'sales'
    },
    isShowingExpensesTable () {
      return this.$route.name === 'expenses'
    },
    isVanillaRoute () {
      return this.$route.name === 'main'
    }
  },
  methods: {
    openExpensesModal () {
      this.$store.commit(KEYS.MODAL.OPEN_EXPENSES)
    },
    openSalesModal () {
      this.$store.commit(KEYS.MODAL.OPEN_SALES)
    }
  },
  beforeMount () {
    this.$store.dispatch(KEYS.SALES.GET)
    this.$store.dispatch(KEYS.EXPENSES.GET)
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
.vertical-rule {
  display: inline-block;
  width: 2px;
  min-height: 350px;
}
.btn-container {
  width: 300px;
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

<template>
<div class="container">
  <section class="wrapper h-100 m-0 row no-gutters px-sm-5 px-0">
    <!-- left side -->
    <div class="col-sm-12 col-md-6 mb-5" v-show="type != 'expenses'">
      <div class="mb-5" v-if="isToday">
        <h3 class="mb-3">Agregar Venta</h3>
        <button class="circled btn btn-primary" @click="openSalesModal">
          <font-awesome-icon icon="plus" size="3x" />
        </button>
      </div>
      <div class="links" :class="{ 'mt-3': !isToday }">
        <router-link to="/sales" v-if="type != 'sales'">
          <font-awesome-icon icon="th-list" class="mr-1" /> Ver Ventas
        </router-link>
        <router-link to="/" @click.native="reset" class="d-inline-flex align-items-center" v-else>
          <font-awesome-icon icon="arrow-left" />
          <span class="ml-2">Volver</span>
        </router-link>
      </div>
      <div class="mt-5 d-flex align-items-center" v-if="type">
        <Totals class="m-auto" />
      </div>
    </div>
    <!-- right side -->
    <div class="col-sm-12 col-md-6 mb-5" v-show="type != 'sales'">
      <div class="mb-5" v-if="isToday">
        <h3 class="mb-3">Agregar Gasto</h3>
        <button class="circled btn btn-primary" @click="openExpensesModal">
          <font-awesome-icon icon="plus" size="3x" />
        </button>
      </div>
      <div class="links" :class="{ 'mt-3': !isToday }">
        <router-link to="/expenses" class="" v-if="type != 'expenses'">
          <font-awesome-icon icon="th-list" class="mr-1" /> Ver Gastos
        </router-link>
        <router-link to="/" @click.native="reset" class="d-inline-flex align-items-center" v-else>
          <font-awesome-icon icon="arrow-left" />
          <span class="ml-2">Volver</span>
        </router-link>
      </div>
      <div class="mt-5 d-flex align-items-center" v-if="type">
        <Totals class="m-auto" />
      </div>
    </div>
    <Details class="col-sm-12 col-md-6" :type="type" v-if="type" />
  </section>
</div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import Details from './Details'
import Totals from '@/components/Totals'

export default {
  name: 'Main',
  components: { Totals, Details },
  computed: {
    ...mapGetters([ 'isToday' ]),
    type () {
      return this.$route.params.type
    }
  },
  methods: {
    ...mapMutations('modal', {
      openExpensesModal: 'openExpenses',
      openSalesModal: 'openSales'
    }),
    reset () {
      this.$store.dispatch('reset')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/media';

.wrapper > div {
  min-height: 50%;
}

.container {
  z-index: 0;
  padding: 7rem 0;
  @include media-below(sm) {
    padding: 3rem 0;
  }
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

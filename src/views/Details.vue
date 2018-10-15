<template>
  <div>
    <DateNav />
    <component :is="`${type}-table`"></component>
    <div class="bottom-nav row w-100 m-0 d-flex align-items-center">
      <router-link to="/sales" class="col">Ventas (<b>{{ salesQuantity }}</b>)</router-link>
      <router-link to="/expenses" class="col">Gastos (<b>{{ expensesQuantity }}</b>)</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DateNav from '@/components/DateNav'
import ExpensesTable from '@/components/ExpensesTable'
import SalesTable from '@/components/SalesTable'

export default {
  name: 'v-details',
  props: [ 'type' ],
  components: {
    DateNav,
    ExpensesTable,
    SalesTable
  },
  computed: mapGetters({
    salesQuantity: 'sales/quantity',
    expensesQuantity: 'expenses/quantity'
  })
}
</script>

<style lang="postcss" scoped>
.bottom-nav {
  height: 50px;
}
</style>

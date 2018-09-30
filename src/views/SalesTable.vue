<template>
<div class="table-container o-auto">
  <table class="table table-sm table-bordered table-hover m-0">
    <thead>
      <tr>
        <th scope="col">Hora</th>
        <th scope="col">Monto</th>
        <th scope="col">Tipo de pago</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="sale in sales" :key="sale._id">
        <th scope="row">{{ sale.date | date }}</th>
        <td>$ {{ sale.price }}</td>
        <td>{{ sale.type }}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'

export default {
  name: 'sales-table',
  filters: {
    date: (rawDate) => moment(rawDate).format('HH:mm')
  },
  computed: {
    ...mapGetters({
      sales: 'sales/list',
      total: 'sales/total'
    })
  }
}
</script>

<style lang="scss">
.table-container {
  height: calc(100% - 50px);
  overflow: auto;
}
</style>

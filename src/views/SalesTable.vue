<template>
<div class="w-100">
  <div class="date-nav row">
    <div class="col pointer no-highlight" @click="prevSalesDate()">
      <font-awesome-icon icon="long-arrow-alt-left" />
      {{ previousDay }}
    </div>
    <!-- datepicker here <datepicker></datepicker> -->
    <div class="col no-highlight"><b>{{ currentDay }}</b></div>
    <div class="col pointer no-highlight" @click="nextSalesDate()">
      {{ nextDay }}
      <font-awesome-icon icon="long-arrow-alt-right" />
    </div>
  </div>
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
</div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'

const formats = {
  in: 'DD-MM-YYYY',
  out: 'DD/MM/YYYY'
}

export default {
  name: 'SalesTable',
  components: {
    Datepicker
  },
  filters: {
    date: (rawDate) => moment(rawDate).format('HH:mm')
  },
  methods: mapActions([
    'nextSalesDate',
    'prevSalesDate'
  ]),
  computed: {
    ...mapGetters([
      'sales',
      'totalSales',
      'currentSalesDate'
    ]),
    totalSalesDisplay () {
      return new Intl.NumberFormat({ style: 'currency' }).format(this.totalSales)
    },
    previousDay () {
      return moment(this.currentSalesDate, formats.in).subtract(1, 'd').format(formats.out)
    },
    currentDay () {
      return moment(this.currentSalesDate, formats.in).format(formats.out)
    },
    nextDay () {
      return moment(this.currentSalesDate, formats.in).add(1, 'd').format(formats.out)
    }
  }
}
</script>

<style lang="scss" scoped>
.date-nav {
  height: 5%;
}
.table-container {
  height: 95%;
}
</style>

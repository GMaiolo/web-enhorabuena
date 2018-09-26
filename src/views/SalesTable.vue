<template>
<div class="w-100">
  <div class="date-nav row">
    <div class="col pointer" @click="prevSalesDate()">
      <font-awesome-icon icon="long-arrow-alt-left" />
      {{ previousDay }}
    </div>
    <!-- datepicker here <datepicker></datepicker> -->
    <div class="col"><b>{{ currentDay }}</b></div>
    <div class="col pointer" @click="nextSalesDate()">
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
  <div class="totals border-top d-flex align-items-center">
    <!-- card/cash, expenses -->
    <p class="m-auto"><b>Total ventas: </b><span>${{ totalSalesDisplay }}</span></p>
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
    date: (rawDate) => moment(rawDate).format('HH:mm'),
    salesDateDisplay: (date) => date.replace(/-/g, '/')
  },
  methods: mapActions([ 'nextSalesDate', 'prevSalesDate' ]),
  computed: {
    ...mapGetters([
      'sales',
      'totalSalesValue',
      'currentSalesDate'
    ]),
    totalSalesDisplay () {
      return new Intl.NumberFormat({ style: 'currency' }).format(this.totalSalesValue)
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
  height: 85%;
}
.totals {
  height: 10%;
}
</style>

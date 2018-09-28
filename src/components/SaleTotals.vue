<template>
  <div>
    <p><b>Total Efectivo: </b><span>$ {{ totalSalesCash }}</span></p>
    <p><b>Total Tarjeta: </b><span>$ {{ totalSalesCard }}</span></p>
    <hr>
    <p><b>Total Ventas: </b><span>$ {{ totalSales }}</span></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'sale-totals',
  computed: mapGetters([
    'totalSalesCash',
    'totalSalesCard',
    'totalSales'
  ])
}
</script>

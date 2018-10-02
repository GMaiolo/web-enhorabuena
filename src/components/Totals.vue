<template>
  <div>
    <p><b>Total Efectivo: </b><span>$ {{ totalCash }}</span></p>
    <p><b>Total Tarjeta: </b><span>$ {{ totalCard }}</span></p>
    <hr>
    <p><b>Total Ventas: </b><span>$ {{ totalSales }}</span></p>
    <p><b>Total Gastos: </b><span>$ {{ totalExpenses }}</span></p>
    <hr>
    <p><b>Total: </b><span>$ {{ totalSales - totalExpenses }}</span></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'totals',
  computed: mapGetters({
    totalCash: 'sales/totalCash',
    totalCard: 'sales/totalCard',
    totalExpenses: 'expenses/total',
    totalSales: 'sales/total'
  })
}
</script>

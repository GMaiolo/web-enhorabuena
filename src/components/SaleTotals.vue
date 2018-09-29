<template>
  <div>
    <p><b>Total Efectivo: </b><span>$ {{ totalCash }}</span></p>
    <p><b>Total Tarjeta: </b><span>$ {{ totalCard }}</span></p>
    <hr>
    <p><b>Total Ventas: </b><span>$ {{ total }}</span></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'sale-totals',
  computed: mapGetters({
    totalCash: 'sales/totalCash',
    totalCard: 'sales/totalCard',
    total: 'sales/total'
  })
}
</script>

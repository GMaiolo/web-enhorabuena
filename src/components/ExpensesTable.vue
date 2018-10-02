<template>
<div class="table-container o-auto">
  <table class="table table-sm table-bordered table-hover m-0">
    <thead>
      <tr>
        <th scope="col">Monto</th>
        <th scope="col">Detalle</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="expense in expenses" :key="expense._id">
        <th scope="row">$ {{ expense.price }}</th>
        <td>{{ expense.description }}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'expenses-table',
  computed: mapGetters({
    expenses: 'expenses/list'
  })
}
</script>

<style lang="scss" scoped>
.table-container {
  height: calc(100% - 100px);
}
</style>

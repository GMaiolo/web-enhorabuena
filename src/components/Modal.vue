<template>
<div>
  <div class="backdrop" @click="close()"></div>
  <ExpensesModal v-if="expensesActive" />
  <SalesModal v-else-if="salesActive" />
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import ExpensesModal from '@/components/ExpensesModal.vue'
import SalesModal from '@/components/SalesModal.vue'

export default {
  name: 'Modal',
  components: {
    ExpensesModal,
    SalesModal
  },
  computed: mapGetters('modal', [ 'salesActive', 'expensesActive' ]),
  methods: mapMutations('modal', [ 'close' ])
}
</script>

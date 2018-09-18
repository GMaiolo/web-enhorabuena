<template>
<div>
  <div class="backdrop" @click="closeModal"></div>
  <ExpensesModal v-if="expensesModalActive" />
  <SalesModal v-else-if="salesModalActive" />
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { KEYS } from '@/store/constants'
import ExpensesModal from '@/components/ExpensesModal.vue'
import SalesModal from '@/components/SalesModal.vue'

export default {
  name: 'Modal',
  components: {
    ExpensesModal,
    SalesModal
  },
  computed: {
    ...mapGetters([ 'activeModal' ]),
    salesModalActive () { return this.activeModal === 'sales' },
    expensesModalActive () { return this.activeModal === 'expenses' }
  },
  methods: {
    closeModal () {
      this.$store.commit(KEYS.MODAL.CLOSE)
    }
  }
}
</script>

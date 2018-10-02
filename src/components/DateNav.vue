<template>
  <div class="date-nav row d-flex align-items-center">
    <div class="col pointer no-highlight" @click="prevDate()">
      <font-awesome-icon icon="long-arrow-alt-left" />
      {{ previousDay }}
    </div>
    <!-- datepicker here <datepicker></datepicker> -->
    <div class="col no-highlight"><b>{{ currentDay }}</b></div>
    <div class="col pointer no-highlight" @click="nextDate()">
      {{ nextDay }}
      <font-awesome-icon icon="long-arrow-alt-right" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'

const formats = {
  in: 'DD-MM-YYYY',
  out: 'DD/MM/YYYY'
}

export default {
  name: 'date-nav',
  methods: mapActions({
    nextDate: 'nextDate',
    prevDate: 'prevDate'
  }),
  computed: {
    ...mapGetters({
      currentDate: 'date'
    }),
    previousDay () {
      return moment(this.currentDate, formats.in).subtract(1, 'd').format(formats.out)
    },
    currentDay () {
      return moment(this.currentDate, formats.in).format(formats.out)
    },
    nextDay () {
      return moment(this.currentDate, formats.in).add(1, 'd').format(formats.out)
    }
  }
}
</script>

<style lang="scss" scoped>
.date-nav {
  height: 50px;
}
</style>

<template>
  <div class="date-nav w-100 m-0 row d-flex align-items-center">
    <div class="col pl-0 pointer no-highlight" @click="prevDate()">
      <font-awesome-icon icon="long-arrow-alt-left" />
      <span class="day mx-1 d-none d-lg-inline">{{ prev.day }}</span>
      <span class="date d-inline d-md-none d-lg-inline">{{ prev.date }}</span>
    </div>
    <div class="col no-highlight font-weight-bold">
      <span class="day mr-1 d-none d-lg-inline">{{ current.day }}</span>
      <span class="date">{{ current.date }}</span>
    </div>
    <div class="col pr-0 pointer no-highlight" @click="nextDate()">
      <span class="day mr-1 d-none d-lg-inline">{{ next.day }}</span>
      <span class="date mr-1 d-inline d-md-none d-lg-inline">{{ next.date }}</span>
      <font-awesome-icon icon="long-arrow-alt-right" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'

const formats = {
  in: 'DD-MM-YYYY',
  out: 'DD/MM/YY'
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
    prev () {
      return {
        date: moment(this.currentDate, formats.in).subtract(1, 'd').format(formats.out),
        day: moment(this.currentDate, formats.in).subtract(1, 'd').format('ddd')
      }
    },
    current () {
      return {
        date: moment(this.currentDate, formats.in).format(formats.out),
        day: moment(this.currentDate, formats.in).format('ddd')
      }
    },
    next () {
      return {
        date: moment(this.currentDate, formats.in).add(1, 'd').format(formats.out),
        day: moment(this.currentDate, formats.in).add(1, 'd').format('ddd')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.date-nav {
  height: 50px;
}
</style>

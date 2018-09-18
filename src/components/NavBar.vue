<template>
<nav class="shadow-sm bg-primary text-light border-bottom">
  <ul class="w-100 d-flex flex-row align-items-center">
    <li class="date position-absolute font-weight-light"> {{ day }} </li>
    <li class="time m-auto font-weight-bold"> {{ time }} </li>
  </ul>
</nav>
</template>

<script>
import moment from 'moment'

const formats = {
  date: 'dddd D [de] MMMM, YYYY',
  time: 'HH:mm:ss'
}

export default {
  name: 'navbar',
  data () {
    return {
      day: moment().locale('es').format(formats.date),
      time: moment().format(formats.time)
    }
  },
  beforeMount () {
    setInterval(() => {
      this.time = moment().format(formats.time)
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
nav {
  transition: filter .2;
}
.date {
  left: 25px;
}
.time {
  font-size: 1.50rem;
}
</style>

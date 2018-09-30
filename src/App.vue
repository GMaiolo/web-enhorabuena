<template>
<div id="app">
  <Modal v-show="activeModal" />
  <NavBar class="nav" :class="{ blurred: activeModal }" />
  <router-view class="view" :class="{ blurred: activeModal }" />
</div>
</template>

<script>
import Modal from '@/components/Modal.vue'
import NavBar from './components/NavBar'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: { NavBar, Modal },
  computed: mapGetters('modal', { activeModal: 'active' })
}
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';
@import './styles/_globals.scss';

$nav-height: 80px;
.nav {
  height: $nav-height;
}
.view {
  height: calc(100% - #{$nav-height});
}
</style>

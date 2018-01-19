<template>
  <div>
    <!-- 头部 -->
<app-header></app-header>
<router-view></router-view>
<!-- 底部 -->
<app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from "./common/Header.vue";
import appFooter from "./common/Footer.vue";
export default {
  components: {
    appHeader,
    appFooter
  }
};
</script>

<style scoped>

</style>
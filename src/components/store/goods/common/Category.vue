<template>
  <div>
    <router-link to="" v-for="item in list" :key="item.id">
      {{item.title}}
 <!-- item具有subcates继续调用自己 -->
      <app-category v-if="item.subcates && item.subcates.length!=0 " :list="item.subcates"></app-category>
    </router-link>
  </div>
</template>

<script>
  export default {
    name:'app-category',
    props:['list']
  }
</script>

<style scoped>

</style>
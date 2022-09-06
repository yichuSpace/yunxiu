<template>
  <button><%= pascalCaseName %></button>
</template>

<script lang="ts" setup>
import { <%= camelCaseName %>Props } from './props'


defineOptions({
  name: 'Yun<%= pascalCaseName %>',
})

defineProps(<%= camelCaseName %>Props)
</script>

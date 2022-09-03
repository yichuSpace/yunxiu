<template>
  <div>
    <yun-table></yun-table>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { YunTable } from "yunxiu-next";
import { yunDataTableProps } from "./props";
const props = defineProps(yunDataTableProps);
defineOptions({
  name: "YunDataTable",
});
</script>

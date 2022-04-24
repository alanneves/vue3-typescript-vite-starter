<template>
  <h2 class="!mt-0">{{ props.msg }}</h2>
</template>

<script setup lang="ts">
const props = defineProps<{
  msg: string;
}>();
</script>

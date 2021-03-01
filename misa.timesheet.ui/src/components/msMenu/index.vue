<template>
  <ul class="menu">
    <slot />
  </ul>
</template>

<script>
export default {
  name: "MsMenu",
  props: {
    menuItems: {
      type: Array,
      default: () => []
    },
    timeKeeping: {
      type: Array,
      default: () => []
    },
    timeWorkings: {
      type: Array,
      default: () => []
    },
    managementRequests: {
      type: Array,
      default: () => []
    }
  }
};
</script>

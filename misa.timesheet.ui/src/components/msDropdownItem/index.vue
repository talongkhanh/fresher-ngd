<template>
  <li class="ms-dropdown-item" @click="handleClick">
    <slot name="dropdownItemContent" />
  </li>
</template>

<script>
export default {
  name: "MsDropdownItem",
  methods: {
    handleClick() {
      this.$emit("closeDropdown");
    }
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

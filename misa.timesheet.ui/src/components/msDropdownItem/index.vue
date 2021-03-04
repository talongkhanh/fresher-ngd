<template>
  <li class="ms-dropdown-item" @click="handleDropdownItemClick">
    <slot name="dropdownItemContent" />
  </li>
</template>

<script>
export default {
  name: "MsDropdownItem",
  methods: {
    handleDropdownItemClick() {
      this.$emit("hideDropdown");
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

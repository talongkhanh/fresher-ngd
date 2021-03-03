<template>
  <ul class="menu d-flex align-center">
    <template v-for="(item, index) in menuItems">
      <a
        href="#"
        class="router-item m-r-24 d-flex align-center"
        v-if="!item.hasDropdown"
        :key="index"
      >
        <li class="d-flex align-center">
          {{ item.name }}
        </li>
      </a>
      <ms-dropdown
        v-if="item.hasDropdown"
        :key="index"
        :items="item.subItems"
        :url="item.url"
        :id="`dropdown-${index}`"
        :class="{ active: path.indexOf(item.url) != -1 }"
        class="ms-con-dropdown d-flex align-center router-item m-r-24"
      >
        <li slot="dropdownContent" class="d-flex align-center custom-padding">
          <div>
            {{ item.name }}
          </div>
          <div class="ms-icon icon-chevron-down-white"></div>
        </li>
      </ms-dropdown>
    </template>
  </ul>
</template>

<script>
export default {
  name: "MsMenu",
  props: {
    menuItems: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    path() {
      return this.$route.path;
    }
  }
};
</script>

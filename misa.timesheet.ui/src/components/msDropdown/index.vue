<template>
  <button
    :items="items"
    :id="id"
    @click="isOpen = !isOpen"
    :class="{ active: isOpen }"
  >
    <slot name="dropdownContent" />
    <transition name="fade" appear>
      <ul class="ms-dropdown-menu" v-if="isOpen">
        <slot name="dropdownItem">
          <ms-dropdown-item
            v-for="(item, index) in items"
            :key="index"
            :item="item"
            :url="url"
            @hideDropdown="callToClose"
            class="d-flex align-center"
          >
            <template slot="dropdownItemContent">
              <router-link
                :to="`${url}/${item.slug}`"
                class="ms-dropdown-link d-flex align-center"
              >
                {{ item.name }}
              </router-link>
              <i
                v-if="path == `${url}/${item.slug}`"
                class="ms-icon icon-check"
              ></i>
            </template>
          </ms-dropdown-item>
        </slot>
      </ul>
    </transition>
  </button>
</template>

<script>
export default {
  name: "MsDropdown",
  props: {
    items: {
      type: Array,
      default: () => []
    },
    id: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      default: ""
    }
  },

  created() {
    window.addEventListener("click", this.checkClickOn);
  },
  beforeDestroy() {
    window.removeEventListener("click", this.checkClickOn);
  },
  methods: {
    callToClose() {
      this.isOpen = false;
    },
    checkClickOn(event) {
      if (!document.getElementById(this.id)) return;
      if (!document.getElementById(this.id).contains(event.target)) {
        this.isOpen = false;
      }
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    path() {
      return this.$route.path;
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: 0.2s ease-out;
}

.fade-enter,
.fade-leave-to {
  top: 60px;
  opacity: 0;
}
</style>

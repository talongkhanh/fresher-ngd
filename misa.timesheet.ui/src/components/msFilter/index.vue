<template>
  <div class="ms-filter">
    <div class="ms-filter-header">
      <div class="d-flex justify-space-between">
        <h2 class="ms-filter-header-text">Bộ lọc</h2>
        <i @click="closeFilter" class="ms-icon icon-close"></i>
      </div>
      <div class="ms-filter-header-search">
        <ms-input icon="icon-search" hintText="Tìm kiếm"></ms-input>
      </div>
    </div>
    <div class="ms-filter-option">
      <div
        class="ms-filter-option-item d-flex align-center m-b-8"
        v-for="(item, index) in items"
        :key="index"
      >
        <ms-checkbox>
          <input type="checkbox" />
          <span class="checkmark"></span>
          <span class="flex-grow-1 m-l-8">
            {{ item }}
          </span>
        </ms-checkbox>
      </div>
    </div>
    <div
      class="ms-filter-footer mt-auto d-flex align-center justify-space-between"
    >
      <ms-button
        @click.native="closeFilter"
        long="true"
        type="secondary"
        buttonText="Bỏ lọc"
      ></ms-button>
      <ms-button long="true" type="primary" buttonText="Áp dụng"></ms-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MsFilter",
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    closeFilter() {
      this.$emit("closeFilter");
    }
  }
};
</script>

<style scoped>
.ms-filter {
  width: 260px;
  height: 100%;
  background: var(--white);
  margin-left: 16px;
  border-radius: 10px;
  border: 1px solid var(--input-normal-border-color);
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
}

.ms-filter-header {
  padding: 0 16px;
  padding-top: 14px;
  margin-bottom: 12px;
}

.ms-filter-header-search {
  margin-bottom: 7px;
}

.ms-filter-option {
  height: auto;
  padding: 0 8px;
  padding-bottom: 12px;
}

.ms-filter-option-item {
  width: 100%;
  padding: 0 8px;
  padding-top: 8px;
  height: 36px;
}

.ms-filter-footer {
  bottom: 16px;
  padding: 0 16px;
}
</style>

<template>
  <div class="ms-adjust-column">
    <div class="ms-adjust-column-header">
      <div class="d-flex justify-space-between mb-3">
        <h2 class="ms-adjust-column-header-text">Tùy chỉnh cột</h2>
        <i @click="closeAdjustColumn()" class="ms-icon icon-close"></i>
      </div>
      <div class="ms-adjust-column-header-search">
        <ms-input
          ref="msInput"
          icon="icon-search"
          hintText="Tìm kiếm"
        ></ms-input>
      </div>
    </div>
    <div class="ms-adjust-column-option">
      <div
        class="ms-adjust-column-option-item d-flex align-center"
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
        <i class="ms-icon icon-drag"></i>
      </div>
    </div>
    <div
      class="ms-adjust-column-footer mt-auto d-flex align-center justify-center"
    >
      <ms-button
        class="mr-4"
        long="true"
        type="secondary"
        buttonText="Mặc định"
      ></ms-button>
      <ms-button type="primary" buttonText="Lưu"></ms-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MsAdjustColumn",
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    closeAdjustColumn() {
      this.$emit("closeAdjustColumn");
    }
  },
  mounted() {
    this.$refs.msInput.$refs.input.focus();
  }
};
</script>

<style scoped>
.ms-adjust-column {
  z-index: 3 !important;
  left: 0;
  top: 100%;
  position: absolute;
  width: 260px;
  height: max-content;
  background: var(--white);
  border-radius: 10px;
  border: 1px solid var(--input-normal-border-color);
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
}

.ms-adjust-column::after {
  content: "";
  display: block;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;

  border-bottom: 12px solid var(--white);
  top: -12px;
  left: 14px;
  position: absolute;

  z-index: 4 !important;
}

.ms-adjust-column-header {
  padding: 0 16px;
  padding-top: 14px;
  margin-bottom: 12px;
}

.ms-adjust-column-header-search {
  margin-bottom: 7px;
}

.ms-adjust-column-option {
  height: auto;
  padding: 0 8px;
  padding-bottom: 12px;
  font-weight: normal;
  color: var(--black);
}

.ms-adjust-column-option-item {
  width: 100%;
  padding: 10px 8px;
  height: 36px;
}

.ms-adjust-column-option-item:hover {
  background: #ebf0ff;
  border-radius: 4px;
}

.ms-adjust-column-footer {
  bottom: 16px;
  padding: 0 16px;
}
</style>

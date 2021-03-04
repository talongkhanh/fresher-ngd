<template>
  <div class="base-content-area">
    <div class="content-header">
      <div
        class="d-flex justify-space-between align-center"
        style="height: 100%"
      >
        <div class="d-flex align-center">
          <h2 class="content-header-title">
            {{ contentHeaderTitle }}
          </h2>
          <slot name="dropDown" />
        </div>
        <div class="d-flex align-center">
          <ms-input
            icon="icon-search"
            hintText="Tìm kiếm"
            class="m-r-8"
          ></ms-input>
          <div style="width: 300px"></div>
          <ms-button
            @click.native="showDialog"
            class="m-r-8"
            icon="icon-add"
            type="primary"
            buttonText="Thêm"
          ></ms-button>
          <ms-button
            icon="icon-filter"
            @click.native="toggleShowFilter()"
          ></ms-button>
        </div>
      </div>
    </div>
    <div class="content-main">
      <slot name="contentMain" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseContentArea",
  props: {
    contentHeaderTitle: {
      type: [String]
    },
    isShowFilter: {
      type: [Boolean, String],
      default: false
    },
    isShowDialog: {
      type: [Boolean, String],
      default: false
    }
  },
  methods: {
    toggleShowFilter() {
      this.$emit("toggleShowFilter");
    },
    showDialog() {
      this.$emit("showDialog");
    }
  },
  data() {
    return {
      options: ["a", "b", "c"]
    };
  }
};
</script>

<style>
.base-content-area {
  padding: 16px 24px;
  height: 100%;
}
.content-header {
  height: 52px;
  padding-bottom: 16px;
}
h2 {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.384px !important;
}

.content-main {
  height: calc(100% - 52px);
}
</style>

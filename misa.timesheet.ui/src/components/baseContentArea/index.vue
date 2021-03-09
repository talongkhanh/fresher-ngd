<template>
  <div class="base-content-area">
    <div class="content-header">
      <div
        v-if="!isShowMultipleDelete"
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
          <ms-button
            @click.native="btnAddClick"
            class="m-r-8"
            icon="icon-add"
            type="primary"
            buttonText="Thêm"
          ></ms-button>
          <ms-button
            type="filter"
            icon="icon-filter"
            @click.native="toggleShowFilter()"
          ></ms-button>
        </div>
      </div>
      <div v-else class="d-flex align-center">
        <div>
          Đã chọn <b class="ml-2">{{ items.length }}</b>
        </div>
        <div
          @click="unSelect"
          style="color: rgb(239, 41, 47); cursor: pointer;"
          class="mx-4"
        >
          Bỏ chọn
        </div>
        <ms-button
          type="multiple-delete"
          icon="icon-delete"
          buttonText="Xóa"
          @click.native="deleteRecords"
        ></ms-button>
      </div>
    </div>

    <div class="content-main">
      <slot name="contentMain" />
    </div>
  </div>
</template>

<script>
import EventBus from "@/EventBus.js";
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
    },
    isShowMultipleDelete: {
      type: [Boolean, String],
      default: false
    },
    items: {
      type: [Array],
      default: () => []
    }
  },
  methods: {
    toggleShowFilter() {
      this.$emit("toggleShowFilter");
    },
    btnAddClick() {
      this.$emit("btnAddClick");
      this.$emit("focusInput");
    },
    unSelect() {
      EventBus.$emit("unSelect");
    },
    deleteRecords() {
      this.$emit("deleteRecords");
    }
  },
  data() {
    return {};
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

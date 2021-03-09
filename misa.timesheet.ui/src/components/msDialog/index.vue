<template>
  <div class="ms-dialog-wrap">
    <div class="ms-dialog-overlay"></div>
    <div :style="objectStyle" class="ms-dialog d-flex flex-column">
      <div class="ms-dialog-header d-flex align-center justify-space-between">
        <div class="d-flex align-center ms-dialog-header-text">
          <h2>{{ headerPrimaryText }}</h2>
          &nbsp;
          <h3>{{ headerSecondaryText }}</h3>
        </div>
        <i @click="closeDialog" class="ms-icon icon-close"></i>
      </div>
      <div ref="a" class="ms-dialog-content flex-grow-1">
        <slot name="dialogContent" />
      </div>
      <hr v-if="divider" />
      <div class="d-flex align-center justify-end ms-dialog-footer mt-auto">
        <slot name="dialogFooter" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MsDialog",
  props: {
    headerPrimaryText: {
      type: String,
      default: ""
    },
    headerSecondaryText: {
      type: String,
      default: ""
    },
    divider: {
      type: [Boolean, String],
      default: false
    },
    width: String,
    height: String
  },
  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    }
  },
  data() {
    return {
      objectStyle: {
        width: this.width,
        height: this.height
      }
    };
  }
};
</script>

<style>
.ms-dialog-wrap {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3 !important;
}
.ms-dialog-overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.ms-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: white;
  z-index: 3 !important;
  border-radius: 4px;
}

.ms-dialog-header {
  padding: 0 24px;
  padding-top: 24px;
  height: 53px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.ms-dialog-header i {
  margin: 6px !important;
}

.ms-dialog-header-text h2 {
  font-weight: 700;
  letter-spacing: 0.576px;
  font-size: 24px;
  color: rgb(33, 33, 33);
}
.ms-dialog-header-text h3 {
  font-weight: 700;
  letter-spacing: 0.384px;
  font-size: 16px;
  color: rgb(33, 33, 33);
}

/*-------------
Dialog footer
-------------*/

.ms-dialog-footer {
  padding: 16px 24px;
  height: 68px;
}

hr {
  border: none;
  border-bottom: 1px solid var(--input-normal-border-color);
}
</style>

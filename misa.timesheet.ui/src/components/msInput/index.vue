<template>
  <div class="ms-input" :class="[iconRight, { disabled: disabled }]">
    <i class="ms-icon" v-if="icon" :class="icon"></i>
    <input
      v-model="inputVal"
      ref="input"
      :disabled="disabled"
      class="ms-input-item"
      :placeholder="hintText"
      type="text"
    />
  </div>
</template>

<script>
export default {
  name: "MsInput",
  props: {
    hintText: String,
    icon: String,
    iconRight: String,
    disabled: {
      type: [String, Boolean]
    },
    value: {}
  },
  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    }
  }
};
</script>

<style scoped>
/*-------------
input default
-------------*/
.ms-input {
  color: var(--black);
  font-weight: normal;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--white);
  height: 36px;
  width: auto;
  padding: 0 8px;
  border: 1px solid var(--input-normal-border-color);
  border-radius: var(--input-border-radius);
}
/*-------------
input disabled
-------------*/
.ms-input.disabled {
  background-color: #ebebeb !important;
  border-color: #e0e0e0 !important;
  pointer-events: none;
}
/*-------------
input icon right
-------------*/
.ms-input.icon-right {
  flex-direction: row-reverse;
}
/*-------------
input default hover
-------------*/
.ms-input:hover {
  border-color: var(--primary);
}

.ms-input:focus-within {
  border-color: var(--primary);
}

.ms-input-item {
  outline: none;
  height: 100%;
  width: 100%;
}
/*-------------
input with placeholder
-------------*/
.ms-input-item::placeholder {
  color: var(--hint-text-color);
}
</style>

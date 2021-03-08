<template>
  <textarea v-model="inputVal" class="ms-text-area" name="" id=""> </textarea>
</template>

<script>
export default {
  name: "MsTextArea",
  props: ["value"],
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

<style>
.ms-text-area {
  outline: none;
  border: 1px solid var(--input-normal-border-color);
  border-radius: 4px;
  resize: none;
  width: 100%;
  height: 88px;
  padding: 6px 8px;
}

.ms-text-area:hover,
.ms-text-area:focus {
  border-color: var(--input-hover-border-color);
}
</style>

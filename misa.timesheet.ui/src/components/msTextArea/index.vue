<template>
  <textarea class="ms-text-area" name="" id=""> </textarea>
</template>

<script>
export default {
  name: "MsTextArea"
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

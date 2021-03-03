<template>
  <button
    class="ms-button"
    :class="[type, { noIcon: !icon, noText: !buttonText }]"
  >
    <i
      v-if="icon"
      class="ms-icon"
      :class="[icon, { iconAndText: icon && buttonText }]"
    ></i>
    <span v-if="buttonText" class="ms-button-text">
      {{ buttonText }}
    </span>
  </button>
</template>

<script>
export default {
  name: "MsButton",
  props: {
    icon: String,
    buttonText: String,
    type: String
  }
};
</script>

<style lang="css" scoped>
/*-------------
button default
-------------*/
.ms-button {
  font-weight: 500;
  outline: none;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  border-radius: var(--input-border-radius) !important;
  border: 1px solid;
  padding-left: 6px;
  padding-right: 12px;
  min-width: 80px !important;
  color: #171b2a;
}
/*-------------
button no-text
-------------*/
.ms-button.noText {
  padding: 5px 6px !important;
  min-width: unset !important;
  background: var(--white) !important;
  border-color: var(--input-disable-border-color) !important;
}
.ms-button.noText:hover,
.ms-button.noText:focus {
  background: var(--primary-bg) !important;
  border-color: var(--primary) !important;
}

.ms-button.noText:hover i,
.ms-button.noText:focus i {
  background-color: var(--primary) !important;
}

/*-------------
button no-icon
-------------*/
.ms-button.noIcon {
  padding: 0 16px;
}
/*-------------
button secondary
-------------*/
.ms-button.secondary {
  border-color: var(--input-disable-border-color) !important;
  background-color: #fff !important;
}

.ms-button.secondary:hover,
.ms-button.secondary:focus {
  background-color: #eff1f6 !important;
}

.ms-button.secondary:active {
  background-color: #e8eaef !important;
}

/*-------------
button primary
-------------*/
.ms-button.primary {
  border-color: var(--primary) !important;
  background: var(--primary) !important;
  color: var(--white) !important;
}

.ms-button.primary:hover,
.ms-button.primary:focus {
  background: var(--button-primary-hover-bg-color) !important;
  border-color: var(--button-primary-hover-border-color) !important;
}

.ms-button.primary:active {
  background-color: var(--button-primary-active-bg-color) !important;
  border-color: var(--button-primary-active-border-color) !important;
}
/*-------------
button icon
-------------*/
.ms-button i.iconAndText {
  margin-right: 4px !important;
}
</style>

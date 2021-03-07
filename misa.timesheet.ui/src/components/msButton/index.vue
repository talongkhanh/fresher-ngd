<template>
  <button
    class="ms-button"
    :class="[
      type,
      {
        noIcon: !icon,
        noText: !buttonText,
        buttonLong: long
      }
    ]"
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
    type: String,
    long: {
      type: [Boolean, String],
      default: false
    }
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
  display: inline-flex;
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
.ms-button.filter:hover,
.ms-button.filter:focus {
  background: var(--primary-bg) !important;
  border-color: var(--primary) !important;
}

.ms-button.filter:hover i,
.ms-button.filter:focus i {
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

.ms-button.danger {
  background-color: #ef292f !important;
  color: var(--white) !important;
  border-color: #ef292f !important;
}
.ms-button.danger:focus {
  background-color: #ed1219 !important;
}
/*-------------
button icon
-------------*/
.ms-button i.iconAndText {
  margin-right: 4px !important;
}

.ms-button.buttonLong {
  min-width: 100px !important;
}

.ms-button.circle {
  border-radius: 50% !important;
  border: none !important;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3) !important;
}

/*-------------
button paging
-------------*/

.ms-button.paging {
  border-color: transparent !important;
}

.ms-button.multiple-delete {
  background-color: #fff !important;
  color: #ef292f !important;
  border: 1px solid #ef292f !important;
}

.ms-button.multiple-delete i {
  background: #ef292f !important;
}

.ms-button.multiple-delete:hover,
.ms-button.multiple-delete:focus {
  background-color: #fee8e7 !important;
}

.ms-button.multiple-delete:active {
  background-color: #fdd0ce !important;
}
</style>

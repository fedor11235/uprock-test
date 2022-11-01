<template>
<div class="base-input">
  <input class="base-input__input" type="text" :name="name" id="base-input__input" :value="value" @input="handlerInput" placeholder=" "/>
  <label class="base-input__label" for="base-input__input">{{label}}</label>
</div>
</template>
<script>
export default {
  name: 'BaseInput',
  props: {
      label: {
          type: String,
          required: true
      },
      value: {
          type: String,
          required: true
      }
  },
  data() {
      return {
          valueData: ''
      }
  },
  computed: {
      name() {
          return this.label.toLowerCase();
      },
  },
  mounted() {
      this.valueData = this.valueProp
  },
  methods: {
      handlerInput(event) {
          this.$emit('myInput', event.target.value);
      }
  }
}
</script>
<style lang="scss" scoped>
.base-input {
  position: relative;
  margin: 6px;
  &__input {
    border: 1px solid #8a96a3;
    border-radius: 6px;
    padding: 10px 16px;
    font-size: 16px;
    font-weight: 500;
    outline: 0;
    color: $input-color;
    &:focus ~ .base-input__label,
    &:not(:placeholder-shown) ~ .base-input__label {
        transform: translateY(-20px) scale(0.75);
    }

    &:focus ~ .base-input__label {
        color: $primary-color;
    }

    &:focus {
        border: 1px solid $primary-color;
    }
  }
  &__label {
    position: absolute;
    top: 8px;
    left: 16px;
    padding: 0 2px;
    color: $border-color;
    background-color: $text-color;
    line-height: 20px;
    pointer-events: none;
    transform-origin: 0 50%;
    transition: transform 200ms, color 200ms;
  }
}
</style>
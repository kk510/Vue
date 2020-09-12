<template>
  <div>
    <button data-testid="btn" :disabled="disabled" @click="handleClick">
      <slot>kkb</slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
      console.log("123")

    },
  },
};
</script>

<style scoped></style>

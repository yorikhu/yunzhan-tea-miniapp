<template>
  <button
    class="yzm-button"
    :class="[`yzm-button--${variant}`, { 'yzm-button--block': block }]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'outline' | 'ghost' | 'gold';
    block?: boolean;
    disabled?: boolean;
  }>(),
  { variant: 'primary', block: false, disabled: false },
);

defineEmits<{ click: [] }>();
</script>

<style scoped>
.yzm-button {
  display: inline-flex;
  min-height: 88rpx;
  margin: 0;
  padding: 0 42rpx;
  align-items: center;
  justify-content: center;
  border-radius: 999rpx;
  font-size: 29rpx;
  font-weight: 600;
  line-height: 1;
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}

.yzm-button:active {
  transform: scale(0.98);
}

.yzm-button--block {
  width: 100%;
}

.yzm-button--primary {
  color: #fffdf8;
  background: linear-gradient(135deg, var(--yzm-jade), var(--yzm-jade-dark));
  box-shadow: 0 12rpx 28rpx rgba(14, 85, 71, 0.2);
}

.yzm-button--outline {
  color: var(--yzm-jade-dark);
  border: 2rpx solid var(--yzm-jade);
  background: rgba(255, 255, 255, 0.36);
}

.yzm-button--ghost {
  color: var(--yzm-ink-soft);
  background: transparent;
}

.yzm-button--gold {
  color: #fffaf0;
  background: linear-gradient(135deg, #c48a3c, #a96821);
}

.yzm-button[disabled] {
  opacity: 0.42;
}
</style>

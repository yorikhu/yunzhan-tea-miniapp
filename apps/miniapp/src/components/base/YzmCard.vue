<template>
  <view class="yzm-card" :class="{ 'yzm-card--flat': flat }">
    <slot />
  </view>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ flat?: boolean }>(), { flat: false });
</script>

<style scoped>
.yzm-card {
  overflow: hidden;
  border: 1rpx solid var(--yzm-line);
  border-radius: 24rpx;
  background: var(--yzm-paper-light);
  box-shadow: var(--yzm-shadow);
}

.yzm-card--flat {
  box-shadow: none;
}
</style>

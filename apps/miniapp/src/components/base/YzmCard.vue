<template>
  <view class="yzm-card paper-texture" :class="{ 'yzm-card--flat': flat }">
    <slot />
  </view>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ flat?: boolean }>(), { flat: false });
</script>

<style scoped>
.yzm-card {
  overflow: hidden;
  border: 1rpx solid rgba(23, 63, 56, 0.06);
  border-radius: 28rpx;
  background-color: rgba(255, 253, 248, 0.88);
  box-shadow: var(--yzm-shadow);
}

.yzm-card--flat {
  box-shadow: none;
}
</style>

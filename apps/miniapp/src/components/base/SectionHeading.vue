<template>
  <view class="section-heading">
    <view>
      <text v-if="eyebrow" class="section-heading__eyebrow">{{ eyebrow }}</text>
      <view class="section-heading__title-row">
        <text class="section-heading__mark">一</text>
        <text class="section-heading__title">{{ title }}</text>
      </view>
    </view>
    <text v-if="action" class="section-heading__action" @click="$emit('action')"
      >{{ action }} ›</text
    >
  </view>
</template>

<script setup lang="ts">
defineProps<{ title: string; eyebrow?: string; action?: string }>();
defineEmits<{ action: [] }>();
</script>

<style scoped>
.section-heading {
  display: flex;
  margin-bottom: 22rpx;
  align-items: flex-end;
  justify-content: space-between;
}

.section-heading__eyebrow {
  display: block;
  margin-bottom: 8rpx;
  color: var(--yzm-gold);
  font-size: 20rpx;
  letter-spacing: 5rpx;
}

.section-heading__title-row {
  display: flex;
  align-items: center;
  gap: 12rpx;
}

.section-heading__mark {
  color: var(--yzm-gold);
  font-size: 28rpx;
}

.section-heading__title {
  font-size: 38rpx;
  font-weight: 650;
  letter-spacing: 2rpx;
}

.section-heading__action {
  padding: 10rpx 0;
  color: var(--yzm-ink-soft);
  font-size: 24rpx;
}
</style>

<template>
  <view class="hero paper-texture">
    <view class="hero__copy">
      <text class="hero__eyebrow">身心有栖 · 茶中见己</text>
      <text class="hero__title">一盏茶，安顿身心</text>
      <text class="hero__description">从景迈山的一片叶子出发，练习温柔而坚定地面对生活。</text>
      <view class="hero__actions">
        <YzmButton @click="$emit('shop')">选一盏茶</YzmButton>
        <YzmButton variant="outline" @click="$emit('practice')">开始静心</YzmButton>
      </view>
    </view>
    <view class="hero__tea">
      <view class="hero__steam hero__steam--one" />
      <view class="hero__steam hero__steam--two" />
      <view class="hero__cup"><view class="hero__tea-surface" /></view>
      <view class="hero__saucer" />
    </view>
  </view>
</template>

<script setup lang="ts">
import YzmButton from '@/components/base/YzmButton.vue';
defineEmits<{ shop: []; practice: [] }>();
</script>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  min-height: 560rpx;
  padding: 62rpx 36rpx 40rpx;
  border: 1rpx solid rgba(23, 63, 56, 0.08);
  border-radius: 34rpx;
  background-color: rgba(255, 253, 248, 0.76);
  box-shadow: var(--yzm-shadow);
}

.hero__copy {
  position: relative;
  z-index: 2;
  max-width: 520rpx;
}

.hero__eyebrow,
.hero__title,
.hero__description {
  display: block;
}

.hero__eyebrow {
  color: var(--yzm-gold);
  font-size: 20rpx;
  letter-spacing: 5rpx;
}

.hero__title {
  margin-top: 20rpx;
  font-size: 62rpx;
  font-weight: 650;
  line-height: 1.22;
  letter-spacing: 4rpx;
}

.hero__description {
  max-width: 450rpx;
  margin-top: 22rpx;
  color: var(--yzm-ink-soft);
  font-size: 25rpx;
  line-height: 1.8;
}

.hero__actions {
  display: flex;
  margin-top: 34rpx;
  gap: 14rpx;
}

.hero__actions :deep(.yzm-button) {
  min-height: 76rpx;
  padding: 0 28rpx;
  font-size: 24rpx;
}

.hero__tea {
  position: absolute;
  right: -18rpx;
  bottom: 8rpx;
  width: 300rpx;
  height: 260rpx;
  opacity: 0.82;
}

.hero__cup {
  position: absolute;
  right: 50rpx;
  bottom: 34rpx;
  width: 184rpx;
  height: 104rpx;
  border-radius: 20rpx 20rpx 90rpx 90rpx;
  background: linear-gradient(180deg, #f6f0df, #d8dfcf);
}

.hero__tea-surface {
  width: 150rpx;
  height: 24rpx;
  margin: 8rpx auto;
  border-radius: 50%;
  background: #a56a2f;
}

.hero__saucer {
  position: absolute;
  right: 20rpx;
  bottom: 16rpx;
  width: 240rpx;
  height: 34rpx;
  border-radius: 50%;
  background: rgba(71, 100, 83, 0.2);
}

.hero__steam {
  position: absolute;
  bottom: 138rpx;
  width: 28rpx;
  height: 95rpx;
  border-left: 5rpx solid rgba(23, 63, 56, 0.18);
  border-radius: 50%;
  transform: rotate(16deg);
}

.hero__steam--one {
  right: 120rpx;
}

.hero__steam--two {
  right: 165rpx;
  height: 76rpx;
  transform: rotate(-12deg);
}
</style>

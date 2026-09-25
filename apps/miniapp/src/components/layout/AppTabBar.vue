<template>
  <view class="tab-bar">
    <view
      v-for="item in tabs"
      :key="item.key"
      class="tab-bar__item"
      :class="{ 'tab-bar__item--active': active === item.key }"
      @click="goTab(item.key)"
    >
      <text class="tab-bar__icon">{{ item.icon }}</text>
      <text class="tab-bar__label">{{ item.label }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { useNavigation, type TabKey } from '@/composables/useNavigation';

defineProps<{ active: TabKey }>();
const { goTab } = useNavigation();

const tabs: { key: TabKey; label: string; icon: string }[] = [
  { key: 'home', label: '首页', icon: '⌂' },
  { key: 'mall', label: '商城', icon: '茗' },
  { key: 'practice', label: '静心', icon: '心' },
  { key: 'cart', label: '购物车', icon: '袋' },
  { key: 'profile', label: '我的', icon: '人' },
];
</script>

<style scoped>
.tab-bar {
  position: fixed;
  z-index: 20;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  height: calc(118rpx + env(safe-area-inset-bottom));
  padding: 10rpx 18rpx env(safe-area-inset-bottom);
  align-items: flex-start;
  border-top: 1rpx solid rgba(23, 63, 56, 0.09);
  background: rgba(255, 253, 248, 0.96);
  box-shadow: 0 -10rpx 35rpx rgba(55, 45, 28, 0.06);
}

.tab-bar__item {
  display: flex;
  flex: 1;
  min-width: 0;
  align-items: center;
  flex-direction: column;
  color: #71807c;
}

.tab-bar__icon {
  width: 46rpx;
  height: 46rpx;
  border: 1rpx solid transparent;
  border-radius: 50%;
  font-size: 25rpx;
  line-height: 46rpx;
  text-align: center;
}

.tab-bar__label {
  margin-top: 4rpx;
  font-size: 20rpx;
}

.tab-bar__item--active {
  color: var(--yzm-jade-dark);
  font-weight: 650;
}

.tab-bar__item--active .tab-bar__icon {
  color: #fff;
  background: var(--yzm-jade);
}
</style>

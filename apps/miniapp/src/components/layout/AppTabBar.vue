<template>
  <view class="tab-bar-safe">
    <view class="tab-bar">
      <view
        v-for="item in tabs"
        :key="item.key"
        class="tab-bar__item"
        :class="{ 'tab-bar__item--active': active === item.key }"
        hover-class="tab-bar__item--pressed"
        @click="goTab(item.key)"
      >
        <image
          class="tab-bar__icon"
          :src="active === item.key ? item.activeIcon : item.icon"
          mode="aspectFit"
        />
        <text class="tab-bar__label">{{ item.label }}</text>
        <view v-if="active === item.key" class="tab-bar__indicator" />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { useNavigation, type TabKey } from '@/composables/useNavigation';

defineProps<{ active: TabKey }>();
const { goTab } = useNavigation();

const tabs: { key: TabKey; label: string; icon: string; activeIcon: string }[] = [
  {
    key: 'home',
    label: '首页',
    icon: '/static/icons/home.svg',
    activeIcon: '/static/icons/home-active.svg',
  },
  {
    key: 'mall',
    label: '商城',
    icon: '/static/icons/mall.svg',
    activeIcon: '/static/icons/mall-active.svg',
  },
  {
    key: 'practice',
    label: '静心',
    icon: '/static/icons/practice.svg',
    activeIcon: '/static/icons/practice-active.svg',
  },
  {
    key: 'cart',
    label: '购物车',
    icon: '/static/icons/cart.svg',
    activeIcon: '/static/icons/cart-active.svg',
  },
  {
    key: 'profile',
    label: '我的',
    icon: '/static/icons/profile.svg',
    activeIcon: '/static/icons/profile-active.svg',
  },
];
</script>

<style scoped>
.tab-bar-safe {
  position: fixed;
  z-index: 50;
  right: 0;
  bottom: 0;
  left: 0;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  background: rgba(252, 250, 245, 0.98);
  box-shadow: 0 -1rpx 0 rgba(20, 52, 46, 0.08);
}

.tab-bar {
  display: flex;
  width: 100%;
  max-width: 980rpx;
  height: 108rpx;
  margin: 0 auto;
  padding: 8rpx 12rpx 6rpx;
  align-items: stretch;
}

.tab-bar__item {
  position: relative;
  display: flex;
  flex: 1 1 0;
  min-width: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #7b837f;
}

.tab-bar__item--pressed {
  opacity: 0.62;
}

.tab-bar__icon {
  width: 42rpx;
  height: 42rpx;
}

.tab-bar__label {
  margin-top: 4rpx;
  font-size: 19rpx;
  line-height: 1.2;
}

.tab-bar__item--active {
  color: var(--yzm-jade);
  font-weight: 600;
}

.tab-bar__indicator {
  position: absolute;
  bottom: -1rpx;
  width: 28rpx;
  height: 4rpx;
  border-radius: 4rpx;
  background: var(--yzm-jade);
}
</style>

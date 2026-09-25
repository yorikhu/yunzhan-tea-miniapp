<template>
  <view class="app-header" :class="{ 'app-header--center': centered }">
    <view v-if="back" class="app-header__back" @click="goBack">‹</view>
    <view class="app-header__brand">
      <image v-if="showLogo" class="app-header__logo" src="/static/logo.png" mode="aspectFill" />
      <view>
        <text class="app-header__title">{{ title }}</text>
        <text v-if="subtitle" class="app-header__subtitle">{{ subtitle }}</text>
      </view>
    </view>
    <view v-if="back" class="app-header__spacer" />
  </view>
</template>

<script setup lang="ts">
import { useNavigation } from '@/composables/useNavigation';

withDefaults(
  defineProps<{
    title: string;
    subtitle?: string;
    back?: boolean;
    centered?: boolean;
    showLogo?: boolean;
  }>(),
  { subtitle: '', back: false, centered: false, showLogo: false },
);

const { goBack } = useNavigation();
</script>

<style scoped>
.app-header {
  display: flex;
  min-height: 108rpx;
  padding-top: calc(22rpx + env(safe-area-inset-top));
  align-items: center;
  justify-content: space-between;
}

.app-header--center .app-header__brand {
  flex: 1;
  justify-content: center;
  text-align: center;
}

.app-header__back,
.app-header__spacer {
  width: 64rpx;
}

.app-header__back {
  font-family: Arial, sans-serif;
  font-size: 58rpx;
  line-height: 1;
}

.app-header__brand {
  display: flex;
  align-items: center;
  gap: 16rpx;
}

.app-header__logo {
  width: 68rpx;
  height: 68rpx;
  border-radius: 50%;
}

.app-header__title {
  display: block;
  font-size: 42rpx;
  font-weight: 650;
  letter-spacing: 4rpx;
}

.app-header__subtitle {
  display: block;
  margin-top: 2rpx;
  color: var(--yzm-muted);
  font-size: 19rpx;
  letter-spacing: 3rpx;
}
</style>

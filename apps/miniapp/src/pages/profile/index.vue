<template>
  <view class="page-shell">
    <AppHeader title="我的" subtitle="与一盏茶相处的日子" />
    <ProfileOverview :profile="mockProfile" />
    <view class="profile-section">
      <ProfileOrderPanel />
    </view>
    <view class="profile-section">
      <ProfileMenu :coupons="mockProfile.coupons" @select="showComing" />
    </view>

    <view class="profile-quote">
      <image src="/static/logo.png" mode="aspectFill" />
      <text>愿每一次举杯，都更靠近真实的自己</text>
    </view>
    <AppTabBar active="profile" />
  </view>
</template>

<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue';
import AppTabBar from '@/components/layout/AppTabBar.vue';
import ProfileOverview from './components/ProfileOverview.vue';
import ProfileOrderPanel from './components/ProfileOrderPanel.vue';
import ProfileMenu from './components/ProfileMenu.vue';
import { mockProfile } from '@/services/mock/data';

const showComing = (label: string) =>
  uni.showToast({ title: `${label}功能即将开放`, icon: 'none' });
</script>

<style scoped>
.profile-section {
  margin-top: 20rpx;
}

.profile-quote {
  display: flex;
  margin-top: 40rpx;
  align-items: center;
  justify-content: center;
  color: var(--yzm-muted);
  font-family: 'Songti SC', 'STSong', serif;
  font-size: 19rpx;
  gap: 12rpx;
}

.profile-quote image {
  width: 42rpx;
  height: 42rpx;
  border-radius: 50%;
}
</style>

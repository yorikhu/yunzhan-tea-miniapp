<template>
  <view class="page-shell profile-page">
    <AppHeader title="我的" subtitle="与一盏茶相处的日子" />

    <YzmCard>
      <view class="profile-card">
        <image class="profile-card__avatar" src="/static/logo.png" mode="aspectFill" />
        <view class="profile-card__body">
          <text class="profile-card__name">{{ mockProfile.name }}</text>
          <text class="profile-card__level">会员等级 · {{ mockProfile.level }}</text>
        </view>
        <text class="profile-card__arrow">›</text>
      </view>
    </YzmCard>

    <YzmCard class="profile-stats" flat>
      <view
        ><text>可用积分</text><text>{{ mockProfile.points }}</text></view
      >
      <view class="profile-stats__divider" />
      <view
        ><text>优惠券</text><text>{{ mockProfile.coupons }} 张</text></view
      >
      <view class="profile-stats__divider" />
      <view><text>静心日</text><text>21 天</text></view>
    </YzmCard>

    <YzmCard class="order-panel">
      <view class="order-panel__title"><text>我的订单</text><text>全部订单 ›</text></view>
      <view class="order-panel__states">
        <view v-for="item in orderStates" :key="item.label">
          <view class="order-panel__icon"
            >{{ item.icon }}<text v-if="item.count">{{ item.count }}</text></view
          >
          <text>{{ item.label }}</text>
        </view>
      </view>
    </YzmCard>

    <YzmCard class="menu-panel">
      <view
        v-for="item in menus"
        :key="item.label"
        class="menu-row"
        @click="showComing(item.label)"
      >
        <text class="menu-row__icon">{{ item.icon }}</text>
        <view class="menu-row__body"
          ><text>{{ item.label }}</text
          ><text>{{ item.meta }}</text></view
        >
        <text class="menu-row__arrow">›</text>
      </view>
    </YzmCard>

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
import YzmCard from '@/components/base/YzmCard.vue';
import { mockProfile } from '@/services/mock/data';

const orderStates = [
  { icon: '付', label: '待付款', count: 0 },
  { icon: '备', label: '待发货', count: 1 },
  { icon: '运', label: '待收货', count: 0 },
  { icon: '评', label: '待评价', count: 0 },
];
const menus = [
  { icon: '⌖', label: '收货地址', meta: '2 个地址' },
  { icon: '券', label: '优惠券', meta: `${mockProfile.coupons} 张可用` },
  { icon: '记', label: '我的观察日记', meta: '12 封信' },
  { icon: '问', label: '联系客服', meta: '每日 09:00–20:00' },
  { icon: '设', label: '设置', meta: '' },
  { icon: '茗', label: '关于韵盏茗', meta: '品牌故事' },
];

const showComing = (label: string) =>
  uni.showToast({ title: `${label}功能即将开放`, icon: 'none' });
</script>

<style scoped>
.profile-card {
  display: flex;
  padding: 28rpx;
  align-items: center;
  gap: 22rpx;
}

.profile-card__avatar {
  width: 112rpx;
  height: 112rpx;
  border: 2rpx solid rgba(23, 107, 89, 0.25);
  border-radius: 50%;
}

.profile-card__body {
  flex: 1;
}

.profile-card__name,
.profile-card__level {
  display: block;
}

.profile-card__name {
  font-size: 34rpx;
  font-weight: 650;
}

.profile-card__level {
  margin-top: 8rpx;
  color: var(--yzm-muted);
  font-size: 21rpx;
}

.profile-card__arrow,
.menu-row__arrow {
  color: var(--yzm-muted);
  font-size: 40rpx;
}

.profile-stats {
  display: flex;
  margin-top: 18rpx;
  padding: 24rpx 0;
  align-items: center;
}

.profile-stats > view:not(.profile-stats__divider) {
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
}

.profile-stats text {
  display: block;
  color: var(--yzm-muted);
  font-size: 19rpx;
}

.profile-stats text:last-child {
  margin-top: 8rpx;
  color: var(--yzm-gold);
  font-family: Georgia, serif;
  font-size: 30rpx;
  font-weight: 600;
}

.profile-stats__divider {
  width: 1rpx;
  height: 52rpx;
  background: var(--yzm-line);
}

.order-panel,
.menu-panel {
  margin-top: 20rpx;
}

.order-panel__title {
  display: flex;
  padding: 24rpx 26rpx;
  justify-content: space-between;
  border-bottom: 1rpx solid var(--yzm-line);
  font-size: 25rpx;
  font-weight: 650;
}

.order-panel__title text:last-child {
  color: var(--yzm-muted);
  font-size: 20rpx;
  font-weight: 400;
}

.order-panel__states {
  display: flex;
  padding: 26rpx 12rpx;
}

.order-panel__states > view {
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  color: var(--yzm-ink-soft);
  font-size: 20rpx;
}

.order-panel__icon {
  position: relative;
  display: flex;
  width: 62rpx;
  height: 62rpx;
  margin-bottom: 9rpx;
  align-items: center;
  justify-content: center;
  border: 1rpx solid var(--yzm-line);
  border-radius: 50%;
  color: var(--yzm-jade);
  font-size: 22rpx;
}

.order-panel__icon text {
  position: absolute;
  top: -8rpx;
  right: -8rpx;
  width: 28rpx;
  height: 28rpx;
  border-radius: 50%;
  color: #fff;
  background: var(--yzm-gold);
  font-size: 17rpx;
  line-height: 28rpx;
  text-align: center;
}

.menu-row {
  display: flex;
  min-height: 96rpx;
  padding: 0 24rpx;
  align-items: center;
  border-bottom: 1rpx solid var(--yzm-line);
  gap: 18rpx;
}

.menu-row:last-child {
  border-bottom: 0;
}

.menu-row__icon {
  display: flex;
  width: 48rpx;
  height: 48rpx;
  align-items: center;
  justify-content: center;
  border: 1rpx solid rgba(23, 107, 89, 0.22);
  border-radius: 14rpx;
  color: var(--yzm-jade);
  font-size: 20rpx;
}

.menu-row__body {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  font-size: 24rpx;
}

.menu-row__body text:last-child {
  color: var(--yzm-muted);
  font-size: 19rpx;
}

.profile-quote {
  display: flex;
  margin-top: 34rpx;
  align-items: center;
  justify-content: center;
  color: var(--yzm-muted);
  font-size: 19rpx;
  gap: 12rpx;
}

.profile-quote image {
  width: 44rpx;
  height: 44rpx;
  border-radius: 50%;
}
</style>

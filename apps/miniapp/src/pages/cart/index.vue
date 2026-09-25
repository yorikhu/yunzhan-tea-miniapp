<template>
  <view class="page-shell cart-page">
    <AppHeader title="购物车" subtitle="好茶已在盏边等你" />

    <view class="cart-list">
      <YzmCard v-for="item in items" :key="item.id">
        <CartProductRow
          :item="item"
          @toggle="toggleItem(item.id)"
          @quantity="updateQuantity(item.id, $event)"
        />
      </YzmCard>
    </view>

    <YzmCard class="cart-summary" flat>
      <view class="cart-summary__row">
        <text>共 {{ items.length }} 件 · 已选 {{ selectedCount }} 件</text>
        <text
          >商品合计 <text class="price">¥{{ total }}</text></text
        >
      </view>
      <text class="cart-summary__tip">满 ¥199 顺丰包邮，当前订单已满足包邮条件</text>
    </YzmCard>

    <view class="checkout-bar">
      <view class="checkout-bar__select" @click="toggleAll">
        <view class="checkout-bar__check" :class="{ 'checkout-bar__check--active': allSelected }">
          {{ allSelected ? '✓' : '' }}
        </view>
        <text>全选</text>
      </view>
      <view class="checkout-bar__amount">
        <text>合计</text><text class="price">¥{{ total }}</text>
      </view>
      <YzmButton :disabled="selectedCount === 0" @click="goCheckout"
        >结算({{ selectedCount }})</YzmButton
      >
    </view>

    <AppTabBar active="cart" />
  </view>
</template>

<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue';
import AppTabBar from '@/components/layout/AppTabBar.vue';
import YzmButton from '@/components/base/YzmButton.vue';
import YzmCard from '@/components/base/YzmCard.vue';
import CartProductRow from '@/components/cart/CartProductRow.vue';
import { useCart } from '@/composables/useCart';
import { useNavigation } from '@/composables/useNavigation';

const { items, selectedCount, total, allSelected, toggleItem, toggleAll, updateQuantity } =
  useCart();
const { goTo } = useNavigation();
const goCheckout = () => selectedCount.value > 0 && goTo('/pages/checkout/index');
</script>

<style scoped>
.cart-page {
  padding-bottom: calc(280rpx + env(safe-area-inset-bottom));
}

.cart-list {
  display: grid;
  gap: 18rpx;
}

.cart-summary {
  margin-top: 22rpx;
}

.cart-summary__row {
  display: flex;
  padding: 24rpx;
  justify-content: space-between;
  color: var(--yzm-ink-soft);
  font-size: 22rpx;
}

.cart-summary__tip {
  display: block;
  padding: 18rpx 24rpx;
  border-top: 1rpx solid var(--yzm-line);
  color: var(--yzm-gold);
  font-size: 19rpx;
}

.checkout-bar {
  position: fixed;
  z-index: 21;
  right: 20rpx;
  bottom: calc(126rpx + env(safe-area-inset-bottom));
  left: 20rpx;
  display: flex;
  max-width: 940rpx;
  min-height: 104rpx;
  margin: 0 auto;
  padding: 12rpx 14rpx 12rpx 22rpx;
  align-items: center;
  border: 1rpx solid var(--yzm-line);
  border-radius: 28rpx;
  background: rgba(255, 253, 248, 0.97);
  box-shadow: 0 12rpx 40rpx rgba(55, 45, 28, 0.14);
  gap: 16rpx;
}

.checkout-bar__select {
  display: flex;
  align-items: center;
  font-size: 21rpx;
  gap: 9rpx;
}

.checkout-bar__check {
  display: flex;
  width: 34rpx;
  height: 34rpx;
  align-items: center;
  justify-content: center;
  border: 2rpx solid #9ba5a1;
  border-radius: 50%;
  color: #fff;
  font-size: 20rpx;
}

.checkout-bar__check--active {
  border-color: var(--yzm-jade);
  background: var(--yzm-jade);
}

.checkout-bar__amount {
  display: flex;
  flex: 1;
  align-items: baseline;
  justify-content: flex-end;
  font-size: 21rpx;
  gap: 8rpx;
}

.checkout-bar__amount .price {
  font-size: 32rpx;
}

.checkout-bar :deep(.yzm-button) {
  min-height: 76rpx;
  padding: 0 26rpx;
  font-size: 23rpx;
}
</style>

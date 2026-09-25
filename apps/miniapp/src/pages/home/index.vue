<template>
  <view class="page-shell">
    <AppHeader title="韵盏茗" subtitle="茶里见山，也见自己" show-logo />
    <HomeHero @shop="goTab('mall')" @practice="goTab('practice')" />
    <FounderStory />
    <BrandBeliefs />
    <OriginStory />
    <CraftTimeline />
    <TeaLatitude :products="mockProducts" @shop="goTab('mall')" @select="openProduct" />
    <AppTabBar active="home" />
  </view>
</template>

<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue';
import AppTabBar from '@/components/layout/AppTabBar.vue';
import HomeHero from '@/components/home/HomeHero.vue';
import FounderStory from '@/components/home/FounderStory.vue';
import BrandBeliefs from '@/components/home/BrandBeliefs.vue';
import OriginStory from '@/components/home/OriginStory.vue';
import CraftTimeline from '@/components/home/CraftTimeline.vue';
import TeaLatitude from '@/components/home/TeaLatitude.vue';
import { mockProducts } from '@/services/mock/data';
import { useNavigation } from '@/composables/useNavigation';

const { goTab, goTo } = useNavigation();
const openProduct = (id: string) => goTo(`/pages/product/detail?id=${id}`);
</script>

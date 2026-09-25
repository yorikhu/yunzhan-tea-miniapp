<template>
  <view class="page-shell">
    <AppHeader title="静心技法" subtitle="把注意力带回此刻" show-logo />
    <PracticeHero />

    <view class="page-section">
      <SectionHeading eyebrow="GUIDED PRACTICE" title="跟随练习" />
      <view class="media-list">
        <MediaCard v-for="item in mockTechniques" :key="item.id" :technique="item" />
      </view>
    </view>

    <MeditationGrid />
    <ReadingList />
    <JournalSection />
    <AppTabBar active="practice" />
  </view>
</template>

<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue';
import AppTabBar from '@/components/layout/AppTabBar.vue';
import SectionHeading from '@/components/base/SectionHeading.vue';
import PracticeHero from '@/components/practice/PracticeHero.vue';
import MediaCard from '@/components/practice/MediaCard.vue';
import MeditationGrid from '@/components/practice/MeditationGrid.vue';
import ReadingList from '@/components/practice/ReadingList.vue';
import JournalSection from '@/components/practice/JournalSection.vue';
import { mockTechniques } from '@/services/mock/data';
</script>

<style scoped>
.media-list {
  display: grid;
  gap: 16rpx;
}
</style>

export const tabRoutes = {
  home: '/pages/home/index',
  mall: '/pages/mall/index',
  practice: '/pages/practice/index',
  cart: '/pages/cart/index',
  profile: '/pages/profile/index',
} as const;

export type TabKey = keyof typeof tabRoutes;

export function useNavigation() {
  const goTab = (key: TabKey) => uni.switchTab({ url: tabRoutes[key] });
  const goTo = (url: string) => uni.navigateTo({ url });
  const goBack = () => uni.navigateBack();

  return { goTab, goTo, goBack };
}

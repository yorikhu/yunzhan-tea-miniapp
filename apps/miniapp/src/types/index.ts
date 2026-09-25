export type ArtworkTone = 'amber' | 'jade' | 'mist' | 'earth' | 'rose';

export interface ProductSku {
  id: string;
  name: string;
  spec: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  origin: string;
  coreBenefit: string;
  price: number;
  originalPrice?: number;
  sales: number;
  latitude: string;
  tone: ArtworkTone;
  detail: string;
  skus: ProductSku[];
}

export interface CartItem {
  id: string;
  product: Product;
  skuId: string;
  quantity: number;
  selected: boolean;
}

export interface Technique {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  format: '音频' | '视频' | '文章';
  duration: string;
  tone: ArtworkTone;
}

export interface JournalEntry {
  id: string;
  author: string;
  content: string;
  time: string;
  likes: number;
}

export interface UserProfile {
  name: string;
  level: string;
  points: number;
  coupons: number;
}

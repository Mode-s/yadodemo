/**
 * 全てのリンクアイテムが共通して持つプロパティ
 */
interface BaseItem {
  label: string;
  href: string;
  isExternal?: boolean; // 共通で持たせることで赤線を防ぐ
}

/**
 * 通常のテキストリンク型
 */
interface LinkItem extends BaseItem {
  type: 'link';
  iconName?: never; // linkの時はiconNameを許容しない
}

/**
 * アイコンリンク型（SNSなど）
 */
interface IconItem extends BaseItem {
  type: 'icon';
  iconName: string; // iconの時は必須
}

// 2つの型を統合
export type NavItem = LinkItem | IconItem;

/**
 * 実データ
 * satisfies を使うことで、as constの厳密さを保ちつつNavItem型であることを保証します
 */
export const Items = [
  { type: 'link', label: 'お宿のこだわり', href: '/#concept', isExternal: false },
  { type: 'link', label: 'お部屋', href: '/#rooms', isExternal: false },
  { type: 'link', label: '設備', href: '/#facility', isExternal: false },
  { type: 'link', label: 'アクセス', href: '/#access', isExternal: false },
  { type: 'link', label: 'お問い合わせ', href: '/#contact', isExternal: false },
  { 
    type: 'icon', 
    label: 'Instagram', 
    href: 'https://www.instagram.com/ユーザー名', 
    iconName: 'mdi:instagram', 
    isExternal: true 
  },
] as const satisfies readonly NavItem[];

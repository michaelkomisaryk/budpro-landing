/**
 * Опис колекцій лендінгу BudPro (Payload CMS 3).
 * У повній збірці цей файл підключається до Next.js + PostgreSQL.
 */
export const collections = ["users", "media", "pages"] as const;
export const globals = ["common"] as const;
export const blocks = ["hero", "features", "projects", "testimonials", "contacts"] as const;

export type PageBlock =
  | { blockType: "hero"; title: string; buttons?: { variant: "primary" | "secondary" }[] }
  | { blockType: "features"; title: string; items: { icon: string; title: string; text: string }[] }
  | { blockType: "projects" }
  | { blockType: "testimonials" }
  | { blockType: "contacts" };

export type PageView = {
  path: string;
  title: string;
  blocks: PageBlock[];
  siteName: string;
  menu: { label: string; link: string }[];
};

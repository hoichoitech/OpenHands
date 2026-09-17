import type { ComponentType, SVGProps } from "react";
import { type LucideIcon } from "lucide-react";
import type { IconType } from "react-icons/lib";
/**
 * Any icon renderable inside a tag chip / overflow row. Lucide, react-icons,
 * and local SVG React components all work as long as they accept ``className``
 * and inherit ``currentColor`` for the muted chip text.
 */
export type ConversationTagIcon = LucideIcon | IconType | ComponentType<SVGProps<SVGSVGElement>>;
/**
 * Pick an icon that matches a conversation tag. Prefer value-specific icons
 * for source/provider and app-mode keys; otherwise map by key; finally fall
 * back to ``Tag``.
 */
export declare function getConversationTagIcon(key: string, value: string): ConversationTagIcon;

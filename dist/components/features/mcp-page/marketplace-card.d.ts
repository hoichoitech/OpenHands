import type { IntegrationCatalogEntry as MarketplaceEntry } from "@openhands/extensions/integrations";
interface MarketplaceCardProps {
    entry: MarketplaceEntry;
    onClick: () => void;
    onAdd: () => void;
}
export declare function MarketplaceCard({ entry, onClick, onAdd, }: MarketplaceCardProps): import("react").JSX.Element;
export {};

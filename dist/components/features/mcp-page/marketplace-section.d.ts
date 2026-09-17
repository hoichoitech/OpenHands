import { type IntegrationCatalogEntry as MarketplaceEntry } from "@openhands/extensions/integrations";
interface MarketplaceSectionProps {
    onSelect: (entry: MarketplaceEntry) => void;
    onAdd: (entry: MarketplaceEntry) => void;
    /** Empty string = no filter. */
    query?: string;
}
export declare function MarketplaceSection({ onSelect, onAdd, query, }: MarketplaceSectionProps): import("react").JSX.Element;
export {};

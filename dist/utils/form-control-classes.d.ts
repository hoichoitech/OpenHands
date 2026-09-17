/** 36px control height — shared by fields, dropdowns, and buttons. */
export declare const formControlHeightClassName = "h-9 min-h-9";
export declare const formControlRadiusClassName = "rounded-lg";
export declare const formControlBorderClassName = "border border-[var(--oh-border)]";
export declare const formControlSurfaceClassName = "bg-base-secondary";
/** Shared transition duration for form controls and chrome buttons. */
export declare const formControlTransitionDurationClassName = "duration-75";
export declare const formControlHeroUiTransitionDurationClassName = "!duration-75";
export declare const formControlMotionReduceClassName = "motion-reduce:transition-none";
/** Shell properties that animate on hover/focus; foreground color snaps instantly. */
export declare const formControlTransitionPropertiesClassName = "transition-[background-color,border-color,box-shadow,opacity]";
/** Animate shell chrome on hover/focus; foreground color snaps instantly. */
export declare const formControlTransitionClassName: string;
/** HeroUI input wrappers ship `transition-colors`; override so caret/text hover is instant. */
export declare const formControlHeroUiWrapperTransitionClassName: string;
/** Transform-only transitions (e.g. combobox carets). */
export declare const formControlTransformTransitionClassName: string;
/** Muted icon/pill controls: instant foreground, fading shell on hover. */
export declare const formControlMutedHoverClassName = "hover:text-white hover:bg-white/10";
/** Text/icon pill triggers in the chat input actions row. */
export declare const chatInputPillButtonClassName: string;
/** Circular icon triggers in the chat input actions row. */
export declare const chatInputIconButtonClassName: string;
export declare const formControlFocusClassName = "focus:border-white/40 focus:ring-1 focus:ring-white/20 focus:outline-none";
export declare const formControlFocusWithinClassName = "focus-within:border-white/40 focus-within:ring-1 focus-within:ring-white/20";
export declare const formControlDisabledClassName = "disabled:cursor-not-allowed disabled:opacity-60";
/** Native text inputs and HeroUI Autocomplete wrappers. */
export declare const formControlFieldClassName: string;
/** Settings screens keep italic placeholders on form controls. */
export declare const formControlSettingsFieldClassName: string;
/** Multiline fields share border/radius/focus styling without a fixed height. */
export declare const formControlMultilineFieldClassName: string;
/** Combobox / search shell (icon + input), e.g. skills toolbar. */
export declare const formControlShellClassName: string;
/** Borderless input nested inside {@link formControlShellClassName}. */
export declare const formControlInlineInputClassName: string;
/** Primary/secondary/danger action buttons. */
export declare const formControlButtonClassName: string;
/** Helper text under a left-aligned {@link SettingsSwitch} (40px track + gap-2). */
export declare const formControlSwitchDescriptionClassName = "pl-12";
/** Filter / enum dropdown triggers beside search toolbars. */
export declare const formControlFilterTriggerClassName: string;
/** Muted back navigation control with tertiary hover fill (settings sub-pages, detail views). */
export declare const formControlBackNavButtonClassName: string;

import React from "react";
import { type OnboardingAgentId } from "./choose-agent-step";
interface SetupAcpSecretsStepProps {
    /** ACP provider whose credentials we're collecting (e.g. ``"claude-code"``).
     * Typed as {@link OnboardingAgentId} — the same type the onboarding modal
     * tracks — so a mistyped key is a compile error rather than a silently empty
     * form. Providers without a credentials entry (``"openhands"``) simply yield
     * no fields. */
    providerKey: OnboardingAgentId;
    /**
     * Whether this is the currently visible onboarding slide. The modal mounts
     * every slide at once, so we only run the (subprocess-spinning) login probe
     * once the user has actually reached this step — by which point the backend
     * is confirmed connected.
     */
    isActive: boolean;
    onBack: () => void;
    onNext: () => void;
}
/**
 * Onboarding credentials step for ACP providers (Claude Code, Codex, Gemini
 * CLI). The fields are derived from {@link getAcpProviderSecrets}: the API key
 * + optional base URL (from the SDK registry) plus the per-provider
 * credentials a *containerized* agent-server needs (Codex ``auth.json``, the
 * Claude OAuth token, the Gemini Vertex service-account JSON + project/location).
 * Each field maps 1:1 to a **global secret** whose name equals the env var the
 * agent-server exports into the provider subprocess, so saving here is the same
 * as adding the secret under Settings → Secrets.
 *
 * The step is **optional on a backend that can fall back to a host login** (a
 * native agent-server where the user has already run ``claude``/``codex``/
 * ``gcloud`` login) and **required otherwise** — a fresh Docker container or a
 * cloud backend has no host login, so the agent can't authenticate without
 * credentials. Required-ness is capability-driven (see {@link backendRequiresAcpCredentials}):
 * we never block "Next" when the login probe detects an existing session, and
 * we never block a native dev whose host login we just can't classify.
 *
 * Empty fields are never written (a deliberate skip), and a field whose secret
 * already exists shows an "already saved" placeholder and is left untouched
 * unless the user types a replacement.
 */
export declare function SetupAcpSecretsStep({ providerKey, isActive, onBack, onNext, }: SetupAcpSecretsStepProps): React.JSX.Element;
/**
 * Whether the credential step must be satisfied before advancing, given the
 * active backend kind and the ACP login-probe result.
 *
 * - **cloud** → always required: a remote backend has no host CLI login to fall
 *   back on.
 * - **local + ``"unauthenticated"``** → required: the probe ran and found no
 *   login, i.e. a fresh containerized agent-server.
 * - **local + ``"authenticated"`` / ``"unknown"``** → optional: either a login
 *   exists, or the probe couldn't classify it (CLI missing, odd output) — in
 *   which case we stay permissive rather than block a working native dev.
 *
 * Exported for unit testing the matrix without rendering the modal.
 */
export declare function backendRequiresAcpCredentials(backendKind: "local" | "cloud", authStatus: "authenticated" | "unauthenticated" | "unknown"): boolean;
export {};

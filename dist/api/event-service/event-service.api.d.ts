import { OpenHandsEvent } from "#/types/agent-server/core";
import type { ConfirmationResponseRequest, ConfirmationResponseResponse, EventSearchOptions, EventSearchPage } from "./event-service.types";
/**
 * Cloud-mode REST calls are split between two upstream hosts (matching
 * OpenHands' cloud frontend):
 *
 *   - **App API** (`backend.host`, default in `callCloudProxy`):
 *     event *history* (`/api/v1/conversation/{id}/events/search`).
 *     Persisted by the cloud backend — survives the runtime sandbox.
 *
 *   - **Runtime sandbox** (extracted from `conversation.conversation_url`
 *     and passed as `hostOverride`): live runtime endpoints like
 *     `/api/conversations/{id}/events/count` and
 *     `/api/conversations/{id}/events/respond_to_confirmation`. Auth on
 *     these endpoints is `X-Session-API-Key`, not `Authorization: Bearer`.
 *
 * App API calls go directly to the cloud backend with bearer auth. Runtime
 * sandbox calls go through `/api/cloud-proxy`, which avoids depending on CORS
 * for per-conversation runtime hosts.
 *
 * Local mode keeps the existing typescript-client path: it targets the
 * conversation's host directly via typed client classes.
 */
declare class EventService {
    static respondToConfirmation(conversationId: string, conversationUrl: string, request: ConfirmationResponseRequest, sessionApiKey?: string | null): Promise<ConfirmationResponseResponse>;
    static getEventCount(conversationId: string, conversationUrl: string, sessionApiKey?: string | null): Promise<number>;
    /**
     * Search events for a conversation. Returns the raw page so callers can
     * paginate (via `next_page_id`) and so REST-driven history loading can
     * tell when there are no more older events to load.
     */
    static searchEvents(conversationId: string, conversationUrl?: string | null, sessionApiKey?: string | null, options?: EventSearchOptions): Promise<EventSearchPage<OpenHandsEvent>>;
}
export default EventService;

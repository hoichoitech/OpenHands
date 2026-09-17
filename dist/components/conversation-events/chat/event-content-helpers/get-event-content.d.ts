import React from "react";
import { OpenHandsEvent, ActionEvent } from "#/types/agent-server/core";
import { SkillReadyEvent } from "./create-skill-ready-event";
export declare const getEventContent: (event: OpenHandsEvent | SkillReadyEvent, correspondingAction?: ActionEvent) => {
    title: string | number | bigint | true | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined>;
    details: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined>;
};

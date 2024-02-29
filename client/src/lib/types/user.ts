
export enum StaticUserStatuses {
    Online = "online",
    Idle = "idle",
    DND = "dnd",
    Offline = "offline",
    Mobile = "mobile",
}

export type UserStatuses = StaticUserStatuses | string;
export interface VoiceStatus {
    mute?: boolean;
    deaf?: boolean;
    serverMuted?: boolean;
}
export interface User {
    id: string;
    name: string;
    username?: string;
    bio?: string;
    avatar?: string | null;
    status: StaticUserStatuses;
    activity?: null;
    type?: "user" | "bot";
}
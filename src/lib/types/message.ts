import { ENUM_POSITION } from '../enums/position'
export type MessageType = 'success' | 'warning' | 'info' | 'error'
export type PositionType = ENUM_POSITION | string
export type MessagePropsType = Partial<{
    message: string | number;
    forbidClick: boolean;
    duration: number;
    position: PositionType;
    type: MessageType
}>;

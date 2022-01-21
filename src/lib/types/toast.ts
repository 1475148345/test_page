export type ToastType = Partial<{
    message: string | number;
    forbidClick: boolean;
    duration: number;
    position: 'top' | 'center' | 'bottom' | string;
    loading: boolean;
}>;

export interface ApiResponse<T> {
    sucess: boolean;
    data?: T;
    error?: string;
};
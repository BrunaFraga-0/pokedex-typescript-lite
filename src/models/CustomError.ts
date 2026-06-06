export class APIError extends Error {   //Error -> classe genérica do TS para erros | APIError subclasse customizada da classe genérica Error
    constructor(message: string){
        super(message);
        this.name = 'APIError';
    };
};

export class LocalBoxError extends Error {  //Error -> classe genérica do TS para erros | LocalBoxError subclasse customizada da classe genérica Error
    constructor(message: string){
        super(message);
        this.name = 'LocalBoxError';
    };
};
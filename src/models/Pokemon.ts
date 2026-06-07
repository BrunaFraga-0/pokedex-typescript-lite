export interface Tipos {
    type: {
        name: string;
    };
};

export interface Stats {
    base_stat: number;
    stat: {
        name: string;
    };
};

export interface PokemonApiResponse {
    readonly id: number;
    name: string;
    height: number;
    weight: number;
    types: Tipos[];
    stats: Stats[];
};

export interface PokemonResumo {
    readonly id: number;
    nome: string;
    tipos: string[];
    altura: number;
    peso: number;
};

export interface LocalPokemon extends PokemonResumo {
    estatistica: string[];
    adicionadoEm: string;
};

export type BuscaPokemon = number | string;
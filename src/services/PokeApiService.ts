import { PokemonResumo, BuscaPokemon, PokemonApiResponse } from "../models/Pokemon";
import { APIError } from "../models/CustomError";

export class PokeApiService {
    private readonly baseUrl: string;

    constructor(baseUrl: string = 'https://pokeapi.co'){
        this.baseUrl = baseUrl;
    };

    public async buscarPokemon (nomeOuId: BuscaPokemon): Promise<PokemonResumo | null> {

        try {
            const resposta: Response = await fetch(`${this.baseUrl}/api/v2/pokemon/${nomeOuId}`);
            
            if (!resposta.ok) {
                throw new APIError("[ERRO] Pokémon não encontrado: inexistente.");
            };

            const dados = (await resposta.json()) as PokemonApiResponse;
            
            const objetoPokemon: PokemonResumo = {
                id: dados.id,
                nome: dados.name,
                tipos: dados.types.map((item: any) => item.type.name),
                altura: dados.height,
                peso: dados.weight
            };
        
            return objetoPokemon;

        } catch (error) {
            if (error instanceof APIError){
                console.log(error.message);
            } else {
            console.log("[ERRO] Falha de comunicação com a API.");
            };

            return null;
        };
    };
};
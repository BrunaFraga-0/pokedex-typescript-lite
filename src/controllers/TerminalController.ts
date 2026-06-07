import { PokemonResumo } from '../models/Pokemon';
import { CatalogoPokemon } from '../services/BoxService';
import { PokeApiService } from '../services/PokeApiService';
import { textPokemon } from '../utils/textFormaters';

export class TerminalController {

    constructor(
        private readonly apiService: PokeApiService,
        private readonly boxService: CatalogoPokemon<PokemonResumo>
    ) { };

    public async start(): Promise<void> {

        console.log('=========================================\n');
        console.log('    INICIANDO POKÉMON TYPESCRIPT LITE    \n');
        console.log('=========================================\n');
        console.log('##  Bem vinde ao Catálogo de Pokémon  ##\n');
        console.log('----------------------------------------\n');

        // Teste de Busca Válida por nome e Adicionar pokemon
        console.log('Buscando Pokemon por nome Pikachu e adicionando ao catálogo');

        const pikachu = await this.apiService.buscarPokemon("pikachu");
        if (pikachu !== null) {
            await this.boxService.adicionar(pikachu);
        };
        console.log('----------------------------------------\n');

        // Teste de Busca Válida por id
        console.log('Buscando Pokemon pelo id 7 (Squirtle) e exibindo sem adicionar ao catálogo');
        const squirtle = await this.apiService.buscarPokemon(7);
        if (squirtle !== null) {
            console.log(textPokemon(squirtle));
        };
        console.log('----------------------------------------\n');

        // Teste adicionar pokemon buscado por id
        console.log('Buscando Pokemon pelo id 17 (Pidgeotto) e adicionando ao catálogo');
        const Pidgeotto = await this.apiService.buscarPokemon(17);
        if (Pidgeotto !== null) {
            await this.boxService.adicionar(Pidgeotto);
        };
        console.log('----------------------------------------\n');

        // Adicionando mais pokemóns por id para aumentar o catálogo
        console.log('Adicionando mais pokémons pelo id...')

        const pokemon90 = await this.apiService.buscarPokemon(90);
        if (pokemon90 !== null) {
            await this.boxService.adicionar(pokemon90);
        }
        console.log('----------------------------------------\n');

        const pokemon1 = await this.apiService.buscarPokemon(1);
        if (pokemon1 !== null) {
            await this.boxService.adicionar(pokemon1);
        }
        console.log('----------------------------------------\n');

        const pokemon23 = await this.apiService.buscarPokemon(23);
        if (pokemon23 !== null) {
            await this.boxService.adicionar(pokemon23);
        }
        console.log('----------------------------------------\n');

        const pokemon65 = await this.apiService.buscarPokemon(65);
        if (pokemon65 !== null) {
            await this.boxService.adicionar(pokemon65);
        }
        console.log('----------------------------------------\n');
        
        // Teste tratamento de erro para caso de adição com duplicidade
        console.log('Tentando adicionar pokémon duplicado... Pikachu');

        const pikachuDuplicado = await this.apiService.buscarPokemon("pikachu");
        if (pikachuDuplicado !== null) {
            await this.boxService.adicionar(pikachuDuplicado);
        }
        console.log('----------------------------------------\n');

        // Teste tratamento de erro pokémon inexistente
        console.log('Tentando buscar pokémon inexistente...');
        const pokemonInexistente = await this.apiService.buscarPokemon("pokemónInexistente");

        console.log('----------------------------------------\n');

        // Teste Listar Catálogo
        console.log('Listando catálogo...');
        await this.boxService.listar();

        console.log('----------------------------------------\n');

        // Teste Remover pokemon por id (pokemon não adicionado ao catálogo)
        console.log('Removendo Pokemon por id 45 que não consta em catálogo...');
        await this.boxService.remover(45);

        console.log('----------------------------------------\n');

        // Teste Remover pokemon por id (pokemon já adicionado ao catálogo)
        console.log('Removendo Pokemon por id 17 (Pidgeotto) do catálogo...');
        await this.boxService.remover(17);

        console.log('----------------------------------------\n');

        // Teste Listar Catálogo após remoção de pokémon
        console.log('Listando catálogo após remoção de pokémon...');
        await this.boxService.listar();

        console.log('=========================================\n');
        console.log('    POKÉMON TYPESCRIPT LITE ENCERRADO    \n');
        console.log('=========================================\n');
    };
};
import { PokeApiService } from './services/PokeApiService';
import { CatalogoPokemon } from './services/BoxService';
import { TerminalController } from './controllers/TerminalController';
import { PokemonResumo } from './models/Pokemon';

async function main(): Promise<void> {
    const apiService: PokeApiService = new PokeApiService();

    const boxService: CatalogoPokemon<PokemonResumo> = new CatalogoPokemon<PokemonResumo> ('./src/pc_box.json');

    const terminalController = new TerminalController(apiService, boxService);

    await terminalController.start();
}

main();
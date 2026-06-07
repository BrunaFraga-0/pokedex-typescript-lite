
import { readFile, writeFile } from 'node:fs/promises';
import { PokemonResumo, LocalPokemon } from "../models/Pokemon";
import { LocalBoxError } from "../models/CustomError";
import { textPokemon } from "../utils/textFormaters";

export class CatalogoPokemon<T extends PokemonResumo> {
    private readonly filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    };

    private async readData(): Promise<LocalPokemon[]> {
        try{
            const fileContent: string = await readFile(this.filePath, 'utf-8');
            return JSON.parse(fileContent);
        } catch {
            return [];
        };
    };

    private async saveData(data: LocalPokemon[]): Promise<void> {
        await writeFile(this.filePath, JSON.stringify(data, null, 2));
    };

    public async adicionar(pokemon: PokemonResumo): Promise<void> {
        try {
            const catalogoAtual: LocalPokemon[] = await this.readData();

            const jaExiste: boolean = catalogoAtual.some((item) => (item.id === pokemon.id) || (item.nome === pokemon.nome));

            if (jaExiste) {
                throw new LocalBoxError(`[AVISO] ${pokemon.nome} já está no catálogo.`)
            };

            const pokemonParaSalvar: LocalPokemon = {
                ...pokemon,
                estatistica: [],
                adicionadoEm: new Date().toISOString(),
            };

            catalogoAtual.push(pokemonParaSalvar);
            await this.saveData(catalogoAtual);

            console.log(`[OK] ${pokemon.nome} adicionado ao catálogo.`);
        } catch (error) {
            if (error instanceof LocalBoxError){
                console.log(error.message);
            };
        };
    };
        
    public async listar(): Promise<void> {
        try {
            const catalogoAtual: LocalPokemon[] = await this.readData();
            if (catalogoAtual.length === 0) {
                throw new LocalBoxError(`[AVISO] O catálogo está vazio.`)
            };

            catalogoAtual.forEach((pokemon) => {
            console.log(textPokemon(pokemon));
            });
        } catch (error) {
            if (error instanceof LocalBoxError){
                console.log(error.message);
            };
        };
    };

    public async remover(id: number): Promise<void> { 
        try{
            let catalogoAtual: LocalPokemon[] = await this.readData();
            const existe: boolean = catalogoAtual.some((pokemon) => pokemon.id === id);

            if (!existe) {
                throw new LocalBoxError("[AVISO] Nenhum Pokémon encontrado com esse ID.");
            };

            catalogoAtual = catalogoAtual.filter((pokemon) => pokemon.id !== id);
            await this.saveData(catalogoAtual);

            console.log("[OK] Pokémon removido do catálogo.");
        } catch(error) {
            if (error instanceof LocalBoxError){
                console.log(error.message);
            };
        };
    };
};
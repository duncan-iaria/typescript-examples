export interface EnthusiasmState {
    enthusiasmLevel: number;
};

export interface StoreState {
    languageName: string;
    enthusiasm: EnthusiasmState;
};

export interface UserState {
    name: string;
}
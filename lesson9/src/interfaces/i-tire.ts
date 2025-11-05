export interface ITire {
    description(): string;
    get pressure(): number;
    get size(): number;
    get treadDepth(): number;
    get isMounted(): boolean;
    retread(newTreadDepth: number): void;
    inflate(amount: number): void;
}

import { ITire } from '../interfaces/i-tire';

export abstract class Tire implements ITire {
    protected _pressure: number;
    protected _size: number;
    protected _isMounted = false;
    protected _treadDepth: number;

    public constructor(pressure: number, size: number, treadDepth: number) {
        this._pressure = pressure;
        this._size = size;
        this._treadDepth = treadDepth;
    }

    public abstract description(): string;

    public get pressure(): number {
        return this._pressure;
    }

    public get size(): number {
        return this._size;
    }

    public get treadDepth(): number {
        return this._treadDepth;
    }

    public get isMounted(): boolean {
        return this._isMounted;
    }

    public retread(newTreadDepth: number): void {
        this._treadDepth = newTreadDepth;
    }

    public inflate(amount: number): void {
        this._pressure = amount;
    }
}

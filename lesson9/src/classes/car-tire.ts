import { Tire } from '../classes/tire';

export class CarTire extends Tire {
    private _brand: string;
    private _isoPosition = 0;

    public constructor(pressure: number, size: number, treadDepth: number, brand: string) {
        super(pressure, size, treadDepth);
        this._brand = brand;
    }

    public description(): string {
        return `Шина ${this._brand} / ${this.size} / ${this.treadDepth}`;
    }

    public checkSafety(): string {
        return this.pressure < 30 ? 'Тиск занизький!' : 'Тиск у нормі.';
    }

    public get brand(): string {
        return this._brand;
    }

    public get isoPosition(): number {
        return this._isoPosition;
    }

    public mount(position: number): void {
        this._isoPosition = position;
        this._isMounted = true;
    }
}

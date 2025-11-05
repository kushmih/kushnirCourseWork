import { Tire } from './tire';

export class BicycleTire extends Tire {

    public constructor(pressure: number, size: number, treadDepth: number ) {
        super(pressure, size, treadDepth);
    }

    public mount(): void {
        this._isMounted = true;
    }

    public description(): string {
        return `Велосипедна шина ${this.size}" дюймів`;
    }
}

export interface CelestialBody {
    type: string,
    datetime:  Date,
    hour_angle: number,
    declination : number,
    temperature?: number,
    mass ?: number,
    radius ?: number,
    harvard_class?: number,
    orbital_inclination?: number,
    albedo ?: number,
    distance  ?: number,
    solar_system ?: boolean,
    idUser?: number
}

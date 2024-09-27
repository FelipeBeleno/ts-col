export interface DepartmentResponse {
    page: number;
    pageSize: number;
    totalRecords: number;
    pageCount: number;
    data: Department[] | Department;
}

export interface Department {
    id: number;
    name: string;
    description: string;
    cityCapitalId: number;
    municipalities: number;
    surface: number;
    population: number;
    phonePrefix: string;
    countryId: number;
    cityCapital: null;
    country: null;
    cities: null;
    regionId: number;
    region: null;
    naturalAreas: null;
    maps: null;
    indigenousReservations: null;
    airports: null;
}
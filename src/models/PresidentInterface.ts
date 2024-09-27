export interface PresidentIterface {
    id: number;
    image: string;
    name: string;
    lastName: string;
    startPeriodDate: string;
    endPeriodDate: string;
    politicalParty: string;
    description: string;
    cityId: number;
    city: string | null;
}

export interface ConstitutionInterface {
    id: number;
    titleNumber: number;
    title: Title;
    chapterNumber: number;
    chapter: string;
    articleNumber: number;
    content: string;
}



export enum Title {
    DeLaOrganizaciónDelEstado = "DE LA ORGANIZACIÓN DEL ESTADO",
    DeLaOrganizaciónTerritorial = "DE LA ORGANIZACIÓN TERRITORIAL",
    DeLaParticipaciónDemocráticaYDeLosPartidosPolíticos = "DE LA PARTICIPACIÓN DEMOCRÁTICA Y DE LOS PARTIDOS POLÍTICOS",
    DeLaRamaEjecutiva = "DE LA RAMA EJECUTIVA",
    DeLaRamaJudicial = "DE LA RAMA JUDICIAL",
    DeLaRamaLegislativa = "DE LA RAMA LEGISLATIVA",
    DeLaReformaDeLaConstitución = "DE LA REFORMA DE LA CONSTITUCIÓN",
    DeLasEleccionesYDeLaOrganizaciónElectoral = "DE LAS ELECCIONES Y DE LA ORGANIZACIÓN ELECTORAL",
    DeLosDerechosLasGarantíasYLosDeberes = "DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES",
    DeLosHabitantesYDelTerritorio = "DE LOS HABITANTES Y DEL TERRITORIO",
    DeLosOrganismosDeControl = "DE LOS ORGANISMOS DE CONTROL",
    DeLosPrincipiosFundamentales = "DE LOS PRINCIPIOS FUNDAMENTALES",
    DelRégimenEconómicoYDeLaHaciendaPública = "DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA",
}

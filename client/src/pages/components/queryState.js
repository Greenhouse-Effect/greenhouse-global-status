export default class queryState { 
    //colorScale                                             // function pointer that takes query value of country (population of U.S...) and returns color
    // queryBy;                                                // function pointer that returns query criteria (population, emissions...)
    // tooltipInfo;                                            // function pointer for relevant tooltip info (country info, atmospheric...)
    // year;                                                   // year for specific get queries or null
    // comparator;                                             // "less", "greater", or null
    // comparingCountry;                                       // country name to compare with or null if comparator is null

    constructor( colorScale, queryBy, tooltipInfo, year, comparator, comparingCountry ) {
        this.colorScale = colorScale;                       // function pointer that takes query value of country (population of U.S...) and returns color
        this.queryBy = queryBy;                             // function pointer that returns query criteria (population, emissions...)
        this.tooltipInfo = tooltipInfo;                     // function pointer for relevant tooltip info (country info, atmospheric...)
        this.year = year;                                   // year for specific get queries or null
        this.comparator = comparator;                       // "less", "greater", or null
        this.comparingCountry = comparingCountry;           // country name to compare with or null if comparator is null
    }
}
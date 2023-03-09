import { scaleLinear } from "d3-scale";

/**
 * takes dataset and finds min and max population values to form domain of scale, range is lower and upper colors
 * 
 * @param data - population data set
 * @returns - scaleLinear function with domain of low and high population values, pass a population value into scaleLinear to get corresponding color
 */
export const populationScale = ( data ) => {
    // find smallest and largest values in dataset, example of how to change scale when we add additional queries
    // feel free to change it if theres a function that makes it easier, Math.min/max didn't work since tempData.population is not iterable
    var lowerDomain = Number.MAX_SAFE_INTEGER, upperDomain = Number.MIN_SAFE_INTEGER;
    for (var i = 0; i < data.length; i++)
    {
        if (data[i].population < lowerDomain)
            lowerDomain = data[i].population;
        if (data[i].population > upperDomain)
            upperDomain = data[i].population;
    }
    console.log(lowerDomain + " " + upperDomain);
    return scaleLinear().domain([lowerDomain, upperDomain]).range(["#ffedea", "#ff5233"]);
};

/**
 * get population of a country
 * 
 * @param current - current row (country)
 * @returns - population of current country
 */
export const queryByPopulation = ( current ) => {
    return current.population;
};

/**
 * takes dataset and finds min and max population change values to form domain of scale, range is lower and upper colors
 * 
 * @param data - population data set
 * @returns - scaleLinear function with domain of low and high population values, pass a population change value into scaleLinear to get corresponding color
 */
export const populationChangeScale = ( data ) => {
    // find smallest and largest values in dataset, example of how to change scale when we add additional queries
    // feel free to change it if theres a function that makes it easier, Math.min/max didn't work since tempData.population is not iterable
    var lowerDomain = Number.MAX_SAFE_INTEGER, upperDomain = Number.MIN_SAFE_INTEGER;
    for (var i = 0; i < data.length; i++)
    {
        if (data[i].populationYearlyChange < lowerDomain)
            lowerDomain = data[i].populationYearlyChange;
        if (data[i].populationYearlyChange > upperDomain)
            upperDomain = data[i].populationYearlyChange;
    }
    return scaleLinear()
        .domain([lowerDomain, upperDomain])
        .range(["#ffedea", "#ff5233"]);
};

/**
 * get population change of a country
 * 
 * @param current - current row (country)
 * @returns - population change of current country
 */
export const queryByPopulationChange = ( current ) => {
    return current.populationYearlyChange;
};

/**
 * additional population info to display in tooltip
 * 
 * @param current - current row (country)
 * @returns - population and population yearly change for country or empty string for countries with no data
 */
export const populationTooltipInfo = ( current ) => {
    return current ? `Population: ${current.population}\nPopulation Yearly Change: ${current.populationYearlyChange}` : ``;
};
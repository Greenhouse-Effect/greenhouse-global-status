export const attributeQuery = (current, attribute) => {
  switch (attribute) {
    case 'Population': {
      return current.population;
    }
    case 'Population Yearly Change': {
      return current.populationYearlyChange;
    }
    case 'CO2 Emissions': {
      return current.emissions;
    }
    case 'Temperature Change': {
      return current.tempChange;
    }
    case 'Land Area': {
      return current.landArea;
    }
    case 'Water Withdrawal': {
      return current.waterWithdrawal;
    }
    case 'GNI': {
      return current.gni;
    }
    case 'HDI': {
      return current.hdi;
    }
    case 'CO2 Emissions from Natural Gas': {
      return current.naturalGasEmissions;
    }
    case 'CO2 Emissions from Fuel Oil': {
      return current.fuelOilEmissions;
    }
    case 'CO2 Emissions from Coal': {
      return current.coalEmissions;
    }
    case 'Deaths': {
      return current.deaths;
    }
    case 'Homelessness': {
      return current.homelessness;
    }
    case 'Economic Damages': {
      return current.economicDamages;
    }
    case 'Rabies Incidence': {
      return current.rabiesIncidence;
    }
    case 'Malaria Incidence': {
      return current.malariaIncidence;
    }
    case 'Country Infection Percentage (any disease)': {
      return current.countryInfection;
    }
    case 'Rice Production': {
      return current.riceProduction;
    }
    case 'Corn Production': {
      return current.cornProduction;
    }
    case 'Wheat Production': {
      return current.wheatProduction;
    }
  }
};

const numberWithCommas = (num) => {
  if (num === undefined) return;
  return typeof num === 'string'
    ? num.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    : num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const tooltipInfo = (current, attribute) => {
  return current
    ? ` | ${attribute}: ${numberWithCommas(attributeQuery(current, attribute))}`
    : ``;
};

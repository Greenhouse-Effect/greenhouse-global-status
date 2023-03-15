export const attributeQuery = (current, attribute) => {
  switch (attribute) {
    case 'Population': {
      return current.population;
    }
    case 'Population Yearly Change (%)': {
      return current.populationYearlyChange;
    }
    case 'CO2 Emissions (t)': {
      return current.emissions;
    }
    case 'Temperature Change (%)': {
      return current.tempChange;
    }
    case 'Land Area (Km^2)': {
      return current.landArea;
    }
    case 'Water Withdrawal (L)': {
      return current.waterWithdrawal;
    }
    case 'GNI': {
      return current.gni;
    }
    case 'HDI': {
      return current.hdi;
    }
    case 'CO2 Emissions from Natural Gas (kT)': {
      return current.naturalGasEmissions;
    }
    case 'CO2 Emissions from Fuel Oil (kT)': {
      return current.fuelOilEmissions;
    }
    case 'CO2 Emissions from Coal (kT)': {
      return current.coalEmissions;
    }
    case 'Deaths': {
      return current.deaths;
    }
    case 'Homelessness': {
      return current.homelessness;
    }
    case 'Economic Damages (million $USD)': {
      return current.economicDamages;
    }
    case 'Rabies Incidence': {
      return current.rabiesIncidence;
    }
    case 'Malaria Incidence (Per 1,000 Population)': {
      return current.malariaIncidence;
    }
    case 'Country Infection Percentage (%)': {
      return current.countryInfection;
    }
    case 'Rice (Gross Production Value 1,000 USD)': {
      return current.riceProduction;
    }
    case 'Corn (Gross Production Value 1,000 USD)': {
      return current.cornProduction;
    }
    case 'Wheat (Gross Production Value 1,000 USD)': {
      return current.wheatProduction;
    }
  }
};

export const numberWithCommas = (num) => {
  if (num === undefined) return;
  return typeof num === 'string'
    ? num.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    : num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const tooltipInfo = (current, attribute) => {
  return !(current && attribute) ?
    `` : ` | ${attribute}: ${numberWithCommas(attribute == 'Economic Damages' ? attributeQuery(current, attribute) / 1000 : attributeQuery(current, attribute))}`;
};

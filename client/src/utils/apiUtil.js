export const translateEntityToApi = (entity) => {
  switch (entity) {
    case 'Country': {
      return 'country';
    }
    case 'Atmopsheric Data': {
      return 'atmosphericData';
    }
    case 'Land Data': {
      return 'landData';
    }
    case 'Societal Data': {
      return 'societalData';
    }
    case 'Energy Data': {
      return 'energyData';
    }
    case 'Disaster Data': {
      return 'disasterData';
    }
    case 'Disease Data': {
      return 'diseaseData';
    }
    case 'Food Data': {
      return 'foodData';
    }
  }
};

export const translateAttributeToApi = (attribute) => {
  switch (attribute) {
    case 'Population': {
      return 'population';
    }
    case 'Population Yearly Change (%)': {
      return 'populationYearlyChange';
    }
    case 'CO2 Emissions (t)': {
      return 'emissions';
    }
    case 'Temperature Change (%)': {
      return 'tempChange';
    }
    case 'Land Area (Km^2)': {
      return 'landArea';
    }
    case 'Water Withdrawal (L)': {
      return 'waterWithdrawal';
    }
    case 'GNI': {
      return 'gni';
    }
    case 'HDI': {
      return 'hdi';
    }
    case 'CO2 Emissions from Natural Gas (kT)': {
      return 'naturalGas';
    }
    case 'CO2 Emissions from Fuel Oil (kT)': {
      return 'fuelOil';
    }
    case 'CO2 Emissions from Coal (kT)': {
      return 'coal';
    }
    case 'Deaths': {
      return 'deaths';
    }
    case 'Homelessness': {
      return 'homelessness';
    }
    case 'Economic Damages (million $USD)': {
      return 'economicDamages';
    }
    case 'Rabies Incidence': {
      return 'rabies';
    }
    case 'Malaria Incidence (Per 1,000 Population)': {
      return 'malaria';
    }
    case 'Country Infection Percentage (%)': {
      return 'infection';
    }
    case 'Rice (Gross Production Value 1,000 USD)': {
      return 'rice';
    }
    case 'Corn (Gross Production Value 1,000 USD)': {
      return 'corn';
    }
    case 'Wheat (Gross Production Value 1,000 USD)': {
      return 'wheat';
    }
  }
};

export const translateOperatorToApi = (operator) => {
  switch (operator) {
    case 'Greater than': {
      return 'g';
    }
    case 'Less than': {
      return 'l';
    }
  }
};

export const handleAxios = async (
  entity,
  year,
  attribute,
  operator,
  slider
) => {
  if (entity === 'country') {
    return `http://35.92.51.76:8080/${entity}/${attribute}/${operator}/${slider}`;
  } else {
    return `http://35.92.51.76:8080/${entity}/year/${year}/${attribute}/${operator}/${slider}`;
  }
};

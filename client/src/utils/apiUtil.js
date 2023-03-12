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
    case 'Population Yearly Change': {
      return 'populationYearlyChange';
    }
    case 'CO2 Emissions': {
      return 'emissions';
    }
    case 'Temperature Change': {
      return 'tempChange';
    }
    case 'Land Area': {
      return 'landArea';
    }
    case 'Water Withdrawal': {
      return 'waterWithdrawal';
    }
    case 'GNI': {
      return 'gni';
    }
    case 'HDI': {
      return 'hdi';
    }
    case 'CO2 Emissions from Natural Gas': {
      return 'naturalGas';
    }
    case 'CO2 Emissions from Fuel Oil': {
      return 'fuelOil';
    }
    case 'CO2 Emissions from Coal': {
      return 'coal';
    }
    case 'Deaths': {
      return 'deaths';
    }
    case 'Homelessness': {
      return 'homelessness';
    }
    case 'Economic Damages': {
      return 'economicDamages';
    }
    case 'Rabies Incidence': {
      return 'rabies';
    }
    case 'Malaria Incidence': {
      return 'malaria';
    }
    case 'Country Infection Percentage (any disease)': {
      return 'infection';
    }
    case 'Rice Production': {
      return 'rice';
    }
    case 'Corn Production': {
      return 'corn';
    }
    case 'Wheat Production': {
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
    return `${process.env.NEXT_PUBLIC_SERVER}/${entity}/${attribute}/${operator}/${slider}`;
  } else {
    return `${process.env.NEXT_PUBLIC_SERVER}/${entity}/year/${year}/${attribute}/${operator}/${slider}`;
  }
};

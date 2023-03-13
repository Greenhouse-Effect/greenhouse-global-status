export const getEntityAttributes = (entity) => {
  switch (entity) {
    case 'Country': {
      return [{ label: 'Population' }, { label: 'Population Yearly Change' }];
    }
    case 'Atmopsheric Data': {
      return [{ label: 'CO2 Emissions' }, { label: 'Temperature Change' }];
    }
    case 'Land Data': {
      return [{ label: 'Land Area' }, { label: 'Water Withdrawal' }];
    }
    case 'Societal Data': {
      return [{ label: 'GNI' }, { label: 'HDI' }];
    }
    case 'Energy Data': {
      return [
        { label: 'CO2 Emissions from Natural Gas' },
        { label: 'CO2 Emissions from Fuel Oil' },
        { label: 'CO2 Emissions from Coal' }
      ];
    }
    case 'Disaster Data': {
      return [
        { label: 'Deaths' },
        { label: 'Homelessness' },
        { label: 'Economic Damages' }
      ];
    }
    case 'Disease Data': {
      return [
        { label: 'Rabies Incidence' },
        { label: 'Malaria Incidence' },
        { label: 'Country Infection Percentage (any disease)' }
      ];
    }
    case 'Food Data': {
      return [
        { label: 'Rice Production' },
        { label: 'Corn Production' },
        { label: 'Wheat Production' }
      ];
    }
  }
};

export const getSliderInfo = (attribute) => {
  switch (attribute) {
    case 'Population': {
      return {
        min: 801,
        max: 1439323776
      };
    }
    case 'Population Yearly Change': {
      return {
        min: -2.47,
        max: 3.84
      };
    }
    case 'CO2 Emissions': {
      return {
        min: 3.55,
        max: 10064000
      };
    }
    case 'Temperature Change': {
      return {
        min: -0.78,
        max: 5.327
      };
    }
    case 'Land Area': {
      return {
        min: 0,
        max: 16376870
      };
    }
    case 'Water Withdrawal': {
      return {
        min: 34,
        max: 16281
      };
    }
    case 'GNI': {
      return {
        min: 732,
        max: 146830
      };
    }
    case 'HDI': {
      return {
        min: 0.385,
        max: 0.962
      };
    }
    case 'CO2 Emissions from Natural Gas': {
      return {
        min: 0.0003,
        max: 8205.6909
      };
    }
    case 'CO2 Emissions from Fuel Oil': {
      return {
        min: 0.0053,
        max: 8511.5851
      };
    }
    case 'CO2 Emissions from Coal': {
      return {
        min: 0,
        max: 69167.0407
      };
    }
    case 'Deaths': {
      return {
        min: 0,
        max: 317657
      };
    }
    case 'Homelessness': {
      return {
        min: 0,
        max: 2452754
      };
    }
    case 'Economic Damages': {
      return {
        min: 0,
        max: 364095168000
      };
    }
    case 'Rabies Incidence': {
      return {
        min: 0,
        max: 23015
      };
    }
    case 'Malaria Incidence': {
      return {
        min: 0,
        max: 744.16
      };
    }
    case 'Country Infection Percentage (any disease)': {
      return {
        min: 2.25,
        max: 83.29
      };
    }
    case 'Rice Production': {
      return {
        min: 1,
        max: 118183806
      };
    }
    case 'Corn Production': {
      return {
        min: 3,
        max: 114592494
      };
    }
    case 'Wheat Production': {
      return {
        min: 0,
        max: 53422005
      };
    }
  }
};

export const entities = [
  { label: 'Country' },
  { label: 'Atmopsheric Data' },
  { label: 'Land Data' },
  { label: 'Societal Data' },
  { label: 'Energy Data' },
  { label: 'Disaster Data' },
  { label: 'Disease Data' },
  { label: 'Food Data' }
];

export const operatorTypes = [
  { label: 'None' },
  { label: 'Greater than' },
  { label: 'Less than' },
  { label: 'Compare With' }
];

export const getYears = (entity) => {
  switch (entity) {
    case 'Atmopsheric Data': {
      return [
        { label: '2000' },
        { label: '2001' },
        { label: '2002' },
        { label: '2003' },
        { label: '2004' },
        { label: '2005' },
        { label: '2006' },
        { label: '2007' },
        { label: '2008' },
        { label: '2009' },
        { label: '2010' },
        { label: '2011' },
        { label: '2012' },
        { label: '2013' },
        { label: '2014' },
        { label: '2015' },
        { label: '2016' },
        { label: '2017' },
        { label: '2018' },
        { label: '2019' },
        { label: '2020' }
      ];
    }
    case 'Land Data': {
      return [{ label: '2021' }];
    }
    case 'Societal Data': {
      return [{ label: '2021' }];
    }
    case 'Energy Data': {
      return [
        { label: '2000' },
        { label: '2001' },
        { label: '2002' },
        { label: '2003' },
        { label: '2004' },
        { label: '2005' },
        { label: '2006' },
        { label: '2007' },
        { label: '2008' },
        { label: '2009' },
        { label: '2010' },
        { label: '2011' },
        { label: '2012' },
        { label: '2013' },
        { label: '2014' },
        { label: '2015' },
        { label: '2016' },
        { label: '2017' },
        { label: '2018' },
        { label: '2019' },
        { label: '2020' }
      ];
    }
    case 'Disaster Data': {
      return [
        { label: '2010' },
        { label: '2011' },
        { label: '2012' },
        { label: '2013' },
        { label: '2014' },
        { label: '2015' },
        { label: '2016' },
        { label: '2017' },
        { label: '2018' },
        { label: '2019' },
        { label: '2020' },
        { label: '2021' },
        { label: '2022' }
      ];
    }
    case 'Disease Data': {
      return [
        { label: '2000' },
        { label: '2001' },
        { label: '2002' },
        { label: '2003' },
        { label: '2004' },
        { label: '2005' },
        { label: '2006' },
        { label: '2007' },
        { label: '2008' },
        { label: '2009' },
        { label: '2010' },
        { label: '2011' },
        { label: '2012' },
        { label: '2013' },
        { label: '2014' },
        { label: '2015' },
        { label: '2016' },
        { label: '2017' },
        { label: '2018' },
        { label: '2019' }
      ];
    }
    case 'Food Data': {
      return [
        { label: '2000' },
        { label: '2001' },
        { label: '2002' },
        { label: '2003' },
        { label: '2004' },
        { label: '2005' },
        { label: '2006' },
        { label: '2007' },
        { label: '2008' },
        { label: '2009' },
        { label: '2010' },
        { label: '2011' },
        { label: '2012' },
        { label: '2013' },
        { label: '2014' },
        { label: '2015' },
        { label: '2016' },
        { label: '2017' },
        { label: '2018' },
        { label: '2019' },
        { label: '2020' }
      ];
    }
  }
};

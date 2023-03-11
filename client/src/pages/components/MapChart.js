import React, { useEffect } from 'react';
import { scaleLinear } from 'd3-scale';

import { translateAttributeToApi } from '../utils/apiUtil.js';
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule
} from 'react-simple-maps';
import { getSliderInfo } from '../utils/queryInputUtil.js';

const geoUrl =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

const projConfig = {
  rotate: [-10, 0, 0], // standard rotation, without -10 Russia is split and wraps around to the left
  scale: 100 // 147 is about full screen size
};

const mapStyle = {
  // need outline: "none" for all 3, otherwise we get a weird box around countries
  default: {
    // default fill overrides geography fill, will not allow different colors
    outline: 'none'
  },
  hover: {
    fill: '#F53',
    outline: 'none'
  },
  pressed: {
    fill: '#E42',
    outline: 'none'
  }
};

const attributeColorScale = (attribute) => {
  // const min = getSliderInfo(attribute).min;
  // const max = getSliderInfo(attribute).max;
  // console.log(getSliderInfo(attribute).min);
  // console.log(getSliderInfo(attribute).max);

  return scaleLinear().domain([-4, 4]).range(['#ffedea', '#ff5233']);
};

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
      return current.naturalGas;
    }
    case 'CO2 Emissions from Fuel Oil': {
      return current.fuelOil;
    }
    case 'CO2 Emissions from Coal': {
      return current.coal;
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
      return current.rabies;
    }
    case 'Malaria Incidence': {
      return current.malaria;
    }
    case 'General Country Infection (any)': {
      return current.infection;
    }
    case 'Rice Production': {
      return current.rice;
    }
    case 'Corn Production': {
      return current.corn;
    }
    case 'Wheat Production': {
      return current.wheat;
    }
  }
};

export const populationTooltipInfo = (current, attribute) => {
  return current
    ? ` | ${attribute}: ${numberWithCommas(attributeQuery(current, attribute))}`
    : ``;
};

const numberWithCommas = (num) => {
  return typeof num === 'string'
    ? num
    : num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const MapChart = ({ setToolTipContent, axiosData, attribute }) => {
  let colorScale = scaleLinear()
    .domain([0, 118183806])
    .range(['#ffedea', '#ff5233']);

  const onMouseEnter = (geo, current) => {
    return () => {
      // `${geo.properties.name}` + `\n` + queryState.tooltipInfo(current)
      setToolTipContent(
        `${geo.properties.name}` +
          `${populationTooltipInfo(current, attribute)}`
      );
    };
  };

  const onMouseLeave = () => {
    setToolTipContent('');
  };
  /*
  useEffect(() => {
    if (attribute) {
      console.log(
        'min: ' +
          getSliderInfo(attribute).min +
          ' max: ' +
          getSliderInfo(attribute).max
      );
      colorScale
        .domain([getSliderInfo(attribute).min, getSliderInfo(attribute).max])
        .range(['#ffedea', '#ff5233']);
    }
  }, [attribute]);
  */
  // colorScale.domain([1, 118183806]).range(['#ffedea', '#ff5233']);
  // sphere: only sets oval outline around map, does not change shape
  // graticule: latitude and longitude lines
  return (
    <div>
      <ComposableMap projectionConfig={projConfig}>
        <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
        <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
        <Geographies geography={geoUrl} data-tooltip-id="my-tooltip">
          {({ geographies }) =>
            geographies.map((geo) => {
              const current = axiosData.find(
                (s) => s.countryName == geo.properties.name
              );
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={onMouseEnter(geo, current)}
                  onMouseLeave={onMouseLeave}
                  style={mapStyle}
                  stroke={'#FFFFFF'} // border color
                  strokeWidth={0.15} // border width (leave very low)
                  fill={
                    current
                      ? colorScale(attributeQuery(current, attribute))
                      : '#D4D4D4'
                  } // if current (data for country) is not null, find color on scale, otherwise default gray
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default MapChart;

// import React from 'react';
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   Sphere,
//   Graticule
// } from 'react-simple-maps';

// const geoUrl =
//   'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';
// const projConfig = {
//   rotate: [-10, 0, 0], // standard rotation, without -10 Russia is split and wraps around to the left
//   scale: 100 // 147 is about full screen size
// };

// const mapStyle = {
//   // need outline: "none" for all 3, otherwise we get a weird box around countries
//   default: {
//     // default fill overrides geography fill, will not allow different colors
//     outline: 'none'
//   },
//   hover: {
//     fill: '#F53',
//     outline: 'none'
//   },
//   pressed: {
//     fill: '#E42',
//     outline: 'none'
//   }
// };

// const MapChart = ({ setToolTipContent, queryState, axiosData }) => {
//   const onMouseEnter = (geo, current) => {
//     return () => {
//       setToolTipContent(
//         `${geo.properties.name}` + `\n` + queryState.tooltipInfo(current)
//       );
//     };
//   };

//   const onMouseLeave = () => {
//     setToolTipContent('');
//   };

//   // sphere: only sets oval outline around map, does not change shape
//   // graticule: latitude and longitude lines
//   return (
//     <div>
//       <ComposableMap projectionConfig={projConfig}>
//         <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
//         <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
//         <Geographies geography={geoUrl} data-tooltip-id="my-tooltip">
//           {({ geographies }) =>
//             geographies.map((geo) => {
//               const current = axiosData.find(
//                 (s) => s.countryName == geo.properties.name
//               );
//               return (
//                 <Geography
//                   key={geo.rsmKey}
//                   geography={geo}
//                   onMouseEnter={onMouseEnter(geo, current)}
//                   onMouseLeave={onMouseLeave}
//                   style={mapStyle}
//                   stroke={'#FFFFFF'} // border color
//                   strokeWidth={0.15} // border width (leave very low)
//                   fill={
//                     current
//                       ? queryState.colorScale(queryState.queryBy(current))
//                       : '#D4D4D4'
//                   } // if current (data for country) is not null, find color on scale, otherwise default gray
//                 />
//               );
//             })
//           }
//         </Geographies>
//       </ComposableMap>
//     </div>
//   );
// };

// export default MapChart;

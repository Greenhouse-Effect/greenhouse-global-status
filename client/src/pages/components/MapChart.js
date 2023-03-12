import React, { useEffect } from 'react';
import { scaleLinear } from 'd3-scale';

import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule
} from 'react-simple-maps';
import { getSliderInfo } from '../../utils/queryInputUtil.js';
import { attributeQuery, tooltipInfo } from '../../utils/mapUtil.js';

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
    outline: '#fff'
  },
  pressed: {
    fill: '#F53',
    outline: 'none'
  }
};

let colorScale = scaleLinear().domain([0, 1]).range(['#B1D2B5', '#426A5A']);

const MapChart = ({ setToolTipContent, axiosData, attribute }) => {
  const onMouseEnter = (geo, current) => {
    return () => {
      setToolTipContent(
        `${geo.properties.name}` + `${tooltipInfo(current, attribute)}`
      );
    };
  };

  const onMouseLeave = () => {
    setToolTipContent('');
  };

  useEffect(() => {
    if (attribute) {
      colorScale = scaleLinear()
        .domain([getSliderInfo(attribute).min, getSliderInfo(attribute).max])
        .range(['#B1D2B5', '#426A5A']);
    }
  }, [attribute]);

  // sphere: only sets oval outline around map, does not change shape
  // graticule: latitude and longitude lines
  return (
    <div className="flex w-[75%]">
      <ComposableMap projectionConfig={projConfig} width={600} height={300}>
        <Sphere stroke="#E4E5E6" strokeWidth={0.5} fill={'#809BCE'} />
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
                    geo.properties.name === 'Antarctica'
                      ? '#FFFFFF'
                      : current
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

import React, { useEffect, useState } from 'react';
import { scaleLinear } from 'd3-scale';

import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule
} from 'react-simple-maps';
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

const MapChart = ({ setToolTipContent, axiosData, attribute, axiosDataComp, attributeComp }) => {
  // use states for minimum and maximum so that scale will be updated correctly
  const [minimum, setMinimum] = useState(Number.MAX_SAFE_INTEGER);
  const [maximum, setMaximum] = useState(Number.MIN_SAFE_INTEGER);

  const onMouseEnter = (geo, current, currentComp) => {
    return () => {
      setToolTipContent(
        `${geo.properties.name}` + `${tooltipInfo(current, attribute)}` + `${tooltipInfo(currentComp, attributeComp)}`
      );
    };
  };

  const onMouseLeave = () => {
    setToolTipContent('');
  };

  /**
   * ensures comparison is valid, separated for readability in geographies instead of one long conditional
   * @param {JSON} current - table from first query
   * @param {JSON} currentComp - table from second query (may be null if no comparison)
   * @returns {boolean} true if value can be calculated for heatmap
   */
  const validTables = ( current, currentComp ) => {
    if ( !current ) return false;         // can not find corresponding data for country (missing or axiosData is still empty)
    if ( axiosDataComp.length == 0 ) return true; // (can not use !axiosDataComp) there is no comparing query
    if ( !currentComp ) return false;     // there is comparing query but data does not exist for this country, use default gray to preserve min and max
    return attributeQuery( currentComp, attributeComp ) != 0; // data for both queries for this country, make sure to not divide by zero (use default gray for now)
  };

  /**
   * finds value to pass into colorScale for current country and keep colorScale bounds up to date
   * @param {JSON} current - table from first query
   * @param {JSON} currentComp - table from second query (may be null if no comparison)
   * @returns {number} corresponding value, attr1 / attr2 or just attr1
   */
  const scaleValue = ( current, currentComp ) => {
    let value;
    // check if there is one query or two
    // from validTables: current exists, and unless there is no comp query: currentComp exists and compAttributeQuery != 0
    if ( current && currentComp )
      value = Number(attributeQuery( current, attribute ) / attributeQuery( currentComp, attributeComp ));
    else
      value = Number(attributeQuery( current, attribute ));
    // check if value exceeds min or max
    if (value < minimum)
      setMinimum(value);
    if (value > maximum)
      setMaximum(value);
    return value;
  };

  // reset bounds whenever either dataset is changed (new query)
  useEffect(() => {
    setMinimum(Number.MAX_SAFE_INTEGER);
    setMaximum(Number.MIN_SAFE_INTEGER);
  }, [axiosData, axiosDataComp]);

  // update colorScale domain whenever new min or max is found
  useEffect(() => {
    console.log(minimum, maximum);
    colorScale.domain([minimum, maximum]);
  }, [minimum, maximum]);

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
              // current is JSON object, corrseponding country from first query, null if data does not exist for given country
              const current = axiosData.find(
                (s) => s.countryName == geo.properties.name
              );
              // currentComp is JSON object, corrseponding country from second query, null if data does not exist for given country or only one query
              const currentComp = axiosDataComp.find(
                (s) => s.countryName == geo.properties.name
              );
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={onMouseEnter(geo, current, currentComp)}
                  onMouseLeave={onMouseLeave}
                  style={mapStyle}
                  stroke={'#FFFFFF'} // border color
                  strokeWidth={0.15} // border width (leave very low)
                  fill={
                    geo.properties.name === 'Antarctica' ? // use white for Antarctica, otherwise use heatmap color or default gray for countries
                      '#FFFFFF' : validTables( current, currentComp ) ? // check if country can be placed on heatmap based on current tables
                        colorScale( scaleValue( current, currentComp ) ) : '#D4D4D4' // pass scale value into colorScale if it can be placed on heatmap, otherwise default gray for any reason
                  }
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

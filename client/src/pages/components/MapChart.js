import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule
} from 'react-simple-maps';

const geoUrl =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

const projConfig = {
  rotate: [-10, 0, 0], // standard rotation, without -10 Russia is split and wraps around to the left
  scale: 100 // 147 is about full screen size
};

const mapStyle = {
  default: {
    fill: '#D6D6DA',
    outline: 'none'
  },
  hover: {
    fill: '#F53',
    outline: 'none'
  },
  pressed: {
    // always leave pressed in even if we make it the same as hover, otherwise it creates weird box around countries when pressed by default
    fill: '#E42',
    outline: 'none'
  }
};

const MapChart = ({ setToolTipContent }) => {
  const onMouseEnter = (geo) => {
    return () => {
      setToolTipContent(`${geo.properties.name}`);
    };
  };

  const onMouseLeave = () => {
    setToolTipContent('');
  };

  return (
    <div>
      <ComposableMap projectionConfig={projConfig}>
        {/* only sets oval outline around map, does not change shape */}
        <Sphere stroke="#E4E5E6" strokeWidth={0.5} />{' '}
        {/* latitude and longitude lines */}
        <Graticule stroke="#E4E5E6" strokeWidth={0.5} />{' '}
        <Geographies geography={geoUrl} data-tooltip-id="my-tooltip">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={onMouseEnter(geo)}
                onMouseLeave={onMouseLeave}
                style={mapStyle}
                stroke={'#FFFFFF'} // border color
                strokeWidth={0.15} // border width (leave very low)
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default MapChart;

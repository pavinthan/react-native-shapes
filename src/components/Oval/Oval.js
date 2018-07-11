import React from 'react';
import Svg, { Ellipse } from 'react-native-svg';

const Oval = ({ width, height, fill }) => {
  return (
    <Svg height={height * 2} width={width * 2}>
      <Ellipse
        cx={width}
        cy={height}
        rx={width / 2}
        ry={height / 2}
        fill={fill}
      />
    </Svg>
  );
};

export default Oval;

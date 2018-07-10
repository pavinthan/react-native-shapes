import React from 'react';
import { Svg, Polygon } from 'react-native-svg';

const IsoscelesTriangle = ({ width, height, fill }) => {
  const peakX = width * Math.cos(0);
  const peakY = height * Math.sin(0);

  return (
    <Svg height={height} width={width}>
      <Polygon points={`0,0 0,${width} ${peakX},${peakY}`} fill={fill} />
    </Svg>
  );
};

export default IsoscelesTriangle;

import React from 'react';
import { ART } from 'react-native';

const Polygon = ({ sideLength, sides, ...otherProps }) => {
  // create pointers.
  const polygon = ART.Path().move(
    sideLength * Math.cos(0),
    sideLength * Math.sin(0)
  );

  // handel sides pointers.
  for (let i = 1; i <= sides; i += 1) {
    polygon.line(
      sideLength * Math.cos((i * 2 * Math.PI) / sides),
      sideLength * Math.sin((i * 2 * Math.PI) / sides)
    );
  }

  polygon.close();

  return (
    <ART.Surface width={sideLength * 3} height={sideLength * 3}>
      <ART.Group x={sideLength} y={sideLength / 3}>
        <ART.Shape d={polygon} {...otherProps} />
      </ART.Group>
    </ART.Surface>
  );
};

export default Polygon;

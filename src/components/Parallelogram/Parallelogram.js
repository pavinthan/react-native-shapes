import React from 'react';
import { ART } from 'react-native';

const Parallelogram = ({ width, height, ...otherProps }) => {
  const cx = width / 2;

  // create pointers.
  const rectangle = ART.Path()
    .move(cx, 0)
    .lineTo(cx + width, 0)
    .lineTo(cx + width / 2, height)
    .lineTo(cx - width / 2, height)
    .lineTo(cx, 0)
    .close();

  return (
    <ART.Surface width={width + cx} height={height}>
      <ART.Group x={0} y={0}>
        <ART.Shape d={rectangle} {...otherProps} />
      </ART.Group>
    </ART.Surface>
  );
};

export default Parallelogram;

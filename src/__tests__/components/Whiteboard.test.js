import React from 'react';
import { Whiteboard } from '../../components';
import renderer from 'react-test-renderer';
import {
  CIRCLE,
  HEPTAGON,
  HEXAGON,
  EQUILATERAL_TRIANGLE,
  ISOSCELES_TRIANGLE,
  SCALENE_TRIANGLE,
  OCTAGON,
  OVAL,
  PARALLELOGRAM,
  PENTAGON,
  RECTANGLE,
  SQUARE,
} from '../../constants';

describe('circle component', () => {
  it('renders without crashing', () => {
    const rendered = renderer
      .create(
        <Whiteboard shape={CIRCLE} measurements={['radius']} values={[100]} />
      )
      .toJSON();
    expect(rendered).toBeTruthy();
  });

  it('renders component', () => {
    const tree = renderer
      .create(
        <Whiteboard shape={CIRCLE} measurements={['radius']} values={[100]} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('oval component', () => {
  it('renders without crashing', () => {
    const rendered = renderer
      .create(
        <Whiteboard
          shape={OVAL}
          measurements={['width', 'height']}
          values={[200, 100]}
        />
      )
      .toJSON();
    expect(rendered).toBeTruthy();
  });

  it('renders component', () => {
    const tree = renderer
      .create(
        <Whiteboard
          shape={OVAL}
          measurements={['width', 'height']}
          values={[200, 100]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('equilateral triangle component', () => {
  it('renders without crashing', () => {
    const rendered = renderer
      .create(
        <Whiteboard
          shape={EQUILATERAL_TRIANGLE}
          measurements={['sideLength']}
          values={[100]}
        />
      )
      .toJSON();
    expect(rendered).toBeTruthy();
  });

  it('renders component', () => {
    const tree = renderer
      .create(
        <Whiteboard
          shape={EQUILATERAL_TRIANGLE}
          measurements={['sideLength']}
          values={[100]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('isosceles triangle component', () => {
  it('renders without crashing', () => {
    const rendered = renderer
      .create(
        <Whiteboard
          shape={ISOSCELES_TRIANGLE}
          measurements={['width', 'height']}
          values={[100, 200]}
        />
      )
      .toJSON();
    expect(rendered).toBeTruthy();
  });

  it('renders component', () => {
    const tree = renderer
      .create(
        <Whiteboard
          shape={ISOSCELES_TRIANGLE}
          measurements={['width', 'height']}
          values={[100, 200]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('scalene triangle component', () => {
  it('renders without crashing', () => {
    const rendered = renderer
      .create(
        <Whiteboard
          shape={SCALENE_TRIANGLE}
          measurements={['width', 'height']}
          values={[100, 200]}
        />
      )
      .toJSON();
    expect(rendered).toBeTruthy();
  });

  it('renders component', () => {
    const tree = renderer
      .create(
        <Whiteboard
          shape={SCALENE_TRIANGLE}
          measurements={['width', 'height']}
          values={[100, 200]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('rectangle component', () => {
  it('renders without crashing', () => {
    const rendered = renderer
      .create(
        <Whiteboard
          shape={RECTANGLE}
          measurements={['width', 'height']}
          values={[100, 200]}
        />
      )
      .toJSON();
    expect(rendered).toBeTruthy();
  });

  it('renders component', () => {
    const tree = renderer
      .create(
        <Whiteboard
          shape={RECTANGLE}
          measurements={['width', 'height']}
          values={[100, 200]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('parallelogram component', () => {
  it('renders without crashing', () => {
    const rendered = renderer
      .create(
        <Whiteboard
          shape={PARALLELOGRAM}
          measurements={['width', 'height']}
          values={[100, 200]}
        />
      )
      .toJSON();
    expect(rendered).toBeTruthy();
  });

  it('renders component', () => {
    const tree = renderer
      .create(
        <Whiteboard
          shape={PARALLELOGRAM}
          measurements={['width', 'height']}
          values={[100, 200]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('square component', () => {
  it('renders without crashing', () => {
    const rendered = renderer
      .create(
        <Whiteboard
          shape={SQUARE}
          measurements={['side length']}
          values={[100]}
        />
      )
      .toJSON();
    expect(rendered).toBeTruthy();
  });

  it('renders component', () => {
    const tree = renderer
      .create(
        <Whiteboard
          shape={SQUARE}
          measurements={['side length']}
          values={[100]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('pentagon component', () => {
  it('renders without crashing', () => {
    const rendered = renderer
      .create(
        <Whiteboard
          shape={PENTAGON}
          measurements={['side length']}
          values={[100]}
        />
      )
      .toJSON();
    expect(rendered).toBeTruthy();
  });

  it('renders component', () => {
    const tree = renderer
      .create(
        <Whiteboard
          shape={PENTAGON}
          measurements={['side length']}
          values={[100]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('heptagon component', () => {
  it('renders without crashing', () => {
    const rendered = renderer
      .create(
        <Whiteboard
          shape={HEPTAGON}
          measurements={['sideLength']}
          values={[100]}
        />
      )
      .toJSON();
    expect(rendered).toBeTruthy();
  });

  it('renders component', () => {
    const tree = renderer
      .create(
        <Whiteboard
          shape={HEPTAGON}
          measurements={['sideLength']}
          values={[100]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('hexagon component', () => {
  it('renders without crashing', () => {
    const rendered = renderer
      .create(
        <Whiteboard
          shape={HEXAGON}
          measurements={['sideLength']}
          values={[100]}
        />
      )
      .toJSON();
    expect(rendered).toBeTruthy();
  });

  it('renders component', () => {
    const tree = renderer
      .create(
        <Whiteboard
          shape={HEXAGON}
          measurements={['sideLength']}
          values={[100]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('octagon component', () => {
  it('renders without crashing', () => {
    const rendered = renderer
      .create(
        <Whiteboard
          shape={OCTAGON}
          measurements={['sideLength']}
          values={[100]}
        />
      )
      .toJSON();
    expect(rendered).toBeTruthy();
  });

  it('renders component', () => {
    const tree = renderer
      .create(
        <Whiteboard
          shape={OCTAGON}
          measurements={['sideLength']}
          values={[100]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('invalid', () => {
  it('renders invalid without crashing', () => {
    const rendered = renderer
      .create(<Whiteboard shape="example" measurements={[]} values={[]} />)
      .toJSON();
    expect(rendered).toBeTruthy();
  });

  it('renders whiteboard invalid component', () => {
    const tree = renderer
      .create(<Whiteboard shape="example" measurements={[]} values={[]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import { Container, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import commonColors from './native-base-theme/variables/commonColor';
import { Form, ColorPicker, Header, Whiteboard } from './src/components';
import { findShape, findMeasurements, findValues } from './src/helpers';

class App extends Component {
  state = {
    hasError: false,
    measurements: null,
    message: '',
    query: '',
    shape: null,
    values: [],
    activeColor: commonColors.brandDark,
  };

  handelFormChanges = query => {
    this.setState({ query });
  };

  handelColorChanges = activeColor => {
    this.setState({ activeColor });
  };

  handelFormSubmit = () => {
    const { query } = this.state;

    const shape = findShape(query);
    if (!shape) {
      return this.updateInvalidState('Invalid shape.');
    }

    const measurements = findMeasurements(query);
    if (!measurements) {
      return this.updateInvalidState('Invalid measurements');
    }

    const values = findValues(query, measurements);
    if (values.length !== measurements.length) {
      return this.updateInvalidState('Invalid values');
    }

    this.updateValidState(shape, measurements, values);
  };

  render() {
    const {
      activeColor,
      hasError,
      message,
      shape,
      measurements,
      values,
    } = this.state;

    return (
      <Container>
        <Header title="Draw shapes" bgColor={activeColor} />
        <Content padder contentContainerStyle={{ flexGrow: 1 }}>
          <Grid>
            <Row>
              <Col>
                <ColorPicker onSelect={this.handelColorChanges} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form
                  hasErrors={hasError}
                  message={message}
                  buttonColor={activeColor}
                  onChange={debounce(this.handelFormChanges, 300)}
                  onSubmit={this.handelFormSubmit}
                />
              </Col>
            </Row>
            <Row size={99}>
              <Col>
                {shape && (
                  <Whiteboard
                    fill={activeColor}
                    measurements={measurements}
                    shape={shape}
                    values={values}
                  />
                )}
              </Col>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }

  updateInvalidState(message) {
    this.setState({
      hasError: true,
      message,
    });
  }

  updateValidState(shape, measurements, values) {
    this.setState({
      hasError: false,
      measurements,
      message: null,
      shape,
      values,
    });
  }
}

export default App;

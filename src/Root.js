import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import { findShape, findMeasurements, findValues } from './helpers';
// native base theme configs
import commonColors from '../native-base-theme/variables/commonColor';
// components
import { Container, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Form, ColorPicker, Header, Whiteboard } from './components';

class Root extends Component {
  state = {
    hasError: false,
    measurements: null,
    message: '',
    query: '',
    shape: null,
    values: [],
    activeColor: commonColors.brandDark,
  };

  /**
   * Handel form input changes
   * @param query
   */
  handelFormChanges = query => {
    this.setState({ query });
  };

  /**
   * Handel color changes
   * @param activeColor
   */
  handelColorChanges = activeColor => {
    this.setState({ activeColor });
  };

  /**
   * Handel form submission
   */
  handelFormSubmit = () => {
    const { query } = this.state;

    // find shape from query
    const shape = findShape(query);
    if (!shape) {
      return this.updateInvalidState('Invalid shape.');
    }

    // find measurements from query
    const measurements = findMeasurements(query);
    if (!measurements) {
      return this.updateInvalidState('Invalid measurements');
    }

    // find values from query
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

  /**
   * Update invalid state
   * @param message
   */
  updateInvalidState(message) {
    this.setState({
      hasError: true,
      message,
    });
  }

  /**
   * Update valid state
   * @param shape
   * @param measurements
   * @param values
   */
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

export default Root;

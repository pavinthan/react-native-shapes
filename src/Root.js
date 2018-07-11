import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import { findShape, findMeasurements, findValues } from './helpers';
// native base theme configs
import commonColors from '../native-base-theme/variables/commonColor';
// Importing required components
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
   * Handle user input to process the text and draw the image
   * @param query
   */
  handleFormChanges = query => {
    this.setState({ query });
  };

  /**
   * Handle theme color changes
   * @param activeColor
   */
  handleColorChanges = activeColor => {
    this.setState({ activeColor });
  };

  /**
   * Handle the submission of the input
   */
  handleFormSubmit = () => {
    const { query } = this.state;

    // Find the shape from input query which is submitted by the user
    const shape = findShape(query);
    if (!shape) {
      return this.updateInvalidState('Invalid shape.');
    }

    // Find the measurements of the given shape from the input query
    const measurements = findMeasurements(query);
    if (!measurements) {
      return this.updateInvalidState('Invalid measurements');
    }

    // Find the values for the given measurements of the shape from the input query
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
                <ColorPicker onSelect={this.handleColorChanges} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form
                  hasErrors={hasError}
                  message={message}
                  buttonColor={activeColor}
                  onChange={debounce(this.handleFormChanges, 300)}
                  onSubmit={this.handleFormSubmit}
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

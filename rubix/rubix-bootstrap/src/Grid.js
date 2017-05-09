import React from 'react';
import BGrid from 'react-bootstrap/lib/Grid';

import classNames from 'classnames';

export default class Grid extends React.Component {
  static propTypes = {
    fixed: React.PropTypes.bool,
    gutter: React.PropTypes.bool,
    collapse: React.PropTypes.bool,
    gutterTop: React.PropTypes.bool,
    gutterLeft: React.PropTypes.bool,
    gutterRight: React.PropTypes.bool,
    gutterBottom: React.PropTypes.bool,
  };

  render() {
    let fluid = true;

    if (this.props.fluid === false) {
      fluid = false;
    }

    if (this.props.fixed === true) {
      fluid = false;
    }

    let props = {
      ...this.props,
      fluid: fluid,
    };

    props.className = classNames(props.className, {
      'grid-gutter': props.gutter,
      'grid-collapse': props.collapse,
      'grid-gutter-top': props.gutterTop,
      'grid-gutter-left': props.gutterLeft,
      'grid-gutter-right': props.gutterRight,
      'grid-gutter-bottom': props.gutterBottom,
    });

    delete props.fixed;
    delete props.gutter;
    delete props.collapse;
    delete props.gutterTop;
    delete props.gutterLeft;
    delete props.gutterRight;
    delete props.gutterBottom;

    return <BGrid {...props} />
  }
}

import React, {PureComponent} from "react";
import {connect} from "react-redux";

// import "assets/scss/fonts.scss";
// import "assets/scss/antd.scss";
// import "assets/scss/app.scss";
import 'assets/scss/index.scss';
import 'assets/scss/lib/animate.css';

@connect()
export default class extends PureComponent {
  componentDidMount() {
  }

  render() {
    const {children} = this.props
    return children
  }
}
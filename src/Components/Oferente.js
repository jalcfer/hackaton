import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../Actions";

class Oferente extends Component {
  state = {
    addFormVisible: false,
    addFormValue: ""
  };

  componentWillMount() {
    this.props.fetchToDos();
  }

  renderNavBar = () => {
  }

  renderSlider = () => {

  }

  renderRetos = () => {

  }

  renderFooter = () => {

  }

  render() {
    return (
      <div className="home-container">
        Oferente
      </div>
    )
  }
}

const mapStateToProps = ({ retos }) => {
  return {
    retos
  };
};

export default connect(mapStateToProps, actions)(Oferente);
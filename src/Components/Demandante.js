import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../Actions";

class Demandante extends Component {
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
        Demandante
      </div>
    )
  }
}

const mapStateToProps = ({ retos }) => {
  return {
    retos
  };
};

export default connect(mapStateToProps, actions)(Demandante);
import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../Actions";
import { NavLink as RRNavLink } from 'react-router-dom';
import "../Styles/Style.css"

const items = [
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221920%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221920%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221920%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];


class Home extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      activeIndex: 0,
    };
  }

  componentWillMount() {
    console.log(this.props)
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onExiting =()=> {
    this.animating = true;
  }

  onExited = ()=> {
    this.animating = false;
  }

  next=()=> {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous=()=> {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex=(newIndex)=> {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }  

  renderNavBar = () => {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">PILAR</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/login" activeClassName="active" tag={RRNavLink}>
                Ingresar
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/registro" activeClassName="active" tag={RRNavLink}>
                Registrarse
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }

  slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={this.onExiting}
        onExited={this.onExited}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });



  renderSlider = () => {
    return(
      <Carousel
      activeIndex={this.state.activeIndex}
      next={this.next}
      previous={this.previous}
      sliderWidth={'100%'}
      itemWidth={'100%'}
    >
      <CarouselIndicators items={items} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />
      {this.slides}
      <CarouselControl direction="prev" directionText="Anterior" onClickHandler={this.previous} />
      <CarouselControl direction="next" directionText="Próximo" onClickHandler={this.next} />
    </Carousel>

    )
  }

  renderRetos = (retos) => {
  }

  renderFooter = () => {
  }

  render() {
    return (
      <div>
        {this.renderNavBar()}
        {this.renderSlider()}
        {this.renderRetos(this.props.retos)}
        {this.renderFooter()}
      </div>
    )
  }
}

const mapStateToProps = ({ retos }) => {
  return {
    retos
  };
};

export default connect(mapStateToProps, actions)(Home);
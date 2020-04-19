import React, { Component } from 'react';
import './tour.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
export default class Tour extends Component {
  state = {
    showInfo: true,
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    console.log(this.props);
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt={name} />
          <span className="close-btn" onClick={() => removeTour(id)}>
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{name}
            <span onClick={this.handleInfo}>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
          {/* <p>{info}</p> */}
        </div>
      </article>
    );
  }
}

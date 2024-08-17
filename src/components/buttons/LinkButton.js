import React from "react";
import { Link } from "react-router-dom";

export default class LinkButton extends React.Component {
  render() {
    return (
      <Link to={this.props.link} target={this.props.target}>
        <button className={this.props.class}>
          <div
            className={`flex ${
              this.props.icon === null ? `gap-0` : `gap-1`
            } justify-center items-center ${
              this.props.reversed === true ? "flex-row-reverse" : ""
            }`}
          >
            <div>{this.props.icon}</div>
            <div>{this.props.text}</div>
          </div>
        </button>
      </Link>
    );
  }
}

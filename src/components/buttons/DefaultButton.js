import React from "react";

export default class DefaultButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.click} className={this.props.class}>
        <div
          className={`flex ${
            this.props.icon === null ? `gap-0` : `gap-1`
          } justify-center items-center`}
        >
          <div>{this.props.icon}</div>
          <div>{this.props.text}</div>
        </div>
      </button>
    );
  }
}

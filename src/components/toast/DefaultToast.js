import React from "react";

export default class DefaultToast extends React.Component {
  render() {
    return (
      <div className={`toast ${this.props.active === true ? "show" : "hidden"}`}>
        <div className="alert alert-info">
          <span>New message arrived.</span>
        </div>
      </div>
    );
  }
}

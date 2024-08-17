import React from "react";

export default class SquareCards extends React.Component {
  render() {
    return (
      <section className={`${this.props.class} h-32 rounded aspect-square`}>
        <button onClick={this.props.action}>
          <figure className="">
            <img
              src={this.props.icon}
              alt="..."
              className="h-full p-5 aspect-square object-contain drop-shadow-sm"
            />
          </figure>
        </button>
      </section>
    );
  }
}

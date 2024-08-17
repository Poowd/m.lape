import React from "react";

export default class ItemListCard extends React.Component {
  render() {
    return (
      <section
        className={`${this.props.class} w-full h-32 rounded aspect-square px-5 py-3`}
      >
        <button onClick={this.props.action}>
          <main>
            <section className="flex flex-col items-start justify-between">
              <h1 className="text-2xl font-bold text-red-700">
                {this.props.project}
              </h1>
              <h3>{this.props.title}</h3>
              <ul className="flex gap-3 mt-3">{this.props.techs}</ul>
            </section>
          </main>
        </button>
      </section>
    );
  }
}

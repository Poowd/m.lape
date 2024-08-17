import React from "react";

export default class NoDisplay extends React.Component {
  render() {
    return (
      <main className="w-full h-full border-2 border-slate-800 border-opacity-30 grid place-content-center">
        <section className="bg-slate-900 text-center">
          <h1 className="text-3xl font-bold">No Display</h1>
          <p className="italic">{this.props.details}</p>
        </section>
      </main>
    );
  }
}

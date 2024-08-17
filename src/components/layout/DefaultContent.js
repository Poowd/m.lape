import React from "react";

export default class DefaultContent extends React.Component {
  render() {
    return (
      <main className="">
        <section className={`${this.props.bgcolor}`}>
          <main className={`${this.props.class}`}>
            <header className="vh-5">
              <main className="h-full flex justify-center items-end">
                <section>
                  <h1 className="text-4xl font-bold uppercase text-red-700">
                    {this.props.title}
                  </h1>
                </section>
              </main>
            </header>
            <main className="vh-95 p-5 md:h-auto">
              <section className="h-full lg:px-40 py-0 md:px-0">
                {this.props.content}
              </section>
            </main>
          </main>
        </section>
      </main>
    );
  }
}

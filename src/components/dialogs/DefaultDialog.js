import React from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export default class DefaultDialog extends React.Component {
  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.close}
        className="relative z-50"
      >
        <div className="fixed inset-0 text-slate-900 flex w-screen items-center justify-center p-4 bg-slate-900 bg-opacity-70 scale-up-center">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12 rounded flip-in-hor-bottom">
            <main className="">
              <section>
                <main className="h-auto grid grid-cols-6 place-items-center">
                  <section className="col-span-2 p-3">
                    <main>
                      <section>
                        <figure className="w-full aspect-square">
                          <img
                            src={this.props.icon}
                            alt="..."
                            className="h-full w-full object-contain"
                          />
                        </figure>
                      </section>
                    </main>
                  </section>
                  <section className="p-3 col-span-4">
                    <div className="mb-3">
                      <DialogTitle className="font-bold">
                        {this.props.title}
                      </DialogTitle>
                      <Description className={"italic"}>
                        {this.props.description}
                      </Description>
                    </div>
                    <p>{this.props.details}</p>
                  </section>
                </main>
                <div className="flex justify-end gap-2 mt-5">
                  {this.props.action}
                </div>
              </section>
            </main>
          </DialogPanel>
        </div>
      </Dialog>
    );
  }
}

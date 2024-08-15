import { useState } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import "./App.css";
import DefaultButton from "./components/buttons/DefaultButton";
import useComponents from "./hooks/ui/useComponents";
import useWebData from "./hooks/data/useWebData";
import useIcons from "./hooks/ui/useIcons";
import useColour from "./hooks/ui/useColour";
import "./css/Sizes.css";
import "./css/Animation.css";
import reactjs from "./media/icons/react-js.png";
import dp from "./media/dp.jpg";

function App() {
  const [components] = useComponents();
  const [icons] = useIcons();
  const [data] = useWebData();
  const [colour] = useColour();

  const [isOpen, setIsOpen] = useState(false);
  const [stacks, setStack] = useState(false);
  const [stacks_deets, setStackDeets] = useState({});

  return (
    <main>
      <header className="bg-slate-800">
        <nav className="vh-5 w-full px-20 inline-flex justify-between items-center">
          <section>
            <h1 className="text-slate-300 text-2xl font-bold">
              {data.general.webname}
            </h1>
          </section>
          <section>
            <ul className="inline-flex gap-5 text-slate-500">
              <li>
                <h5>Home</h5>
              </li>
              <li>
                <h5>About</h5>
              </li>
              <li>
                <h5>Works</h5>
              </li>
              <li>
                <h5>Contacts</h5>
              </li>
            </ul>
          </section>
        </nav>
        <main className="vh-95 bg-slate-100">
          <main className="h-full grid grid-cols-2">
            <section className="h-full flex justify-center items-center">
              <main className="text-end slide-in-bck-left">
                <header>
                  <h5 className="text-3xl font-semibold">Hello,</h5>
                  <h1 className="text-6xl font-bold">I'm a React Developer</h1>
                </header>
                <main>
                  <section className="mt-3">
                    <p>Wooooh! Let's design 101</p>
                  </section>
                  <section className="mt-5">
                    <DefaultButton
                      click={() => setIsOpen(true)}
                      icon={icons.alert}
                      text={`Button`}
                      class={`${components.button.withicon} ${colour.background.primary}`}
                    />
                  </section>
                </main>
              </main>
            </section>
            <section className="h-full flex justify-center items-center">
              <figure className="w-3/4 bg-slate-700 aspect-square rounded-full p-5 slide-in-bck-right">
                <img
                  src={dp}
                  alt="..."
                  className="h-full w-full object-cover rounded-full"
                />
              </figure>
            </section>
          </main>
        </main>
      </header>
      <main>
        <section className="bg-slate-200">
          <main className="px-40 py-20">
            <header className="vh-5">
              <main className="h-full flex items-center">
                <section>
                  <h1 className="text-4xl font-bold">Stacks</h1>
                </section>
              </main>
            </header>
            <section className="vh-95">
              <main className="h-full grid grid-cols-3 pb-5">
                <section className="col-span-1 p-3">
                  <main className="h-full bg-slate-100 shadow-md rounded p-3">
                    <section>
                      <header>
                        <section>
                          <main className="flex justify-center">
                            <section className="w-2/4">
                              <figure className="p-5">
                                <img
                                  src={reactjs}
                                  alt="..."
                                  className="h-full w-full aspect-square object-contain drop-shadow-sm"
                                />
                              </figure>
                            </section>
                          </main>
                        </section>
                        <section className="text-center">
                          <h3 className="text-3xl font-bold">
                            React Developer
                          </h3>
                          <p className="text-sm">Front-End Web Developer</p>
                        </section>
                      </header>
                    </section>
                  </main>
                </section>
                <section className="col-span-2 p-3">
                  <main className="h-full border-2 border-slate-300 rounded p-3">
                    <section className="h-full">
                      <main className="flex flex-wrap items-start gap-3">
                        {/* Technology List */}
                        {data.stacks.list.map((item, i) => (
                          <section className="bg-slate-100 h-32 rounded aspect-square">
                            <button
                              onClick={() => {
                                setStackDeets({
                                  title: item.title,
                                  description: item.description,
                                  icon: item.icon,
                                });
                                setStack(true);
                              }}
                            >
                              <figure className="">
                                <img
                                  src={item.icon}
                                  alt="..."
                                  className="h-full p-5 aspect-square object-contain drop-shadow-sm"
                                />
                              </figure>
                            </button>
                          </section>
                        ))}
                        {/* Technology List */}
                      </main>
                    </section>
                  </main>
                </section>
              </main>
            </section>
          </main>
        </section>
      </main>
      <main>
        <section className="bg-slate-100">
          <main className="px-40 py-20">
            <main className="h-screen">
              <h1>- worked with</h1>
              <h1>- projects</h1>
            </main>
          </main>
        </section>
      </main>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold">Sample Modal</DialogTitle>
            <Description>This is just sample modal.</Description>
            <p>
              Is this a sample modal? and are you sure that this is just a
              sample and nother unusual?
            </p>
            <div className="flex gap-2">
              <DefaultButton
                click={() => setIsOpen(false)}
                icon={null}
                text={`Cancel`}
                class={`${components.button.textonly} ${colour.background.neutral}`}
              />
              <DefaultButton
                click={() => setIsOpen(false)}
                icon={null}
                text={`Deactivate`}
                class={`${components.button.textonly} ${colour.background.primary}`}
              />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
      <Dialog
        open={stacks}
        onClose={() => setStack(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-slate-900 bg-opacity-30">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12 rounded jello-horizontal">
            <main className="grid grid-cols-6">
              <section className="col-span-2 p-3">
                <main>
                  <section>
                    <figure className="w-full aspect-square">
                      <img
                        src={stacks_deets.icon}
                        alt="..."
                        className="h-full w-full object-contain"
                      />
                    </figure>
                  </section>
                </main>
              </section>
              <section className="col-span-4 p-3">
                <div className="mb-3">
                  <DialogTitle className="font-bold">
                    {stacks_deets.title}
                  </DialogTitle>
                  <Description className={"italic"}>
                    {stacks_deets.description}
                  </Description>
                </div>
                <p>
                  wow. amazing! that is so nice, o my gulay, don't touch my
                  kulay.
                </p>
                <div className="flex justify-end gap-2 mt-5">
                  <DefaultButton
                    click={() => setStack(false)}
                    icon={null}
                    text={`Ok!`}
                    class={`${components.button.textonly} ${colour.background.neutral} px-5`}
                  />
                </div>
              </section>
            </main>
          </DialogPanel>
        </div>
      </Dialog>
    </main>
  );
}

export default App;

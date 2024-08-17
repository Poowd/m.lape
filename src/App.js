import { useState } from "react";
import "./App.css";
import DefaultButton from "./components/buttons/DefaultButton";
import useComponents from "./hooks/ui/useComponents";
import useWebData from "./hooks/data/useWebData";
import useIcons from "./hooks/ui/useIcons";
import useColour from "./hooks/ui/useColour";
import reactjs from "./media/icons/react-js.png";
import dp from "./media/dp.jpg";
import DefaultDialog from "./components/dialogs/DefaultDialog";
import SquareCards from "./components/cards/SquareCards";
import DefaultContent from "./components/layout/DefaultContent";
import OneFourthContent from "./components/layout/OneFourthContent";
import DefaultToast from "./components/toast/DefaultToast";
import useToast from "./hooks/popups/useToast";
import { ToastContainer, toast } from "react-toastify";
import ItemListCard from "./components/cards/ItemListCard";

function App() {
  const [components] = useComponents();
  const [icons] = useIcons();
  const [data] = useWebData();
  const [colour] = useColour();

  const [isOpen, setIsOpen] = useState(false);
  const [stacks, setStack] = useState(false);
  const [experience, setExperience] = useState(false);
  const [stacks_deets, setStackDeets] = useState({});
  const [experiences_deets, setExperiencesDeets] = useState({});
  const [project_deets, setProjectDeets] = useState({});

  return (
    <main>
      <header className="bg-red-700">
        <nav className="vh-5 w-full px-20 inline-flex justify-between items-center">
          <section>
            <h1 className="text-slate-100 text-2xl font-bold">
              {data.general.webname}
            </h1>
          </section>
          <section></section>
          <section>
            <ul className="inline-flex gap-5 text-slate-100">
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
        <main className="vh-95 bg-slate-900">
          <main className="h-full grid grid-cols-2">
            <section className="h-full flex justify-center items-center">
              <main className="w-full flex flex-col items-end text-end slide-in-bck-left">
                <header>
                  <h5 className="text-slate-500 text-3xl font-semibold uppercase">
                    Hello,
                  </h5>
                  <h1 className="text-red-700 text-6xl font-extrabold uppercase">
                    React Developer
                  </h1>
                </header>
                <main className="flex flex-col items-end">
                  <section className="mt-3 flex flex-col items-end">
                    <p className="w-3/4 text-slate-500">
                      "Hi there! I’m
                      <span className="font-semibold"> Mark Lape</span>, and I’m
                      thrilled to share my journey as a computer science
                      graduate. My passion for technology and programming has
                      led me to work on diverse projects that challenge my
                      skills and ignite my curiosity."
                    </p>
                  </section>
                  <section className="mt-5">
                    <main>
                      <section>
                        <ul className="flex gap-3">
                          <li>
                            <main className="border-2 border-slate-500 rounded px-4 py-2">
                              <section>
                                <p className="text-slate-500 font-semibold">
                                  React JS
                                </p>
                              </section>
                            </main>
                          </li>
                          <li>
                            <main className="border-2 border-slate-500 rounded px-4 py-2">
                              <section>
                                <p className="text-slate-500 font-semibold">
                                  Tailwind
                                </p>
                              </section>
                            </main>
                          </li>
                        </ul>
                      </section>
                    </main>
                  </section>
                  <section className="mt-5">
                    <DefaultButton
                      click={() => {
                        setIsOpen(true);
                      }}
                      icon={icons.alert}
                      text={`Button`}
                      class={`${components.button.icon} ${colour.background.primary}`}
                    />
                  </section>
                </main>
              </main>
            </section>
            <section className="h-full flex justify-center items-center">
              <figure className="w-1/2 bg-slate-700 aspect-square rounded-full p-5 slide-in-bck-right">
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
      <DefaultContent
        bgcolor={`bg-slate-800`}
        class={``}
        title={`Stacks`}
        content={
          <>
            <main className="h-full grid grid-cols-3 pb-5">
              <section className="col-span-1 p-3">
                <main className="h-full bg-slate-900 rounded p-3">
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
                        <h3 className="text-3xl font-bold text-cyan-500">
                          React Developer
                        </h3>
                        <p className="text-sm text-cyan-700">
                          Front-End Web Developer
                        </p>
                      </section>
                    </header>
                  </section>
                </main>
              </section>
              <section className="col-span-2 p-3">
                <main className="h-full">
                  <section className="h-full">
                    <main className="flex flex-wrap items-start gap-3">
                      {/* Technology List */}
                      {data.stacks.list.map((item, i) => (
                        <SquareCards
                          class={`bg-slate-700 hover:bg-slate-600`}
                          action={() => {
                            setStackDeets({
                              title: item.title,
                              description: item.description,
                              details: item.details,
                              icon: item.icon,
                            });
                            setStack(true);
                          }}
                          icon={item.icon}
                        />
                      ))}
                      {/* Technology List */}
                    </main>
                  </section>
                </main>
              </section>
            </main>
          </>
        }
      />
      <OneFourthContent
        bgcolor={`bg-slate-900`}
        class={`p-5`}
        title={`Worked With`}
        content={
          <>
            <main className="h-full flex justify-center items-center gap-3 overflow-x-auto overflow-y-hidden">
              {/* Experiences List */}
              {data.experience.list.map((item, i) => (
                <SquareCards
                  class={`bg-slate-800 hover:bg-slate-700`}
                  action={() => {
                    setExperiencesDeets({
                      company: item.company,
                      icon: item.icon,
                      position: item.position,
                      details: item.details,
                    });
                    setExperience(true);
                  }}
                  icon={item.icon}
                />
              ))}
              {/* Experiences List */}
            </main>
          </>
        }
      />
      <DefaultContent
        bgcolor={`bg-slate-800`}
        class={``}
        title={`Projects`}
        content={
          <>
            <main className="h-full grid grid-cols-5 pb-5">
              <section className="col-span-3 p-3">
                <main className="h-full bg-slate-900 rounded p-3">
                  <section>
                    <h1>{project_deets.project}</h1>
                    <h3>{project_deets.title}</h3>
                    <p>{project_deets.details}</p>
                  </section>
                </main>
              </section>
              <section className="h-full col-span-2 p-3">
                {data.project.list.map((item, i) => (
                  <ItemListCard
                    class={`bg-slate-800 hover:bg-slate-700`}
                    action={() => {
                      setProjectDeets({
                        project: item.project,
                        title: item.title,
                        techs: item.techs,
                        details: item.details,
                      });
                    }}
                    project={item.project}
                    title={item.title}
                    techs={item.techs.map((tech, o) => (
                      <li>
                        <main className="border-2 border-slate-500 rounded px-1">
                          <section>
                            <p className="text-slate-500 font-semibold">
                              {tech}
                            </p>
                          </section>
                        </main>
                      </li>
                    ))}
                  />
                ))}
              </section>
            </main>
          </>
        }
      />
      <DefaultDialog
        open={isOpen}
        close={() => setIsOpen(false)}
        icon={data.utility_icons.warning}
        title={`Sample Modal`}
        description={`This is just sample modal.`}
        details={`Is this a sample modal? and are you sure that this is just a
              sample and nother unusual?`}
        action={
          <>
            <DefaultButton
              click={() => setIsOpen(false)}
              icon={null}
              text={`Cancel`}
              class={`${components.button.default} ${colour.background.neutral}`}
            />
            <DefaultButton
              click={() => setIsOpen(false)}
              icon={null}
              text={`Deactivate`}
              class={`${components.button.default} ${colour.background.primary}`}
            />
          </>
        }
      />
      <DefaultDialog
        open={stacks}
        close={() => setStack(false)}
        icon={stacks_deets.icon}
        title={stacks_deets.title}
        description={stacks_deets.description}
        details={stacks_deets.details}
        action={
          <>
            <DefaultButton
              click={() => setStack(false)}
              icon={null}
              text={`Ok!`}
              class={`${components.button.default} ${colour.background.neutral} px-5`}
            />
          </>
        }
      />
      <DefaultDialog
        open={experience}
        close={() => setExperience(false)}
        icon={experiences_deets.icon}
        title={experiences_deets.company}
        description={experiences_deets.position}
        details={experiences_deets.details}
        action={
          <>
            <DefaultButton
              click={() => setExperience(false)}
              icon={null}
              text={`Ok!`}
              class={`${components.button.default} ${colour.background.neutral} px-5`}
            />
          </>
        }
      />
    </main>
  );
}

export default App;

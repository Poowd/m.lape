import React, { useState } from "react";
import { Link } from "react-router-dom";

import useComponents from "../hooks/ui/useComponents";
import useIcons from "../hooks/ui/useIcons";
import useColour from "../hooks/ui/useColour";
import useWebData from "../hooks/data/useWebData";
import DefaultContent from "../components/layout/DefaultContent";
import OneFourthContent from "../components/layout/OneFourthContent";
import DefaultButton from "../components/buttons/DefaultButton";
import DefaultDialog from "../components/dialogs/DefaultDialog";
import SquareCards from "../components/cards/SquareCards";
import ItemListCard from "../components/cards/ItemListCard";

import dp from "../media/dp.jpg";
import reactjs from "../media/icons/react-js.png";
import LinkButton from "../components/buttons/LinkButton";
import NoDisplay from "../components/placeholders/NoDisplay";

function Hompage() {
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
                  <h5 className="text-slate-500 text-3xl font-semibold">
                    What's Up? I'm Mark,
                  </h5>
                  <h1 className="text-red-700 text-6xl font-extrabold uppercase">
                    React Developer
                  </h1>
                  <h3 className="text-2xl font-extrabold uppercase">
                    Empowering Users Through Seamless Experiences
                  </h3>
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
                          {data.general.featuredlinks.map((item, i) =>
                            item.type === "link" ? (
                              <li>
                                <LinkButton
                                  link={item.link}
                                  target={`_blank`}
                                  icon={item.icon}
                                  text={item.title}
                                  class={`${components.button.bordericon}`}
                                />
                              </li>
                            ) : (
                              <li>
                                <LinkButton
                                  link={`mailto:${item.link}`}
                                  target={`_blank`}
                                  icon={item.icon}
                                  text={item.title}
                                  class={`${components.button.bordericon}`}
                                />
                              </li>
                            )
                          )}
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
                      text={`Resume`}
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
        title={`Stacks & Technologies`}
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
        title={`Featured Projects`}
        content={
          <>
            <main className="h-full grid grid-cols-5 pb-5 overflow-hidden">
              <section className="col-span-3 p-3">
                <main className="h-full bg-slate-900 rounded p-5">
                  {project_deets.project !== undefined ? (
                    <section className="h-full flex flex-col justify-center py-5 px-10 ">
                      <header className="mb-5">
                        <main>
                          <section>
                            <h1 className="text-4xl font-bold">
                              {project_deets.project}
                            </h1>
                            <h3 className="text-2xl">{project_deets.title}</h3>
                            <p className="mt-3">{project_deets.details}</p>
                          </section>
                        </main>
                      </header>
                      <main>
                        <figure className="bg-slate-800 p-2 rounded">
                          <img
                            src={project_deets.image}
                            alt="..."
                            className="w-full rounded"
                          />
                        </figure>
                        <section className="flex justify-end mt-3">
                          <LinkButton
                            link={`/`}
                            target={null}
                            icon={icons.details}
                            reversed={true}
                            text={"Go to Projects"}
                            class={`${components.button.icon} ${colour.background.primary}`}
                          />
                        </section>
                      </main>
                    </section>
                  ) : (
                    <NoDisplay details={`Click a project to view details.`} />
                  )}
                </main>
              </section>
              <section className="h-full col-span-2 p-3">
                {/* Projects */}
                {data.project.list.map((item, i) => (
                  <ItemListCard
                    class={`bg-slate-700 hover:bg-slate-600 border-2 border-slate-700`}
                    action={() => {
                      setProjectDeets({
                        project: item.project,
                        title: item.title,
                        techs: item.techs,
                        details: item.details,
                        image: item.image,
                      });
                    }}
                    project={item.project}
                    title={item.title}
                    techs={item.techs.map((tech, o) => (
                      <li>
                        <main className="border-2 border-slate-700 rounded px-1">
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
                {/* Projects */}
              </section>
            </main>
          </>
        }
      />
      <footer className="footer footer-center bg-slate-900 text-slate-100 p-10">
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="inline-block fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p className="font-bold">
            Powd Technologies
            <br />
            Empowering Users Through Seamless Experiences
          </p>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav>Links Here!</nav>
      </footer>
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

export default Hompage;

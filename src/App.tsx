import React from "react";
import "./App.css";
import { LanguageSelector } from "./components/LanguageSelector";
import { Title } from "./components/Title";

import { useContext } from "react";
import { I18nContext } from "./I18nProvider";
import IconLink from "./components/IconLink";
import { Stack } from "react-bootstrap";
import extra from "./locale/extra";

export default function App() {
  const context = useContext(I18nContext);
  if (context === null) {
    throw new Error(
      "The I18n context is not initialized. Make sure you have the provider set up correctly."
    );
  }

  return (
    <div className="page-wrapper">
      <header>
        <LanguageSelector />
      </header>
      <main>
        <Stack>
          <div className="id">
            <h1>{extra.name}</h1>
            <h2>{context.t.translate("profession")}</h2>
          </div>

          {/* Seccion de perfiles */}
          {extra.profiles ? (
            <Stack>
              <Title titulo={context.t.translate("titles.profiles")} />
              {extra.profiles.map((x:any, i) => (
                <IconLink
                  key={i}
                  name={x.platform}
                  url={x.url}
                  icon={x.icon}
                  color={x.color}
                  size="2em"
                />
              ))}
            </Stack>
          ) : (
            <></>
          )}

          {/* Seccion de metas 
          <Title titulo={context.t.translate("titles.goals")} />
          <div>{context.t.translate("goals")}</div>
          */}

          {/* Seccion de lenguajes de programacion*/}
          <Title titulo={context.t.translate("titles.languages_prog")} />
          {extra.languages ? extra.languages.map((x:string) => <div>{x}</div>) : <></>}

          {/* Seccion de experiencia profesional */}
          <Title titulo={context.t.translate("titles.experience")} />
          {context.t.translate("experience").map((x: any, i:any) => (
            <Stack className="p-2" key={i}>
              <div>{x.company}</div>
              <div>{x.date}</div>
              <div>{x.title}</div>
              <div>{x.description}</div>
            </Stack>
          ))}

          {/* Seccion de educacion */}
          <Title titulo={context.t.translate("titles.education")} />
          {context.t.translate("education").map((x: any, i:any) => (
            <Stack className="p-2" key={i}>
              <div>{x.school}</div>
              <div>{x.title}</div>
              <div>{x.year}</div>
              <div>{x.type}</div>
            </Stack>
          ))}

          {/* Seccion de certificaciones */}
          <Title titulo={context.t.translate("titles.certifications")} />
          {context.t.translate("certifications").map((x: any, i:any) => (
            <Stack className="p-2" key={i}>
              <a href={x.url} target="_blank" rel="noreferrer">
                {x.name}
              </a>
              <div>{x.company}</div>
              <div>{x.date}</div>
            </Stack>
          ))}

          {/* Seccion de idiomas */}
          <Title titulo={context.t.translate("titles.languages")} />
          {context.t.translate("languages").map((x: any, i:any) => (
            <Stack className="p-2" key={i}>
              <div>{x.lang}</div>
              <div>{x.level}</div>
            </Stack>
          ))}

          
          
        </Stack>
      </main>
      <footer>
        Copyright 2024 - José Gerardo López Arroyo - All Rights Reserved
      </footer>
    </div>
  );
}

import React from "react";
import "./App.css";
import { LanguageSelector } from "./components/LanguageSelector";
import { Title } from "./components/Title";

import { useContext } from "react";
import { I18nContext } from "./I18nProvider";
import IconLink from "./components/IconLink";
import { Col, Container, Row, Stack } from "react-bootstrap";
import extra from "./locale/extra";

export default function App() {
  const context = useContext(I18nContext);
  if (context === null) {
    throw new Error(
      "The I18n context is not initialized. Make sure you have the provider set up correctly."
    );
  }

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <Stack className="page-wrapper">
      <main>
        <div className="section-image id">
          <div className="img-overlay"></div>
          <Stack className="language">
            <LanguageSelector />
          </Stack>
          <div className="intro">
            <h3>{context.t.translate("greeting")}</h3>
            <h1>{extra.name}</h1>
            <h2>{context.t.translate("profession")}</h2>

            {/* Seccion de perfiles */}
            <Stack className="profile mx-auto" gap={3} direction="horizontal">
              <IconLink
                name={"Gmail"}
                url={"mailto:" + extra.email}
                icon={"FaInbox"}
                color={"#fff"}
                size="3.5em"
              />
              {extra.profiles.map((x: any, i) => (
                <IconLink
                  key={i}
                  name={x.platform}
                  url={x.url}
                  icon={x.icon}
                  color={"#fff"}
                  size="3.5em"
                />
              ))}
            </Stack>
          </div>
        </div>

        {/* Seccion de metas */}
        <div className="section-primary col-md-6 mx-auto">
          <div className="intro">
            <div className="row2">
              <Title titulo={context.t.translate("titles.goals")} />
              <p>{context.t.translate("goals")}</p>
            </div>
            <div className="row2">
              {/* Seccion de lenguajes de programacion*/}
              <Title titulo={context.t.translate("titles.skills")} />
              <Stack gap={3}>
                <div className="text">
                  {context.t.translate("skills").join(", ")}
                </div>
                <div className="text">
                  {extra.languages ? extra.languages.join(", ") : ""}
                </div>
                <div className="text">
                  {extra.tools ? extra.tools.join(", ") : ""}
                </div>
              </Stack>
            </div>
            <div className="row2">
              {/* Seccion de idiomas */}
              <Title titulo={context.t.translate("titles.languages")} />
              <Stack direction="horizontal">
                {context.t.translate("languages").map((x: any, i: any) => (
                  <Stack className="p-2" key={i}>
                    <div className="text"><b>{x.lang}</b></div>
                    <div className="text">{x.level}</div>
                  </Stack>
                ))}
              </Stack>
            </div>
          </div>
        </div>

        <div className="section-image">
          <div className="img-overlay"></div>
          <div className="col-md-6 mx-auto">
            {/* Seccion de experiencia profesional */}
            <div className="row2">
              <Title titulo={context.t.translate("titles.experience")} />
              {context.t.translate("experience").map((x: any, i: any) => (
                <Stack className="p-2" key={i}>
                  <div className="text"><b>{x.company}</b></div>
                  <div className="text">{x.title}</div>
                  <div className="text">{x.date}</div>
                  <div className="text justify">{x.description}</div>
                </Stack>
              ))}
            </div>

            {/* Seccion de educacion */}
            <div className="row2">
              <Title titulo={context.t.translate("titles.education")} />
              {context.t.translate("education").map((x: any, i: any) => (
                <Stack className="p-2" key={i}>
                  <div>
                    <strong>{x.school}</strong>
                  </div>
                  <div className="text">{x.title}</div>
                  <div className="text">{x.year}</div>
                  <div className="text">{x.type}</div>
                </Stack>
              ))}
            </div>

            {/* Seccion de certificaciones */}
            <div className="row2">
              <Title titulo={context.t.translate("titles.certifications")} />
              {context.t.translate("certifications").map((x: any, i: any) => (
                <Stack className="p-2" key={i}>
                  <div className="pointer" onClick={() => openInNewTab(x.url)}>
                    {x.name}
                  </div>
                  <div className="text">{x.company}</div>
                  <div className="text">{x.date}</div>
                </Stack>
              ))}
            </div>
          </div>
        </div>

        <div className="section-primary col-md-6 mx-auto">
          <div className="intro">
            <div className="row2">
              {/* Seccion de proyectos */}
              <Title titulo={context.t.translate("titles.proyects")} />
              <Stack>
                {context.t.translate("proyects").map((x: any, i: any) => (
                  <Stack className="p-2" key={i}>
                    <div className="text">
                      <b>{x.name}</b>
                    </div>
                    <div className="text">{x.date}</div>
                    <div className="text justify">{x.description}</div>
                    <div className="text">{x.skills}</div>
                  </Stack>
                ))}
              </Stack>
            </div>
            <div className="row2">
              {/* Seccion de cursos */}
              <Title titulo={context.t.translate("titles.courses")} />
              <Container>
                <Row>
                  {context.t.translate("courses").map((x: any, i: any) => (
                    <Col xs={6} md={4} className="p-2" key={i}>
                      <div className="text">
                        <b>{x.name}</b>
                      </div>
                      <div className="text">{x.company}</div>
                      <div className="text">{x.date}</div>
                      {x.url ? (
                        <IconLink
                          name={x.url}
                          url={x.url}
                          icon="FaExternalLinkAlt"
                          color="black"
                          size="1em"
                        />
                      ) : null}
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </main>
      <footer>
        Copyright 2024 - José Gerardo López Arroyo - All Rights Reserved
      </footer>
    </Stack>
  );
}

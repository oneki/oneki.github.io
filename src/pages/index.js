import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Speed up the development</>,
    imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        <p>
          <b>Oneki.js</b> was designed from the ground up to speed up the development
          of a React website.
        </p>
        <p>
          To achieve that, it provides powerful hooks to handle common capabilities like authentication or notifications
        </p>
      </>
    )
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: "img/undraw_docusaurus_tree.svg",
    description: (
      <>
        <p>
          <b>Oneki.js</b> lets you focus on your component, and we&apos;ll take care of
          the redux store, immutability and all the things that require a lot of
          code.
        </p>
        <p>
          It removes a lot of boilerplate code needed to glue these libraires together
        </p>
      </>
    )
  },
  {
    title: <>Based on solid libraries</>,
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <>
        <p>
          <b>Oneki.js</b> is built on top of the most popular libraries in the React
          world:
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Redux</li>
            <li>Redux Saga</li>
            <li>Immer</li>
          </ul>
        </p>
      </>
    )
  }
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              id="get-started-btn"
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/overview/getting-started/introduction")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
          
        )}
      </main>
    </Layout>
  );
}

export default Home;

import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <main className="container margin-vert--xl">
        <div className="text--center">
          <h1>{siteConfig.title}</h1>
          <p>{siteConfig.tagline}</p>
          <div className="margin-top--md">
            <Link
              className="button button--primary button--lg"
              to="/docs/intro">
              View Documentation
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
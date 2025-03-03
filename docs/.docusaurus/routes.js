import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '8ef'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '349'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '5e1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'f7a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'f5d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '8a9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '559'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '4b3'),
    routes: [
      {
        path: '/docs/api-integration',
        component: ComponentCreator('/docs/api-integration', '6c1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/challenges-solutions',
        component: ComponentCreator('/docs/challenges-solutions', 'd7f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', '6e9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/setup',
        component: ComponentCreator('/docs/setup', '5ab'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/state-management',
        component: ComponentCreator('/docs/state-management', 'ee6'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '6f2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

function DocItem({doc}) {
  return (
    <li>
      <a href={useBaseUrl(doc.path)}>{doc.title}</a>
    </li>
  );
}

export default function TopicList() {
  const {siteConfig} = useDocusaurusContext();
  const docs = siteConfig.customFields.docItems;

  return (
    <ul>
      {docs.map((doc, index) => (
        <DocItem key={index} doc={doc} />
      ))}
    </ul>
  );
}
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function DocItem({doc}) {
  return (
    <li>
      <a href={doc.path}>{doc.title}</a>
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
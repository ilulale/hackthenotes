import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

function DocItem({doc}) {
  if (doc.children) {
    return (
      <li>
        {doc.title}
        <ul>
          {doc.children.map((child, index) => (
            <DocItem key={index} doc={child} />
          ))}
        </ul>
      </li>
    );
  }

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
import dynamic from 'next/dynamic';
import React from 'react';
import Head from 'next/head';

const CodeWithCodemirror = dynamic(import('../components/Editor'), { ssr: false });

export default () => {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap" rel="stylesheet" />
      </Head>
      <div style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: '300' }}>
        <CodeWithCodemirror />
      </div>
    </>
  );
}
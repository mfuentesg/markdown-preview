import React, { useState } from 'react';

import dynamic from 'next/dynamic';
import Head from 'next/head';

const Editor = dynamic(import('../components/Editor'), { ssr: false });
const Viewer = dynamic(import('../components/Viewer'), { ssr: false });

export default () => {
  const [value, setValue] = useState('');
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap" rel="stylesheet"/>
      </Head>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
        fontFamily: 'Roboto, sans-serif', fontWeight: '300'
      }}>
        <div style={{ width: '50%', boxSizing: 'border-box' }}>
          <Editor value={value} onChange={setValue}/>
        </div>
        <div style={{ width: '50%', padding: '0 10px', boxSizing: 'border-box', overflow: 'auto' }}>
          <Viewer content={value}/>
        </div>
      </div>
    </>
  );
}
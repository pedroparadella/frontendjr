import React from 'react';

import { Layout } from '../styles/pages/Layout';
import Header from '../components/Header';
import Main from '../components/Main';
import CardViewer from '../components/contents/cardViewer';

export default function Home() {
  return (
    <Layout>
      <Header />
      <Main>
        <CardViewer />
      </Main>
    </Layout>
  );
}

/* Home.js */
import React from 'react';
import Layout from '../layout/Layout';
import SearchButton from '../components/SearchButton';
import Hotposts from '../components/Hotposts';

function Home() {
  return (
    
      <div> 
      <Layout>
        <SearchButton />
        <Hotposts />
      </Layout>
    </div>
  );
}

export default Home;

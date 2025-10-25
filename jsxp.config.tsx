import { defineConfig } from 'jsxp';
import CharacterCatalog from './src/component/CharacterCatalog';
import res from './public/localdata/weaponProjection.json';
import React from 'react';

const data = res.data.results.records.map(item => {
  return {
    title: item.name,
    url: item.content.contentUrl
  };
});

export default defineConfig({
  routes: {
    '/CharacterCatalog': {
      component: <CharacterCatalog data={data} titile='测试' />
    }
  }
});

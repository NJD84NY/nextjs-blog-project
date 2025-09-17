const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'Nejad',
        mongodb_password: 'RlMtTX2QLTx8x9fW',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'blog-site-posts',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'Nejad',
      mongodb_password: 'RlMtTX2QLTx8x9fW',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'blog-site',
    },
  };
};

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    },
    ropsten: {
      host: '10.0.0.15',
      port: 8545,
      network_id: 1
    },
    live: {
      host: '10.0.0.15',
      port: 8545,
      network_id: 1
    }
  }
};

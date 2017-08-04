const Sales = artifacts.require('Sales');
const fs = require('fs');
const abi = require('ethereumjs-abi');

module.exports = function(deployer, network, accounts) {
  var conf;
  var wallet;

  if (network === 'development') {
    conf = JSON.parse(fs.readFileSync(`./conf/development.json`));
  } else {
    conf = JSON.parse(fs.readFileSync(`./conf/production.json`));
  }

  // assert.ok(wallet);

  return deployer.deploy(
    Sales,
    accounts[0],
    conf['total'],
    conf['name'],
    conf['decimals'],
    conf['symbol'],
    conf['price'],
    conf['startBlock'],
    conf['freezeBlock'],
    conf['cap'],
    conf['locked']
  ).then(function(res) {
    console.log(res);
  });
};

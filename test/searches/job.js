/* globals describe it */
const should = require('should');

const zapier = require('zapier-platform-core');

// Use this to make test calls into your app:
const App = require('../../index');
const appTester = zapier.createAppTester(App);
zapier.tools.env.inject();

describe('My App', () => {
  it('should run searchs.job', done => {
    const bundle = {
      inputData: {},
      authData: {
        serviceTitanApiKey:'97033447-04ac-4e22-a39b-c0ca77fda71e'
      } };

    appTester(App.searches.job.operation.perform, bundle)
      .then(results => {
        should.exist(results);
        done();
      })
      .catch(done);
  });
});

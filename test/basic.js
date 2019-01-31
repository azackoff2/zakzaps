require('should');

const zapier = require('zapier-platform-core');

const App = require('../index');
const appTester = zapier.createAppTester(App);

describe('App.authentication.test', () => {

  it('passes authentication and returns json', (done) => {

    const bundle = {
      authData: {
        serviceTitanApiKey:'97033447-04ac-4e22-a39b-c0ca77fda71e'
      }
    };

    appTester(App.authentication.test, bundle)
      .then((json_response) => {
        json_response.should.have.property('data')
        done();
      })
      .catch(done);

  });

});

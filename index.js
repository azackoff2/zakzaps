const JobTrigger = require('./triggers/job');
const InvoiceTrigger = require('./triggers/invoice');
const InvoiceCreate = require('./creates/invoice');
const JobCreate = require('./creates/job');
const JobSearch = require('./searches/job');
const InvoiceSearch = require('./searches/invoice');
const GetInvoice = require('./searches/getinvoice');
const ListInvoice = require('./searches/listinvoice');
const ListJobs = require('./searches/ListJobs');
const authentication = require('./authentication');

// To include the API key on all outbound requests, simply define a function here.
// It runs runs before each request is sent out, allowing you to make tweaks to the request in a centralized spot.
const includeApiKey = (request, z, bundle) => {
  if (bundle.authData.serviceTitanApiKey) {
    request.params = request.params || {};
    request.params.serviceTitanApiKey = bundle.authData.serviceTitanApiKey;
    //
    // request.headers.Authorization = bundle.authData.apiKey;
    // (If you want to include the key as a header instead)
    //
  }
  return request;
};

const App = {
  // This is just shorthand to reference the installed dependencies you have. Zapier will
  // need to know these before we can upload
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,

  authentication: authentication,

  beforeRequest: [
    includeApiKey
  ],

  afterResponse: [
  ],

  resources: {
  },

  // If you want your trigger to show up, you better include it here!
  triggers: {
    [JobTrigger.key]: JobTrigger,
    [InvoiceTrigger.key]: InvoiceTrigger,
  },

  // If you want your searches to show up, you better include it here!
  searches: {
    [JobSearch.key]: JobSearch,
    [InvoiceSearch.key]: InvoiceSearch,
    [GetInvoice.key]: GetInvoice,
    [ListInvoice.key]: ListInvoice,
    [ListJobs.key]: ListJobs,
  },

  // If you want your creates to show up, you better include it here!
  creates: {
    [InvoiceCreate.key]: InvoiceCreate,
    [JobCreate.key]: JobCreate,
  }
};

// Finally, export the app.
module.exports = App;

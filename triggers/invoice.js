const _sharedBaseUrl = 'https://api.servicetitan.com/v1/invoices';

// triggers on invoice with a certain tag
const triggerInvoice = (z, bundle) => {
  const responsePromise = z.request({
    url: _sharedBaseUrl,
  });
  return responsePromise
    .then(response => z.JSON.parse(response.content).data);
};

module.exports = {
  key: 'invoice',
  noun: 'Invoice',

  display: {
    label: 'Get Invoice',
    description: 'Triggers on a new invoice.'
  },

  operation: {
    inputFields: [

    ],
    perform: triggerInvoice,

    sample: {
      id: 1,
      name: 'Test'
    },

    outputFields: [
      {key: 'id', label: 'ID'},
      {key: 'name', label: 'Name'}
    ]
  }
};

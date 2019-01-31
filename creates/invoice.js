// create a particular invoice by name
const createInvoice = (z, bundle) => {
  const responsePromise = z.request({
    method: 'POST',
    url: 'https://jsonplaceholder.typicode.com/posts',
    body: JSON.stringify({
      name: bundle.inputData.name
    })
  });
  return responsePromise
    .then(response => z.JSON.parse(response.content));
};

module.exports = {
  key: 'invoice',
  noun: 'Invoice',

  display: {
    label: 'Create Invoice',
    description: 'Creates a invoice.'
  },

  operation: {
    inputFields: [
      {key: 'name', required: true}
    ],
    perform: createInvoice,

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

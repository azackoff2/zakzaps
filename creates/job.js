// create a particular job by name
const createJob = (z, bundle) => {
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
  key: 'job',
  noun: 'Job',

  display: {
    label: 'Create Job',
    description: 'Creates a job.'
  },

  operation: {
    inputFields: [
      {key: 'name', required: true}
    ],
    perform: createJob,

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

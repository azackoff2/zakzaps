const _sharedBaseUrl = 'https://api.servicetitan.com/v1/jobs';


// triggers on job with a certain tag
const triggerJob = (z, bundle) => {
  const responsePromise = z.request({
    url: _sharedBaseUrl,
    params: {
      'filter.locationId':bundle.inputData.locationId,
      'filter.jobNumber':bundle.inputData.jobNumber,
      'filter.completedBefore':bundle.inputData.completedBefore,
      'filter.status':bundle.inputData.status,
      'filter.invoiceNumber':bundle.inputData.invoiceNumber,
      'filter.completedAfter':bundle.inputData.completedAfter,
    },
    omitEmptyParams:true
  });
  return responsePromise
    .then(response => z.JSON.parse(response.content).data);
};

module.exports = {
  key: 'job',
  noun: 'Job',

  display: {
    label: 'Get Jobs',
    description: 'Triggers on a new job.'
  },

  operation: {
    inputFields: [
      {key:'locationId',required: false,type: 'integer'},
      {key:'jobNumber',required: false,type: 'integer'},
      {key:'completedBefore',required: false,type: 'datetime'},
      {key:'status', required: false,choices: [ 'Scheduled', 'Dispatched', 'Working','Hold','Completed','Canceled' ]},
      {key:'invoiceNumber',required: false,type: 'integer'},
      {key:'completedAfter',required: false,type: 'datetime'}

    ],
    perform: triggerJob,

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

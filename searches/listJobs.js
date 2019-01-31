const _sharedBaseUrl = 'https://api.servicetitan.com/v1/jobs';

// list Jobs
const ListJobs = (z, bundle) => {
  const responsePromise = z.request({
    url: _sharedBaseUrl,
    headers: {
      'content-type': 'application/json'
    },
    params:   {
      'filter.locationId': bundle.inputData.jobId,
      'filter.jobId': bundle.inputData.jobId,
      'filter.jobNumber': bundle.inputData.jobNumber,
      'filter.customerId': bundle.inputData.customerId,
      'filter.status': bundle.inputData.status,
    },
    omitEmptyParams:true,
  });
  return responsePromise
.then(response => z.JSON.parse(response.content).data);
};

module.exports = {
  key: 'ListJobs',
  noun: 'ListJobs',

    display: {
      label: 'List Jobs',
      description: 'Get a List of Jobs.'
    },
    operation: {
      inputFields: [
        {key: 'locationId', required: false},
        {key: 'jobId', required: false},
        {key: 'jobNumber', required: false},
        {key: 'customerId', required: false},
        {key:'status', required: false,choices: [ 'Scheduled', 'Dispatched', 'Working','Hold','Completed','Canceled' ]}

      ],
      perform: ListJobs
    },
  };

const _sharedBaseUrl = 'https://api.servicetitan.com/v1/invoices';

// find a particular invoice
const searchInvoice = (z, bundle) => {
  const responsePromise = z.request({
    url: _sharedBaseUrl,
    headers: {
      'content-type': 'application/json'
    },
    params: {
      'filter.jobId': bundle.inputData.jobId,
      'filter.jobNumber': bundle.inputData.jobNumber,
      'filter.customerId': bundle.inputData.customerId,
      'filter.status': bundle.inputData.status,
      'filter.paymentStatus': bundle.inputData.paymentStatus,
      'filter.invoicedOnAfter': bundle.inputData.invoicedOnAfter,
      'filter.invoicedOnBefore': bundle.inputData.invoicedOnBefore
    },
    omitEmptyParams:true,
  });
  return responsePromise
    .then(response => z.JSON.parse(response.content).data);
};

module.exports = {
  key: 'invoice',
  noun: 'Invoice',

  display: {
    label: 'Find a Invoice',
    description: 'Finds a invoice.'
  },

  operation: {
    inputFields: [
      {key: 'jobId', required: false},
      {key: 'jobNumber', required: false},
      {key: 'customerId', required: false},
      {key: 'status', required: false,choices: [ 'Pending', 'Posted', 'Exported' ]},
      {key: 'paymentStatus', required: false,choices: [ 'Pending', 'Posted', 'Exported' ]},
      {key: 'filter.invoicedOnAfter', required: false,type: 'datetime'},
      {key: 'filter.invoicedOnBefore', required: false,type: 'datetime'}
  ],
    perform: searchInvoice,

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

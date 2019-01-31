const _sharedBaseUrl = 'https://api.servicetitan.com/v1/invoices';

// get a single invoices
const getInvoice = (z, bundle) => {
  const responsePromise = z.request({
    url: _sharedBaseUrl+'/'+bundle.inputData.invoiceId,

  });
  return responsePromise
//    .then(response => z.JSON.parse(response.content));
.then(function(response){
var result = (response.json);
z.console.log(result);
return result;
})

};

module.exports = {
  key: 'getInvoice',
  noun: 'GetInvoice',

    display: {
      label: 'Get an Invoice',
      description: 'Get a Single Invoice.'
    },
    operation: {
      inputFields: [
        {key: 'invoiceId', required: true}
      ],
      perform: getInvoice
    },
  };

export default (statusAPI, clientData) => {
  if (statusAPI === 'dev')
    return {
      ...getSettings(clientData),
      key: 'UYFIX7PQ5274UZH2XLJT',
      urlRequest: 'https://test-smartbot-api.xcritical.com/user_input',
      urlResponse: 'https://test-smartbot-api.xcritical.com/response',
    };
  else
    return {
      ...getSettings(clientData),
      key: '0Q0R23M76ZIBOWK60IEY',
      urlRequest: 'https://test-smartbot-api.xcritical.com/user_input',
      urlResponse: 'https://test-smartbot-api.xcritical.com/response',
    };
};

const getSettings = clientData => ({
  userID: Math.random()
    .toString(36)
    .substring(7),
  clientData: clientData || '3956946',
});

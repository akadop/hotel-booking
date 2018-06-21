const NodeCache = require('node-cache');
const signale = require('signale');

const mockCache = new NodeCache();

const mockDataLogger = signale.scope('mockCache()');

mockCache.on('expired', key => {
  if (key === 'mock') {
    mockDataLogger.pending('mock data cache expired');
    setInitialMockData();
  }
});

const setInitialMockData = () => {
  const mockData = require('./mock.json');
  mockDataLogger.pending('setting data cache..');

  mockCache.set('mockData', mockData, 43200, () => {
    mockDataLogger.success(`${mockData.length} reservation entries set in cache.`);
    const mockDataTTL = mockCache.getTtl('mockData');
    mockDataLogger.success('Data expires in: ', mockDataTTL);
  });

  return mockData;
};

const setMockData = reservation => {
  const mockData = mockCache.get('mockData');
  mockData.push(reservation);
  mockCache.set('mockData', mockData, 43200, () => {
    mockDataLogger.success(`added reservation ${reservation.id} to cache`);
  });
};

const getMockData = () => {
  let mockData = mockCache.get('mockData');
  // if no mock data exists call the function that sets it
  if (mockData === undefined) {
    mockDataLogger.debug('mockData -> data does not exist in the cache');
    const mockData = setInitialMockData();
    return mockData;
  }
  return mockData;
};

module.exports = { getMockData, setMockData, setInitialMockData };

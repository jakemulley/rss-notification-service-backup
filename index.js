const dynamodb = require('./dynamodb/dynamodb.js');
const feeds = require('./mock/feeds.json');

dynamodb.populate(feeds);

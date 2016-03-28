const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://dijAdmin:dijBlaster9@dogen.mongohq.com:10028/dijitechio?replicaSet=set-54510e389c9e838f820062dd',
  port: process.env.PORT || 8000
};

export default config;

var client = require("jobukyu-client")();

client.setJobQueueUrl('http://jobukyu:3800');
client.createJob({
  name : "test",
  type : "hoge",
  metadata : {
    since_id : 777,
    last_id  : 888
  }
}, function (err) {
  if (err) {
    console.log(err);
  }
});

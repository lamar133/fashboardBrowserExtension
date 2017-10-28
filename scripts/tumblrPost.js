// Authenticate via OAuth
var tumblr = require('tumblr.js');

var client = tumblr.createClient({
  consumer_key: 'sDSoFOWrqlu4MUvrBEyu1tBmjS9hxDPlB32u7hj6NRsh6ofOm8',
  consumer_secret: 'rkSXYPx6nIo8jwNUFvbAQhvdEO0QklZftR7T1ZIRWZysGqHqMF',
  token: 'H5uzl3Hu4W5LpDscjwTOmyrG9WO4361sgYL5Rc9n5d6mvSencG',
  token_secret: '1QhMmosl4IpKNK6u9kZ41ZGqvwzGvidLNBVasLKmMh7zjZKKym'
});

// todo: set up your options
var options = {
    state: 'published',
    tags: ['testing2', 'ok'],
    source: "https://68.media.tumblr.com/b965fbb2e501610a29d80ffb6fb3e1ad/tumblr_n55vdeTse11rn1906o1_500.jpg"
};

client.photo("test-fashboard", options, callback);
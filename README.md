# greenlife-api-example

a simple API written in NodeJS for Green Life Medical's patient verification system. They do not endorse nor verify the correctness of this code.

### to install from npm
```
npm install greenlife-api
```

### to install from git
```
git clone https://github.com/joshuaterrill/greenlife-api.git
cd greenlife-api
npm install
```

### usage (updates for npm package)
```
var greenlife = require('greenlife-api');
greenlife.verify('0123456789', function (err, valid, details) {
  if (err) {
    // handle error
  }
  
  if (valid) {
    // recommendation is valid and details are available
  } else {
    // recommendation id is not valid
  }
});
```

If the Recommendation ID is invalid, `details` will be `undefined`, otherwise it will be an object with the following properties.

`initials`: The initials of the patient (e.g. A.B.C).
`issued`: The YYYY-MM-DD formatted date the card was issued to the patient.  
`expires`: The YYYY-MM-DD formatted date the card will expire.  
`doctor`: The name of the doctor that issued the recommendation.

License: MIT

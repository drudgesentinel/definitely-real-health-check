const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const bodyParser = require('body-parser');
app.use(express.json());
app.set('trust proxy', true)

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/health', async (req, res) => {
  console.log("healthcheck request received");
  res.send('200');
});

const listener = app.listen(process.env.PORT || 3000, "127.0.0.1", () => {
  console.log('Your app is listening on port ' + listener.address().port)
})

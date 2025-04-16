export default function handler(req, res) {
    const data = require('../a9gh8aah.json');
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json(data);
  }
  
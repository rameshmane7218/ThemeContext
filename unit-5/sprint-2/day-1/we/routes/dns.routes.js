const { Router } = require("express");
const dns = require("dns");
const dnsRoutes = Router();

dnsRoutes.get("/getmeip", (req, res) => {
  res.send({"message": "dns"});
});
dnsRoutes.post("/getmeip", (req, res) => {
  const payload = req.body;

  const website = payload.website_name;

  dns.lookup(website, (err, address, family) => {
    if (err) {
      res.send("Something went wrong");
    }
    res.send(address);
  });
});

module.exports = dnsRoutes;

const express = require('express');
const app = express();
app.use(express.static('public'));

const COMPANY = {
    name: `RandoCo`,
    address: `1000 Rando St., Rando, Loc`,
    phone: `999-999-9999`,
    work: [{
        name: `1st job`,
        discription: `This is our work!`,       
    },
    {
        name: `2nd job`,
        discription: `Also, our work!`,
    }],
    staff: [{
        name: `first person`,
        email: `email address`,
        phone: `999-999-9999`,         
    },
    {   name: `second person`,
        email: `another email`,
        phone: `999-999-9990`,
    }],
    partners: [{
        name: `Partner 1`,
        website: `https://theuselessweb.com/`,
    }]
}

app.get('/', (req, res) => {
  res.render('home.ejs', {company: COMPANY});
});

app.get('/Staff', (req, res) => {
  res.render('staff.ejs', {staff: COMPANY.staff});
});

app.get('/History', (req, res) => {
  res.render('history.ejs', {company: COMPANY});
});

app.get('/Work', (req, res) => {
  res.render('work.ejs', {work: COMPANY.work});
});

app.get('/Partners', (req, res) => {
  res.render('partners.ejs', {partners: COMPANY.partners});
});

app.get('/contact', (req, res) => {
  res.render('contact.ejs', {company: COMPANY});
});

app.listen(3000);

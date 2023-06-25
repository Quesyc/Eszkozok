const express = require('express');
const app = express();

app.use(express.static('public'));

const multer = require('multer');
const upload = multer({dest: 'public/uploads/'});

const view = require('./modules/view');
const lista_control = require('./controls/lista');
const keszlet_control = require('./controls/keszlet');
const hozzaadas_control = require('./controls/hozzaadas');




app.get('/', async(req, res) =>
{
    let html = new view(res);

    lista = new lista_control();
    await lista.getlista(html);

    html.setend();
    res.send();
})

app.get('/keszlet', async(req, res) =>
{
    let html = new view(res);

    lista = new keszlet_control();
    await lista.getlista(html);

    html.setend();
    res.send();
});

app.get('/uj', async(req, res) =>
{
    let html = new view(res);

    form = new hozzaadas_control();
    await form.getform(html);

    html.setend();
    res.send();
});

app.post('/uj', upload.single('kep'), async(req, res) =>
{
    let html = new view(res);

    form = new hozzaadas_control();

    if(req.file)
    {
        await form.insert(html, JSON.parse(JSON.stringify(req.body)), req.file); 
    }
    else
    {
        html.addbody("<div class='alert alert-danger my-4'>Nincs kép kiválasztva!</div>");
    }

    html.setend();
    res.send();
});

app.listen(3000, ()=>
{
    console.log("Successful start server!");
});



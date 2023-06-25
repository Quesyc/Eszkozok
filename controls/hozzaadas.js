const sql = require('../modules/sql');
const fs = require('fs');


class hozzaadas
{
    constructor()
    {
        this.sql = new sql();
    }

    async getform(view)
    {
        var html = "";
        html += "<form action='' method='POST' enctype='multipart/form-data'>";
        html += "       <div class='row py-4'>";
        html += "           <div class='col-lg-6'>";
        html += "               <div class='card'>";
        html += "                   <h5 class='card-title p-2'>Hozzáadás</h5>";
        html += "                   <div class='card-body p-2'>";
        html += "                       <div class='form-group py-1'>";
        html += "                           <input type='file' name='kep' class='form-control'>";
        html += "                       </div>";
        html += "                       <div class='form-group py-1'>";
        html += "                           <input type='text' name='nev' class='form-control' placeholder='Név'>";
        html += "                       </div>";
        html += "                       <div class='form-group py-1'>";
        html += "                           <input type='text' name='alt' class='form-control' placeholder='Leírás'>";
        html += "                       </div>";        
        html += "                       <div class='form-group py-1'>";
        html += "                           <input type='number' name='ar' class='form-control' placeholder='Ár'>";
        html += "                       </div>";
        html += "                       <div class='form-group py-1'>";
        html += "                           <input type='number' name='darab' class='form-control' placeholder='Darab'>";
        html += "                       </div>";
        html += "                   </div>";
        html += "                   <div class='card-footer p-2'>";
        html += "                   <input type='submit' name='post' class='btn btn-primary' value='Hozzáadás' />";
        html += "                   </div>";
        html += "               </div>";
        html += "           </div>";
        html += "       </div>";
        html += "   </div>";
        html += "</form>";


        view.addbody(html);
    }
    async insert(view, data, image)
    {
        var image_name = new Date().getHours()+ "_" +new Date().getMinutes()+ "_" +new Date().getSeconds() + "_" + image.originalname;

        fs.rename(image.path, "public/uploads/"+ image_name, (err) =>
        {

        });
        var date = new Date();
        var date_time = date.getFullYear()+ "-" +date.getMonth()+ "-" +date.getDay()+ " " +date.getHours()+ ":" +date.getMinutes()+ ":" +date.getSeconds();

        var sql = "insert into eszkozok (ID, statusz, nev, kep, alt, ar, darab, datum) values (null, 'aktiv','"+ data.nev +"', 'uploads/"+ image_name +"','"+ data.alt +"','"+ data.ar +"','"+ data.darab +"','"+ date_time +"')";
    
        await this.sql.query(sql).then((reject, result) =>
        {
            view.addbody("<div class='alert alert-success my-2'>Sikeres felvitel!</div>");
        });

    }
}

module.exports = hozzaadas;

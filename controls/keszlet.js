const sql = require('../modules/sql');

class keszlet
{
    constructor()
    {
        this.sql = new sql();
    }

    async getlista(view)
    {
        var html = "";
        html +="<div class='row py-4'>";
        html +="  <div class='col-lg-12'>";
        html +="      <div class='list-group'>";

        const result = await this.sql.query("select * From eszkozok where eszkozok.statusz = 'aktiv' order by eszkozok.nev desc");
        const rows = JSON.parse(JSON.stringify(result));
            
            rows.forEach(element =>
            {
                html +="<div class='list-group-item d-flex justify-content-between align-items-start'>";
                html +=     "<div class='ms-2 me-auto'>";
                html +=         "<h5>"+ element.nev +"</h5>";
                html +=     "</div>";
                html +=     "<span class='badge bg-primary rounded-pill'>"+ element.darab +" db</span>";
                html +="</div>";
            });
        
        html +="      </div>";
        html +="  </div>";
        html +="</div>";
        
        view.addbody(html);
    }
}

module.exports = keszlet;
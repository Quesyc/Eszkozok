const sql = require('../modules/sql');

class lista
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
                html +="<div class='list-group-item'>";
                html +="    <div class='d-flex'>";
                html +="        <div class='flex-shrink-0'>";
                html +="            <img src='"+ element.kep +"' alt='"+ element.alt +"' title='"+ element.alt +"' width='100'>";
                html +="        </div>";
                html +="        <div class='flex-grow-1 ms-3'>";
                html +="            <h5>"+ element.nev +"</h5>";
                html +="            <small class='text-secondary'>"+ element.alt +"</small>";
                html +="        </div>";
                html +="        <div class='flex-grow-1'>";
                html +="            <p class='m-0 text-end'>"+ element.ar +" Ft</p>";
                html +="        </div>";
                html +=     "</div>";
                html +="</div>";
            });
        
        html +="      </div>";
        html +="  </div>";
        html +="</div>";
        
        view.addbody(html);
    }
}

module.exports = lista;
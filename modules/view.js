class view {
    constructor(response)
    {
        this.res = response;

        this.res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        this.res.write("<!DOCTYPE Html>");
        this.res.write("<html>");
        this.gethead();
        this.getnav();
        this.res.write("<body>");
        this.res.write("<div class='container'>");
    }

    gethead()
    {
        this.res.write("<head>");
        this.res.write("    <meta charset='utf-8' />");
        this.res.write("    <meta http-equiv='Content-Type' content='text/html' />");
        this.res.write("    <meta name='viewport' content='width=device-width', inital-scale='1.0' />");
        this.res.write("    <title>Eszközök</title>");
        this.res.write("    <link rel='stylesheet' href='css/styles.css'>");
        this.res.write("    <link rel='stylesheet' href='css/base.css'>");
        this.res.write("    <link rel='icon' type='image/x-icon' href='images/favicon.ico'>");
        this.res.write("</head>");
    }

    getnav()
    {
        this.res.write("<div class='container'>");
        this.res.write("    <div class='row'>");
        this.res.write("        <div class='col-lg-12'>");
        this.res.write("            <div class='navbar navbar-expand-lg navbar-light bg-light'>");
        this.res.write("                <div class='container-fluid'>");
        this.res.write("                    <a href='/' class='navbar-brand'>Eszközök</a>");
        this.res.write("                    <div>");
        this.res.write("                        <ul class='navbar-nav me-auto mb-2 mb-lg-0'>");
        this.res.write("                            <li class='nav-item'><a href='/' class='nav-link'>Eszközök</a></li>");
        this.res.write("                            <li class='nav-item'><a href='/keszlet' class='nav-link'>Készlet</a></li>");
        this.res.write("                            <li class='nav-item'><a href='uj' class='nav-link'>Hozzáadás</a></li>");
        this.res.write("                        </ul>");
        this.res.write("                    </div>");
        this.res.write("                </div>");
        this.res.write("            </div>");
        this.res.write("        </div>");
        this.res.write("    </div>");
        this.res.write("</div>");
    }

    addbody(content)
    {
        this.res.write(content);
    }

    setend() 
    {
        this.res.write("</div>");
        this.res.write("</body>");
        this.res.write("<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js'></script>");
        this.res.write("<script src='js/jquery-3.7.0.js'></script>");
        this.res.write("</html>");
    }
}

module.exports = view;
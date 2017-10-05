import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'rxjs/Rx';
import * as express from 'express';
import { ServerAppModule } from './app/server-app.module';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { ROUTES } from './routes';
import { enableProdMode } from '@angular/core';
enableProdMode();
var app = express();
var PORT = process.env.PORT || 8000;
var HOST = process.env.BASE_URL || 'localhost';
var baseUrl = "http://" + HOST + ":" + PORT;
app.engine('html', ngExpressEngine({
    bootstrap: ServerAppModule
}));
app.set('view engine', 'html');
app.set('views', 'src');
app.use('/', express.static('dist', { index: false }));
ROUTES.forEach(function (route) {
    app.get(route, function (req, res) {
        console.time("GET: " + req.originalUrl);
        res.render('../dist/index', {
            req: req,
            res: res
        });
        console.timeEnd("GET: " + req.originalUrl);
    });
});
app.listen(PORT, function () {
    console.log("Listening at " + baseUrl);
});

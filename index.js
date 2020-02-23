var express = require("express");
var app = express();
app.set('view engine', 'ejs');
var bodyparser = require('body-parser');
var url = bodyparser.urlencoded({ extended: false });

app.get('/', function (req, res) {
    res.render('index',{totalcost:null})
})

app.post('/', url, function (req, res) {
    var a = req.body.a;
    var b = req.body.b;
    var c = req.body.c;
    var d = req.body.d;
    var e = req.body.e;
    var f = req.body.f;
    var g = req.body.g;
    var h = req.body.h;
    var i = req.body.i;
    var aweight = a * 3;
    var bweight = b * 2;
    var cweight = c * 8;
    var dweight = d * 12;
    var eweight = e * 25;
    var fweight = f * 15;
    var gweight = g * 0.5;
    var hweight = h * 1;
    var iweight = i * 2;
    var c1 = aweight + bweight + cweight;
    var c2 = dweight + eweight + fweight;
    var c3 = gweight + hweight + iweight;
    if (c1 > 0) {
        var extrac1 = Math.ceil(c1 / 5);
        var w1 = 10 + (extrac1-1) * 8;
    }
    if (c2 > 0) {
        var extrac2 = Math.ceil(c2 / 5);
        var w2 = 10 + (extrac2-1) * 8;
    }
    if (c3 > 0) {
        var extrac3 = Math.ceil(c3 / 5);
        var w3 = 10 + (extrac3-1) * 8;
    }
    console.log("w1= "+w1);
    console.log("w2= "+w2);
    console.log("w3= "+w3);
    var c1l1=3;
    var c2l1=2.5;
    var c3l1=2;
    if(w1>0){
        var cost1=w1*c1l1;
    }
    else{
        cost1=0;
    }
    if(w2>0){
        var cost2=25+w2*c2l1;
    }
    else{
        cost2=0;
    }
    if(w3>0){
        var cost3=20+w3*c3l1;
    }
    else{
        cost3=0;
    }
    console.log(cost1);
    console.log(cost2);
    console.log(cost3);
    var totalcost=cost1+cost2+cost3;
    console.log(totalcost);

    res.render('index',{totalcost:totalcost});

})
app.listen(3000);
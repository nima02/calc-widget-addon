var widgets = require("widget");
var tabs = require("tabs");
var self = require("self");
 
var widget = widgets.Widget({
    id: "info@fbalabels.com",
    label: "FBA Calcualtor Widget",
    contentURL: "http://www.fbalabels.com/fbacalc5.ico",
    onClick: function() {
        worker = tabs.activeTab.attach({
            contentScriptFile: self.data.url("fbacalc.js")
        });
        worker.port.on("asin", function(asin) {
            if (asin[0]) {
                tabs.open({
                  url: asin[2],
                  onReady: function onReady(tab) {
                    worker2 = tab.attach({
                        contentScriptFile: self.data.url("loadasin.js")
                    });
                    worker2.port.emit('asin', asin);
                  }
                });
            } 
        });            
    } 
});
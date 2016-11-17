(function ($) {

    var kendo = window.kendo,
        ui = kendo.ui,
        Widget = ui.Widget,
        CHANGE = "change";

    var SourceSelector = Widget.extend({
        init: function(element, options){
           kendo.ui.Widget.fn.init.call(this, element, options);
        },
        options: {
            name:"SourceSelector",
            template: '<div style="float: left; color: salmon; margin-right: 10px"><h1>#= data #</h1></div>',
            autoBind:true
        },
        refresh: function(){
            var that = this,
                view = that.dataSource.view(),
                html = kendo.render(that.template, view);

            that.element.html(html);
        },
        _dataSource: function(){
            var that = this;
            that.dataSource = kendo.data.DataSource.create(that.options.dataSource);
            that.dataSource.bind(CHANGE,
                function(){
                    that.refresh();
                });
            if (that.options.autoBind) {
                that.dataSource.fetch();
            }
        }
        
    });
    kendo.ui.plugin(SourceSelector);
})(jQuery);
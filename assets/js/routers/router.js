
App.AlleyRouter = Backbone.Router.extend({
    routes:{
        "": "index",
        "index": "index",
        "home": "home",
        "submission": "submission",
        "logout": "logout"
    },
    start:function () {
        Backbone.history.start();
    },
    index: function(actions){
        var indexView = new App.IndexView;
        indexView.render();
    },
    home: function(actions){
        if($.cookie("_aw_id") == undefined || $.cookie("_aw_id") == null){
            App.goTo("");
        }else{
            $.getJSON('/user/'+$.cookie("_aw_id"), function(json){
                var view;
                if(json.user["email"] != null && json.user["phone"] != null){
                    view = new App.HomeView;
                }else{
                    view = new App.UserInfoView({json: json.user});
                }
                view.render();
            });
        }
    },
    submission: function(actions){
        if($.cookie("_aw_id") == undefined || $.cookie("_aw_id") == null){
            App.goTo("");
        }else{
            var view = new App.ArticleSubmissionView;
            view.render();
        }
    },

    logout: function(){
        $.ajax({
            url: '/logout',
            success: function(data){
                $.cookie("_aw_id", "");
                if($.cookie("_aw_admin")){$.cookie("_aw_admin", ""); }
                App.goTo("");
            },
            error: function(data){
                alert("something went wrong");
            }
        });
    }

});
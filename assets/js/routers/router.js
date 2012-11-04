App.RubyConfRouter = Backbone.Router.extend({
    routes:{
        "": "index",
        "sponsor": "sponsor",
        "topic": "topic",
        "about": "about",
        "proposal": "proposal"

    },
    start:function () {
        Backbone.history.start();
    },
    index: function(actions){
        var indexView = new App.IndexView;
        indexView.render();
    },
    sponsor: function(actions){
        var view = new App.SponsorView;
        view.render();
    },
    topic: function(actions){
        var view = new App.TopicView;
        view.render();
    },
    about: function(actions){
        var view = new App.AboutView;
        view.render();
    },
    proposal: function(actions){
        var view = new App.ProposalView;
        view.render();
    }
});
App.RubyConfRouter = Backbone.Router.extend({
  routes:{
    "":"index",
    "sponsor":"sponsor",
    "topic":"topic",
    "speaker":"speaker",
    "about":"about",
    "proposal":"proposal",
    "register":"register",
    "schedule":"schedule"

  },
  start:function () {
    Backbone.history.start();
  },
  index:function (actions) {
    var indexView = new App.IndexView;
    indexView.render();
  },
  sponsor:function (actions) {
    var view = new App.SponsorView;
    view.render();
  },
  speaker:function (actions) {
    var view = new App.SpeakerView;
    view.render();
  },
  about:function (actions) {
    var view = new App.AboutView;
    view.render();
  },
  proposal:function (actions) {
    var view = new App.ProposalView;
    view.render();
  },
  register:function (actions) {
    var view = new App.RegisterView;
    view.render();
  },
  topic:function (actions) {
    var view = new App.TopicView;
    view.render();
  },
  schedule:function (actions) {
    var view = new App.ScheduleView;
    view.render();
  }
});
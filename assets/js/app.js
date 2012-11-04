$(function() {

// Kick things off by creating the **App**.
    this.Router = new App.AlleyRouter;
    var that = this;
    App.goTo = function (loc) {
        that.Router.navigate(loc, true);
    };

    App.goReturn = function () {
        history.back(-1);
    };

    this.Router.start();

});
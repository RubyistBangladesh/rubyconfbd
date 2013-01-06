App.ProposalView = Backbone.View.extend({

    template: _.template($('#proposal-template').html()),
    // Delegated events for creating new items, and clearing completed ones.
    events: {

    },
    // At initialization
    initialize: function() {
        $("ul.nav > li").removeClass('active');
        $("ul.nav > li#proposal").addClass('active');
    },

    render: function() {
        App.$Main.html(this.$el.html(this.template()));
        return this;
    }
});
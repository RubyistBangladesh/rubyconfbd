App.SpeakerView = Backbone.View.extend({

    template: _.template($('#speaker-template').html()),
    // Delegated events for creating new items, and clearing completed ones.
    events: {

    },
    // At initialization
    initialize: function() {
        $("ul.nav > li").removeClass('active');
        $("ul.nav > li#speaker").addClass('active');
    },

    render: function() {
        App.$Main.html(this.$el.html(this.template()));
        return this;
    }
});
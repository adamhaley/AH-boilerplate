define([
    , 'views/main'
    
], function (mainView) {
	describe('Main View', function(){
		it('Calling mainView.render() should create the three main areas of the layout',function(){
			mainView.render();
			expect(mainView.$el.find('#maincontainer').length).not.toBe(0);
		});
	});

});
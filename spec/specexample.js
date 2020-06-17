describe ('play Bulls and Cows', function() {
    it ('should return "1A3B"', function(){

        expect(getHint("1807", "7810")).toEqual("1A3B");
    });
});
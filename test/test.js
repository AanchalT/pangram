var expect    = require("chai").expect;
var check = require("../app/pangram.js");
describe(" String Pangram checker", function() {
  it("Check if the given sentence is Pangram (true condition)", function() {
    var value=check("Pack my box with five dozen liquor jugs")
    expect(value).to.equal(true);
  });
  it("Check if the given sentence is Pangram (false condition)", function() {
    var value=check("All is well")
    expect(value).to.equal(false);
  });

});


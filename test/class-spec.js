const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      let testWord = new Word('Test');
      expect(testWord).to.have.property('word');
    });
  
    it('should set the "word" property when a new word is created', function () {
      let testWord = new Word('Test');
      expect(testWord).to.have.property('word').to.eql('Test');
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      expect(testWord.removeVowels()).to.eql('tst');
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      expect(testWord.removeConsonants()).to.eql('e');
    });
  });
  
  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      expect(testWord.pigLatin()).to.eql('estTay');
    });
  });
});

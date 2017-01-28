import { expect } from 'chai';
import { getTitles } from './handlers';

describe('request handlers', () => {
  describe('getTitles', () => {
    it ('returns all 17 titles', () => {
      const actual = getTitles();

      expect(actual).to.have.length(17);
    });    
  });
});
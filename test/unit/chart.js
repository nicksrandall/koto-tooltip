import Tooltip from '../../src/chart';

describe('#koto.Tooltip', function () {
  beforeEach(function () {
    this.chart = new Tooltip(d3.select('#test'));
  });

  it('should exist', function () {
    expect(this.chart).to.exist;
  });
});

const test = require('tape');
const navigate = require('./navigate');

test('Test', t => {
  t.equal(1, 1, 'One equals one');
  t.end();
});

test('First choice without facing', t => {
  let facing;
  const resObj = { N: 2, E: 3, S: 1, W: 1 };
  const actual = navigate(resObj, facing);
  const expected = 'W';
  t.equal(actual, expected, 'When facing undefined should return West');
  t.end();
});

test('Navigating whilst trapped!', t => {
  const facing = 'N';
  const resObj = { N: 0, E: 0, S: 0, W: 0 };
  const actual = navigate(resObj, facing);
  const expected = 'No way out!';
  t.equal(actual, expected, 'When trapped should give up hope');
  t.end();
});

test('Navigating with all options open', t => {
  const facing = 'N';
  const resObj = { N: 2, E: 3, S: 1, W: 1 };
  const actual = navigate(resObj, facing);
  const expected = 'W';
  t.equal(actual, expected, 'When facing North should return West');
  t.end();
});

test('Navigating with all options open', t => {
  const facing = 'E';
  const resObj = { N: 2, E: 3, S: 1, W: 1 };
  const actual = navigate(resObj, facing);
  const expected = 'N';
  t.equal(actual, expected, 'When facing East should return North');
  t.end();
});

test('Navigating with all options open', t => {
  const facing = 'S';
  const resObj = { N: 2, E: 3, S: 1, W: 1 };
  const actual = navigate(resObj, facing);
  const expected = 'E';
  t.equal(actual, expected, 'When facing South should return East');
  t.end();
});

test('Navigating with all options open', t => {
  const facing = 'W';
  const resObj = { N: 2, E: 3, S: 1, W: 1 };
  const actual = navigate(resObj, facing);
  const expected = 'S';
  t.equal(actual, expected, 'When facing West should return South');
  t.end();
});

test('Navigating with limited options', t => {
  const facing = 'N';
  const resObj = { N: 2, E: 3, S: 1, W: 0 };
  const actual = navigate(resObj, facing);
  const expected = 'N';
  t.equal(
    actual,
    expected,
    'When facing North and cannot go West should return North'
  );
  t.end();
});

test('Navigating with limited options', t => {
  const facing = 'N';
  const resObj = { N: 0, E: 3, S: 1, W: 0 };
  const actual = navigate(resObj, facing);
  const expected = 'E';
  t.equal(
    actual,
    expected,
    'When facing North and cannot go West or North should return East'
  );
  t.end();
});

test('Navigating with limited options', t => {
  const facing = 'N';
  const resObj = { N: 0, E: 0, S: 1, W: 0 };
  const actual = navigate(resObj, facing);
  const expected = 'S';
  t.equal(
    actual,
    expected,
    'When facing North and cannot go West or North or East should return South'
  );
  t.end();
});

test('Navigating with limited options', t => {
  const facing = 'E';
  const resObj = { N: 0, E: 0, S: 0, W: 1 };
  const actual = navigate(resObj, facing);
  const expected = 'W';
  t.equal(
    actual,
    expected,
    'When facing East and cannot go East or South should return West'
  );
  t.end();
});

test('Navigating with limited options', t => {
  const facing = 'E';
  const resObj = { N: 1, E: 0, S: 0, W: 0 };
  const actual = navigate(resObj, facing);
  const expected = 'N';
  t.equal(
    actual,
    expected,
    'When facing East and cannot go East or South or West should return North'
  );
  t.end();
});

test('Navigating with limited options', t => {
  const facing = 'S';
  const resObj = { N: 0, E: 0, S: 1, W: 0 };
  const actual = navigate(resObj, facing);
  const expected = 'S';
  t.equal(
    actual,
    expected,
    'When facing South and can go South should go South'
  );
  t.end();
});

test('Navigating a dead end', t => {
  const facing = 'N';
  const resObj = { N: 0, E: 0, S: 1, W: 0 };
  const actual = navigate(resObj, facing);
  const expected = 'S';
  t.equal(
    actual,
    expected,
    'When facing North and can only go South should return South'
  );
  t.end();
});

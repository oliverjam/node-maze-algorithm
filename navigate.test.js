const test = require("tape");
const navigate = require("./navigate");

test("Test", t => {
  t.equal(1, 1, "One equals one");
  t.end();
});

test("First choice without facing", t => {
  let facing;
  const resObj = "N2 E3 S1 W1";
  const actual = navigate(resObj, facing);
  const expected = "W";
  t.equal(actual, expected, "When facing undefined should return West");
  t.end();
});

test("Can see the prize", t => {
  const facing = "N";
  const resObj = "N3 E2 S2 W4 PN";
  const actual = navigate(resObj, facing);
  const expected = "N";
  t.equal(
    actual,
    expected,
    "If the prize is to the North should always go to the north"
  );
  t.end();
});

test("Navigating whilst trapped!", t => {
  const facing = "N";
  const resObj = "N0 E0 S0 W0";
  const actual = navigate(resObj, facing);
  const expected = "No way out!";
  t.equal(actual, expected, "When trapped should give up hope");
  t.end();
});

test("Navigating with all options open", t => {
  const facing = "N";
  const resObj = "N2 E3 S1 W1";
  const actual = navigate(resObj, facing);
  const expected = "W";
  t.equal(actual, expected, "When facing North should return West");
  t.end();
});

test("Navigating with all options open", t => {
  const facing = "E";
  const resObj = "N2 E3 S1 W1";
  const actual = navigate(resObj, facing);
  const expected = "N";
  t.equal(actual, expected, "When facing East should return North");
  t.end();
});

test("Navigating with all options open", t => {
  const facing = "S";
  const resObj = "N2 E3 S1 W1";
  const actual = navigate(resObj, facing);
  const expected = "E";
  t.equal(actual, expected, "When facing South should return East");
  t.end();
});

test("Navigating with all options open", t => {
  const facing = "W";
  const resObj = "N2 E3 S1 W1";
  const actual = navigate(resObj, facing);
  const expected = "S";
  t.equal(actual, expected, "When facing West should return South");
  t.end();
});

test("Navigating with limited options", t => {
  const facing = "N";
  const resObj = "N2 E3 S1 W0";
  const actual = navigate(resObj, facing);
  const expected = "N";
  t.equal(
    actual,
    expected,
    "When facing North and cannot go West should return North"
  );
  t.end();
});

test("Navigating with limited options", t => {
  const facing = "N";
  const resObj = "N0 E3 S1 W0";
  const actual = navigate(resObj, facing);
  const expected = "E";
  t.equal(
    actual,
    expected,
    "When facing North and cannot go West or North should return East"
  );
  t.end();
});

test("Navigating with limited options", t => {
  const facing = "E";
  const resObj = "N0 E0 S0 W1";
  const actual = navigate(resObj, facing);
  const expected = "W";
  t.equal(
    actual,
    expected,
    "When facing East and cannot go East or South should return West"
  );
  t.end();
});

test("Navigating with limited options", t => {
  const facing = "E";
  const resObj = "N1 E0 S0 W0";
  const actual = navigate(resObj, facing);
  const expected = "N";
  t.equal(
    actual,
    expected,
    "When facing East and cannot go East or South or West should return North"
  );
  t.end();
});

test("Navigating with limited options", t => {
  const facing = "S";
  const resObj = "N0 E0 S1 W0";
  const actual = navigate(resObj, facing);
  const expected = "S";
  t.equal(
    actual,
    expected,
    "When facing South and can go South should go South"
  );
  t.end();
});

test("Navigating a dead end", t => {
  const facing = "N";
  const resObj = "N0 E0 S1 W0";
  const actual = navigate(resObj, facing);
  const expected = "S";
  t.equal(
    actual,
    expected,
    "When facing North and can only go South should return South"
  );
  t.end();
});

test("Navigating a corner", t => {
  const facing = "N";
  const resObj2 = "N0 E0 S4 W4";
  const actual = navigate(resObj2, facing);
  const expected = "W";
  t.equal(
    actual,
    expected,
    "When facing North and can go West or South should return West"
  );
  t.end();
});

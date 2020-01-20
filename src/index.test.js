const GradeScale = require('./index');

let gradeScale = new GradeScale();

test('Scales have expected ranges.', () => {
  expect(gradeScale.getYdsScale()).toContain('5.0');
  expect(gradeScale.getYdsScale()).toContain('5.15d');
  expect(gradeScale.getYdsScale('5.7', '5.13c')).toContain('5.15d');
  expect(gradeScale.getVScale()).toContain('V0');
  expect(gradeScale.getVScale()).toContain('V14');
  expect(gradeScale.getFrenchScale()).toContain('1');
  expect(gradeScale.getFrenchScale()).toContain('9c');
});

test('Valid and invalid scales are detectable.', () => {
  expect(gradeScale.isValidScale('YDS')).toBeTruthy();
  expect(gradeScale.isValidScale('Yds')).toBeTruthy();
  expect(gradeScale.isValidScale('font')).toBeTruthy();
  expect(gradeScale.isValidScale('v')).toBeTruthy();
  expect(gradeScale.isValidScale('french')).toBeTruthy();
  expect(gradeScale.isValidScale('français')).toBeFalsy();
  expect(gradeScale.isValidScale(1)).toBeFalsy();
});

test('All scales in grade matrix are valid.', () => {
  const scales = gradeScale.getScales();
  const table = gradeScale.getTable();

  table.forEach(grade => {
    for (let [key, value] of Object.entries(grade)) {
      expect(scales.includes(key)).toBeTruthy();
    }
  });
});

test('Grades are converted as expected.', () => {
  expect(gradeScale.convert('5.12a', 'yds', 'french')).toBe('7a+');
  expect(gradeScale.convert('5.12a', 'yds', 'v')).toBe('V4');
  expect(gradeScale.convert('5.12c/d', 'yds', 'v')).toBe('V6');
  expect(gradeScale.convert('V4', 'v', 'yds')).toBe('5.12a');
  expect(gradeScale.convert('V8', 'v', 'yds')).toBe('5.13b');
  expect(gradeScale.convert('5.13b', 'yds', 'french')).toBe('8a');
  expect(gradeScale.convert('apple', 'yds', 'french')).toBeUndefined();
  expect(gradeScale.convert('5.12a', 'yds', 'spanish')).toBeUndefined();
  expect(gradeScale.convert('5.12a', 'yds', 'sdf')).toBeUndefined();
});

test.todo('The Font scale ranges from ...');

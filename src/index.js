export default class GradeScale {
  // constructor() {
  //   this.GRADETABLE = [
  //     { yds: '5.0', french: '1', v: 'VB', font: '3' },
  //     { yds: '5.1', french: '2', v: 'VB', font: '3' },
  //     { yds: '5.2', french: '2', v: 'VB', font: '3' },
  //     { yds: '5.3', french: '3', v: 'VB', font: '3' },
  //     { yds: '5.4', french: '3', v: 'VB', font: '3' },
  //     { yds: '5.5', french: '4a', v: 'VB', font: '3' },
  //     { yds: '5.6', french: '4b', v: 'VB', font: '3' },
  //     { yds: '5.7', french: '4c', v: 'VB', font: '3' },
  //     { yds: '5.8', french: '5a', v: 'VB', font: '3' },
  //     { yds: '5.9', french: '5b', v: 'V0', font: '4' },
  //     { yds: '5.10a', french: '5c', v: 'V0', font: '4' },
  //     { yds: '5.10b', french: '6a', v: 'V0+', font: '4' },
  //     { yds: '5.10c', french: '6a+', v: 'V1', font: '5' },
  //     { yds: '5.10d', french: '6b', v: 'V1', font: '5' },
  //     { yds: '5.11a', french: '6b+', v: 'V2', font: '5+' },
  //     { yds: '5.11b', french: '6c', v: 'V3', font: '6a' },
  //     { yds: '5.11c', french: '6c+', v: 'V3', font: '6a' },
  //     { yds: '5.11d', french: '7a', v: 'V3', font: '6a+' },
  //     { yds: '5.12a', french: '7a+', v: 'V4', font: '6b/6b+' },
  //     { yds: '5.12b', french: '7b', v: 'V5', font: '6c/6c+' },
  //     { yds: '5.12c', french: '7b+', v: 'V6', font: '7a' },
  //     { yds: '5.12d', french: '7c', v: 'V6', font: '' },
  //     { yds: '5.13a', french: '7c+', v: 'V7', font: '7a+' },
  //     { yds: '5.13b', french: '8a', v: 'V8', font: '7b' },
  //     { yds: '5.13c', french: '8a+', v: 'V8', font: '/7b+' },
  //     { yds: '5.13d', french: '8b', v: 'V9', font: '' },
  //     { yds: '5.14a', french: '8b+', v: 'V10', font: '' },
  //     { yds: '5.14b', french: '8c', v: 'V11', font: '' },
  //     { yds: '5.14c', french: '8c+', v: 'V12', font: '' },
  //     { yds: '5.14d', french: '9a', v: 'V13', font: '' },
  //     { yds: '5.15a', french: '9a+', v: 'V14', font: '' },
  //     { yds: '5.15b', french: '9b', v: 'V14', font: '' },
  //     { yds: '5.15c', french: '9b+', v: 'V14', font: '' },
  //     { yds: '5.15d', french: '9c', v: 'V14', font: '' },
  //   ];
  //   this.GRADESCALES = ['yds', 'french', 'v', 'font'];
  // }
  // /**
  //  * Returns the matrix of grade mappings.
  //  */
  // getTable = () => this.GRADETABLE;
  // /**
  //  * Returns the grade scales available for use.
  //  */
  // getScales = (fromGrade, toGrade) => this.GRADESCALES;
  // /**
  //  * Returns the French scale as an array.
  //  */
  // getFrenchScale = (fromGrade, toGrade) =>
  //   this.getTable().map(grade => grade.french);
  // /**
  //  * Returns the Yosemite Decimal System (YDS) scale as an array.
  //  */
  // getYdsScale = (fromGrade, toGrade) => this.getTable().map(grade => grade.yds);
  // /**
  //  * Returns the Vermin (V) scale as an array.
  //  */
  // getVScale = (fromGrade, toGrade) => this.getTable().map(grade => grade.v);
  // /**
  //  * Returns the Fontainbleu (font) scale as an array.
  //  */
  // getFontScale = (fromGrade, toGrade) =>
  //   this.getTable().map(grade => grade.font);
  // /**
  //  * Returns whether a particular string represents a valid scale value.
  //  */
  // isValidScale = val => {
  //   if (typeof val !== 'string') {
  //     return false;
  //   }
  //   return this.getScales().includes(val.toLowerCase());
  // };
  // /**
  //  * Returns the lowest equivalent grade from another scale.
  //  */
  // convert = (grade, fromScale, toScale) => {
  //   let g = grade.toLowerCase().split('/')[0];
  //   let fs = fromScale.toLowerCase();
  //   let ts = toScale.toLowerCase();
  //   if (this.isValidScale(fs) && this.isValidScale(ts)) {
  //     for (let i = 0; i < this.GRADETABLE.length; i++) {
  //       if (this.GRADETABLE[i][fs].toLowerCase() === g) {
  //         return this.GRADETABLE[i][ts];
  //       }
  //     }
  //   }
  //   return undefined;
  // };
}

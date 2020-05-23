class StringBuilder {
  constructor(values) {
    this._values = values;
  }
  get value() {
    return this._values;
  }
  append(str) {
    this._values = this._values + str;
  }
  prepend(str) {
    this._values = str + this._values;
  }
  pad(str) {
    this._values = str + this._values + str;
  }
}
const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='

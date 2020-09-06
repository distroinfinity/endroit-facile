const Patches = require('Patches');
const d = require('Diagnostics');

const numberFormat = '{0}%';
const ok = Patches.outputs.getScalar('percent')
ok.then(percentage => {
    d.watch("sup :", percentage)
    Patches.inputs.setString('value', percentage.format(numberFormat))
})

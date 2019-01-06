const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        demand: true,
        default: 'leon gto'
    }
})


.argv;

module.exports = {
    argv
}
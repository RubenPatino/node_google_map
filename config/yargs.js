const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        default: 'leon gto'
    }
})

.argv;

module.exports = {
    argv
}
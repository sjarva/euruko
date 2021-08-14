module.exports = {
    extends: 'stylelint-config-standard',
    rules: {
        indentation: 4,
        'function-calc-no-invalid': true,
        'unit-allowed-list': ['rem', 'deg', '%', 's'],
        'unit-disallowed-list': ['px', 'em'],
        'unit-no-unknown': true,
    },
}

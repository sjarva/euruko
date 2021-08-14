module.exports = {
    extends: 'stylelint-config-standard',
    rules: {
        // Rules enforcing writing style
        indentation: 4,
        // Rules preventing errors
        'function-calc-no-invalid': true,
        'unit-no-unknown': true,
        // Rules improving accessibility
        'unit-allowed-list': ['rem', 'deg', '%', 's'],
        'unit-disallowed-list': ['px', 'em'],
    },
}

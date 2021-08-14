module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-a11y/recommended'],
    plugins: ['stylelint-a11y'],
    rules: {
        // Rules enforcing writing style
        indentation: 4,
        // Rules preventing errors
        'function-calc-no-invalid': true,
        'unit-no-unknown': true,
        'a11y/no-obsolete-attribute': true,
        'a11y/no-obsolete-element': true,
        // Rules improving accessibility
        'unit-allowed-list': ['rem', 'deg', '%', 's'],
        'unit-disallowed-list': ['px', 'em'],
    },
}

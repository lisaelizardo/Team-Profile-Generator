function generateHtml(answers) {
    const htmlContent =`
    ## ${answers.name}
    # ID
    ${answers.id}
    # Email
    ${answers.email}
    # Office Number
    ${answers.office}
    # List
    ${answers.option}
`
    return htmlContent
}

module.exports = generateHtml
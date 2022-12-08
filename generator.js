function generateHtml(answers) {
    const htmlContent =`
    ## ${answers.name}
    # Email
    ${answers.email}
    # Github
    ${answers.github}
`
    return htmlContent
}

module.exports = generateHtml
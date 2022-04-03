const noInfo = 'No information available.'

//logic for each value
const installationDisplay = (installation) => {
if (installation) {
    return `## Installation instructions 
${installation}`
    }
    return `## Installation instructions 
${noInfo}`
}
    
const usageDisplay = (usage) => { usage 
if (usage) {
    return `## Usage instructions 
${usage}`
    }
    return `## Usage instructions 
${noInfo}`
}
    
const contributingDisplay = (contributor) => {
if (contributor) {
    return `## Contributing to this project
Your contributions are welcome to this project.`
    }
    return `## Contributing to this project
 Contributing is not requested at this time.`
}
    
const creditsDisplay = (credits) => {
if (credits) {
    return `## Credits
${credits}`
    }
    return `## Credits
${noInfo}`
}
    
const testingText = (tests) => {
if (tests) {
    return `## Testing Instructions
${tests}`
    }
    return `## Testing instructions 
${noInfo}`
}
    
//create the markup for the license badge
const licenseBadge = (license) => {
    if (license !== 'None') {
    let badge = ''
    switch (license) {
        case 'MIT' : badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
        break;
        case 'GNU GPLv3' : badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
        break;
        case 'Mozilla Public 2.0' : badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
        break;
        case 'The Unlicense' : badge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
        break;
        case 'Apache 2.0' : badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        break;
        default : badge = ''
    }
    return badge
        } else {
        return ''
    }
}
    
const licenseText= (license) => {
if (license !== 'None') {
    return `## License
Licensed under the ${license} license.`
    } else {
return `## License
${noInfo}`
    }
}
    
const questionText= (github, email) => {
    let finalText = ''
    if (github && email) {
        const gitHubURL = `https://github.com/${github}`
        const emailAddress = `[${email}](mailto:${email})`
        finalText = `## Questions
    For further information, check out my github repository at ${gitHubURL}, or by emailing ${emailAddress}`
        } else if (github) {
            const gitHubURL = `https://github.com/${github}`
        finalText = `## Questions
    For further information, check out my github repository at ${gitHubURL}`
        } else if (email) {
            const emailAddress = `[${email}](mailto:${email})`
        finalText = `## Questions
    For further information, email ${emailAddress}`
        } else {`## Questions
    ${noInfo}`
    }
    return finalText
}

// README generator function
function generateMarkdown(data) {
    const { installation, usage, contributor, credits, tests, license, title, description, github, email} = data
    
return `
${licenseBadge(license)}
# ${title}

## Description
${description}

## Table of Contents
* [Installation instructions ](#Installation-instructions)
* [Usage instructions ](#Usage-instructions)
* [Contributing to this project ](#Contributing-to-this-project)
* [Credits](#Credits)
* [Testing Instructions](#Testing-Instructions)
* [License](#License)
* [Questions](#Questions)
  
${installationDisplay(installation)}
${usageDisplay(usage)}
${contributingDisplay(contributor)}
${creditsDisplay(credits)}
${testingText(tests)}
${licenseText(license)}
${questionText(github, email)}
`
};

module.exports = generateMarkdown;
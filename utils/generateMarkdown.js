function generateMarkdown(data) {
  return `
# ${data.name}

##Description-
${data.description}

## Installation-
${data.installation}

## Usage-
${data.usage}

## License-
![license](https://img.shields.io/badge/license-${data.license}-BLUE)

## Author-
${data.author}

`;
}

module.exports = generateMarkdown;

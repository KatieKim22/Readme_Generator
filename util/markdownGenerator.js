function markdownGenerator(data) {
    return `
    # ${data.title}

## ${data.description}


## Table of Contents

 - [Description](#description)
 - [Installation](#Installation)
 - [License](#License)
 - [Contribution](#Contribution)
 - [GithubLinks](#GithubLinks)
 - [Technologies](#Technologies)

##Installation
${data.installation}

## License
[${data.license}]

##Contribution
${data.contribution}

## 🔗 Links
${data.github}

## Technologies

- ${data.technologies}
                    `
}

module.exports = markdownGenerator;
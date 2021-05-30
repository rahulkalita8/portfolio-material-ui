# LinkedIn style - Portfolio  [![GitHub](https://img.shields.io/github/license/rahulkalita8/portfolio-material-ui?color=blue)](https://github.com/srahulkalita8/portfolio-material-ui/blob/master/LICENSE) [![GitHub stars](https://img.shields.io/github/stars/rahulkalita8/portfolio-material-ui)](https://github.com/rahulkalita8/portfolio-material-ui/stargazers) 

## Make your LinkedIn profile a webpage

<p align="center">
  <kbd>
<img src=""></img>
  </kbd>
</p>


Personalize your website by changing `src/profileDetails.js`. You can customize as much as you want. 

## Table of Contents
- [What can we show](#what-can-we-show)
- [For Developers](#development)
- [How to Use](#how-to-use)
- [Customization](#customization)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Future](#what-may-come-in-future)
- [Contributors](#project-maintainers)

## What can we show

1. Brief summary
2. Skills
3. Education
4. Work Experience
6. Certificates
7. Accomplishments\
    a. Patents\
    b. Publications\
    c. Projects\
    d. Awards


## Development

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer

```
node@v12 or higher
npm@6.14 or higher
```

## How To Use 

From your command line, clone and run developerFolio:

```bash
# Clone this repository
git clone https://github.com/rahulkalita8/portfolio-material-ui.git

# Go into the repository
cd portfolio-material-ui

# Install dependencies
npm install

# Start a local dev server
npm run start
```

## Customization

#### Personalize your content in `src/profileDetails.js`.

```javascript

const AboutDetails = {
    name: "FirstName LastName",
    about: "Random things about FirstName. Interesting hobby, some achievements. This is me."
    resumeURL: "https://resume/com/myresume.pdf"
}

const SocialMediaDetails = {...}

const SkillsDetails = {...}

const EducationDetails = {...}

const WorkExperienceDetails = {...}

const AcheivementDetails = {...}

const AccomplishmentsDetails = {...}

const ContactDetails = {...}
```

## Deployment
When you are done with the setup, you should host your website online.
We highly recommend to read through the [Deploying on Github Pages](https://create-react-app.dev/docs/deployment/#github-pages) docs for React.

#### Deploying to Github Pages

This section guides you to deploy your portfolio on Github pages.

- Navigate to `package.json` and enter your domain name in `homepage` variable. For example, if you want your site to be `https://<your-username>.github.io`, add the same to the homepage section of `package.json`.

- Optionally, configure the domain. You can configure a custom domain with GitHub Pages by adding a `CNAME` file to the `public/` folder.

- Follow through the guide to setup GitHub pages from the official CRA docs [here](https://create-react-app.dev/docs/deployment/#github-pages).

## Technologies Used 

- [React](https://reactjs.org/)
- [Material-UI](https://material-ui.com/)

## What may come in Future

- Dynamic color template

- Integrating with LinkedIn

- More sections (Hopefully)

- Support more creators
# Wealthy AI - Your Personal Finance Assistant

Run the app at amplify - https://main.ddg8iicsr72an.amplifyapp.com

Run the app at vercel - https://wealth-assist-ai.vercel.app/

## AWS Amplify Next.js (App Router) Starter Template

https://aws.amazon.com/blogs/mobile/amplify-gen2-ga/

This repository provides a starter template for creating applications using Next.js (App Router) and AWS Amplify, emphasizing easy setup for authentication, API, and database capabilities.

## Overview

This template equips you with a foundational Next.js application integrated with AWS Amplify, streamlined for scalability and performance. It is ideal for developers looking to jumpstart their project with pre-configured AWS services like Cognito, AppSync, and DynamoDB.

## Features

- **Authentication**: Setup with Amazon Cognito for secure user authentication.
- **API**: Ready-to-use GraphQL endpoint with AWS AppSync.
- **Database**: Real-time database powered by Amazon DynamoDB.

## Deploying to AWS

For detailed instructions on deploying your application, refer to the [deployment section](https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/#deploy-a-fullstack-app-to-aws) of our documentation.

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.

# wealthy-ai

Run nextjs app: 

# For production build
`docker-compose up --build web`

# For development
`docker-compose up --build web-dev`

## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://pscode.lioncloud.net/sujkundu/wealthy-ai.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://pscode.lioncloud.net/sujkundu/wealthy-ai/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Set auto-merge](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing (SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

***

# Editing this README

When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!). Thanks to [makeareadme.com](https://www.makeareadme.com/) for this template.

## Suggestions for a good README

Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.

## Name
Choose a self-explaining name for your project.

## Description
Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

## Badges
On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

## Visuals
Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

## Installation
Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

## Usage
Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support
Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap
If you have ideas for releases in the future, it is a good idea to list them in the README.

## Contributing
State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment
Show your appreciation to those who have contributed to the project.

## License
For open source projects, say how it is licensed.

## Project status
If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.


Ref:

https://stackoverflow.com/questions/78559286/installing-docker-compose-plugin-or-standalone-on-mac-apple-silicon-without

https://www.reddit.com/r/docker/comments/15m3eg5/docker_compose_nocache/?rdt=63046

### Supabase 

https://supabase.com/docs/guides/auth/server-side/nextjs

## Using Docker

# For Prod:

We will use supabase hosted instance at supabase.com 


<!-- create the network for supabase
`docker network create supabase-network` -->
# Local Supabase
We will use cli : [https://supabase.com/docs/guides/local-development](https://supabase.com/docs/guides/local-development)

Install supabase cli:
`npm install supabase --save-dev`

In your repo initialize the supabase project`
`cd server`
`supabase init`
`subabase start`

### Supabase Studio - http://127.0.0.1:54323/project/default


# using Prisma 

https://www.prisma.io/docs/getting-started/quickstart-sqlite

Run migration 

`npx prisma migrate dev --name update_uuid`

This will reflect in the Local running Supabase Database (view it using the above supabase studio link)

# Docker

```sh
cd client
cd wealthy-nextjs-web

# build docker image for the nextjs app
docker build -t nextjs-app-prod -f Dockerfile.prod . 

# test by running locally  (should run the app in http://localhost:3000)
docker run -it -p 3000:3000 nextjs-app-prod


```

ref:
https://javascript.plainenglish.io/dockerize-next-js-app-for-local-development-and-production-76db292d6bff

# AWS ECR

We will be using ecr to push the docker image to the registry 

### setup awscli 

`brew install awscli`

`aws configure`

we will be needing aws access key and secret key, for the IAM Role. Once logged

Use the following steps to authenticate and push an image to your repository. For additional registry authentication methods, including the Amazon ECR credential helper, see Registry authentication .

Retrieve an authentication token and authenticate your Docker client to your registry. Use the AWS CLI:

`aws ecr get-login-password --region ap-southeast-2 | docker login --username AWS --password-stdin 816888338923.dkr.ecr.ap-southeast-2.amazonaws.com`


Note: if you receive an error using the AWS CLI, make sure that you have the latest version of the AWS CLI and Docker installed.

Build your Docker image using the following command. For information on building a Docker file from scratch, see the instructions here . You can skip this step if your image has already been built:

`docker build -t wealthy-ai .`

After the build is completed, tag your image so you can push the image to this repository:

`docker tag wealthy-ai:latest 816888338923.dkr.ecr.ap-southeast-2.amazonaws.com/wealthy-ai:latest`

Run the following command to push this image to your newly created AWS repository:

`docker push 816888338923.dkr.ecr.ap-southeast-2.amazonaws.com/wealthy-ai:latest`
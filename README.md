# Infra Workflow Setup Leadgen 

A step-by-step guide to setting up a complete infrastructure for team and organizational workflows. This guide is fully open-source and free to implement, with no paid tools required. 

### This is a personal project i created during an internship at Mountech solutions.

## Overview  

This guide will help you set up a complete infrastructure for deploying a MERN stack web application using GitHub, Netlify, and Render.  

- Completely free to use  
- No paid tools required  
- Easy to set up  

## Requirements  

Before starting, ensure you have the following:  

1. A GitHub account with repositories for the frontend and backend  
2. A Netlify account for frontend hosting  
3. A Render account for backend deployment  
4. Node.js and npm installed on your local machine  

## Steps to Set Up Infrastructure  

### Step 1: GitHub Repository Setup  

1. Create two repositories on GitHub:  
   - One for the frontend  
   - One for the backend
   - **If you don’t have a project right now, I have already provided a dummy React frontend and a basic Node backend API source code in this repo. You can use them to test out this infrastructure as well.**

2. Upload your respective source code files to these repositories, ensuring that you exclude the node_modules directory by adding a .gitignore file.  

### Step 2: Set Up Your Local Machine  

1. Create a directory for your project and navigate into it  
   ```bash
   mkdir my-project && cd my-project
   ```

2. Clone the repositories  
   ```bash
   git clone <frontend-repo-url>
   git clone <backend-repo-url>
   ```

3. Install dependencies  
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

### Step 3: Set Up GitHub Authentication Using a Personal Access Token  

To securely push and pull from your repositories, set up GitHub authentication using a Personal Access Token (PAT).  

#### Generate a GitHub Personal Access Token  

1. Go to GitHub and navigate to Settings > Developer settings > Personal Access Tokens.  
2. Click "Generate new token" and select "Fine-grained tokens".  
3. Set an expiration date or select "No expiration".  
4. Under repository access, choose either "All repositories" or specific repositories.  
5. Under permissions, enable the following:  
   - repo: Full control of private repositories  
   - workflow: Read and write access (if using GitHub Actions)  
6. Click "Generate token" and copy it. You will not be able to view it again.  

#### Store the Token Globally on Your Machine  

##### Using Git Credential Manager (Recommended)  

Run the following command to securely store the token:  

```bash
git credential reject https://github.com
git credential approve https://github.com <<EOF
protocol=https
host=github.com
username=your-github-username
password=your-personal-access-token
EOF
```

##### Using Git Config (Less Secure)  

1. Set Git to store credentials:  
   ```bash
   git config --global credential.helper store
   ```

2. Run the following command and enter your token when prompted:  
   ```bash
   git credential approve https://github.com
   ```

3. Enter the following details:  
   ```
   protocol=https
   host=github.com
   username=your-github-username
   password=your-personal-access-token
   ```

####  Verify Authentication  

To check if GitHub recognizes your authentication, run:  

```bash
git ls-remote https://github.com/your-username/your-repo.git
```

If the command executes successfully, your authentication is set up correctly.  


### Step 4: Frontend setup on Netlify
1. Open your Netlify account and add a new site by navigating to   
   - Dashboard > Add a new site > Import an existing project > Github 
   - Authorize Github and select your frontend repository
   - Configure build and other commands and press deploy
2. Once your site is deployed
   - Navigate to site overview > site configuration > Build & deploy > Branches and deploy contexts
   - Click configure and set "Branch deploys" to "All" & "Deploy Previews" to "Any pull request against your production branch / branch deploy branches"
   - Click save

3. If you want to create manual triggers to trigger builds for any branch
   - You can Create a new build hook url over a specific branch and use it to trigger the build process
   - For automating Netlify builds via GitHub Actions, the recommended approach is to use Netlify API tokens.
   - Or you can use deploy keys within your github actions 

  
### Step 5: Backend setup on Render
1. Open your render account and add a new service by navigating to   
   - Dashboard > Add new > Web Service > Github 
   - Select git provider, Authorize github and choose the backend repository 
   - Enter your project name, region, build and start commands
   - Select the free instatance type
   - Setup environment variables if you have any
   - And then Deploy
2. After the backend is successfully deployed you will get the link to your web service
   - Copy that link
  
### Step 6: Connect frontend with backend
   - Paste the copied backend link in the frontend source code where it is supposed to connect with backend
   - **Keep in mind that you are using cors for in your project for api connection otherwise you might face "request rejected" or "Failed to fetch" error while connecting**


### Hooray! your team/organizational workflow is now up and running.

**To Access the site go to the project-name you set on netlify like**
```bash
https://<your-netlify-project-name>.netlify.app
```

#### To test:
 - Create a branch on the frontend main repo
 - make some changes, commit and push to origin <repo-name>
 - then in the browser enter
```bash
https://<reponame>--<project-name>.netlify.app
```
 - Basically use your new repo name with -- and you app url

### There you go now each branch you create in the frontend repo will have its own subdomain url for you to preview.

### For the Backend repo changes only in the main branches will be reflected on the api.
- You can create multiple branches there but the build will only trigger when there is a change in the main branch or when you merge or rebase your main branch.


## Happy Hosting ;)

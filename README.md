# Infra Workflow Setup  

A step-by-step guide to setting up a complete infrastructure for team and organizational workflows. This guide is fully open-source and free to implement, with no paid tools required.  

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

### Step 4: Verify Authentication  

To check if GitHub recognizes your authentication, run:  

```bash
git ls-remote https://github.com/your-username/your-repo.git
```

If the command executes successfully, your authentication is set up correctly.  


### Step 4: Setup Frontend on Netlify
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

  
### Step 4: Setup 


 

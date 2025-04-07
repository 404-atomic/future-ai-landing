# Sanity CMS Setup

This document explains how to set up Sanity CMS integration with this project.

## Prerequisites

- Sanity account
- Sanity CLI installed (`npm install -g @sanity/cli`)

## Setup Instructions

### 1. Configure CORS in Sanity

You need to allow your frontend application to make requests to Sanity:

1. Go to [https://www.sanity.io/manage](https://www.sanity.io/manage)
2. Select your project (project ID: "dn30ktjt")
3. Go to API → CORS origins
4. Add the following origins:
   - `http://localhost:3000` (for development)
   - Your production domain (e.g., `https://yourdomain.com`)
5. Check "Allow credentials" if needed

### 2. Create a Sanity API Token

1. In the Sanity dashboard, go to API → Tokens
2. Click "Add API token"
3. Name your token (e.g., "Website Integration")
4. Choose permissions (Read for read-only access, or Write if you'll be submitting data)
5. Copy the generated token

### 3. Set Up Environment Variables

1. Create a `.env` file in the root of your project if it doesn't exist
2. Add your Sanity token:
   ```
   REACT_APP_SANITY_TOKEN=your_sanity_token_here
   ```
3. Replace `your_sanity_token_here` with the token you copied in step 2

**Note:** The `.env` file is ignored by git to avoid exposing your tokens. Make sure to set up environment variables properly in your production environment.

## Troubleshooting

### 403 Forbidden Error

If you see a 403 Forbidden error when trying to fetch data:

1. Verify your CORS settings in the Sanity dashboard
2. Check that your token is correctly set in the `.env` file
3. Make sure the token hasn't expired
4. Restart your development server after making changes to environment variables

### Token Not Being Applied

If your token is set but requests are still unauthorized:

1. Make sure you're restarting your development server after changing environment variables
2. Check that the environment variable is named correctly (`REACT_APP_SANITY_TOKEN`)
3. Verify that the client configuration is correctly using the token 
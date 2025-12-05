# Vercel Environment Variables Setup

## Required Environment Variables for Vercel Deployment

When deploying to Vercel, you need to add the following environment variables:

### Step 1: Go to Vercel Dashboard
1. Navigate to your project on [vercel.com](https://vercel.com)
2. Click on your project
3. Go to **Settings** → **Environment Variables**

### Step 2: Add Environment Variables

Add the following variable:

| Variable Name | Value | Environment |
|-------------|-------|-------------|
| `VITE_CLOUDINARY_CLOUD_NAME` | `dcfe3424s` | Production, Preview, Development |

### Step 3: Optional - Version Number

If your Cloudinary URLs include version numbers (like `v1764942385`), you can optionally add:

| Variable Name | Value | Environment |
|-------------|-------|-------------|
| `VITE_CLOUDINARY_VERSION` | `1764942385` (your version number) | Production, Preview, Development |

**Note:** Leave this empty if you want to use the latest version of your assets.

### Step 4: Redeploy

After adding the environment variables:
1. Go to **Deployments** tab
2. Click the three dots (⋯) on your latest deployment
3. Click **Redeploy**

Or simply push a new commit to trigger a new deployment.

## Local Development

For local development, the `.env.local` file has been created with the default values. 
The app will work out of the box, but you can modify `.env.local` if needed.

**Important:** Never commit `.env.local` to git (it's already in `.gitignore`)


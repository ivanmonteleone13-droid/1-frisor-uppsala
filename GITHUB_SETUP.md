# GitHub Setup — #1 Frisör Uppsala

## Prerequisites

- Git installed
- GitHub account

## Step 1 — First Commit (local)

```powershell
cd C:\Jarvis\projects\business-3-1-frisor-uppsala
git add -A
git commit -m "Initial commit: #1 Frisör Uppsala premium site ready for Vercel"
```

## Step 2 — Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. **Repository name:** `business-3-1-frisor-uppsala` (or `frisor-uppsala`)
3. **Visibility:** Private or Public
4. **Do NOT** initialize with README
5. Click **Create repository**

## Step 3 — Push to GitHub

```powershell
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/business-3-1-frisor-uppsala.git
git push -u origin main
```

## Step 4 — Verify

Confirm all premium components and source files are pushed.

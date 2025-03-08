Drowning Dog / Gap Bridge community
---

- Gap Year Project Collaboration Platform

This is a project built with Next.js to help users form teams and work on real-world projects during their Gap Year, 
gaining experience and creating value. The project is deployed on Cloudflare Pages, leveraging its global CDN and edge 
computing capabilities to deliver fast and reliable access.

Project Structure
- Framework: Next.js (App Router)

- Styling: Tailwind CSS

- Deployment: Cloudflare Pages

- Build Tool: @cloudflare/next-on-pages

Quick Start
1. Install Dependencies
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

2. Local Development
   Start the Next.js development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open http://localhost:3000 to view the project.

3. Simulate Cloudflare Environment
   To simulate the Cloudflare Pages deployment environment locally, run the following command:

```bash
npm run pages:dev
```

This command will first build the project and then start a local development server that mimics the Cloudflare Pages runtime environment.

Build and Deployment


## 1. Build the Project
   Run the following command to generate static files:

```bash
npm run pages:build
```

The build output will be saved in the [.vercel/output/static] directory.

## 2. Deploy to Cloudflare Pages
   After pushing the project to the Git repository, Cloudflare Pages will automatically detect changes and deploy the 
   project. You can also manually trigger a deployment:

Log in to Cloudflare Pages.

Select your project.

Click the "Deploy" button.

Development Guide
1. 
2. Environment Variables
   Create a .env file in the project root directory and add the following environment variables:

```env
# Next.js Environment Variables
NEXT_PUBLIC_API_URL=https://api.example.com

# Cloudflare Pages Environment Variables
CF_PAGES=1
CF_PAGES_BRANCH=main
```

## 3. Git Commit Guidelines
   Please follow the commit message format below:

| Type     | Description                                 | Example                                    |
|----------|---------------------------------------------|--------------------------------------------|
| feat     | A new feature                               | feat: add user authentication feature      |
| fix      | A bug fix                                   | fix: resolve user login issue              |
| docs     | Documentation changes                       | docs: update README installation guide     |
| style    | Code style changes (no functional changes)  | style: format code according to ESLint     |
| refactor | Code refactoring (no bug fixes or features) | refactor: improve user service readability |
| perf     | Performance improvements                    | perf: optimize image loading speed         |
| test     | Adding tests                                | test: add unit tests for auth module       |
| chore    | Other changes (e.g., dependency updates)    | chore: update dependencies to latest       |


## 3. Code Standards

Use [ESLint](https://eslint.org) for code linting.


Run the following command to check the code:

```bash
npm run lint
```

Tech Stack

Frontend Framework: [Next.js](https://nextjs.org/)

Styling Library: [Tailwind CSS](https://tailwindcss.com/)

Font: [Geist](https://vercel.com/font) (optimized with `next/font`)

Deployment Platform: [Cloudflare Pages](https://pages.cloudflare.com/)

Build Tool: `@cloudflare/next-on-pages`

Learning Resources
[Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and APIs.

[Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial.

[Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/) - Learn how to deploy to Cloudflare Pages.

Contributing

We welcome issues and pull requests! Please ensure your code follows the project's coding standards and adheres to the 
Git commit message format.

License
This project is licensed under the MIT License.

Contact
If you have any questions, feel free to reach out:

Email: `TBA`

Website: https://gapbridgecommunity.com
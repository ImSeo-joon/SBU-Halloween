# Halloween at Stony Brook — GitHub Pages edition

## Which folder should I upload?

Upload the **contents of this folder** to your GitHub repository. `index.html` must be directly in the repository root. Do not upload the ZIP itself as the website, or put this folder inside another folder unless you configure Pages for that location.

This is the ready-to-publish static version. No npm install, build command, API keys, or database setup is needed.

```text
YOUR-REPOSITORY/
├── index.html
├── app.js
├── zones.js
├── pages-wishes.js
├── style.css
├── zones.css
├── theme.css
├── assets/
│   └── sbu-halloween-night.png
├── .nojekyll
└── README.md
```

## Publish it

1. Create or open your GitHub repository. A public repository supports GitHub Pages on GitHub Free; private-repository support depends on your plan.
2. Use **Add file → Upload files** and upload all files above, including the `assets` folder. Commit to `main`. Alternatively, push these files using Git.
3. Open **Settings → Pages → Build and deployment**.
4. Set **Source: Deploy from a branch**, **Branch: main**, **Folder: / (root)**, then **Save**.
5. Wait for the Pages deployment to finish. Open the URL shown in Settings → Pages. A project URL normally looks like `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`.

All website file paths are relative, so both a repository subpath and a root/custom-domain deployment can load the assets. Upload the files, not the original framework source or `node_modules`.

## Can every feature work on GitHub Pages?

**No: the shared database and sign-in need a separate server.** GitHub Pages serves static HTML, CSS, and JavaScript. This export deliberately provides a clearly labeled personal wish collection instead of making requests to nonexistent `/api` endpoints.

| Feature | In this GitHub Pages folder |
| --- | --- |
| Background, mobile layout, navigation | Works |
| Stony Brook local clock and 2026 Halloween countdown | Works |
| Costume oracle and virtual candy | Works; progress stays in this browser |
| Activity ideas and saved activity list | Works; saved in this browser |
| Handwriting, pen colors, undo, and typed wishes | Works |
| Wish image download | Works |
| Saving and removing personal wishes | Works on this device/browser; requires browser storage |
| Wish filters | Works on the personal collection |
| Wishes shared across students/devices | Requires separate backend; not included on Pages |
| Shared heart reactions | Requires separate backend; not shown in this edition |
| ChatGPT sign-in and private Sites access gate | Not included on Pages |
| Six roles, role quiz, and quest checklist | Works; progress stays in this browser |
| Role character-card image download | Works |
| Pumpkin designer and image download | Works |
| Halloween passport | Works; saved in this browser |
| Copying a Halloween wish | Works on HTTPS when clipboard access is allowed; selectable-text fallback is included |

Browser storage is not an account or a backup: clearing site data, using a different browser/device, or some private-browsing settings can remove or hide saved progress. Download wish images you want to keep. This edition supports up to 100 personal wishes per browser. Fonts load from Google Fonts when available; fallback fonts work if they cannot load.

## Keep using the real shared wall

The existing hosted version still has the server-backed shared wall:

[Open the hosted community wall](https://after-dark-ahu-sbu-halloween-2026.chenjun-lin100316.chatgpt.site/#wish-wall)

It requires ChatGPT sign-in and permission to access that private site. This Pages export includes a link to it, but does not copy its database, grant access, or sync personal wishes to it.

For a single GitHub Pages website with a fully shared wall, the next step is a separately hosted API/database and authentication, then connecting the Pages frontend to it. The original full-service source uses the Sites/Vinext runtime, Cloudflare D1, and dispatch-provided identity headers. Uploading that source to GitHub alone does not run those services. Those identity headers must come from a trusted authenticated host, not from browser input.

The source ZIP delivered separately (`stony-brook-halloween-source.zip`) is the full-service reference. **Use this folder's files for GitHub Pages.**

## Checks performed

The export was checked for JavaScript syntax, combined HTML sections, relative asset paths under a simulated repository subpath, browser-local wish storage, and browser interactions. The hosted original is unchanged. GitHub deployment itself has not been performed because no target repository was provided.

## Official references

- [What is GitHub Pages?](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [Configure a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

This is an independent Halloween tribute, not an official Stony Brook event.

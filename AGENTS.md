<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Package manager

Use **Bun** for all package management and scripts. Lockfile is `bun.lock`.

- Install deps: `bun install`
- Add a dependency: `bun add <pkg>` (dev: `bun add -d <pkg>`)
- Remove: `bun remove <pkg>`
- Run scripts: `bun run <script>` (e.g. `bun run dev`)

Do NOT use `npm`, `pnpm`, or `yarn`. There is no `package-lock.json`; do not recreate one.

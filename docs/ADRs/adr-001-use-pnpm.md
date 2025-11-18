# Architectural Decision Record: Use PNPM as Package Manager

## Status
Accepted

## Context
This project is a monorepo managed with Turborepo, containing multiple applications and packages. Choosing an efficient package manager is crucial for developer productivity, dependency management, and build performance.

## Decision
We have decided to use [PNPM](https://pnpm.io/) as the package manager for this monorepo.

## Consequences
- **Performance:** PNPM uses a content-addressable filesystem, resulting in faster installs and reduced disk space usage compared to npm and Yarn.
- **Monorepo Support:** PNPM has first-class support for monorepos, making it easier to manage dependencies across multiple packages and apps.
- **Strictness:** PNPM enforces strict dependency resolution, helping to avoid issues with missing or hoisted dependencies.
- **Community & Ecosystem:** PNPM is widely adopted and well-supported in the JavaScript ecosystem.

## Alternatives Considered
- **npm:** The default package manager for Node.js, but slower and less efficient for monorepos.
- **Yarn:** Good monorepo support, but PNPM offers better performance and stricter dependency management.

## References
- [PNPM Documentation](https://pnpm.io/)
- [Turborepo Documentation](https://turbo.build/repo/docs)

---
*Date: 2025-09-09*
*Author: pabloflego*

# Vulnariee Benchmark Lab (Base + Environment)

Local benchmark harness for **authorized, local-only** web security testing.

## Included Attack Vector Suites

Current modeled suites include:

- SQLi
- NoSQLi
- XSS
- Command Injections
- LDAP Injection
- XPATH Injection
- GraphQLi
- Header Injection
- URLParamInjection

See `testvuln.md` for the complete vulnerability catalog.

## Safety boundaries

- Run only on isolated local machines or lab networks.
- Never expose this stack to the public internet.
- Use synthetic/throwaway data only.
- Test only with explicit authorization.

## Required environment

`docker-compose.yml` provisions:

- `app` (Node.js local server)
- `postgres` (SQL target data)
- `mongo` (NoSQL target data)
- `openldap` (directory service target data)
- `graphql-target` (local GraphQL placeholder target on port 4000)

Initialization seed files:

- `infra/postgres/init.sql`
- `infra/mongo/init.js`

## Run locally

```bash
docker compose up --build
```

App URL: `http://127.0.0.1:3000`

## Validate scenarios

```bash
npm run check:scenarios
```

## API

- `GET /healthz`
- `GET /api/scenarios`
- `GET /api/scenarios/:id`
- `/challenge/:id` (scenario handler placeholder)

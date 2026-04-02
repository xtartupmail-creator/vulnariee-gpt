# testvuln.md

## Intentionally Added Vulnerability Catalog (Modeled)

The following are modeled benchmark placeholders for authorized local testing.

### Command Injections (20)
1. cmdi-01 - Chained Shell Metacharacter Injection
2. cmdi-02 - Environment Variable Expansion Injection
3. cmdi-03 - Command Substitution Injection
4. cmdi-04 - Argument Injection via Quoted Context
5. cmdi-05 - File Redirection Injection
6. cmdi-06 - Pipeline Injection in Utility Wrapper
7. cmdi-07 - Option Smuggling to System Binary
8. cmdi-08 - Path Traversal + Command Chain
9. cmdi-09 - Template-Driven Command Construction
10. cmdi-10 - Escaping Failure in PowerShell Adapter
11. cmdi-11 - Background Job Injection
12. cmdi-12 - Command Injection in Log Rotation Tool
13. cmdi-13 - Multi-tenant Context Command Drift
14. cmdi-14 - Unicode Separator Command Split
15. cmdi-15 - Staged Injection via Deferred Task
16. cmdi-16 - CLI Alias Expansion Abuse
17. cmdi-17 - Configuration-Driven Command Taint
18. cmdi-18 - Container Exec Wrapper Injection
19. cmdi-19 - Blind Command Injection with Side-channel
20. cmdi-20 - Command Injection via Archive Handler

### LDAP Injection (20)
1. ldapi-01 - Authentication Filter Injection
2. ldapi-02 - Wildcard Enumeration Injection
3. ldapi-03 - Attribute Selector Injection
4. ldapi-04 - Base DN Manipulation Injection
5. ldapi-05 - Logical Operator Precedence Abuse
6. ldapi-06 - Escaped Character Normalization Bypass
7. ldapi-07 - Nested Filter Injection
8. ldapi-08 - LDAP URL Injection
9. ldapi-09 - Group Membership Filter Abuse
10. ldapi-10 - Password Reset Lookup Injection
11. ldapi-11 - Search Scope Escalation Injection
12. ldapi-12 - Alias Dereferencing Injection
13. ldapi-13 - Paged Results Injection Abuse
14. ldapi-14 - Referral Chaining Injection
15. ldapi-15 - Schema Query Injection
16. ldapi-16 - Account Lockout Bypass Filter Injection
17. ldapi-17 - Synchronization Endpoint LDAPi
18. ldapi-18 - Cross-tenant Directory Pivot Injection
19. ldapi-19 - Directory Sort Control Injection
20. ldapi-20 - Virtual List View Injection

### XPATH Injection (20)
1. xpathi-01 - Predicate Logic Injection
2. xpathi-02 - String Concatenation XPathi
3. xpathi-03 - Namespace Prefix Confusion Injection
4. xpathi-04 - Boolean XPath Blind Injection
5. xpathi-05 - Node Set Expansion Injection
6. xpathi-06 - Attribute Axis Injection
7. xpathi-07 - Document Function Abuse
8. xpathi-08 - Union Operator XPath Injection
9. xpathi-09 - Position Function Manipulation
10. xpathi-10 - Contains/Starts-With Injection
11. xpathi-11 - XPath Variable Binding Injection
12. xpathi-12 - Comment Truncation XPathi
13. xpathi-13 - Encoded Character XPath Bypass
14. xpathi-14 - Second-Order XPath Injection
15. xpathi-15 - XPathi in SSO Assertion Mapping
16. xpathi-16 - Cross-Document Query Injection
17. xpathi-17 - XPath Injection in Search Facets
18. xpathi-18 - Schema-Aware XPath Type Confusion
19. xpathi-19 - XPath Error Oracle Trigger
20. xpathi-20 - XPathi Through API Gateway Transform

## Test-case coverage
- Each modeled vulnerability folder includes 20 documented advanced test cases in `test-cases.json`.
- Coverage added in this update: 60 vulnerabilities × 20 test cases = 1200 documented test cases.

### GraphQLi (20)
1. gqli-01 - GraphQL Resolver Argument Injection
2. gqli-02 - Alias Abuse Query Injection
3. gqli-03 - Nested Fragment Injection Path
4. gqli-04 - Directive Injection in Query AST
5. gqli-05 - Schema Introspection Abuse Path
6. gqli-06 - Batched Operation Injection
7. gqli-07 - Variable Type Coercion Injection
8. gqli-08 - Mutation Input Injection Chain
9. gqli-09 - Field-Level Auth Bypass Injection
10. gqli-10 - Persisted Query Tampering Injection
11. gqli-11 - GraphQL-to-SQL Bridge Injection
12. gqli-12 - Federation Boundary Injection
13. gqli-13 - Subscription Filter Injection
14. gqli-14 - GraphQL Error Oracle Injection
15. gqli-15 - DataLoader Cache Poisoning Injection
16. gqli-16 - Custom Scalar Parsing Injection
17. gqli-17 - Pagination Cursor Injection in GraphQL
18. gqli-18 - Union/Interface Resolver Injection
19. gqli-19 - Operation Name Routing Injection
20. gqli-20 - Multi-tenant Context GraphQL Injection

### Header Injection (20)
1. hdrinj-01 - CRLF Response Header Injection
2. hdrinj-02 - Host Header Poisoning Chain
3. hdrinj-03 - Forwarded Header Trust Injection
4. hdrinj-04 - X-Original-URL Override Injection
5. hdrinj-05 - Cache-Control Header Manipulation
6. hdrinj-06 - CSP Header Downgrade Injection
7. hdrinj-07 - JWT Header Algorithm Confusion
8. hdrinj-08 - Proxy Header Routing Injection
9. hdrinj-09 - Content-Disposition Header Injection
10. hdrinj-10 - Location Header Open Redirect Injection
11. hdrinj-11 - Security Header Duplication Race
12. hdrinj-12 - Set-Cookie Attribute Injection
13. hdrinj-13 - Request Smuggling via Header Folding
14. hdrinj-14 - Trace Context Header Injection
15. hdrinj-15 - Referer/Header Correlation Injection
16. hdrinj-16 - Origin Header Validation Bypass
17. hdrinj-17 - Accept-Language Header Abuse
18. hdrinj-18 - User-Agent Parser Injection
19. hdrinj-19 - Header Canonicalization Bypass
20. hdrinj-20 - Hop-by-Hop Header Confusion

### URLParamInjection (20)
1. urlpi-01 - Duplicate Parameter Ambiguity Injection
2. urlpi-02 - Parameter Pollution Across Layers
3. urlpi-03 - Encoded Delimiter Parameter Injection
4. urlpi-04 - Nested Parameter Object Injection
5. urlpi-05 - Route Parameter Override Injection
6. urlpi-06 - Signed URL Parameter Tampering
7. urlpi-07 - Pagination Parameter Injection
8. urlpi-08 - Sort/Filter Parameter Injection
9. urlpi-09 - Feature-Flag URL Parameter Injection
10. urlpi-10 - Locale Parameter Injection Abuse
11. urlpi-11 - Debug Parameter Escalation
12. urlpi-12 - Callback URL Parameter Injection
13. urlpi-13 - Tenant Parameter Boundary Bypass
14. urlpi-14 - Boolean Toggle Parameter Injection
15. urlpi-15 - Array Parameter Injection in Bulk API
16. urlpi-16 - Deserializer Parameter Injection
17. urlpi-17 - Open Redirect via ReturnURL Parameter
18. urlpi-18 - Path Segment/Query Mix Injection
19. urlpi-19 - URL Parameter Cache Key Poisoning
20. urlpi-20 - API Gateway Query Rewrite Injection

## Expanded attack-type matrix (advanced taxonomy)

> This matrix is for controlled benchmark planning and documentation. It avoids payload-level exploit instructions.

### GraphQLi - known type coverage index
- Resolver argument injection
- Field projection abuse
- Alias-based ambiguity abuse
- Fragment injection
- Directive abuse
- Introspection abuse
- Variable coercion abuse
- Scalar parser abuse
- Input object pollution
- Nested depth/complexity abuse
- Batched request abuse
- Persisted query tampering
- Operation-name routing confusion
- Authz bypass via field-level resolver mismatch
- Federation boundary trust abuse
- Subscription filter injection
- Error oracle–assisted inference
- DataLoader cache poisoning
- Cursor/token tampering
- Query-to-backend translator injection
- GraphQL endpoint method confusion
- GraphQL over GET cache poisoning
- Multi-tenant context bleed
- AST validation bypass regression
- Schema stitching trust abuse
- Deprecated field exposure abuse
- Union/interface resolver confusion
- Custom directive policy bypass
- Rate-limit bypass via query shaping
- Response shaping side-channel abuse

### Header Injection - known type coverage index
- CRLF header injection
- Response splitting
- Host header poisoning
- X-Forwarded-* trust abuse
- Forwarded header injection
- X-Original-URL / X-Rewrite-URL override
- Cache poisoning via varied headers
- CSP header downgrade/overwrite
- HSTS suppression/override
- Set-Cookie attribute injection
- Location header injection
- Content-Disposition injection
- CORS origin header abuse
- Referer spoof trust abuse
- User-Agent parser injection
- Accept-Language parser abuse
- JWT header algorithm confusion
- Trace-context poisoning
- Hop-by-hop header confusion
- Header canonicalization differentials
- Duplicate header ambiguity
- Proxy routing header abuse
- Internal auth header spoofing
- Request smuggling via malformed headers
- Header folding legacy parsing abuse
- TE/CL mismatch interactions
- Security header stripping by intermediaries
- CDN/proxy cache key poisoning
- Upstream override header abuse
- Header-based tenant routing abuse

### URLParamInjection - known type coverage index
- HTTP parameter pollution
- Duplicate key precedence abuse
- Encoded delimiter parameter splitting
- Nested object parameter injection
- Array parameter coercion abuse
- Route/query collision ambiguity
- Signed URL parameter tampering
- Cursor/pagination parameter tampering
- Sort/filter expression injection
- Feature-flag parameter abuse
- Debug/admin toggle parameter abuse
- Locale/region parameter abuse
- Return/callback URL parameter injection
- Redirect parameter open-redirect abuse
- Tenant/account scope parameter bypass
- Boolean coercion bypass
- Numeric coercion/overflow abuse
- Null-byte/terminator parameter abuse
- Path-segment/query confusion
- Matrix parameter parsing abuse
- Fragment-to-query bridge abuse in SPAs
- URL decoder differential abuse
- API gateway rewrite parameter abuse
- SSRF-style URL parameter abuse in fetchers
- Cache key poisoning via query params
- Parameter shadowing across middleware
- Canonicalization mismatch across tiers
- Multi-value query parser inconsistency
- Serialization/deserialization parameter abuse
- Time-of-check/time-of-use parameter race



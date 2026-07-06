# autter-demo-nextjs-saas

A broken SaaS-style Next.js dashboard with mock auth, organizations, projects, invites, usage tracking, plan limits, analytics, and a billing webhook.

This is an **Autter Sandbox** repository. It intentionally contains realistic bugs and risky implementation patterns so design partners can test AI-editor workflows and Autter review quality.

## How to use this with Autter

1. Pick a challenge
2. Paste the suggested prompt into your AI code editor
3. Make the fix
4. Open a PR
5. Let Autter review it
6. Fix what Autter catches

## Challenges

| Challenge | Difficulty | Category | Expected Autter review angle |
| --- | --- | --- | --- |
| [Broken session handling after browser refresh](./challenges/broken-session-handling-after-browser-refresh.md) | Medium | Auth | fragile auth state handling |
| [Missing webhook signature verification](./challenges/missing-webhook-signature-verification.md) | Medium | Security | security risk at an external trust boundary |
| [Cross-org project access bug](./challenges/cross-org-project-access-bug.md) | High | Authorization | tenant isolation and authorization bypass |
| [Usage counter race condition](./challenges/usage-counter-race-condition.md) | High | Reliability | data consistency and concurrency risk |
| [API leaks stack traces](./challenges/api-leaks-stack-traces.md) | Low | Security | information disclosure |
| [Invite acceptance missing expiry check](./challenges/invite-acceptance-missing-expiry-check.md) | Medium | Business logic | broken business logic and missing edge-case tests |
| [Dashboard N+1 query pattern](./challenges/dashboard-n-1-query-pattern.md) | Medium | Performance | performance regression risk |
| [Generated validation logic is duplicated and inconsistent](./challenges/generated-validation-logic-is-duplicated-and-inconsistent.md) | Low | Maintainability | maintainability risk and behavior drift |

## Local development

Install dependencies, run the test suite, then pick a challenge. Some tests intentionally document broken behavior with expected-failure markers; they are part of the sandbox design.

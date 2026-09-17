<!-- stardust provenance: skill=stardust:dynamics · phase=classify-triage · planning artifact only; no feature implementation -->
# ALC dynamic-feature delivery plan

## Guardrails

- Preserve a complete, usable static English page before wiring behavior.
- Use only captured content and recorded endpoints/hosts. Never fabricate service responses, legal/financial copy, form success, scores, translations, IDs, or consent.
- Keep all account, cart, payment, purchase, balance, and other real-money flows on the production ALC origin through captured outbound/deep links.
- Keep every marketing, analytics, advertising, personalization, CMP, and tag-manager integration disabled until **MKT-01** is resolved.
- English is the only current locale. French is the named **LOCALE-01** deferred wave.
- This plan does not authorize implementation; it defines the post-gate deliverables and checks.

## Phased deliverables

| phase | deliverables | authoring contract | verification | owner decision / interim assumption | effort |
|---|---|---|---|---|---|
| 0 — static baseline | English pages render from captured content; account/transaction hand-offs remain ordinary links; decided-out guards documented | Author captured headings, text, media URLs, and links; no dynamic-only section may become blank; do not add endpoint responses | All migrated routes return usable main content without JavaScript; outbound ALC deep links remain intact; no account/cart API calls on preview | **COM-01**, **AEM-01** already select hand-off/decided-out behavior | 0.5–1 engineer-day |
| 1 — disabled integration scaffold | One owner-facing integration configuration covering 12 observed integrations, all disabled; consent groups and property IDs are placeholders, never source IDs copied automatically | No per-page tag authoring. Page metadata may map to a data-layer contract only after approval. Sandbox host guard and default `enabled: false` are mandatory | Before approval: zero requests to every gated host. After future approval: decline still emits zero; accept matches only the owner-approved host list | **MKT-01:** owner supplies property IDs, CMP/consent approval, categories, and allowed hosts; interim is disabled | 0.5–1 day for scaffold; activation excluded |
| 2 — English indexes | Published `site-search` query index, English `/search` results page, `corporate-releases` index, and document-first release listing | Use the Listings contract in `dynamic-features.md`. Search accepts `?q=`/captured `q`; fields are `title`, `path`, `description`, optional `image`, `lang`, `text`; releases also author ISO `publishdate` | Known English term returns expected page; title-first ranking, excerpt, empty state, and pagination work. New published release appears after index settles; authored rows equal index; listing readability ≥98 | **INDEX-01:** second/non-migrated corpora are out; no French mixing | 2–4 days |
| 3 — safe interim surfaces | Captured header promo, alerts, and healthy-play content remain static; unresolved Google data request remains absent/under inspection; footer subscription and questionnaire controls remain visibly non-submitting/non-scoring; settled “Who is AL” content remains present | Static service content carries no invented values. Future snapshots require provenance/time. Forms retain captured labels/options; no `Action` or success copy without owner endpoint/logic | Compare static content with capture; preview makes no dead AEM or unresolved data-host calls. Empty/filled form interaction cannot claim delivery or a result. “Who is AL” main is non-blank | **CONTENT-01**, **DATA-01**, **FORM-01**, **CAPTURE-01** assumptions remain until owners act | 2–3 days |
| 4 — public media and regression | Captured YouTube URL remains a passthrough; all dynamic classifications become parity checks | Author player URL/ID as content; never derive/reuse IDs across locale trees | Iframe exists and playback request returns <400; no console errors from removed AEM consumers; static page still works if media fails | YouTube is `self`/`done`; no owner decision | 0.5–1 day |
| 5 — rollout gate | Automated inventory/status check, owner decision log, human blank-page check, and no-tracker network check | Every curated row keeps a closed-set disposition/reproducibility/status/pattern; rollout updates status only after evidence | Zero missing dispositions; zero `pending`; zero unapproved tag hosts; English search/listing flows pass; human recapture if “Who is AL” is blank | Interim decisions are not blockers; any regulated collection would be a blocker | 1–2 days |
| deferred — French locale wave | French tree, chrome, results page/index, per-page alternates, locale-specific media IDs and lifted strings | One locale manifest; `lang` metadata; `alternate-<lang>` metadata; strings lifted from French evidence or marked owner-required—never translated by the migration | `<html lang>`, alternates, switcher round trip, French-only results, media ID, modal headings, and encoded anchors | **LOCALE-01:** Localization schedules/provides French evidence and approvals | 3–6 days after English, excluded from current run |

Estimated current-wave implementation effort is **6.5–12 engineer-days**, excluding owner activation, French, production backend work, publishing latency, and content remediation.

## Authoring contracts by surface

### Search and listings

- Search always includes a results page; the captured header/mobile action must not point to an unserved route.
- Query indexes are configured through the EDS admin configuration service and built from published content.
- Corporate releases are document-first. Author release card words in the document, then use the index only to top up newly published pages.
- Use only page-intrinsic values or explicitly authored metadata. A flat index must not invent many-to-many relationships.

### Host-bound AEM services

- `/services/HeaderPromoServlet`, `/services/AlertServlet`, and `/services/loyalty/healthyplay` degrade to captured static content under **CONTENT-01**.
- `/services/corporate-releases` becomes the `corporate-releases` query index under **INDEX-01**.
- `/services/pam/Dashboard` is session/account functionality and is decided-out under **COM-01**.
- The preview-origin 404s are recorded as `host-bound`; no relative call may silently remain and no empty/fake JSON response may be introduced.
- `jnn-pa.googleapis.com` is genuinely unresolved evidence, so it remains `inspect`/`interim`; no request is made until **DATA-01** identifies its consumer and purpose.

### Forms and client-only UI

- Footer subscription keeps email and terms controls but has no working submission until the CRM owner supplies an endpoint, consent wording, field mapping, and success copy.
- The nine-question assessment keeps its controls but cannot claim scoring or submission until PlayWise supplies the outcome contract.
- Until then, the UI must state that submission/results are unavailable. It must never use a generic sheet for regulated or account data.

### Tags and consent

- One disabled configuration represents Evergage, Google Analytics/Ads, Reddit, Yahoo, GTM, Pinterest, DoubleClick/Trade Desk, Snapchat, Tapad, GumGum, and TikTok plus the data-layer mapping.
- Activation is a later owner-controlled change. Consent denial must prevent every vendor request; source trackers and captured identifiers are evidence, not authorization.

### Locale and client-rendered content

- Current pages author `lang=en`. Both captured alternate spellings (`en/fr`, `en-CA/fr-CA`) inform the deferred manifest, but do not authorize French content generation.
- The captured settled “Who is AL” DOM is the static source. Rollout must stop that page—not the whole interim plan—if its migrated main is blank, until human recapture succeeds.

## Verification ledger

| check | pass condition | evidence produced later |
|---|---|---|
| Inventory integrity | 31 rows; every row has class, disposition, reproducibility, non-`pending` status, pattern, owner/decision, evidence, and available reach | Curated Markdown parser/count report |
| Static-first | Every English route has meaningful main content before JavaScript and before services/tags | Route + main-text report |
| Host binding | No preview request to dead AEM service/runtime paths; no fabricated response | Network/console report |
| Search | Known query, ranking, excerpt, pagination, empty state, and served results page pass | `form-flow`/search flow |
| Releases | Authored rows match index; new publish tops up; readability ≥98 | Listing parity/index totals |
| Forms | Empty/filled interactions cannot report submission or scoring without approved backend/logic | Form-flow capture |
| Tags | Declined/unconfigured state makes zero requests to all observed marketing hosts | Network host diff |
| Media | Captured YouTube ID produces a player request with status <400 | Media flow |
| Client-rendered page | “Who is AL” main remains non-blank; blank invokes human recapture | Main-text assertion + recapture record if needed |
| Decided-out | Account/cart/transaction APIs are absent; production hand-off links remain | Link and network report |
| Locale | English `lang` and English-only index; French remains in deferred register | Metadata/index report |

## Owner decisions

| assumption | named owner | required production decision | safe current behavior |
|---|---|---|---|
| **MKT-01** | ALC Marketing + Privacy/Consent | Approved vendors, properties/IDs, destination hosts, CMP and consent categories | All integrations disabled; no trackers copied |
| **CONTENT-01** | ALC Content owners (Corporate/PlayWise) | Promo/alert/healthy-play source, freshness, expiry, and refresh cadence | Settled captured content only |
| **FORM-01** | CRM/Subscription + PlayWise | Subscription endpoint/consent/copy and questionnaire scoring/outcome contract | UI only; no success, submission, or score |
| **LOCALE-01** | ALC Localization | French scope, source evidence, strings, media IDs, chrome and launch wave | English only; French explicitly deferred |
| **CAPTURE-01** | Release QA | Approve/re-capture the client-rendered page if rollout is blank | Settled captured content is `delivered-by-capture` |
| **DATA-01** | Platform + Privacy | Identify the consumer and purpose of the Google internal protobuf request | Keep `inspect`; make no request and use settled static content |
| **COM-01** | ALC Digital/Commerce | Any future supported off-origin identity/commerce hand-off architecture | Account/cart/transaction features decided-out; links retained |
| **INDEX-01** | Migration team | Publish/configure English search and release indexes | Static documents first; index-backed delivery in implementation |
| **AEM-01** | Migration team | None unless later evidence identifies a real EDS content consumer | Granite, CQ, CSRF, and CQ dictionary decided-out |

## Hard blockers

None. Owner-dependent items have named, non-collecting interim assumptions. A later proposal to collect regulated data without an approved secured endpoint would become a hard blocker; this plan does not do so.

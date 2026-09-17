<!-- stardust provenance: skill=stardust:dynamics · phase=classify-triage · inputs are the generated capture, plan, crawl log, and state only; no live navigation -->
# Dynamic features — ALC replica

This gate preserves a working static English page first. Statuses describe the curated gate outcome, not a claim that the later implementation phases have run.

## Listings contract

| index / consumer | included pages | page-authored properties | delivery contract |
|---|---|---|---|
| `corporate-releases` / corporate release listing | English corporate-release detail pages; exclude chrome and the listing document | `title` from `h1`, `path`, `description`, `image` from `og:image` when present, ISO `publishdate`, `lang=en`, and `text` | Document-first release rows remain readable without JavaScript. The index tops up newly published releases, newest first, and replaces the dead `/services/corporate-releases` dependency. Do not infer dates or relationships absent from captured content. |
| `site-search` / English results page | Published English content pages; exclude chrome and the results document | `title`, `path`, `description`, `image` when present, `lang=en`, and `text` | Provide an English results page accepting `?q=` and the captured `text:q` form contract. Rank title before description/path, paginate, and show captured copy only. French gets its own index/results page in the deferred locale wave. |

The index is configured through the EDS admin configuration service, not retired repository YAML. Internal links must be localized before indexing. Publish pages and the index before polling totals. The release listing remains authored/document-first and must reach the listings readability gate; the search results page may be index-only but requires an authored summary.

## Features

| # | id | feature | class | reach | disposition | reproducibility | status | pattern | decision / owner | evidence |
|---:|---|---|---|---|---|---|---|---|---|---|
| 1 | `t-evergage-personalization` | Salesforce Evergage personalization beacon and event API | T | 7/7 probed; event endpoint 95/100 crawl pages | embed-passthrough | needs-business-decision | scaffolded-awaiting-owner | consent-gated-tags | Marketing/Privacy owner — **MKT-01:** disabled config only until property ID, host approval, and consent group are supplied | `cdn.evgnet.com`; `atlanticlottery2.us-7.evergage.com/api2/event/engage` |
| 2 | `t-google-analytics-ads` | Google Analytics, Ads, and conversion collection | T | 7/7 probed; collection seen on up to 99/100 crawl pages | embed-passthrough | needs-business-decision | scaffolded-awaiting-owner | consent-gated-tags | Marketing/Privacy owner — **MKT-01** | `www.google-analytics.com`; `www.googleadservices.com`; `www.google.com/{g,ccm}/collect`; `www.google.ca`; `adservice.google.com` |
| 3 | `t-reddit-pixel` | Reddit pixel scripts, configuration, and collection | T | 7/7 probed; config 99/100 crawl pages | embed-passthrough | needs-business-decision | scaffolded-awaiting-owner | consent-gated-tags | Marketing/Privacy owner — **MKT-01** | `www.redditstatic.com`; `pixel-config.reddit.com/pixels/.../config`; `alb.reddit.com` |
| 4 | `t-yahoo-analytics` | Yahoo conversion/analytics tag | T | 7/7 probed; script/config 99/100 crawl pages | embed-passthrough | needs-business-decision | scaffolded-awaiting-owner | consent-gated-tags | Marketing/Privacy owner — **MKT-01** | `s.yimg.com/wi/ytc.js`; `s.yimg.com/wi/config/10195444.json`; `sp.analytics.yahoo.com` |
| 5 | `a-pam-dashboard` | ALC player/account dashboard service | A | 7/7 probed; 98/100 generated reach (99/100 crawl endpoint reach) | decided-out | needs-backend | decided-out | decided-out | ALC Digital/Commerce owner — **COM-01:** no session/account API on static EDS; retain captured account hand-offs | `GET /services/pam/Dashboard?_ → 200`; host-bound: target preview 404 |
| 6 | `a-header-promo` | Header promotion service | A | 7/7 probed; 96/100 generated reach (97/100 crawl endpoint reach) | static-snapshot | needs-business-decision | interim | off-origin-data | Content owner — **CONTENT-01:** use settled captured promo/chrome content; no invented response; owner may later approve a source and refresh policy | `GET /services/HeaderPromoServlet?_ → 200`; host-bound: target preview 404 |
| 7 | `a-data-layer` | CMS/app `dataLayer` used by tag integrations | A | 7/7 probed | embed-passthrough | needs-business-decision | scaffolded-awaiting-owner | consent-gated-tags | Marketing/Privacy owner — **MKT-01:** metadata mapping exists only as a disabled contract until approval | global `dataLayer` object; detected keys `0…6`, `hide`, `push` |
| 8 | `a-granite-runtime` | AEM Granite runtime settings | A | 7/7 probed | decided-out | self | decided-out | decided-out | Migration team — **AEM-01:** no EDS content consumer; do not migrate AEM runtime internals | global `Granite` keys include `Sling`, `HTTP`, `I18n`, `csrf` |
| 9 | `a-cq-runtime` | AEM CQ runtime settings | A | 7/7 probed | decided-out | self | decided-out | decided-out | Migration team — **AEM-01:** no EDS content consumer; do not migrate AEM runtime internals | global `CQ` keys include `Sling`, `I18n`, `WCM`, `CoreComponents` |
| 10 | `a-alert-service` | Path-aware ALC alert service | A | 3/7 probed; 60/100 crawl pages | static-snapshot | needs-business-decision | interim | off-origin-data | Content owner — **CONTENT-01:** retain only settled captured alerts; no response fabrication; later source/expiry policy is owner-controlled | `GET /services/AlertServlet?_,path → 200`; host-bound: target preview 404 |
| 11 | `l-corporate-releases` | Corporate release listing formerly fed by AEM service | L | 1/7 probed; 1/100 reach | index-backed | self | interim | listing-index-backed | Migration team — **INDEX-01:** English release index and document-first listing contract above | `GET /services/corporate-releases?_,date,items,lang,offset → 200`; host-bound: target preview 404 |
| 12 | `a-google-internal-data` | Unresolved Google internal data request | A | 1/7 probed; 15/100 crawl pages | static-snapshot | needs-human-capture | interim | inspect | Platform/Privacy owner — **DATA-01:** do not call or classify the host beyond evidence; retain settled static content until a browser/network owner identifies a consumer | `POST jnn-pa.googleapis.com/$rpc/google.internal.waa.v1.Waa/GenerateIT`; `application/json+protobuf` |
| 13 | `v-youtube` | Public YouTube video and its player assets | V | 1/7 probed | embed-passthrough | self | done | media-as-url | Migration team — public player URL and captured video ID are sufficient | `youtube.com/embed/7JkZbTxOc9w?rel=0`; `i.ytimg.com`; `yt3.ggpht.com`; `www.gstatic.com/youtube/.../logo/v2/67px.svg` |
| 14 | `a-healthyplay` | Healthy-play content service | A | 1/7 probed; 1/100 reach | static-snapshot | needs-business-decision | interim | off-origin-data | PlayWise Content owner — **CONTENT-01:** use settled page content, visibly date a future snapshot if introduced, and never synthesize service data | `GET /services/loyalty/healthyplay?_ → 200`; host-bound: target preview 404 |
| 15 | `cr-who-is-al` | “Who is AL” main content populated after load | CR | 1/7 probed | static-snapshot | needs-human-capture | delivered-by-capture | client-rendered-page | Release QA owner — **CAPTURE-01:** settled capture is authoritative; human recapture is mandatory at rollout only if migrated output is blank | `/corporate/about-atlantic-lottery/who-is-al.html`; main text `0 → 3308` after settle |
| 16 | `d-granite-csrf` | Granite CSRF token fetch | D | 7/7 probed; 100/100 reach | decided-out | self | decided-out | decided-out | Migration team — **AEM-01:** no AEM mutation consumer on EDS | `GET /libs/granite/csrf/token.json → 200`; host-bound: target preview 404 |
| 17 | `d-cq-i18n-dictionary` | CQ English runtime dictionary | D | 7/7 probed; 100/100 reach | decided-out | self | decided-out | decided-out | Migration team — **AEM-01:** authored English strings replace CQ runtime lookup; no consumer retained | `GET /libs/cq/i18n/dict.en.json → 200`; host-bound: target preview 404 |
| 18 | `f-footer-subscription` | Footer email/terms subscription UI with no captured action | F | 5/7 probed | client-only | needs-backend | interim | client-compute | CRM/Subscription owner — **FORM-01:** preserve controls and validation with submission explicitly unavailable until endpoint, consent copy, and ownership are approved | `email:emailFieldFooter`; `checkbox:termsCheckFooter`; no action |
| 19 | `f-player-questionnaire` | Nine-question player-assessment UI with no captured action | F | 1/7 probed | client-only | needs-business-decision | interim | client-compute | PlayWise owner — **FORM-01:** preserve captured controls only; do not claim scoring or submission until outcome logic/endpoint is supplied | `questionnaire-form`; `select:question-1` through `select:question-9`; no action |
| 20 | `i18n-en-fr-trees` | English locale tree now; French locale tree deferred | I18N | 7/7 probed (`en`/`fr` and `en-CA`/`fr-CA` variants) | rebuild-native | needs-business-decision | interim | locale-tree | Localization owner — **LOCALE-01:** this run is English only; French is a named later wave with its own chrome, results page, media IDs, and lifted strings | captured `lang=en`; alternate variants `en,fr` and `en-CA,fr-CA` |
| 21 | `m-account-balance-modal` | Account/balance/MFA modal trigger outside captured page DOM | M | 7/7 probed; 203 trigger occurrences across 100 captures | decided-out | needs-backend | decided-out | decided-out | ALC Digital/Commerce owner — **COM-01:** session-bound account modal cannot run on static EDS; keep account hand-off links | `aria-haspopup`; `Balance: $NaN`; captured dialogs headed “Multi-Factor Authentication” |
| 22 | `s-site-search` | Header/mobile site search and English results page | S | 7/7 probed; 96/100 reach | index-backed | self | interim | search-index-backed | Migration team — **INDEX-01:** deliver the English index-backed results page; second/non-migrated corpora remain out | action `/content/alc/en/search-results.html`; `text:q`; crawl notes robots exclusion |
| 23 | `t-google-tag-manager` | Google Tag Manager | T | 7/7 probed | embed-passthrough | needs-business-decision | scaffolded-awaiting-owner | consent-gated-tags | Marketing/Privacy owner — **MKT-01** | `www.googletagmanager.com`; globals `google_tag_manager`, `gtag` |
| 24 | `t-pinterest` | Pinterest marketing tag | T | 7/7 probed | embed-passthrough | needs-business-decision | scaffolded-awaiting-owner | consent-gated-tags | Marketing/Privacy owner — **MKT-01** | `s.pinimg.com`; `ct.pinterest.com` |
| 25 | `t-ad-retargeting` | DoubleClick/Trade Desk and related retargeting pixels | T | 7/7 probed | embed-passthrough | needs-business-decision | scaffolded-awaiting-owner | consent-gated-tags | Marketing/Privacy owner — **MKT-01** | `js.adsrvr.org`; `ad.doubleclick.net`; `14604780.fls.doubleclick.net` and related zero-size activity iframes |
| 26 | `t-snapchat` | Snapchat tag scripts and collection | T | 7/7 probed | embed-passthrough | needs-business-decision | scaffolded-awaiting-owner | consent-gated-tags | Marketing/Privacy owner — **MKT-01** | `sc-static.net`; `tr.snapchat.com`; `tr6.snapchat.com` |
| 27 | `t-tapad` | Tapad marketing pixel | T | 7/7 probed | embed-passthrough | needs-business-decision | scaffolded-awaiting-owner | consent-gated-tags | Marketing/Privacy owner — **MKT-01** | `pixel.tapad.com` |
| 28 | `t-gumgum` | GumGum marketing pixel | T | 7/7 probed | embed-passthrough | needs-business-decision | scaffolded-awaiting-owner | consent-gated-tags | Marketing/Privacy owner — **MKT-01** | `px.gumgum.com` |
| 29 | `t-tiktok` | TikTok analytics pixel | T | 7/7 probed | embed-passthrough | needs-business-decision | scaffolded-awaiting-owner | consent-gated-tags | Marketing/Privacy owner — **MKT-01** | `analytics-ipv6.tiktokw.us`; captured TikTok analytics scripts |
| 30 | `x-account-links` | Sign-in, registration, profile, rewards, and account links | X | 7/7 probed | decided-out | needs-backend | decided-out | decided-out | ALC Digital/Commerce owner — **COM-01:** retain captured outbound/deep links to the production ALC origin; do not reproduce identity/session flows | captured `/registration/register-account.html`, `/my-account.html`, `/my-account/my-profile.html` links |
| 31 | `x-cart-and-transactions` | Cart, prices, game configuration, and real-money transaction signals | X | 7/7 probed; price-count variants 0/7/12 | decided-out | needs-backend | decided-out | decided-out | ALC Digital/Commerce owner — **COM-01:** preserve source hand-offs only; never emulate cart, purchase, payment, balances, or regulated transactions | cart signal on 7/7; crawl includes `/services/cart/GetCartForCartHandle`, game, loyalty, and availability endpoints |

### Reconciliation notes

All 46 generated findings are represented. Merges are limited to duplicate signals or integration-owned companion hosts:

- Evergage joins generated `a-...atlanticlottery2...` and `t-...cdn-evgnet...`; both are the same captured personalization integration.
- Google analytics/ads joins the known Google row with `a-...www-google-com`, `t-...www-google-ca`, and `t-...adservice-google-com`; crawl evidence identifies collection/conversion paths rather than an unknown data API.
- Reddit joins its script, config, and collector hosts; Yahoo joins its `ytc.js`, config, and analytics hosts; Snapchat joins its static and two collector hosts.
- YouTube absorbs `a-...www-gstatic-com` and `t-...yt3-ggpht-com`; the crawl identifies explicit YouTube asset paths. `a-...jnn-pa-googleapis-com` remains a separate `inspect`/`interim` row because the evidence does not establish its business consumer.
- The two locale rows are one English/French tree with alternate code spellings preserved. The two modal rows have identical `Balance: $NaN` evidence and complementary page sets, so they are one session-bound account modal. The three cart rows differ only by observed price count and are one commerce surface.
- No other material row was dropped. The impossible generated `203/100` page reach is retained accurately as **203 trigger occurrences across 100 captures**, not as 203 pages.

## Decision batch

The batch has **24 non-self rows**. Hands-off assumptions make every item non-blocking:

1. **`needs-business-decision` — 17 rows**
   - **MKT-01 (12 rows):** Marketing/Privacy owns Evergage, Google Analytics/Ads, Reddit, Yahoo, `dataLayer`, GTM, Pinterest, retargeting, Snapchat, Tapad, GumGum, and TikTok. Interim assumption: record disabled owner-facing configuration only. No tracker, CMP, tag, ID, cookie, or request is copied into the replica. Activation requires owner-provided property IDs, destination-host approval, consent categories, and decline/acceptance verification.
   - **CONTENT-01 (3 rows):** Content owners own header promos, alerts, and healthy-play freshness. Interim assumption: settled captured content is the static fallback. No endpoint response is fabricated. A future snapshot must carry source/time provenance and a refresh/expiry decision.
   - **FORM-01 questionnaire (1 row):** PlayWise owns questionnaire outcomes. Interim assumption: controls are presentational/client-only and must not report a score or successful submission without approved logic.
   - **LOCALE-01 (1 row):** Localization owns expansion. Interim assumption: English alone ships in this run; French is an explicit deferred wave, not a dropped locale.
2. **`needs-backend` — 5 rows**
   - **COM-01 (4 rows):** ALC Digital/Commerce owns dashboard, account modal, account links, and cart/transactions. Interim assumption: all remain explicitly decided-out on static EDS, while captured production-origin outbound/deep links remain available.
   - **FORM-01 subscription (1 row):** CRM/Subscription owns the endpoint and consent wording. Interim assumption: preserve UI and validation but block/label submission as unavailable; never display success.
3. **`needs-human-capture` — 2 rows**
   - **CAPTURE-01:** Release QA accepts the settled “Who is AL” capture (`3308` characters). At rollout, a blank migrated main requires human-browser recapture before publish.
   - **DATA-01:** Platform/Privacy owns identification of the `jnn-pa.googleapis.com` protobuf request. Interim assumption: do not call it on EDS and rely on settled static content; retain `inspect` until a browser/network owner identifies the consumer.
4. **`needs-credential` — 0 rows.**

There are no hard blockers. These assumptions select safe interim or decided-out behavior and collect no regulated data.

## Register (decided-out)

| feature | reason | production statement |
|---|---|---|
| Player/account dashboard | Session- and backend-bound ALC data; target preview endpoint is dead | Account functionality remains on the production ALC origin; keep captured hand-off links |
| Granite runtime and CQ runtime | AEM implementation internals have no EDS content consumer | EDS does not load or emulate Granite/CQ globals |
| Granite CSRF token and CQ English dictionary | AEM runtime fetches have no retained consumer; authored English content replaces runtime lookup | EDS neither calls nor fabricates these endpoints |
| Account balance/MFA modal | Session-bound account surface with invalid anonymous capture (`$NaN`) | Link users to the production account surface; no off-origin modal |
| Sign-in/account links | Identity and profile flows require ALC backend/session | Preserve outbound/deep links exactly where captured |
| Cart and real-money transactions | Cart, balance, payment, purchase, and regulated transaction flows cannot safely exist on static EDS | Preserve production hand-offs; never emulate or collect transaction data |

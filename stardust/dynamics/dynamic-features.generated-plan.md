<!-- stardust provenance: skill=stardust:dynamics · phase=plan draft · 2026-09-17T17:38:00.215Z · input stardust/current/_dynamics.json (7 pages, 46 findings) · target probe https://blefebvr-adobe-alc-site-replica--da-sd-alc-se17--blefebvre.aem.page -->
# Dynamic features — draft inventory (curate into `stardust/dynamic-features.md`)

One row per detected finding. Merge duplicates, drop noise, keep every axis honest. Columns: disposition = what we do · reproducibility = what it needs · status = where it stands (reference/triage.md).

| # | id | class | feature | pages | disposition | reproducibility | status | pattern | decision needed | notes |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | a-unknown-third-party-host-atlanticlottery2-us-7-evergage-co | A | unknown third-party host atlanticlottery2.us-7.evergage.com | 7/7 | static-snapshot | needs-human-capture | pending | inspect | inspect the XHR, add a vendor row |  |
| 2 | a-unknown-third-party-host-www-google-com | A | unknown third-party host www.google.com | 7/7 | static-snapshot | needs-human-capture | pending | inspect | inspect the XHR, add a vendor row |  |
| 3 | a-unknown-third-party-host-pixel-config-reddit-com | A | unknown third-party host pixel-config.reddit.com | 7/7 | static-snapshot | needs-human-capture | pending | inspect | inspect the XHR, add a vendor row |  |
| 4 | a-unknown-third-party-host-s-yimg-com | A | unknown third-party host s.yimg.com | 7/7 | static-snapshot | needs-human-capture | pending | inspect | inspect the XHR, add a vendor row |  |
| 5 | a-first-party-api-get-services-pam-dashboard | A | first-party API GET /services/pam/Dashboard | 7/7 (reach 98/100) | data-fed | needs-business-decision | pending | off-origin-data | which tier for the target host; consumer on the migrated pages? | **dead on target (404)** |
| 6 | a-first-party-api-get-services-headerpromoservlet | A | first-party API GET /services/HeaderPromoServlet | 7/7 (reach 96/100) | data-fed | needs-business-decision | pending | off-origin-data | which tier for the target host; consumer on the migrated pages? | **dead on target (404)** |
| 7 | a-cms-app-settings-object-datalayer | A | CMS / app settings object dataLayer | 7/7 | static-snapshot | self | pending | read-settings | — (keys name endpoints, ids, vendors) |  |
| 8 | a-cms-app-settings-object-granite | A | CMS / app settings object Granite | 7/7 | static-snapshot | self | pending | read-settings | — (keys name endpoints, ids, vendors) |  |
| 9 | a-cms-app-settings-object-cq | A | CMS / app settings object CQ | 7/7 | static-snapshot | self | pending | read-settings | — (keys name endpoints, ids, vendors) |  |
| 10 | a-first-party-api-get-services-alertservlet | A | first-party API GET /services/AlertServlet | 3/7 (reach 60/100) | data-fed | needs-business-decision | pending | off-origin-data | which tier for the target host; consumer on the migrated pages? | **dead on target (404)** |
| 11 | a-first-party-api-get-services-corporate-releases | A | first-party API GET /services/corporate-releases | 1/7 (reach 1/100) | data-fed | needs-business-decision | pending | off-origin-data | which tier for the target host; consumer on the migrated pages? | **dead on target (404)** |
| 12 | a-unknown-third-party-host-jnn-pa-googleapis-com | A | unknown third-party host jnn-pa.googleapis.com | 1/7 | static-snapshot | needs-human-capture | pending | inspect | inspect the XHR, add a vendor row |  |
| 13 | a-unknown-third-party-host-www-gstatic-com | A | unknown third-party host www.gstatic.com | 1/7 | static-snapshot | needs-human-capture | pending | inspect | inspect the XHR, add a vendor row |  |
| 14 | a-first-party-api-get-services-loyalty-healthyplay | A | first-party API GET /services/loyalty/healthyplay | 1/7 (reach 1/100) | data-fed | needs-business-decision | pending | off-origin-data | which tier for the target host; consumer on the migrated pages? | **dead on target (404)** |
| 15 | cr-main-empty-at-load-filled-after-client-rendered-page | CR | main empty at load, filled after (client-rendered page) | 1/7 | static-snapshot | needs-human-capture | pending | client-rendered-page | human-browser capture; never migrate blank |  |
| 16 | d-first-party-data-file-get-libs-granite-csrf-token-json | D | first-party data file GET /libs/granite/csrf/token.json | 7/7 (reach 100/100) | data-fed | self | pending | sheet-sync | none (sync from the source origin) | **dead on target (404)** |
| 17 | d-first-party-data-file-get-libs-cq-i18n-dict-en-json | D | first-party data file GET /libs/cq/i18n/dict.en.json | 7/7 (reach 100/100) | data-fed | self | pending | sheet-sync | none (sync from the source origin) | **dead on target (404)** |
| 18 | f-form-emailsubscribefromfooter-no-action-js-wired-2-fields | F | form "emailSubscribeFromFooter" → no action (JS-wired) (2 fields) | 5/7 | client-only | self | pending | client-compute | none |  |
| 19 | f-form-questionnaire-form-no-action-js-wired-9-fields | F | form "questionnaire-form" → no action (JS-wired) (9 fields) | 1/7 | client-only | self | pending | client-compute | none |  |
| 20 | i18n-locale-variants-en-ca-fr-ca | I18N | locale variants en-CA,fr-CA | 4/7 | rebuild-native | needs-business-decision | pending | locale-tree | scope of the locale trees |  |
| 21 | i18n-locale-variants-en-fr | I18N | locale variants en,fr | 3/7 | rebuild-native | needs-business-decision | pending | locale-tree | scope of the locale trees |  |
| 22 | m-modal-trigger-aria-haspopup-chrome-only-target-outside-dom | M | modal trigger aria-haspopup (chrome only) → target outside DOM at capture | 5/7 (reach 203/100) | rebuild-native | self | pending | chrome-interaction | none (motion-observe evidence) |  |
| 23 | m-modal-trigger-aria-haspopup-target-outside-dom-at-capture | M | modal trigger aria-haspopup → target outside DOM at capture | 2/7 (reach 203/100) | rebuild-native | self | pending | modal-loader | none |  |
| 24 | s-site-search-form-content-alc-en-search-results-html | S | site search form → /content/alc/en/search-results.html | 7/7 (reach 96/100) | index-backed | self | pending | search-index-backed | results page scope (second corpora stay out) |  |
| 25 | t-unknown-third-party-host-cdn-evgnet-com | T | unknown third-party host cdn.evgnet.com | 7/7 | embed-passthrough | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 26 | t-analytics-google-analytics-ads | T | analytics: Google Analytics / Ads | 7/7 | embed-passthrough | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 27 | t-tag-manager-google-tag-manager | T | tag manager: Google Tag Manager | 7/7 | embed-passthrough | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 28 | t-unknown-third-party-host-s-pinimg-com | T | unknown third-party host s.pinimg.com | 7/7 | embed-passthrough | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 29 | t-unknown-third-party-host-www-redditstatic-com | T | unknown third-party host www.redditstatic.com | 7/7 | embed-passthrough | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 30 | t-marketing-ad-retargeting-pixel | T | marketing: ad / retargeting pixel | 7/7 | embed-passthrough | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 31 | t-unknown-third-party-host-sc-static-net | T | unknown third-party host sc-static.net | 7/7 | embed-passthrough | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 32 | t-unknown-third-party-host-alb-reddit-com | T | unknown third-party host alb.reddit.com | 7/7 | embed-passthrough | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 33 | t-unknown-third-party-host-tr-snapchat-com | T | unknown third-party host tr.snapchat.com | 7/7 | embed-passthrough | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 34 | t-unknown-third-party-host-www-google-ca | T | unknown third-party host www.google.ca | 7/7 | embed-passthrough | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 35 | t-unknown-third-party-host-tr6-snapchat-com | T | unknown third-party host tr6.snapchat.com | 7/7 | embed-passthrough | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 36 | t-unknown-third-party-host-adservice-google-com | T | unknown third-party host adservice.google.com | 7/7 | embed-passthrough | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 37 | t-unknown-third-party-host-pixel-tapad-com | T | unknown third-party host pixel.tapad.com | 7/7 | embed-passthrough | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 38 | t-unknown-third-party-host-px-gumgum-com | T | unknown third-party host px.gumgum.com | 7/7 | embed-passthrough | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 39 | t-unknown-third-party-host-sp-analytics-yahoo-com | T | unknown third-party host sp.analytics.yahoo.com | 7/7 | embed-passthrough | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 40 | t-unknown-third-party-host-analytics-ipv6-tiktokw-us | T | unknown third-party host analytics-ipv6.tiktokw.us | 7/7 | embed-passthrough | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 41 | t-unknown-third-party-host-yt3-ggpht-com | T | unknown third-party host yt3.ggpht.com | 1/7 | embed-passthrough | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 42 | v-video-youtube | V | video: YouTube | 1/7 | embed-passthrough | self | pending | media-as-url | none (player ids are public) |  |
| 43 | x-sign-in-account-links | X | sign-in / account links | 7/7 | decided-out | needs-backend | pending | decided-out | auth / commerce on the new host? |  |
| 44 | x-commerce-signals-cart-true-prices-0 | X | commerce signals (cart: true, prices: 0) | 5/7 | decided-out | needs-backend | pending | decided-out | auth / commerce on the new host? |  |
| 45 | x-commerce-signals-cart-true-prices-12 | X | commerce signals (cart: true, prices: 12) | 1/7 | decided-out | needs-backend | pending | decided-out | auth / commerce on the new host? |  |
| 46 | x-commerce-signals-cart-true-prices-7 | X | commerce signals (cart: true, prices: 7) | 1/7 | decided-out | needs-backend | pending | decided-out | auth / commerce on the new host? |  |

## Triage

- **Ships autonomously (reproducibility `self`):** 11 row(s) — read-settings, sheet-sync, client-compute, chrome-interaction, modal-loader, search-index-backed, media-as-url.
- **One owner decision batch:** 31 row(s) — inspect the XHR, add a vendor row · which tier for the target host; consumer on the migrated pages? · human-browser capture; never migrate blank · scope of the locale trees · which tags run on the new host; property ids.
- **Already delivered by the capture pipeline:** 0 row(s) — no work.
- **Host-bound on the target:** 7 of 7 probed API paths — the off-origin data work.

## Phases

- **tags** — 17
- **detect** — 9
- **off-origin data** — 5
- **register** — 4
- **data** — 2
- **client tools** — 2
- **locale wave** — 2
- **interactive** — 2
- **capture** — 1
- **search** — 1
- **media** — 1

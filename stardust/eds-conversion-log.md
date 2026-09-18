# ALC EDS conversion log

## Homepage pilot

- Source prototype: `stardust/prototypes/content-alc-en-html-proposed.html`
- Delivery path: `/`
- Branch: `replica`
- Runtime: vanilla EDS, as recorded in `stardust/runtime-contract.json`

### Locked content model

| Source pattern | EDS model | Decode tier |
|---|---|---|
| Featured campaign hero | `home-hero` block | template-slotted |
| Recent winners heading | default content, `blue-band` section style | native |
| Winner feature | `winner-carousel` block | template-slotted |
| Featured games heading | default content, `green-band` section style | native |
| Game cards and promo rail | `featured-games` block | reconstructive |
| Site chrome | `/nav` and `/footer` authored documents | template-slotted |

### Delivery decisions

- The homepage pilot uses the captured first campaign state; source carousel volatility is
  documented in `stardust/replica/progress.json`.
- Account, cart, payment, analytics, personalization, and tracking behavior are not enabled.
- Internal links whose pages are not part of this pilot remain source-site integration
  boundaries after localization.
- Proxima Nova remains first in the stack, with the repository's Roboto files as the
  permitted metric substitute. The licensed source face is not rehosted.
- Editorial images are authored with branch Code Bus URLs and copied under `img/alc/`;
  fixed decorative imagery is referenced root-relative from block CSS.

### Anti-patterns avoided

- No nested blocks, code-as-content, or repository-relative authored image URLs.
- Repeating game cards use one row per item and stay within three columns.
- Block decorators move authored nodes rather than rebuilding visible copy.
- Section headings above repeating blocks remain default content.

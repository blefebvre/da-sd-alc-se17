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

## Published replica reconciliation

The first DA render exposed systematic EDS-wrapper drift rather than isolated block
defects. The second pass corrected the shared causes:

- Removed the stock 40px inter-section margins after EDS decoration.
- Matched the source section anchors and total document height at 1440px and 360px.
- Reconstructed the desktop and mobile header rows, search, utility links, menu, cart,
  sign-in surface, and content-sized primary navigation.
- Restored responsive hero/banner and promotional imagery.
- Preserved editorial game media when DA emits either `<picture>` or bare `<img>`.
- Added the authored jackpot ribbons, mobile carousel controls, CTA arrow discs, and the
  complete winner presentation.
- Rebuilt footer content into measured subscription, social, link-column/accordion, other
  sites, and legal/certification regions.

Measured against the original live homepage with the authored-volatile campaign hero
masked:

| Breakpoint | Pixel diff | Height delta | Result |
|---|---:|---:|---|
| 1440 | 9.94% | 0px | pass |
| 360 | 9.41% | 0px | pass |

The remaining chrome texture is primarily the recorded Proxima Nova substitution plus
source-only icon glyph rendering. No licensed font files were copied or rehosted.

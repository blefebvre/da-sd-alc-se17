---
name: "Atlantic Lottery — Current State"
description: "Bright, regional lottery and gaming system balancing promotional energy with regulated trust."
colors:
  alc-cyan: "#009ddb"
  action-blue: "#006faf"
  deep-blue: "#00529b"
  secondary-blue: "#007bc2"
  slate-text: "#4e5b68"
  muted-slate: "#69727b"
  cool-border: "#d4dadf"
  white: "#fff"
typography:
  display:
    fontFamily: "'Ubuntu', 'Helvetica', 'Arial', sans-serif"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "normal"
  headline:
    fontFamily: "'Ubuntu', 'Helvetica', 'Arial', sans-serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "normal"
  body:
    fontFamily: "'proxima_nova', 'Helvetica', 'Arial', sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.42857143
    letterSpacing: "normal"
  label:
    fontFamily: "'proxima_nova', 'Helvetica', 'Arial', sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.42857143
    letterSpacing: "normal"
rounded:
  xs: "3px"
  sm: "4px"
  md: "5px"
  lg: "10px"
  pill: "50px"
spacing:
  xs: "5px"
  sm: "10px"
  md: "15px"
  lg: "20px"
  xl: "30px"
  2xl: "40px"
components:
  button-primary:
    backgroundColor: "{colors.action-blue}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "6px 12px"
  button-pill:
    backgroundColor: "{colors.alc-cyan}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "15px 36px"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.slate-text}"
    rounded: "{rounded.xs}"
    padding: "10px"
---

# Design System: Atlantic Lottery — Current State

## Overview

**Creative North Star: "Atlantic Play, Regulated Confidence"**

This is a descriptive record of the captured ALC English site, not a redesign direction. The system places varied game artwork and promotional campaigns inside a stable corporate shell: bright blue navigation and actions, white content surfaces, slate copy, rounded controls, and recurring trust and community messages.

The experience is visually energetic where games and prizes are presented, but restrained and conventional in legal, corporate, account, and responsible-play contexts. Its density reflects a large utility-rich site with persistent navigation and extensive footer pathways.

**Key Characteristics:**
- Cyan and deep-blue brand anchors on white and cool-gray surfaces.
- Ubuntu headings paired with Proxima Nova body and UI copy.
- A mixed radius vocabulary ranging from compact fields to large pill CTAs.
- Light blue-gray shadows and borders rather than heavy elevation.
- Image-rich game and promotion tiles inside a repeated corporate frame.

## Colors

The captured palette is blue-led, with cyan for bright emphasis, darker blues for action and authority, white surfaces, and cool slate text.

### Primary
- **ALC Cyan** (`colors.alc-cyan`): high-visibility brand and interactive emphasis.
- **Action Blue** (`colors.action-blue`): primary buttons and links.
- **Deep Blue** (`colors.deep-blue`): strong headings, result panels, and dark anchor surfaces.

### Secondary
- **Secondary Blue** (`colors.secondary-blue`): supporting link, border, and focus treatments.

### Neutral
- **White** (`colors.white`): dominant page and component surface.
- **Slate Text** (`colors.slate-text`): dark readable copy.
- **Muted Slate** (`colors.muted-slate`): secondary copy and neutral component borders.
- **Cool Border** (`colors.cool-border`): dividers and low-emphasis boundaries.

**The Blue Anchor Rule.** The recurring corporate shell uses the blue family even when game campaigns introduce additional colors.

## Typography

**Display Font:** Ubuntu (Helvetica and Arial fallbacks)
**Body Font:** Proxima Nova (Helvetica and Arial fallbacks)

**Character:** Rounded, friendly Ubuntu headings provide approachable emphasis; Proxima Nova keeps dense navigation, labels, and explanatory copy compact and legible.

### Hierarchy
- **Display** (700, `typography.display`, 1.1): primary page and promotional headings.
- **Headline** (700, `typography.headline`, 1.1): section headings and feature titles.
- **Body** (400, `typography.body`, 1.42857143): paragraphs, lists, policy copy, and instructions.
- **Label** (600, `typography.label`, 1.42857143): controls, buttons, tabs, and compact UI.

The harvested CSS includes many component-local sizes (18, 20, 22, 24, 28, 30, 36, and 40px). Their consecutive ratios do not match one canonical modular scale, so the current type ramp is ad hoc.

## Layout

The desktop system uses a Bootstrap-derived responsive container reaching 1160px, with repeated 10–20px component spacing and larger 30–40px section intervals. Content density varies by family: game and promotion surfaces favor tile grids and broad image regions; legal and corporate surfaces favor long single-column reading; forms use compact stepped or stacked controls.

The observed spacing vocabulary is strongly influenced by 5px increments rather than a single 4px or 8px base unit.

## Elevation & Depth

Depth is light and functional. Cool borders separate most surfaces; small blue-gray shadows lift controls and cards, while blue focus glows emphasize interaction. Gradients appear mainly in game and promotional surfaces rather than as a universal page treatment.

### Shadow Vocabulary
- **Control lift** (`0 3px 5px 0 rgba(0,82,155,0.1)`): brand controls and tiles.
- **Card lift** (`0 3px 8px rgba(37,100,144,0.12)`): contained cards.
- **Focus glow** (`0 0 8px 0 #007bc2`): keyboard and active emphasis.

## Shapes

The system mixes compact 3–10px radii with circular imagery and 30–50px pill actions. Five pixels is the most frequent non-zero radius in harvested CSS, but 4, 6, 8, and 10px are also common. This is an observed vocabulary, not a unified shape scale.

## Components

### Buttons
- **Shape:** compact 4–6px corners for default controls; 50px for large pill actions.
- **Primary:** action blue with white copy; common compact padding is 6px 12px.
- **Hover / Focus:** hover deepens to `#005e95`; focus uses an 8px blue glow plus outline.
- **Secondary:** white with muted-slate copy and a 2px muted-slate border.

### Cards / Containers
- **Corner Style:** commonly 5px, with 10px and larger promotional variants.
- **Background:** predominantly white, sometimes cool-gray or image-backed.
- **Shadow Strategy:** subtle blue-gray lift.
- **Border:** cool-gray 1px boundaries.
- **Internal Padding:** commonly 20px.

### Inputs / Fields
- **Style:** white fields, 3–5px corners, cool-gray border, compact 10px padding.
- **Focus:** blue border/glow treatment.

### Navigation
- A persistent header exposes play, game, result, reward, account, language, and help paths. A large repeated footer/cross-promo system connects winner help, community benefit, corporate information, responsible play, legal pages, and sibling properties.

### Repeated Content Modules
- Game “Popular combos” and number-picker guidance.
- Mobile-app feature grid (“Play,” “Buy,” “Scan, Deposit & Earn”).
- Game summary and related-game surfaces.
- Rewards promotion.
- Site search, contact support, and the four-part footer cross-promo.

## Do's and Don'ts

### Do:
- **Do** preserve the blue corporate shell around visually varied game campaigns.
- **Do** pair Ubuntu heading emphasis with Proxima Nova body density.
- **Do** keep responsible-play, support, legal, and community-return pathways visible.
- **Do** distinguish compact utility controls from large pill-shaped promotional actions.

### Don't:
- **Don't** treat campaign-specific gradients as universal brand colors.
- **Don't** imply a single radius or modular type scale where the captured CSS shows multiple conventions.
- **Don't** remove the repeated corporate and responsible-play frame when representing individual game pages.
- **Don't** treat the current files as target-state direction; they document the live capture only.

---
name: awesome-design-md
category: web-development
description: Access 58 curated DESIGN.md design systems from real websites. Use DESIGN.md files with AI coding agents (Google Stitch, Claude Code, Codex) to generate pixel-perfect UI that matches the target design.
---

# Awesome DESIGN.md Collection

Access 58 production-grade design systems as plain-text DESIGN.md files. Drop one into any project root and any AI coding agent instantly understands how the UI should look.

## What is DESIGN.md?

DESIGN.md is a markdown-based design system document that AI agents read to generate consistent UI. Introduced by [Google Stitch](https://stitch.withgoogle.com/docs/design-md/overview/), it replaces Figma exports, JSON schemas, and special tooling.

| File | Who reads it | What it defines |
|------|-------------|-----------------|
| `AGENTS.md` | Coding agents | How to build the project |
| `DESIGN.md` | Design agents | How the project should look and feel |

## Source

Collection: [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) (58 designs, MIT License)

## Available Design Systems

### AI & Machine Learning (12)
| Design | Vibe | Key Colors |
|--------|------|------------|
| **Claude** | Warm terracotta, editorial | Warm tones, clean |
| **Cohere** | Vibrant gradients, data dashboards | Multi-gradient |
| **ElevenLabs** | Dark cinematic, audio-waveform | Dark, rich |
| **Minimax** | Bold dark, neon accents | Black + neon |
| **Mistral AI** | French minimalism, purple-toned | Purple, clean |
| **Ollama** | Terminal-first, monochrome | Monochrome |
| **OpenCode AI** | Developer-dark, code-centric | Dark dev |
| **Replicate** | White canvas, code-forward | White, code |
| **RunwayML** | Cinematic dark, media-rich | Dark media |
| **Together AI** | Technical, blueprint-style | Blueprint |
| **VoltAgent** | Void-black, emerald, terminal | Black + emerald |
| **xAI** | Stark monochrome, futuristic | Mono minimal |

### Developer Tools & Platforms (13)
| Design | Vibe | Key Colors |
|--------|------|------------|
| **Cursor** | Sleek dark, gradient accents | Dark + gradient |
| **Expo** | Dark, tight letter-spacing, code | Dark dev |
| **Linear.app** | Ultra-minimal, precise, purple | `#08090a` + `#5e6ad2` |
| **Lovable** | Playful gradients, friendly dev | Gradient |
| **Mintlify** | Clean, green, reading-optimized | Green accent |
| **PostHog** | Playful, dev-friendly dark | Dark + accent |
| **Raycast** | Dark chrome, vibrant gradients | Dark + gradient |
| **Resend** | Minimal dark, monospace accents | Dark minimal |
| **Sentry** | Dark dashboard, data-dense, pink | `#08090a` + pink-purple |
| **Supabase** | Dark emerald, code-first | Dark + emerald |
| **Superhuman** | Premium dark, keyboard-first | Dark + purple glow |
| **Vercel** | Black/white, Geist font | `#000`/`#fff` |
| **Warp** | Dark IDE, block commands | Dark IDE |
| **Zapier** | Warm orange, illustration | Orange, warm |

### Infrastructure & Cloud (6)
| Design | Vibe | Key Colors |
|--------|------|------------|
| **ClickHouse** | Yellow technical docs | Yellow accent |
| **Composio** | Modern dark, colorful icons | Dark colorful |
| **HashiCorp** | Enterprise clean, black/white | Enterprise |
| **MongoDB** | Green leaf, dev docs | Green |
| **Sanity** | Red accent, content-first editorial | Red accent |
| **Stripe** | Signature purple, weight-300 elegance | Purple gradient |

### Design & Productivity (9)
| Design | Vibe | Key Colors |
|--------|------|------------|
| **Airtable** | Colorful, friendly, structured data | Multi-color |
| **Cal.com** | Clean neutral, scheduling | Neutral |
| **Clay** | Organic, soft gradients, art-directed | Soft gradient |
| **Figma** | Vibrant multi-color, playful | Multi-color |
| **Framer** | Bold black/blue, motion-first | Black + blue |
| **Intercom** | Friendly blue, conversational UI | Blue |
| **Miro** | Bright yellow, infinite canvas | Yellow |
| **Notion** | Warm minimalism, serif headings | Warm neutral |
| **Pinterest** | Red accent, masonry, image-first | Red |
| **Webflow** | Blue, polished marketing | Blue |

### Fintech & Crypto (4)
| Design | Vibe | Key Colors |
|--------|------|------------|
| **Coinbase** | Clean blue, institutional trust | Blue |
| **Kraken** | Purple dark, data-dense dashboards | Purple dark |
| **Revolut** | Sleek dark, gradient cards, precision | Dark gradient |
| **Wise** | Bright green, friendly and clear | Green |

### Enterprise & Consumer (5)
| Design | Vibe | Key Colors |
|--------|------|------------|
| **Airbnb** | Warm coral, photography, rounded | Coral `#FF5A5F` |
| **Apple** | Premium whitespace, SF Pro, cinematic | White space |
| **IBM** | Carbon design system, structured blue | IBM Blue |
| **NVIDIA** | Green-black, technical power | Green-black |
| **SpaceX** | Stark black/white, full-bleed | Black/white |
| **Spotify** | Vibrant green on dark, bold type | `#1DB954` dark |
| **Uber** | Bold black/white, tight type | Black/white |

### Car Brands (5)
| Design | Vibe | Key Colors |
|--------|------|------------|
| **BMW** | Dark premium, German engineering | Dark premium |
| **Ferrari** | Chiaroscuro, Ferrari Red, sparse | Red on black/white |
| **Lamborghini** | True black, gold, Neo-Grotesk | Black + gold |
| **Renault** | Aurora gradients, NouvelR type | Aurora gradient |
| **Tesla** | Radical subtraction, cinematic | Black/white |

## Format Structure

Every DESIGN.md has 9 sections:
1. **Visual Theme & Atmosphere** — Mood, density, design philosophy
2. **Color Palette & Roles** — Semantic name + hex + functional role
3. **Typography Rules** — Font families, full hierarchy table
4. **Component Stylings** — Buttons, cards, inputs, nav with states
5. **Layout Principles** — Spacing scale, grid, whitespace philosophy
6. **Depth & Elevation** — Shadow system, surface hierarchy
7. **Do's and Don'ts** — Design guardrails and anti-patterns
8. **Responsive Behavior** — Breakpoints, touch targets, collapsing
9. **Agent Prompt Guide** — Quick color ref, ready-to-use prompts

Each design also includes `preview.html` (visual catalog with swatches) and `preview-dark.html`.

## How to Use

### Option 1: Direct from GitHub (recommended)
Copy a DESIGN.md directly into your project:

```bash
# Example: get Linear's design system
curl -L \
  "https://raw.githubusercontent.com/VoltAgent/awesome-design-md/main/design-md/linear.app/DESIGN.md" \
  -o DESIGN.md
```

### Option 2: Clone + Copy
```bash
git clone --depth 1 https://github.com/VoltAgent/awesome-design-md.git /tmp/design-md
cp /tmp/design-md/design-md/<site-name>/DESIGN.md /your/project/
```

### Option 3: Ask the agent
Tell the agent: "load skill awesome-design-md and use the [Linear/Supabase/Stripe] design system"

### With AI Coding Agents
Once DESIGN.md is in your project root:

1. **Google Stitch**: Automatically picks it up when generating UI layouts
2. **Claude Code**: `Read the DESIGN.md file and build a hero section that follows this design system`
3. **Codex/OpenCode**: `Implement a card component using the tokens from DESIGN.md`
4. **Manual**: Reference specific sections — colors, typography, components

## When to Use

- Starting a new project and need a proven design system instantly
- You want your UI to look like Linear/Vercel/Stripe/Notion
- Google Stitch layout generation (needs a DESIGN.md reference)
- Converting a Stitch design to Next.js with design tokens
- Client wants "something like Linear but for X"

## Pitfalls

- **Don't mix designs** — pick ONE design system per project, mixing breaks cohesion
- **DESIGN.md is NOT the final CSS** — it defines tokens, not implementations. The AI agent generates the code.
- **Custom fonts** — Some designs use proprietary fonts (Berkeley Mono on Linear). Use fallbacks from the design file.
- **Weight 510 on Inter** — Linear's signature weight is non-standard. Use `font-weight: 510` if using Inter Variable.
- **Color precision** — Don't approximate colors. Use exact hex values from the DESIGN.md.
- **Update check** — The awesome-design-md repo gets updated. Check for new additions periodically.

## Quick Copy Commands

```bash
# Linear — ultra-minimal dark with purple accent
curl -L "https://raw.githubusercontent.com/VoltAgent/awesome-design-md/main/design-md/linear.app/DESIGN.md" -o DESIGN.md

# Vercel — black/white, Geist font, clean
curl -L "https://raw.githubusercontent.com/VoltAgent/awesome-design-md/main/design-md/vercel/DESIGN.md" -o DESIGN.md

# Stripe — purple gradients, weight-300 elegance
curl -L "https://raw.githubusercontent.com/VoltAgent/awesome-design-md/main/design-md/stripe/DESIGN.md" -o DESIGN.md

# Notion — warm minimalism, serif headings
curl -L "https://raw.githubusercontent.com/VoltAgent/awesome-design-md/main/design-md/notion/DESIGN.md" -o DESIGN.md

# Supabase — dark emerald, code-first
curl -L "https://raw.githubusercontent.com/VoltAgent/awesome-design-md/main/design-md/supabase/DESIGN.md" -o DESIGN.md

# Coinbase — clean blue, institutional
curl -L "https://raw.githubusercontent.com/VoltAgent/awesome-design-md/main/design-md/coinbase/DESIGN.md" -o DESIGN.md

# Spotify — green on dark, bold type
curl -L "https://raw.githubusercontent.com/VoltAgent/awesome-design-md/main/design-md/spotify/DESIGN.md" -o DESIGN.md

# Airbnb — warm coral, photography-driven
curl -L "https://raw.githubusercontent.com/VoltAgent/awesome-design-md/main/design-md/airbnb/DESIGN.md" -o DESIGN.md
```

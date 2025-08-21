---
title: Filters
description: Page for explaining filters.
---

These are the filters used in the bot to make sorting easier, most are similar. You can also **combine filters** for more specific results.

---

### Filters for `=cdex`

- **-a** [ability name, e.g. `nightfall`]
- **-e** [element, e.g. `balance`, `fairy`, `light`, `dark`, etc.]
- **-n** [card name]
- **-s** [series name]

---

### Filters for `=market`

- **-a** [ability name, e.g. `nightfall`]
- **-e** [element, e.g. `balance`, `fairy`, `light`, `dark`, etc.]
- **-m** [maturation number 1 to 3, e.g. 1]
- **-n** [card name]
- **-r** [rarity, e.g. `secr`]
- **-s** [series name]

---

### Filters for `=inv`

- **-a** [ability name, e.g. `nightfall`]
- **-e** [element, e.g. `balance`, `fairy`, `light`, `dark`, etc.]
- **-m** [maturation number 1 to 3, e.g. 1]
- **-n** [card name]
- **-p** [page number]
- **-r** [rarity, e.g. `secr`]
- **-s** [series name]

---

### Filters for `=rd`

- **-a** [ability name, e.g. `nightfall`]
- **-d** [raid difficulty, e.g. `=rd -d Easy`]
- **-e** [element, e.g. `balance`, `fairy`, `light`, `dark`, etc.]
- **-m** [maturation number 1 to 3, e.g. 1]
- **-n** [card name]
- **-r** [rarity, e.g. `secr`]
- **-s** [series name]

---

### Filters for `=trade`

- **-a** [ability name, e.g. `nightfall`]
- **-e** [element, e.g. `balance`, `fairy`, `light`, `dark`, etc.]
- **-m** [maturation number 1 to 3, e.g. 1]
- **-n** [card name]
- **-r** [rarity, e.g., `secr`]
- **-s** [series name]

---

### Filters for `=select` (used for ID/profile)

- **-a** [avatar name]
- **-b** [border name]
- **-badge** [badge name]
- **-bg** [background name]
- **-c** [color hex code, e.g. `#fff271`]
- **-f** [font name]

---

:::note[Customization Tip]  

You can also set these filters by clicking the Edit button inside your ID card at [Cupid's Website](https://cupidparadise.top/profile). You cannot combine filters for `=select`. 

:::  

---

## Examples

Do:
- `=cdex -e fire, -a armor`(show cards with the fire element and armor piercing ability in the card dex)
- `=inv -r m -mat 3` (shows your mythic maturation 3 cards in `=inv`)

Don't:
- `=cdex -e` (missing element name)
- `=mk -p 12` (wrong filter, -p filter is only for `=inv`)
- `=select -bg Bond -a Dipper`  (cannot combine filters for `=select`)

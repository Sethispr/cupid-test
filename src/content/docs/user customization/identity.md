---
title: Identity
description: Page explaining how to customize your identity card.
---

View your identity card with `=identity` or the alias `=id`. Customize it using the `=select` command with the filters.

## Customization Options

- Set avatar: `=select -a [avatar name]`
- Set border: `=select -b [border name]`
- Set background: `=select -bg [background name]`
- Set font: `=select -f [font name]`
- Set color: `=select -c [hex color code, e.g. #fff271]`
- Set badge: `=select -badge [badge name]`

Check your owned cosmetics with `=vault` or the alias `=vlt`.  

You can also edit your identity directly via the `=vlt` output embed buttons. Select an option and enter the cosmetic name (e.g. Nene Yashiro). 

:::note 

To view the cosmetic you want to use, check this page [ADD LINK AND PAGE HERE]

:::

### Examples

Do:
- `=select -a Hanako` (equips hanako avatar)
- `=select -c #55d1d0` (uses #55d1d0 for your embed color)
- `=vlt` (check owned cosmetics)

Don't:
- `=select -bg` (missing background name)
- Using invalid hex codes (e.g. `#gggggg`).
- Trying to use unowned/invalid cosmetics.

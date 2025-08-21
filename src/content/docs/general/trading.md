---
title: Trading
description: Page for explaining how to trade.
---

To start a trade, use `=trade @username` to start a trade with another player.

## Adding Cards to Trade

- Add a card by position: `=cadd -i [card inventory position number]` (e.g. `=cadd -i 9`).
- Add multiple cards: `=cadd -i 9, 89` (comma-separated positions).

**Filter options**:
  - `=cadd -n [name]` (card name)
  - `=cadd -m [1-3]` (mastery level)
  - `=cadd -r [card rarity]` (e.g. `secr`)
  - `=cadd -s [series name]`

:::note 

You can combine filters. (e.g. `=cadd -r m -a nightfall` adds your mythic nightfall cards to the trade)

:::

## Managing Trades

- View the trade window: `=trview` or alias `=trv`.
- Cancel trade: `=trc`.
- Confirm trade: `=trcon`.

---

## Examples

**Do**:
- `=trade @sethyl` (correct format and username)
- `=cadd -i 5, 10` (adds 2 cards to trade)
- `=trcon` (confirm trade)

**Don't**:
- `=trade` (missing @username)
- `=cadd -i` (missing position)

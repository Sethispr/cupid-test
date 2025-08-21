---
title: Market
description: Page for explaining market command.
---

This page explains how to use the market command to buy and sell cards in the game.

View cards available on the market with `=market [filters]` or the alias `=mk [filters]`.

:::note[Filters] 

Check market filters [here](https://sethispr.github.io/cupid-test/general/filters/) 
  
:::

## Market Buying

To purchase a card, use `=mkbuy [card ID]`. Verify the card details and click the "Buy!" button to confirm.

<img width="269" height="498" alt="Market Buying" src="https://github.com/user-attachments/assets/e8b02ed3-05d5-4e6d-a2bc-21a2db530935" />

:::tip[Price Tip]  

For cheaper deals, buy from players in the [Official Server](https://discord.gg/Yvvnm39PpB).

:::

## Market Selling

To sell a card, use `=mksell [card ID] [card price]` and click the "Sell!" button to sell it.

<img width="430" height="335" alt="Market Selling" src="https://github.com/user-attachments/assets/d6cf62db-55fb-4932-9bc8-f735911a5afe" />

### Market Listing

To check your cards sold in the market, use `=marketlist` or the alias `=mklist`.

---

## Examples

Do:
- `=mkbuy 123456` (valid ID)
- `=mksell 676767 500000` (ID and price)
- `=mklist` (correct command)

Don't:
- `=mkbuy` (missing ID)
- `=mksell 67767` (missing price)
- `=mklisting` (wrong command, use `=mklist`)

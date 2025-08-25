---
title: Packs
description: Page for the different packs and their rates.
---

Each pack gives **6 different random cards** with **different rarities**.

Obtain packs from the **pack shop** (`=pshop`), **daily pack shop** (`=dpshop`), or from the **Ember pack shop** (`=emberpack`). There are **8 pack types** available: Rusty Relics Pack, Standard Deck Pack, Gold Back Pack, Secret Glow Pack, Mythic Chronicles Pack, Cosmic Odyssey Pack, Lost Treasures Pack, and Ember Pack.

:::note[Ember Pack]  
The **Ember Pack** is **separate** and **not available** in either pack shops. Use `=emberpack` to view rates and `=epbuy` to purchase it. It costs **30 Ember Crystals**.  
:::

## Usage

To purchase **standard** or **daily packs**, type **`=pbuy [pack name/number]`** (e.g. `=pbuy rusty relics` or `=pbuy 1` based on shop listing). Each pack has 6 cards.

**Aliases**: **`=ps`** for `=pshop`, **`=dps`** for `=dpshop`.

For Ember Pack, use **`=epbuy`** to buy and **`=emberpack`** to check rates.

## Pack Details

Pack details include standard costs, daily costs and rarity drop rates. Daily packs cost more and rotate series everyday.

| Pack Name              | Standard Cost     | Daily Cost     | Rarity Chances                                                               |
| ---------------------- | ----------------- | -------------- | ---------------------------------------------------------------------------- |
| Rusty Relics Pack      | 3,000 gold        | 4,500 gold     | - 70% Basic<br>- 29% Rare<br>- 1% Super Rare                                 |
| Standard Deck Pack     | 10,000 gold       | 15,000 gold    | - 60% Basic<br>- 35% Rare<br>- 5% Super Rare                                 |
| Gold Back Pack         | 50,000 gold       | 75,000 gold    | - 50% Basic<br>- 35% Rare<br>- 15% Super Rare                                |
| Secret Glow Pack       | 100,000 gold      | 150,000 gold   | - 70% Rare<br>- 25% Super Rare<br>- 4.99% Secret Rare<br>- 0.01% Mythic      |
| Mythic Chronicles Pack | 500,000 gold      | 750,000 gold   | - 70% Super Rare<br>- 20% Secret Rare<br>- 10% Mythic                        |
| Cosmic Odyssey Pack    | 1,000,000 gold    | 1,500,000 gold | - 60% Super Rare<br>- 20% Secret Rare<br>- 15% Mythic<br>- 5% Starlight Rare |
| Lost Treasures Pack    | 3,000,000 gold    | 4,500,000 gold | - 80% Secret Rare<br>- 10% Mythic<br>- 10% Starlight Rare                    |
| Ember Pack             | 30 Ember Crystals | N/A            | - 59.99% Secret Rare<br>- 35% Mythic<br>- 5% Starlight Rare                  |

## Examples

Always use exact pack names or numbers from the shop. The pack numbers are based on the shop listing at (`=pshop`).

Do:

- `=pbuy rusty relics pack`
- `=pbuy 3` (for Gold Back Pack)
- `=epbuy` (for Ember Pack)

Don't:

- `=pbuy rusty relics` (incomplete name)
- `=pbuy gold backpack` (wrong spacing)
- `=pbuy ember` (use `=epbuy` instead)

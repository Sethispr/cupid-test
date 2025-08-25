---
title: Prefix
description: Page explaining how to use commands with the bot's prefix.
---

The default prefix for Cupid Bot is `=`. You can also use the bot by **mentioning** it (e.g. `@Cupid`) or using **Discord slash commands** (e.g. `/`). Currently, the prefix cannot be changed.

import { Badge } from '@astrojs/starlight/components'

- **Default Prefix**: Use `=` followed by a command (e.g. `=id`).

<Badge text="Deprecated" variant="caution" size="medium" />

- **Mention Method**: Mention `@Cupid` to use commands (e.g. `@Cupid id`)
- **Slash Commands**: Use `/` for specific actions (e.g. `/identity`)

:::note

The `=` prefix is now deprecated. Only `@Cupid` mentions and `/` slash commands will be supported until Discord allows message intents.

:::

---

### Examples

**Do**:

- `=nick shiro`
- `@Cupid id`
- `/clan`

**Don't**:

- Try to change the prefix (not supported)
- Rely solely on `=` after the bot is in 100 servers (use `@Cupid` or `/` instead)

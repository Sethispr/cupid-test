title: Raid Network Channel
description: Page explaining how to setup the raid network channel at your server.
pagefind: false
---

import { Steps } from '@astrojs/starlight/components'

Use the `=raidnetwork on` command, or aliases `=raidnet on` or `=rdnet on`, in the **#channel** where you want **public raids notifications** to appear.

:::note[Permissions]

Only the Server Owner can set the raid network channel. Only raids set to **Public** with `=rd public` will be displayed, not all raids.

:::

---

### Examples

**Do**:

<Steps>

1. Go to the **#channel** you want for **public raid notifications** 

2. Type `=rdnet on`. You will then see a message from the bot saying **"Raid Network enabled here."** if successful.

   <Steps>

   1. Use `=rd public` in a raid to make it **visible** in the **network channel**.

   </Steps>

</Steps>

**Don't**:

- Use `=raidnetwork on` in a channel **without** owner permissions.
- Expecting **private raids** to appear in the network channel.

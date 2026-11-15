<%*
const today = tp.file.title;
const yesterday = tp.date.now("YYYY-MM-DD", -1, today, "YYYY-MM-DD");
const weekday = tp.date.now("dddd", 0, today, "YYYY-MM-DD");
const weekTag = tp.date.now("GGGG-[W]WW", 0, today, "YYYY-MM-DD");
const monthTag = tp.date.now("YYYY-MM", 0, today, "YYYY-MM-DD");

const yesterdayFile = tp.file.find_tfile(`02-daily/${yesterday}.md`);
let rollover = "_(No previous daily note found)_";
if (yesterdayFile) {
  const content = await app.vault.read(yesterdayFile);
  const openTasks = content.split("\n").filter((line) => /^\s*-\s\[\s\]\s/.test(line));
  rollover = openTasks.length ? openTasks.join("\n") : "_(No open tasks)_";
}
-%>
---
title: <% today %>
created: <% today %>
updated: <% today %>
tags: [daily]
status: active
type: daily
links: ["[[02-daily/weekly/<% weekTag %>]]", "[[02-daily/monthly/<% monthTag %>]]"]
---

# <% today %> (<% weekday %>)

## Main focus

> What is the most useful outcome to complete today?

- [ ]

**Why it matters:**
**Definition of done:**
**Planned time block:**

---

## Carry over open tasks

<% rollover %>

---

## Supporting tasks

- [ ]
- [ ]
- [ ]

## Schedule

| Time block | Focus | Notes |
| --- | --- | --- |
| Morning |  |  |
| Afternoon |  |  |
| Evening |  |  |

## Inbox

-

## Review

**Main focus completed?**
**What did I learn?**
**What should carry over?**
**Energy / mood:** /10

---

[[02-daily/weekly/<% weekTag %>|This week]] · [[02-daily/monthly/<% monthTag %>|This month]] · [[<% yesterday %>|Yesterday]]

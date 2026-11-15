# Obsidian Work Templates

A small set of reusable Obsidian templates for daily, weekly, monthly, meeting, project, creative brief, book, resource, and area notes.

The templates were adapted from a personal vault. Personal schedules, brand references, contact details, vault notes, attachments, and third-party plugins are not included.

## Install

1. Copy the Markdown files from `templates/` into your Obsidian templates folder.
2. Enable Obsidian's core **Templates** plugin for the simple `{{date}}` and `{{title}}` placeholders.
3. Enable **Templater** for `tpl-daily.md`; it carries open tasks forward from the previous daily note and expects the folder path `02-daily/`. Change that path if your vault uses a different layout.
4. Review and customize the fields, tags, and folder links to fit your workflow.

The templates are examples, not a prescribed productivity system. The creative brief includes generic client and brand fields only.

## Templates

| File | Use |
| --- | --- |
| `tpl-daily.md` | Daily focus, task rollover, schedule, and review |
| `tpl-weekly.md` | Weekly focus, planning, and review |
| `tpl-monthly.md` | Monthly goals and review |
| `tpl-meeting.md` | Agenda, notes, decisions, and actions |
| `tpl-project.md` | Project outcome, milestones, tasks, and risks |
| `tpl-creative-brief.md` | Client request and creative deliverables |
| `tpl-book.md` | Reading notes and takeaways |
| `tpl-resource.md` | General resource notes |
| `tpl-area.md` | Ongoing life or work areas |

## Check

```sh
npm test
```

The test suite uses Node.js built-ins and checks template structure and required placeholders.

## License

MIT. See [LICENSE](LICENSE).

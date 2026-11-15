const { readFileSync, readdirSync } = require("node:fs");
const { join } = require("node:path");
const { describe, it } = require("node:test");
const assert = require("node:assert/strict");

const templatesDir = join(__dirname, "..", "templates");
const files = readdirSync(templatesDir).filter((name) => name.endsWith(".md"));

function readTemplate(name) {
  return readFileSync(join(templatesDir, name), "utf8");
}

describe("Obsidian templates", () => {
  it("ships the nine documented templates", () => {
    assert.equal(files.length, 9);
    for (const name of [
      "tpl-area.md",
      "tpl-book.md",
      "tpl-creative-brief.md",
      "tpl-daily.md",
      "tpl-meeting.md",
      "tpl-monthly.md",
      "tpl-project.md",
      "tpl-resource.md",
      "tpl-weekly.md",
    ]) assert.ok(files.includes(name), `${name} is missing`);
  });

  it("gives every template frontmatter and a title heading", () => {
    for (const name of files) {
      const source = readTemplate(name);
      const frontmatterStart = name === "tpl-daily.md" ? source.indexOf("---", source.indexOf("-%>") + 3) : 0;
      assert.notEqual(frontmatterStart, -1, `${name} has no frontmatter`);
      assert.match(source.slice(frontmatterStart), /^---\n[\s\S]*?\n---\n/m, `${name} has malformed frontmatter`);
      assert.match(source, /^# .+/m, `${name} has no H1 title`);
    }
  });

  it("keeps the daily task rollover in the personal vault's configured path", () => {
    const daily = readTemplate("tpl-daily.md");
    assert.match(daily, /tp\.file\.find_tfile/);
    assert.match(daily, /02-daily/);
    assert.match(daily, /openTasks/);
  });

  it("contains no contact details or non-placeholder deployment URLs", () => {
    const source = files.map(readTemplate).join("\n");
    assert.doesNotMatch(source, /(?<!\d)1[3-9]\d{9}(?!\d)/);
    assert.doesNotMatch(source, /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i);
    assert.doesNotMatch(source, /https?:\/\/(?!example\.com)[\w.-]+/i);
  });
});

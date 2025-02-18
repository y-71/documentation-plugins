<div align="center">

![Sapphire Logo](https://raw.githubusercontent.com/sapphiredev/assets/main/banners/SapphireCommunity.png)

# @sapphire/docusaurus-plugin-ts2esm2cjs

**Docusaurus Remark plugin for converting TypeScript code to ESM and CJS code.**

[![GitHub](https://img.shields.io/github/license/sapphiredev/documentation-plugins)](https://github.com/sapphiredev/documentation-plugins/blob/main/LICENSE.md)
[![npm](https://img.shields.io/npm/v/@sapphire/docusaurus-plugin-ts2esm2cjs?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@sapphire/docusaurus-plugin-ts2esm2cjs)

</div>

## Description

This is a plugin for [Docusaurus](https://docusaurus.io) that adds support for a `ts2esmcjs` meta tag for code blocks.
It will transpile your TypeScript code into ESM and CJS code, and format it properly. It will then give you a component
using `Tabs` where users can select their preferred language. By default this will sync across all code blocks that use
this meta tag, you can disable that through the plugin options.

## Usage

In your `docusaurus.config.js`, for the plugins where you need this feature (doc, blog, pages, etc.), register it in the
`remarkPlugins` option. (See [Docs configuration][docconf] for more details on configuration format)

```js
// docusaurus.config.js
module.exports = {
  // ...
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          remarkPlugins: [[require('@sapphire/docusaurus-plugin-ts2esm2cjs')]]
        },
        pages: {
          remarkPlugins: [require('@sapphire/docusaurus-plugin-ts2esm2cjs')]
        },
        blog: {
          // ...
        }
      }
    ]
  ]
};
```

And then use it by adding the `ts2esm2cjs` key to the code block:

**meta**: `_typescript ts2esm2cjs_`

```typescript
import { Command, Args } from '@sapphire/framework';
import type { Message } from 'discord.js';

export class EchoCommand extends Command {
  public constructor(context: Command.Context, options: Command.Options) {
    super(context, {
      ...options,
      aliases: ['parrot', 'copy'],
      description: 'Replies with the text you provide'
    });
  }

  public async messageRun(message: Message, args: Args) {
    // ...
  }
}
```

### Line Highlighting

As you may be aware, Docusaurus supports [Line Highlighting][line-highlighting] for code blocks. As line highlighting
relies on meta just like this plugin would, we would normally run into a bit of a conflict as to what to set in the meta
tag. On top of that, often you'll want to highlight different lines for JavaScript as opposed to TypeScript. To solve
these issues this plugin supports a unique syntax of setting the meta tag. You can configure the line highlighting by
adding a `|` character after the plugin meta tag. This can be done twice, wherein the first line highlight configuration
will be for the JavaScript and ESM code blocks, whereas the second will be for the TypeScript code block.

For example consider the following code block:

**meta:** `_typescript ts2esm2cjs|{1,4-10}|{1,5-11}_ `

```typescript
import { Command, Args } from '@sapphire/framework';
import type { Message } from 'discord.js';

export class EchoCommand extends Command {
  public constructor(context: Command.Context, options: Command.Options) {
    super(context, {
      ...options,
      aliases: ['parrot', 'copy'],
      description: 'Replies with the text you provide'
    });
  }

  public async messageRun(message: Message, args: Args) {
    // ...
  }
}
```

This will give you a three code blocks in a `Tabs` layout with the JavaScript and ESM code blocks having lines 1 and 4
through 10 highlighted, and the TypeScript code block having lines 1 and 5 through 11 highlighted.

### Code formatting

The output JS and ESM code is formatted using Prettier. The default configuration is:

```json
{
  "endOfLine": "lf",
  "printWidth": 120,
  "quoteProps": "as-needed",
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "none",
  "useTabs": false,
  "parser": "babel"
}
```

You can customize this by passing `prettierConfig` to the plugin options.

### TypeScript compiler options

The ESM code is transpiled from TypeScript using the TypeScript compiler with the following base configuration:

```json
{
  "newLine": "lf",
  "removeComments": false,
  "esModuleInterop": true,
  "pretty": true,
  "module": "ESNext",
  "moduleResolution": "Node",
  "target": "ESNext"
}
```

You can customize this by passing `typescriptCompilerOptions` to the plugin options. However, you cannot customize the
`module`, `moduleResolution`, or `target` options.

## Buy us some doughnuts

Sapphire Community is and always will be open source, even if we don't get donations. That being said, we know there are
amazing people who may still want to donate just to show their appreciation. Thank you very much in advance!

We accept donations through Open Collective, Ko-fi, Paypal, Patreon and GitHub Sponsorships. You can use the buttons
below to donate through your method of choice.

|   Donate With   |                       Address                       |
| :-------------: | :-------------------------------------------------: |
| Open Collective | [Click Here](https://sapphirejs.dev/opencollective) |
|      Ko-fi      |      [Click Here](https://sapphirejs.dev/kofi)      |
|     Patreon     |    [Click Here](https://sapphirejs.dev/patreon)     |
|     PayPal      |     [Click Here](https://sapphirejs.dev/paypal)     |

## Contributors

Please make sure to read the [Contributing Guide][contributing] before making a pull request.

Thank you to all the people who already contributed to Sapphire!

<a href="https://github.com/sapphiredev/documentation-plugins/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=sapphiredev/documentation-plugins" />
</a>

[contributing]: https://github.com/sapphiredev/.github/blob/main/.github/CONTRIBUTING.md
[docconf]: https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#ex-config
[line-highlighting]: https://docusaurus.io/docs/markdown-features/code-blocks#line-highlighting

## onurravli-cli

My resume as a CLI tool. Content mirrors [onurravli.com](https://www.onurravli.com).

### Usage

```bash
npx onurravli
```

| Flag         | Description                       |
| ------------ | --------------------------------- |
| `--all`      | Include hidden sections and items |
| `--no-image` | Skip the avatar                   |
| `--json`     | Print the raw data as JSON        |
| `-h, --help` | Show help                         |

Requires Node.js 20 or newer.

### Updating

All content lives in [`data.js`](./data.js). Turn whole sections on or off in `sections`. Set `hidden: true` on an experience, project or post to leave it out of the default output (`--all` still shows it).

### License

MIT License.

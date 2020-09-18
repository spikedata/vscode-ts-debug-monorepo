# Setting a breakpoint in a dependency of an app which I am debugging

```sh
git clone https://github.com/spikedata/vscode-ts-debug-monorepo
cd vscode-ts-debug-monorepo
yarn i
yarn build

# manually set a breakpoint on /spike/prototype/vscode-ts-debug-monorepo/libA/src/index.ts:8
# then debug `user` (i.e. dependent) and see whether we hit the breakpoint in `lib` (i.e. the dependency)
node -r ts-node/register user/src/cli.ts
```

- hmm... this is working in this simple monorepo (although vscode shows the build/.js not the src/.ts)
- however it's not working in a larger project which this code is based on

## TODO

- try isolate when breakpoints stop being hit
- possibilities:
  - real monorepo has deeper subdirs (e.g. `{workspace}/stack/lambda-email/package.json`)
  - real monorepo uses _'s in workpaces array (e.g `{workspace}/package.json: { "workspaces": [ "stack/_" ]`)

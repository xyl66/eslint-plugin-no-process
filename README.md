# eslint-plugin-vite-lint

eslint for vite

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-no-process-lint`:

```sh
npm install eslint-plugin-no-process-lint --save-dev
```

## Usage

Add `no-process-lint` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-process-lint"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-process-lint/no-process": 2,
        "no-process-lint/no-require": 2
    }
}
```

## Supported Rules

* Fill in provided rules here



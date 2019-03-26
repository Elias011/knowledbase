# Some setups you need to start using Gherkin with Cucumber and Ruby

### Some installations:
1. Ruby Solargraph
2. Ruby
3. Ruby-rubocop

### Paste this json file in your json settings file at you VS code

```sh
{
    "cucumberautocomplete.steps": [
        "features/**/*.rb"
    ],
    "cucumberautocomplete.helpers": [
        "features/helpers/*.rb"
    ],
    "cucumberautocomplete.syncfeatures": "features/*feature",
    "cucumberautocomplete.strictGherkinCompletion": true,
    "cucumberautocomplete.smartSnippets": true,
    "cucumberautocomplete.stepsInvariants": true,
    "[ruby]": {
        "editor.formatOnSave": true
    },
    "editor.formatOnPaste": true,
    "editor.formatOnSave": true,
    "editor.formatOnType": true,
    "ruby.linter.executablePath": "PathToExecutable",
        "telemetry.enableTelemetry": false,
        "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
        "editor.renderWhitespace": "none",
        "editor.minimap.enabled": false,
        "git.enableSmartCommit": true,
        "git.autofetch": true,
        "ruby.intellisense": "rubyLocate",
        "ruby.format": "rubocop",
        "cSpell.enabledLanguageIds": [
            "asciidoc",
            "c",
            "cpp",
            "csharp",
            "css",
            "go",
            "handlebars",
            "html",
            "jade",
            "javascript",
            "javascriptreact",
            "json",
            "latex",
            "less",
            "markdown",
            "php",
            "plaintext",
            "pub",
            "python",
            "restructuredtext",
            "ruby",
            "rust",
            "scss",
            "text",
            "typescript",
            "typescriptreact",
            "yml"
        ],
        "cSpell.userWords": [
            "dropdown",
            "firstname",
            "gitlab",
            "lastname",
            "organised",
            "xpath"
        ]

}


```
### VS code settings for working with cucumber js 

```
{
    // "workbench.colorTheme": "Visual Studio Light",
    "workbench.iconTheme": "vs-minimal",
    "workbench.settings.editor": "json",
    "workbench.settings.settingsSearchTocBehavior": "hide",
    "workbench.editor.enablePreviewFromQuickOpen": false,
    "workbench.editor.enablePreview": false,
    "files.autoSave": "afterDelay",
    "files.autoSaveDelay": 1000,
    "editor.foldingStrategy": "indentation",
    "editor.minimap.enabled": false,
    "explorer.confirmDragAndDrop": false,
    "explorer.confirmDelete": false,
    "javascript.updateImportsOnFileMove.enabled": "always",
    "cucumberautocomplete.steps": [
        "cypress/**/*.js",
        "step_definitions/**/*.js"
    ],
    "cucumberautocomplete.syncfeatures": "cypress/**/*feature",
    "cucumberautocomplete.strictGherkinCompletion": true,
    "cucumberautocomplete.smartSnippets": true,
    "cucumberautocomplete.stepsInvariants": true,
    "cucumberautocomplete.customParameters": [
        {
            "parameter": "{ab}",
            "value": "(a|b)"
        },
    ],
    "cucumberautocomplete.skipDocStringsFormat": true,
    "cucumberautocomplete.onTypeFormat": true,
    "cucumberautocomplete.gherkinDefinitionPart": "(Given|When|Then)\\(",
    "window.zoomLevel": 0,
    "editor.tabSize": 2,
    "java.configuration.checkProjectSettingsExclusions": false,
    "workbench.editor.showTabs": true,
    "svn.enableProposedApi": "none",
    "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
    // "editor.formatOnSave": true,
    // "editor.formatOnType": true,
    // "editor.formatOnPaste": true
}
```
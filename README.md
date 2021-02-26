# test-classname-directive
Angular directive for adding a classname to the element that can be used for testing purposes

## Usage
Use `tstClass [suffix]="<your-suffix>"` directive to add `tst-<tagName>-<innertext>-<suffix>` to the classnames of the element

## Examples
* `<button tstClass>add</button>` is the same as `<button class="tst-button-add">add</button>`
* `<button tstClass [suffix]="'01'">add</button>` is the same as `<button class="tst-button-add-01">add</button>`
* `<table tstClass><tr>...</tr></table>` is the same as `<table class="tst-table"><tr>...</tr></table>`
* `<table tstClass [suffix]="'01'"><tr>...</tr></table>` is the same as `<table class="tst-table-01"><tr>...</tr></table>`

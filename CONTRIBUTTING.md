# Contributing to RainbowJS

## Getting Involved

## Questions and Discussion
You can create a new issue in the [git repository]([iusses](https://github.com/jorgeriv/RainbowJS/issues) using the tag 'question'.

## How to Report Bugs

RainbowJSJS GitHub repository [iusses](https://github.com/jorgeriv/RainbowJS/issues)

### Make sure it is a rainbowJS bug

When rainbowJS throws it doesn't necessarily mean that is a rainbowJS bug. Before reporting an issue make sure it not an error in your own code.

### Disable browser extensions

Make sure you have reproduced the bug with all browser extensions and add-ons disabled, as these can sometimes cause things to break in interesting and unpredictable ways. Try using incognito, stealth or anonymous browsing modes.

### Try the latest version of rainbowJS

Bugs in old versions of rainbowJS may have already been fixed. In order to avoid reporting known issues, make sure you are always testing against the latest build. We cannot fix bugs in older released files, if a bug has been fixed in a subsequent version of rainbowJS the site should upgrade.

### Simplify the test case

When experiencing a problem, [reduce your code](https://webkit.org/quality/reduction.html) to the bare minimum required to reproduce the issue. This makes it *much* easier to isolate and fix the offending code. Bugs reported without reduced test cases take longer to fix than bugs that are submitted with them, so you really should try to do this if at all possible.

### Search for related or duplicate issues

Go to the [rainbowJS iusse page](https://webkit.org/quality/reduction.html) on github and make sure the problem hasn't already been reported. If not, create a new issue there.


## Tips For Bug Patching

We *love* when people contribute back to the project by patching the bugs they find. Since rainbowJS is used by so many people, we are cautious about the patches we accept and want to be sure they don't have a negative impact on the hundreds of people using rainbowJS each day. For that reason it can take a while for any suggested patch to work its way through the review and release process. The reward for you is knowing that the problem you fixed will improve things for hundreds of sites and thousand of visits per day.

### Build a Local Copy of rainbowJS

Create a fork of the rainbowJS repo on github at https://github.com/jorgeriv/RainbowJS

Change directory to your web root directory, whatever that might be:

```bash
$ cd /path/to/your/www/root/
```

Clone your rainbowJS fork to work locally

```bash
$ git clone git@github.com:username/RainbowJS.git
```

Change directory to the newly created dir rainbow/

```bash
$ cd rainbow
```

Add the RainbowJS master as a remote. I label mine "upstream"

```bash
$ git remote add upstream git://github.com/rainbow/RainbowJS.git
```

Get in the habit of pulling in the "upstream" master to stay up to date as rainbowJS receives new commits

```bash
$ git pull upstream master
```

Run the build script

```bash
$ npm run build
```

Now run the rainbowJS test suite.
```bash
$ npm run test
```

Success! You just built and tested RainbowJS!


#### Runing tests during development

Rather than rebuilding rainbowJS with `gulp` every time you make a change, you can use the included `gulp develop` task to rebuild distribution files whenever a file is saved.

```bash
$ gulp develop
```

### Repo organization

The RainbowJS source is organized with CommonJS modules and then concatenated and compiled at build time.


### Browser support

Remember that RainbowJS supports NodeJS >= 4.0.0, multiple browsers and their versions; any contributed code must work in all of them. You can refer to the project's wiki for the current list of supported browsers.

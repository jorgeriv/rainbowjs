# Contributing to Rainbow

## Getting Involved

## Questions and Discussion


## How to Report Bugs

### Make sure it is a Rainbow bug

### Disable browser extensions

Make sure you have reproduced the bug with all browser extensions and add-ons disabled, as these can sometimes cause things to break in interesting and unpredictable ways. Try using incognito, stealth or anonymous browsing modes.

### Try the latest version of Rainbow

Bugs in old versions of Rainbow may have already been fixed. In order to avoid reporting known issues, make sure you are always testing against the latest build. We cannot fix bugs in older released files, if a bug has been fixed in a subsequent version of Rainbow the site should upgrade.

### Simplify the test case

When experiencing a problem, [reduce your code](https://webkit.org/quality/reduction.html) to the bare minimum required to reproduce the issue. This makes it *much* easier to isolate and fix the offending code. Bugs reported without reduced test cases take on average 9001% longer to fix than bugs that are submitted with them, so you really should try to do this if at all possible.

### Search for related or duplicate issues

Go to the rainbow iusse tracker and make sure the problem hasn't already been reported. If not, create a new issue there and include your test case.


## Tips For Bug Patching

We *love* when people contribute back to the project by patching the bugs they find. Since Rainbow is used by so many people, we are cautious about the patches we accept and want to be sure they don't have a negative impact on the hundreds of people using Rainbow each day. For that reason it can take a while for any suggested patch to work its way through the review and release process. The reward for you is knowing that the problem you fixed will improve things for hundreds of sites and thousand of visits per day.

### Build a Local Copy of Rainbow

Create a fork of the Rainbow repo on github at https://github.com/jorgeriv/rainbow

Change directory to your web root directory, whatever that might be:

```bash
$ cd /path/to/your/www/root/
```

Clone your Rainbow fork to work locally

```bash
$ git clone git@github.com:username/rainbow.git
```

Change directory to the newly created dir rainbow/

```bash
$ cd rainbow
```

Add the Rainbow master as a remote. I label mine "upstream"

```bash
$ git remote add upstream git://github.com/rainbow/rainbow.git
```

Get in the habit of pulling in the "upstream" master to stay up to date as Rainbow receives new commits

```bash
$ git pull upstream master
```

Run the build script

```bash
$ npm run build
```

Now open the Rainbow test suite in a browser at http://localhost/test. If there is a port, be sure to include it.

Success! You just built and tested Rainbow!


### Test Suite Tips...

During the process of writing your patch, you will run the test suite MANY times. You can speed up the process by narrowing the running test suite down to the module you are testing by either double clicking the title of the test or appending it to the url. The following examples assume you're working on a local repo, hosted on your localhost server.

Example:

http://localhost/test/?module=css

This will only run the "css" module tests. This will significantly speed up your development and debugging.

**ALWAYS RUN THE FULL SUITE BEFORE COMMITTING AND PUSHING A PATCH!**


#### Loading changes on the test page

Rather than rebuilding Rainbow with `gulp` every time you make a change, you can use the included `gulp develop` task to rebuild distribution files whenever a file is saved.

```bash
$ gulp develop
```

### Repo organization

The Rainbow source is organized with CommonJS modules and then concatenated and compiled at build time.


### Browser support

Remember that Rainbow supports multiple browsers and their versions; any contributed code must work in all of them. You can refer to the browser support page for the current list of supported browsers.

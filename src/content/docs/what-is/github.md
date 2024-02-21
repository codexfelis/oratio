---
title: What is GitHub?
description: GitHub is a place where open-source code is built and shared
sidebar:
  label: GitHub?
---

[GitHub](https://github.com) is a website where open-source code is built and shared.
Think of code here in the loosest sense -
smallish data sets in text files or spreadsheets,
your thesis in a Markdown file,
anything that is sort of vaguely text-based can happily live on GitHub.

On a technical level, GitHub is a remote host for [git](https://git-scm.com/book/) repositories (among a bunch of other features),
but unless you already know or want to dig into `git`,
it does a really good job of hiding that complexity from you when you just want to get stuff done.

There's one key piece of terminology that comes up with GitHub, and can be a bit confusing.
A **repository** or **repo** is a bunch of code collected together in some kind of project.
This maps to a `git` repository, and to the web address you see on GitHub -
these are always of the format `https://github.com/<OWNER>/<REPOSITORY>`.
Repositories can be public (anyone can see them),
or private (only specified people can see them).

## Why should I care?

There's lots of ways GitHub can be useful to you,
both for sharing your own stuff
and for interacting with the wider community of people putting code and things on the internet.

### Finding other people's code (and other things)

Lots of people share code on GitHub.
This can be anything from a [random script](https://github.com/caro401/raycast-commands) that you use for inspiration to get a thing done,
to a [full application](https://github.com/tropy/tropy) which you can download and install from GitHub.
People might also share other things,
like a [list of their favourite blogs](https://github.com/simevidas/web-dev-feeds),
the [code used to write a paper](https://github.com/0x454447415244/HandwritingRecognitionSystem),
or [this website](https://github.com/codexfelis/oratio).

You can search GitHub for repositories by topic -
here's the [search for Digital Humanities](https://github.com/topics/digital-humanities) -
and filter by what languages they use.

Stars are a signal for how popular and well-liked a repository is.
Generally you can assume that a repository with more stars is probably more widely known and approved of by the community.

You can do all the searching and reading of code without needing a GitHub account,
but to add a star or do any of the other things below, you'll need an account.
For most people this will be free,
you'll know if you need the more advanced features that require a paid account.

#### A note on licenses

When you're thinking about using some code from GitHub,
you need to check what license it is using,
to make sure the owner gives you permission to do what you intend with the code.
You can see the license in the sidebar of a repository's homepage
(in this example screenshot, they use the MIT license),
and in a file called something like `LICENSE` or `license.txt`.

![Screenshot of the right sidebar of a repository on GitHub, showing that the project uses the MIT license](./license.png)

If you're not sure whether the license matches your needs,
check it out on [Choose a License](https://choosealicense.com/licenses/) for a summary of what you're allowed to do.

All code on GitHub _should_ have an associated license file,
but in many smaller projects it may be missing.
In this case you technically can't use the code for anything,
but you might be able to reach out to the maintainer, [as suggested here](https://choosealicense.com/no-permission/).

### Using issues for feedback

Many code projects on GitHub will allow people to open **issues** against their code.
Usually, people use issues for 2 main types of feedback -
feature requests (please can you make this code do an extra thing)
and bug reports (I think your code might be broken).

If you run into a problem with some code you're using,
or you're thinking of opening an issue,
you should first browse or search the existing issues on that repository to check whether someone else already made a relevant issue.
The issues tab only shows you open issues by default,
but you can turn that filter off and see all the issues.
[Here's the search](https://github.com/codexfelis/oratio/issues?q=is%3Aissue+github) for all issues mentioning GitHub on the repo for this website.

### Sharing my own code, writing or data

You can put your own code (or data or anything else mostly text) on GitHub too!

If your code can't be made public, you can put it in a **private** repository,
which means only you, and optionally specific other people you add, can see it.
This can be useful when you just want to keep a backup of some of your work,
or when stuff is in early development and not ready to be shared yet.

If you can make your code public, that's great!
Remember to add an appropriate [license](#a-note-on-licenses),
so other people can use it in ways you (or your funding provider!) approve of.

## Are there alternatives?

Yep, if you don't want to use GitHub for your own stuff for whatever reason,
there's quite a few alternatives.
The most common are [GitLab](https://about.gitlab.com/) and [Bitbucket](https://bitbucket.org/product) (generally used by big companies),
but there's also loads of smaller providers,
such as [Codeberg](https://codeberg.org/) and [Gitea](https://about.gitea.com/).
The term to search for is "code hosting".

While most of these have similar features in terms of hosting code, having an issue tracker and the like,
there's usually a lot less community engagement around them,
and generally there's just fewer (public) repositories hosted on these other platforms.
It's quite rare for popular bits of software to be anywhere other than GitHub,
and for better or worse,
if you want or need any kind of organic discovery of your own repositories or want to build a public profile,
GitHub is the place to be.

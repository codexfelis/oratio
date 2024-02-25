# How to contribute

Thanks for wanting to contribute!
We love all contributions, however small.

Contributions to this project are [released](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license) to the public under the project's open source license.

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md).
By participating in this project you agree to abide by its terms.

## Proposing or requesting an article

We'd love ideas for what to write about,
and we'd extra love it if you could help us write.
Before you do loads of writing,
please check whether there's an [existing issue](https://github.com/codexfelis/oratio/issues)
which covers or is related to your idea.
If there is, drop a comment there to get involved.
If not, please [create an issue](https://github.com/codexfelis/oratio/issues/new)
using the "Article request" template.
This is so we can see what you're planning,
give some advice or support,
and avoid duplicated work.

We write our articles in [markdown](https://starlight.astro.build/guides/authoring-content/) syntax,
with [some additional formatting](#why-is-your-markdown-formatting-so-weird),
and the files are in `src/content/docs`.

While you're working on your article,
you can see a preview if you clone (your fork of) this repository and run the dev server.
To do this, follow the development instructions in [the README](https://github.com/codexfelis/oratio/blob/main/README.md#Developing)

## Making small changes

The easiest way to make a small change,
for example fixing a typo,
is to edit the file from your browser.
When you click the edit button,
it will fork the repository under your account.
Try to describe what the change fixes in your commit message.

For example, to [change this file](/CONTRIBUTING.md),
find it in the GitHub repository.
Then click the `Edit` button.
Make your changes,
type in a commit message,
and click the `Propose File Change` button.

## Why is your markdown formatting so weird??

You'll probably notice that there's a lot line breaks in the markdown source for our articles.
This is because we like to use [Semantic Line Breaks](https://sembr.org/) (SemBr) -
putting each sentence or meaningful clause on its own line.
Because all our content is written and edited with a `git`-based workflow,
having shorter, independently meaningful lines makes commenting in Pull Requests and reading git diffs a lot easier.
We'd really prefer it if you can use this convention too when you're contributing.

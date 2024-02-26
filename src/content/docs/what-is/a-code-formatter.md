---
title: What is a code formatter?
description: A code formatter is a tool to automatically standardise how your code is typeset
authors: [caro]
sidebar:
  label: a code formatter?
---

A code formatter is a tool to automatically standardise how your code is typeset in a file.
This usually means things like fixing stray spaces,
adding or removing blank lines,
and making sure you've used the same symbol everywhere for your strings.
It doesn't change anything about how your code works or what it does.

The examples in this article use Python,
but the same concepts apply to pretty much any programming or markup language.

## Ok, but why do I need one?

When you're working on just your own little bit of research code,
the overhead for setting up a formatter might feel a bit excessive.
But you only have to do this once, and you'll get a lot of benefits.

### Having consistently formatted code makes things easier

Particularly when you're newer to coding,
having your code look the same as code you'll read in examples and tutorials can help you notice what's actually happening in your code,
as opposed to noise from things being laid out a bit differently.

Having consistency of formatting also helps when you're switching between different bits of your own code,
or going back to things you wrote a while ago.
This is all in aid of reducing the **cognitive load** you feel when reading code.

Let's look at an example.
This is some Python code,
don't worry if you don't understand everything that's going on,
but think about how easy (or not) this is to figure out.

```python
# bad-formatting.py
things = {  'a':37,'b':42,

"c":   927}

if very_long_variable_name is not None and \
 very_long_variable_name.field > 0 or \
 very_long_variable_name.is_debug:
 z = 'hello '+'world'

class Foo  (     object  ):
  def thing( self,    x: List[ int ],y=42):
      return       37*-2+y
```

How easy is it to work out what's going on with the value of the first variable, when the `if` block evaulates to `True`, or what arguments you need to pass to the `thing` function?

Now, try and work out the same things for this code after the formatter was run:

```python
# better-formatting.py
things = {"a": 37, "b": 42, "c": 927}


if (
    very_long_variable_name is not None
    and very_long_variable_name.field > 0
    or very_long_variable_name.is_debug
):
    z = "hello " + "world"


class Foo(object):
    def thing(self, x: list[int], y=42):
        return 37 * -2 + y

```

The code in this snippet does exactly the same thing as before,
but what that thing is should be a lot easier to figure out.

If you're working on code as part of a team,
having consistently formatted code helps the codebase feel coherent,
more like everything has been written by the same person,
rather than sections written by lots of different people
in their own special dialects or with their own mannerisms.
Having some formatting rules that everyone has agreed on can also help reduce disagreements in code review.
If you've all agreed that you use a particular formatting style,
code review comments can focus on what the code actually does,
rather than just how it looks.

### and a formatter saves manual effort

Having code that is consistently formatted is really great,
but no one wants to go through all their code by hand
to fix all the little inconsistencies that creep in when you're coding.
So adding in an automatic code formatter to your workflow gives you the best of both worlds -
clear, consistent code without a load of boring manual work.

You'll get the most benefit from your formatter if you can set it up to run automatically.
This might be in a `git` hook,
so the formatter is run before every commit or every push,
or as part of automated checks in GitHub actions or similar.
Running the formatter automatically,
or failing a build if the formatter would make changes,
is the easiest way to maintain good formatting
without the mental overhead of remembering to run the formatter yourself,
or noticing when a contributor to your code hasn't done so.

## Choosing your formatter

If your team, or code you're working on, already uses a formatter,
you should almost always choose that one for your own code too.
Consistency is the most important thing you're aiming for here.
Having someone else's formatter choice and configuration to copy for your project also saves you some thinking.

If you're not working on a team,
or there's no existing formatter in your shared code,
you might have to pick one yourself.
If your programming language or community has a default formatter,
for example Rust and `rustfmt` or Go and `gofmt`,
go with that one.
If you all use the same code editor (VSCode, PyCharm or similar),
that might come with a built-in formatter for your language,
which might be a good place to start.
However, a separate tool is ususally easier to enforce later on.

Otherwise, there's probably a few popular choices for your programming language.
Usually, if there's not a single default formatter,
there'll be two camps of people using formatters.
Some people will prefer a formatter with as few configuration options as possible,
and some will like to be able to configure all the things
to make the code look exactly how they like.
If you're just getting started,
one with fewer options or a common default configuration will be a lot easier.

### A Python example

Python has a few different tools for doing formatting.
You'll often come across the term **PEP 8** with regards to formatting in Python.
This refers to the [Style Guide for Python Code](https://peps.python.org/pep-0008/) -
a set of official guidelines in prose about how Python should look,
and why some of those decisions were made.
Since these guidelines exist and are widely used and accepted in the community,
whatever formatter you pick should be at least close to these guidelines in its style.

Currently (early 2024) the most common formatter in the community is probably [`black`](https://black.readthedocs.io).
`black` is now maintained by the Python Software Foundation,
so is about as official as things can get for Python.
In the absence of other opinions in your existing code or team,
this would probably be the recommended option.

There are some other formatters which you may come across.
[`autopep8`](https://github.com/hhatto/autopep8) and [`yapf`](https://github.com/google/yapf) have both been around a long time.
`autopep8` allows for a few more configuration options than `black`, and
`yapf` has even more options you can tweak.

Another option is [`ruff`](https://docs.astral.sh/ruff/formatter/),
which includes a formatter alongside a new suite of other tools.
`ruff` is gaining some popularity in the community,
but is not un-controversial.
If you have a _lot_ of code to format,
`ruff`'s speed improvements over other tools may be relevant.

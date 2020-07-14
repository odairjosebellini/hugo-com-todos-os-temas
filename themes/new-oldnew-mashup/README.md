# OldNew Mashup

Version 1.3.12

## Status

If you wish you can view the [Status of New OldNew Mashup on Github](https://github.com/cshoredaniel/new-oldnew-mashup/blob/master/STATUS.md)

## Examples of Sites Using This Theme
*   [The C Shore](https://www.thecshore.com)
*   [New OldNew Mashup Demo Site](https://new-oldnew-mashup.thecshore.com)

## Example Site

``/exampleSite`` contains some example content as per
["Add a theme to hugoThemes list"](https://github.com/gohugoio/hugoThemes#adding-a-theme-to-the-list),
including the documentation and a sample of how to use the theme.

## Interesting Features

### Even Lazier Blogger Menus and Navigation

This theme implements menus and navigation without requiring additional
metadata (e.g. ``menu:`` entries).  First, it automatically creates a
menu bar based on the top level sections and their sibling pages and
sub-sections (from which individual pages or sections can be excluded).
Likewise, on each page we generate buttons for linear traversal
(Previous|Next) and Up.  That means, except for pages which are
intentionally excluded, that the entire site can be read from landing
page to last page of the last section by clicking 'Enter Site', and then
'Next' on every subsequent page.

On a final note: the right sidebar will contain a navigation menu for the
current section and one level of subsections.

#### A note on navigation and display order

The linear traversal mentioned above uses Hugo's default Page ordering,
which means you can set the 'weight' metadata in the front-matter of
pages that are not naturally in the order you wish (basic ordering
is by date).  Lower weight sorts earlier.

### Search

This theme implements a search functionality using Fuse.js, and
fusebar.js.

### Contact Form

The theme includes basic support for a contact form (given an
appropriate server-side POST receiver).

### A note on displaying copyright / licenses

This theme has an archetype and taxonomy that make it easy to indicate
the copyright and licensing for your pages.  In the front-matter add
the license (or licenses) as a list in a licenses field, and copyright
in a copyright field.

```yaml
---
copyright: © 2020 Daniel F. Dickinson
licenses:
  - CC-BY-4.0
---
```

The copyright and license information will appear in the colophon in the
footer of the page.

You can mix and match licenses as you wish (in terms of the above scheme,
whether the licenses can actually work together is another story).

### Date and Time of Publishing

Three dates and times are available for every page and are included in
the footer by default: creation, modification, and site generation.

### RSS Feeds

Hugo's RSS feed generation is enabled and linked to from the footer.

### Goal: 100% W3 valid HTML5 and CSS3

Efforts are made to keep the theme 100% valid HTML5 and CSS3 according
the the <https://w3.org> [Unicorn validator](https://validator.w3.org/unicorn).


At present, due to the requirement to support IE11, there are
non-compliant media queries used to detect IE11.

### Human-readable sitemap

A Human-readable sitemap shortcode is available.

### Taxonomies

Hugo Taxonomies are implemented.

## Documentation & Quick Start

If you are interested in this theme you may wish to view the
[New OldNew Mashup Documentation](https://new-oldnew-mashup.thecshore.com/docs/),
and especially the [New OldNew Mashup Quick Start Guide](https://new-oldnew-mashup.thecshore.com/docs/quick-start/).

## Hugo Extended

### Avoiding Extended with 'hugo server'

When using ``hugo server`` the default is to use features found in
the Hugo Extended version.  This is because the server by default
runs with the 'development' environment.

If you wish to use ``hugo server`` with Hugo Basic you need to pass
and environment parameter other than 'development'.

For example: ``hugo server -b http://localhost:1313/ --environment basic``.

### Some features require Hugo Extended

Changing the styling via Params (e.g. colour selection) requires
Hugo Extended as the CSS must be regenerated from the base SCSS, which
requires Hugo Extended not just Basic.

### Generating Resources Required by Hugo Basic

From the root of the theme execute (for Linux):

1.  ``rm -rf resources exampleSite/resources exampleSite/public``
2.  ``(cd exampleSite && hugo --environment for-basic)``
3.  ``cp -r exampleSite/resources ./``

You should now be able to use Hugo Basic with this theme (although you won't be able
to use user-defined colours and other SCSS-based tweaks to the style).

## Issues / Bugs / Enhancements

Go to the [New OldNew Mashup Issue Tracker on GitHub](https://github.com/cshoredaniel/new-oldnew-mashup/issues).

## Development

If you wish to contribute to development of the theme please send a pull request on the
[New OldNew Mashup Github Repo](https://github.com/cshoredaniel/new-oldnew-mashup).

## Copyright & License

© 2009-2020 Daniel F. Dickinson
Licensed under the [Creative Commons Attribution License 4.0](https://creativecommons.org/licenses/by/4.0/)
[![Creative Commons License](by.svg)](https://creativecommons.org/licenses/by/4.0/)

The License Image (above) is Copyright Creative Commons and Licensed under the [Creative Commons Share-Alike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/)

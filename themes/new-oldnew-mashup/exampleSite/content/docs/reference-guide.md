---
title: "Reference Guide"
date: 2019-09-02T01:20:56-04:00
copyright: © 2019 Daniel F. Dickinson
author: Daniel F. Dickinson <cshored@thecshore.com>
description: Reference guide for using OldNew Mashup theme
licenses:
  - CC-BY-4.0
categories: [theme, documentation, reference]
tags: [theme, website, documentation, manual, reference-guide, reference]
weight: 10
---
# Reference Guide

## Front Matter

The following items in the front matter metdata are handled specially by this theme (in addition to the params further below which are for theming / layout):

| Key | Description |
|-----|-------------|
| title | Used as the tab title (title in 'head' section in the html), as well as the H1 heading that is displayed in the page body as the page title. |
| date | Besides the usual Hugo usage, this is used in the article header and is displayed below categories |
| copyright | Displayed as the article copyright in the page footer |
| description  | Displayed below date as brief summary of the article |
| licenses  | a list (in YAML list format) of (copyright) license which apply to the article |
| categories  | a list of categories (taxonomy) to which the page belongs.  Displayed below the article title (title metadata above) |
| tags | A list of tags (taxonomy) which the page has. Displayed after the end of the article. |

## Enabling Search

In your site configuration file add JSON as an output type, and in set
the site parameter ``enable_search = true``.

E.g. for a ``config.toml`` you might have:

```toml
baseURL = 'https://example.com/'
languageCode = 'en-ca'
languageLang = 'en'
title = 'Site Title'
enableGitInfo = true
theme = 'new-oldnew-mashup'

[outputs]
  home = ["HTML", "JSON", "RSS"]

[params]
  enable_search = true
```
### Enabling Licenses Taxonomy

In your site configuration file add the `licenses` taxonomy.
E.g. for ``config.toml`` you might have:

```toml
baseURL = 'https://example.com/'
languageCode = 'en-ca'
languageLang = 'en'
title = 'Site Title'
enableGitInfo = true
theme = 'new-oldnew-mashup'

[taxonomies]
  category = "categories"
  tag = "tags"
  license = "licenses"
```

## Site Params

Set these in your site configuration file in the ``params`` section.
E.g. for a ``config.toml`` you might have:

```toml
baseURL = 'https://example.com/'
languageCode = 'en-ca'
languageLang = 'en'
title = 'Site Title'
enableGitInfo = true
theme = 'new-oldnew-mashup'

[params]
  siteid = 'Site Title/ID'
  licenses = ['CC-BY-4.0']
  copyright = '© 2018 Daniel F. Dickinson'
  default_background_color = '#aba'
  default_text_color = '#454'
  GitHubRepo = 'cshoredaniel/new-oldnew-mashup'
  ...

```
and so on.

### Miscellaneous Site Parameters

| Param                               | Description                    |
|-------------------------------------|--------------------------------|
| siteid                              | Appears in the site badge as the site identifier |
| licenses                             | Licenses for the site as a whole (needs the matching taxonomy to exist for the colophon link); should be a list |
| copyright                           | The copyright year and holder name |
| site_badge_graphic                  | path to graphic for the site badge |
| site_badge_graphic_alt_text         | ALT text for graphic for the site badge |
| splash_images_bundle                | path to a leaf bundle containing the splash screen images and descriptions (see below) |
| enable_search                       | see above |
| time_types                          | list of page '.Type's that should be listed in time order |

### Site or Page Params

The following may be defined as Site Params (see above) — in that case
the parameter becomes the site-wide default — or as a Page param (which
applies only to a individual page).

| Param                               | Description                    |
|-------------------------------------|--------------------------------|
| nobaseurl                           | Don't use BaseURL even if one is set in the config |
| nofooterlinks                       | Don't display the footer links section |
| nocontact                           | Don't display contact footer link |
| nositemap                           | Don't display sitemap footer link |
| nofootertaxonomies                  | Don't display taxonomyTerms (with links) in footer |
| noprivacy                           | Don't display privacy statement page link |
| noaccessibility                     | Don't display accessibility statement page link |
| nofeedlink                          | Don't display RSS feed for page |
| nogetsource                         | Don't display 'Get Source' link to git repo |
| novalidator                         | Don't display link to W3.org Unicorn validator for the current page |
| footersection                       | Where to find pages linked from the footer (see below) |
| rssfeedlink                         | true means include a link to RSS feeds for a list page when an RSS feed exists for that page |
| validatorlink                       | true means include a link which applies the W3.org Unicorn validator to the page |
| nocolophon                          | Don't display the colophon (page information, e.g. license and document dates) |
| nolicense                           | Don't display page license     |
| nodocdate                           | Don't have document date box (and hoversite) |
| GitHubRepo                          | If present a link to the repository may appear in the footer |
| norbar                              | Don't display right sidebar    |
| noptoc                              | Don't display article Table of Contents |
| not_in_lists                        | List (type) of lists / menus from which to exclude the current page (see below) |


### Footer Pages

This theme will looks for the following pages at either
``/footersection/<page>`` or ``/siteentry/<page>`` (if ``footersection``
  is not defined).  If the page exists the footer will link the page.

| Page                                 | Description                   |
|--------------------------------------|-------------------------------|
| accessibility                        | Accessibility Statement / Information |
| privacy                              | Privacy Statement / Information |
| contact                              | Site Contact Form             |
| sitemap                              | Human readable site map       |

### Lists / Menus from which pages may be excluded

| List / Menu                          | Description                   |
|--------------------------------------|-------------------------------|
| site                                 | site menu (e.g. topbar menubar) |
| section-nav                          | section menu (sidebar section navigation) |
| local-nav                            | linear traversal bar (Prev\|Up\|Next) |
| section                              | currently unused              |
| sidebar-news                         | news items section of sidebar         |
| sidebar-recent                       | recently modified item section of sidebar |
| sidebar-events                       | events section of sidebar     |
| sitemap                              | Human readable site map       |

### Theme Styling Parameters

| Param                               | Description                    |
|-------------------------------------|--------------------------------|
| sans_font_stack                     | Default sans-serif font selection preferences |
| serif_mono_font_stack               | Default serif font selection preferences |
| mono_font_stack                     | Default monospace font selection preferences |
| default_background_color            | self-explanatory               |
| default_background_image            | ditto (default no image)       |
| default_text_color                  | default colour for any text not otherwise styled |
| default_link_color                  | default colour for non-visited (new) links |
| default_visited_link_color          | default colour for visited links |
| default_hover_background_color      | default background colour for hovered over links |
| default_hover_color                 | default text colour for hovered over links |
| default_pre_background_color        | default background for pre-formatted text boxes |
| default_pre_text_color              | default colour for any pre-formatted text not otherwise styled |
| default_pre_link_color              | default colour for pre-formatted non-visited (new) links |
| default_pre_visited_link_color      | default colour for pre-formatted visited links |
| default_pre_hover_color             | default preformatted text colour for hovered over links |
| default_inline_pre_background_color | default background for inline pre-formatted text boxes |
| default_inline_pre_text_color       | default colour for any inline pre-formatted text not otherwise styled |
| default_inline_pre_link_color       | default colour for inline pre-formatted non-visited (new) links |
| default_inline_pre_visited_link_color | default colour for inline pre-formatted visited links |
| default_inline_pre_hover_color      | default inline pre-formatted text colour for hovered over links |
| default_separator_color             | default colour for separating lines / borders |
| default_container_border            | default border for 'containers' (e.g. boxes) not including colour. E.g. '4px solid' |
| default_container_border_color      | default colour for 'containers' (e.g. boxes) borders |
| default_container_background_color  | default background for 'containers' (e.g. boxes) |
| default_container_text_color        | default colour for any text in 'containers' (e.g. boxes) |
| default_container_row_background_color | default background color for highlighted text in 'containers' (e.g. boxes) |
| sidebar_box_border                  | default border for sidebar boxes not including colour. E.g. '4px solid' |
| sidebar_box_border_color            | default colour for sidebar boxes borders |
| sidebar_box_background_color        | default background for sidebar boxes |
| sidebar_box_text_color              | default colour for any text in sidebar boxes |
| sidebar_box_row_background_color    | default background color for highlighted text in sidebar boxes |
| sidebar_menu_entry_row_background_color | background color for rows containing menu items in a sidebar box |
| toc_box_border                  | default border for table-of-contents boxes notable-of-contentst including colour. E.g. '4px solid' |
| toc_box_border_color            | default colour for table-of-contents boxes botable-of-contents |
| toc_box_background_color        | default background for table-of-contents boxes |
| toc_box_text_color              | default colour for any text in table-of-contents boxes |
| toc_box_row_background_color    | default background color for highlighted text in table-of-contents boxes |
| doc_date_border                 | default border for document date boxes notable-of-contentst including colour. E.g. '4px solid' |
| doc_date_border_color           | default colour for document date boxes botable-of-contents |
| doc_date_background_color       | background colour for the document date information colophon hover block |
| doc_date_text_color             | default colour for any text in document date boxes |
| default_top_bar_background_color | default background for top bar |
| default_top_bar_box_shadow_color | default colour for top bar box shadow  |
| default_top_bar_border_color     | default colour for top bar border |
| default_top_bar_hover_border_color | default colour for top bar item being hovered over |
| default_top_bar_hover_box_shadow_color | default box shadow colour for top bar item that is hovered over |
| site_badge_graphic_background_color | background colour for site badge graphic row |
| menubar_box_shadow_color            | colour for menubar box shadow  |
| menubar_top_level_border_color      | colour for top-level menubar border |
| menubar_submenu-background_color    | background colour for menubar submenu |
| local_nav_background_color          | self-explanatory               |
| local_nav_text_color                | local navbar colour for any text not otherwise styled |
| local_nav_link_color                | local navbar colour for non-visited (new) links |
| local_nav_hover_background_color    | local navbar background colour for hovered over links |
| local_nav_hover_color               | local navbar text colour for hovered over links |
| homepage_title_background_color     | self-explanatory               |
| homepage_title_text_color           | homepage title colour for any text not otherwise styled |
| splash_screenshot_frame_border      | colour of simulated photograph border |
| splash_screenshot_image_border      | inner border color for homepage 'splash' screenshots |
| splash_screenshot_outside_border    | border colour for the outside of hompage 'splash' screenshots |
| splash_screenshot_box_shadow        | box shadow colour for homepage 'splash' screenshots |
| search_results_background_color     | self-explanatory               |
| search_results_text_color           | search results colour for any text not otherwise styled |
| search_results_link_color           | search results colour for non-visited (new) links |
| search_results_visted_color         | search results colour for visited links |
| search_results_hover_color          | search results text colour for hovered over links |
| default_table_border            | default border for tables not including colour. E.g. '4px solid' |
| default_table_border_color      | default colour for tables' borders |
| default_table_background_color  | default background for tables |
| default_table_text_color        | default colour for any text in tables |
| default_table_even_row_background_color | default background color for even rows in tables |
| default_table_heading_background_color | default background color for heading row(s) in tables |

### Sidebar Expansion Pages

These pages are a longer lists on a regular page of the sidebar items
such as 'Recent Changes', 'News', and 'Events'.

These have a few elements to make their magic.

*   A shortcode called ``summary-list-expansion`` which takes two
    parameters.  The first parameter is the type of page (that it
    matches pages .Type) or "recent" (meaning all regular pages may
    match).  The second (optional) parameter is the number of pages to
    display in the summary list (e.g. you can show the first 5 or 25
    instead of the default 15).
*   The creation of a content page that uses the shortcode.
    For example:
```
 ## The 30 most recently published events
 {{\< summary-list-expansion "events" 30 \>}}
```
*   In the sidebar there is a conditional that checks for the site for
   the following parameters:

| Param | Notes |
|-------|-------|
| recent_changes | Check for the existance of the page with this path (e.g. ``/siteentry/recent-changes`` and display from all regular pages |
| recent_news  | Likewise but only for "news" pages |
| recent_events | Likewise but only for "events" pages |

*   If page exists at the specified path, then the header (e.g. "News")
   in the sidebar links to the page at the specified path.

## Generic Styles Available

| Class Name          | Description                                   |
|---------------------|-----------------------------------------------|
| clear               | Causes HTML following to be rendered on the next line (never beside) the element with this class |
| label               | Element is intended as a label for following text (but is not necessarily in a form, so not label element |
| rollup-hoversite    | When this a block named with this class is hovered over, rollup-element gets ``display: block`` instead of ``display: none`` |
| rollup-element      | Is hidden (``display:none``) by default, but when a rollup-hoversite classed element is hovered over it is displayed (as block) |
| semiblock           | For paragraphs that need an initial indent    |
| semiblockwrapper    | For a wrapper around paragraphs that need an initial indent on every paragraph |
| start-para-pic      | For a an image intended to be at the start of a paragraph of text (but done as a div because p elements can't contain block-level elements) |

## Splash Screen bundle

*   Needs to be a content bundle

### Sample _index.md for splash_images_bundle

```yaml
---
title: Splash Images Resources
resources:
  - src: splash-demo-image1.jpg
    params:
      dlinkfile: /siteentry/splash-images/rock-garden-description
      alt: \[Photo of a rock garden in bloom, slightly rotated left with a whie border\]
  - src: splash-demo-image2.jpg
    params:
      dlinkfile: /siteentry/splash-images/grain-elevator-mural-description
      alt: \[Photo of a large outdoor mural on a grain elevator, seen through trees and hydro wires\]
  - src: splash-demo-image3.jpg
    params:
      dlinkfile: /siteentry/splash-images/thecshore-homepage-description
      alt: \[The C Shore Website Screenshot\]
  - src: splash-demo-image4.jpg
    params:
      dlinkfile: /siteentry/splash-images/thecshore-about-page-description
      alt: \[The C Shore About Page Screenshot\]
---
```

*   Notice the ``resources`` map
    *   Contains a ``src`` which is an image in the splash_images_bundle
    *   Contains a ``params`` map which contains:
        *   ``dlinkfile``: URL of the description of the image (for
            accessibility).
        *   ``alt``: ALT text for the image (also for accessibility).

## Sample Landing (Home) Page metadata

```yaml
---
title: "Landing page tab title"
date: 2018-01-06T14:23:41-05:00
copyright: © 2019 Daniel Dickinson
licenses:
  - CC-BY-4.0
author: Somebody Someone
description: Description of the site
categories: [hugo, theme, html, css, test]
aside: >
  An aside. Having an aside is optional. Handy for a  quirky comment on a personal site.
asidefooter: >
  Footer to the main body of the this page (above the footer that appears on every page).
oneliner: A short oneliner for the site
subliner: And a longer sub-oneliner for the site.
---
```
*   The special bits are _aside_, _asidefooter_, _oneliner_, and
    _suboneliner_ .

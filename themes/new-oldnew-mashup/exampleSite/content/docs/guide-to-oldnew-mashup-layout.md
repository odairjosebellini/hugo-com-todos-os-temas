---
title: "Guide to Layout"
date: 2019-09-22T03:06:13-04:00
copyright: © 2019 Daniel F. Dickinson
author: Daniel F. Dickinson <cshored@thecshore.com>
description: Guide to OldNew Mashup Layout
licenses:
  - CC-BY-4.0
categories: [theme, documentation, reference]
tags: [theme, website, documentation, manual, reference-guide, reference]
weight: 20
---
# Guide to OldNew Mashup Layout

## HTML HEAD

| Part                          | Description                          |
|-------------------------------|--------------------------------------|
| Title                         | Page title                           |
| head/theme partial            | BaseURL, CSS, JS, and metadata for all pages in theme |
| head/site partial             | Allows to override / extend head-theme partial for a particular site |

<!--more-->

### head/theme partial
| Part                          | Description                          |
|-------------------------------|--------------------------------------|
| rendering metadata            | charset, viewport, etc               |
| metadata                      | description, keywords, etc           |
| BaseURL                       | (optional) BaseURL definition        |
| CSS links                     | Pull in templatized SCSS to generate site CSS |
| JS links                      | Javascript for site                  |
| Alternative output            | Non-HTML output                      |

## HTML BODY

### Page Header

| Part                           | Description                         |
|--------------------------------|-------------------------------------|
| site-badge                     | The site logo (if it exists) and title as a button that loads the landing page |
| menubar                        | The dropdown/flyout menu and the search box and results element (the results element is hidden by default) |

#### Site Badge for Page

| Part                           | Description                         |
|--------------------------------|-------------------------------------|
| graphics-row                   | The combined set of ``site-badge-graphic`` classed images and/or text (one row) |
| siteid                         | The short text acting as user-visible site identifier (e.g. OldNew Mashup) |

#### Top Bar Menubar

| Part                           | Description                         |
|--------------------------------|-------------------------------------|
| menubar-site-menu-list         | The list that gets styled as a dropdown / flyout menu |
| search-query                   | The search form which contains the search input box and submit ('Search') button |
| search-results                 | Empty and not displayed by default; is made visible and populated by the onSubmit action of the search-query form |

### Main &lt;main&gt; block

*   Title as H1 heading with nice styling in 'Main Article' section

| Part                           | Description                         |
|--------------------------------|-------------------------------------|
| Main article (name of section varies) | The main body not including sidebar, header, or footer |
| Section Contents / Lists (for list pages) | The pages or list items that that this section/list page is associated with |
| Sidebar                        | Optional: sidebar if enough room on screen (otherwise after main body) |
| Footer                         | Footer (Links and Colophon) |

#### Main Article for Page

| Part                           | Description                         |
|--------------------------------|-------------------------------------|
| Article heading                | Page title as H1 heading; content H1 heading in content is suppressed (but used by Table of Contents) |
| Categories (if present in metadata) | Page categories (taxonomies)   |
| Table of Contents (on left)    | Page contents (floated left)        |
| The actual article             | Varies                              |
| Tags (if present in metadata)  | Page tags (taxonomies)              |

#### Page Sidebar

| Part                           | Description                         |
|--------------------------------|-------------------------------------|
| Local nav bar                  | Optional: on large screens -- on small screens local nav bar is first after main menu |
| Section navigation             | Optional: navigation with the current section of pages |
| News items                     | Optional: max 5                     |
| Recently modified pages        | Optional: max 5                     |
| Events                         | Optional: max 5                     |

### Footer for Page

| Part                           | Description                         |
|--------------------------------|-------------------------------------|
| footer-links                   | Various links (see [Reference Guide](reference-guide) ) |
| colophon                       | Various document information bits |

#### Colophon for Document

| Part                           | Description                         |
|--------------------------------|-------------------------------------|
| license                        | Copyright and license information; flattened (styling) unordered list of licenses for the and another for site as a whole |
| doc-date                       | A box that appears when hovered over (on large screens; on small screens it just appears at bottom of page) and show three relevant dates for the documents (created, modified, generated) |

---
title: "Accessibility Statement"
date: 2019-08-14T06:19:45-04:00
copyright: 2019 Daniel F. Dickinson
licenses:
  - CC-BY-4.0
weight: 14
categories:
  - accessibility
  - policy
tags:
  - accessibility
  - policy
  - a11y
  - statement
  - features
  - contrast
  - colour
---

# Accessibility Statement

## When located at primary location

The following statements apply to this site when hosted at
<https://hugo-oldnew-mashup.thecshore.com>

## Colour Scheme

The display colours have been chosen for high contrast.  All
combinations of foreground and background colour in the theme used on
this site should meet or exceed the w3.org's WCAG 2.0 (Web Content
Accessibility Guidelines) AAA standard for contrast.  In addition,
effort has been made to avoid the use of colour alone to provide
information (that is colour is an enhancement not a requirement to
effectively use and understand the site).

## Font Size

Where possible the font size is responsive; on devices with higher resolutions
the font size is automatically increased to compensate for what is often a
higher DPI.

## Avoiding Flicker

This site has dropped a 'smooth font scaling' Javascript from use because its
tendency to cause screen redraws, which results in flicker.

## Validation

All pages are run through the `Tidy` HTML 'linter' which provides fairly good
validation of the the page HTML (after conversion from Markdown) during Travis
CI 'builds' (or manually).  In addition, the live pages have been validated
against the W3C's (Web standards organization) page validator.  Having
valid HTML and CSS helps screenreaders and magnifiers properly parse the pages.

Further Tidy's validations checks for WCAG guidelines have been performed and
acted upon.

## If You Find A Barrier to Accessibility

Please do not hesitate to [contact the site operator](siteentry/contactform) in
the event you find some barrier to accessibility on this site.  The site
operator strives to keep the site accessible.

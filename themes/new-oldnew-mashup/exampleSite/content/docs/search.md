---
title: "Search Setup"
date: 2019-09-25T13:47:56-04:00
copyright: © 2019 Daniel F. Dickinson
author: Various contributors
description: Information on configuration of search
licenses:
  - CC-BY-4.0
categories: [theme, documentation, search]
tags: [theme, website, documentation, search, documentation]
weight: 30
---

# Search Setup

This implementation uses Fusejs, and mark.js (without jQuery)


## Initial setup

Search  depends on additional output content type of JSON in config.toml
```toml
[outputs]
  home = ["HTML", "RSS", "JSON"]
```

## Searching additional fields

To search additional fields defined in front matter, you must add it in 2 places.

### Edit layouts/_default/index.json
This exposes the values in /index.json
i.e. add `category`
```
...
  "contents":{{ .Content | plainify | jsonify }}
  {{ if .Params.tags }},
  "tags":{{ .Params.tags | jsonify }}{{end}}
  {{ if .Params.categories }},
  "categories" : {{ .Params.categories | jsonify }}{{ end }}
...
```

### Edit fuse.js options to Search
`static/js/search.js`
```
keys: [
  "title",
  "contents",
  "tags",
  "categories"
]
```

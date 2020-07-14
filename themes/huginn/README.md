# Huginn

Huginn is a minimalist and responsive theme for [Hugo static site
generator](https://gohugo.io). It was once developed for
[Pelican](https://getpelican.com) based on the work of **iKevinY** with his
theme [pneumatic](https://github.com/iKevinY/pneumatic).

The theme is mainly tailored for my needs but I will try to make it more
stateless in order to be used without any fuss by others.

As of today **Huginn** supports :

- Responsive design (using *media queries*)
- Lovely light colors (and dark syntax highlights) taken from
[snow.vim](https://github.com/nightsense/snow)
- Hugo builtin functions such as
    - Table of Content (automatically added if your post contains *headers*)
    - Related Content
    - RSS feeds (tweaked layout to allow full-text rendering)
- JavaScript lightbox powered by
[baguetteBox.js](https://github.com/feimosi/baguetteBox.js)
- A `lightbox` shortcode for simple one-image display
- A `gallery` partial to display a nice gallery at the end of your post
- Display the link and the name of the song that you were listening to while
writing a post (activated in front-matter with the `song` section).

    ```yaml
    song:
      title: Song title
      link: https://example.com
    ```

- Comments powered by [Isso](https://posativ.org/isso/) for now. A parameter in
`config.toml` is used to specify Isso server `{{ .Site.Params.isso_server }}`.
- Static comments powered by [Staticman](https://staticman.net) v3. See the
[instructions below](#staticman) to get the service started.

## Lightbox

> This shortcode uses the **Page Bundle** function introduced in Hugo 0.32, make
sure to be aware of it when playing with `lightbox`.

The `lightbox` shortcode is pretty simple and looks like this:

```go-html
{{ $img := (.Page.Resources.ByType "image").GetMatch ( printf "images/lightbox/%s*" (.Get "img"))  }}
{{ $align := (.Get "align") }}
{{ .Scratch.Set "image" ($img.Resize "256x q80") }}
{{ $scaled := .Scratch.Get "image" }}
<a href="{{ $img.RelPermalink }}">
  <img class="thumbnail {{ with $align }}{{ . }}{{ end }}" src="{{ $scaled.Permalink }}">
</a>
```

All you have to do is to make sure that your thumbnail has the same filename that the full one only with the addition of the suffix *-thumb* before the extension.
The shortcode only needs two parameters :

|  Parameters  |  Description
|:------------:|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  `img=""`    |  Filename to your image. (no `.extension` required)                                                                                                              |
|  `align=""`  |  If you want to align the image on the left side or the right side of the *content* block.If none is specified the image is automatically centered in the block. |

## Gallery
> **Page-Bundle** required

The `gallery` partial is even more simple. All you have to do is put your images in `images/gallery` and ... here you are, with images at the end of your post.

```
<div class="gallery">
{{ with .Resources.Match "images/gallery/*.*" }}
{{ range . }}
{{ $scaled := .Resize "256x q80" }}
<div class="gallery-item">
<a href="{{ .RelPermalink }}">
<img class="thumbnail" src="{{ $scaled.Permalink }}">
</a>
</div>
{{ end }}
{{ end }}
</div>
```

## Staticman

Procedures to start using Staticman:

1. Add Staticman bot/app, depending on your Git service provider.
    - GitHub: choose either one of the following method
        + GitHub App: refer to issue
        [https://github.com/eduardoboucas/staticman/issues/243](https://github.com/eduardoboucas/staticman/issues/243)
        for detailed procedures.
        + GitHub bot: invite
        **[@staticmanlab](https://github.com/staticmanlab)** as a collaborator
        to your repository (by going to your repository's **Settings** page,
        navigating to the **Collaborators** tab.

            ![add staticmanlab on GitHub](https://gitlab.com/uploads/-/system/personal_snippet/1881729/5acb4a8f8472a8726d32a765e2113397/add.png)

            Then help **[@staticmanlab](https://github.com/staticmanlab)**
            accept the invitation by going to

                https://staticman3.herokuapp.com/v3/connect/github/<username>/<repo-name>

            ![help staticmanlab accept invitation](https://gitlab.com/uploads/-/system/personal_snippet/1881729/f037b83f1656a572098173d269aeeb33/accept.png)

            Now, **[@staticmanlab](https://github.com/staticmanlab)** has been
            invited to your repository.

            ![staticmanlab invited to GitHub repo](https://gitlab.com/uploads/-/system/personal_snippet/1881729/b9fdedd316ebd454e5dbe75e42aa09a8/accepted.png)

    - GitLab: Add the GitLab user associated with your Staticman API endpoint
      (e.g. **[@staticmanlab](https://github.com/staticmanlab)** as a
      "**developer**" for your project by going to **Settings → Members → Invite
      member**.

      There's *no* invitation acceptance mechanism on GitLab.  The invited
      member enjoys the privileges once the invitation is sent.  Therefore,
      there's *no* need to hit `/connect`.

    - Framagit: Since Framagit is a fork of GitLab, the overall setup is similar
      to that on GitLab.  (Note that the Framagit bot is named as
      **[@statimcanlab1](https://framagit.org/staticmanlab1)**.)

        ![@staticmanlab1 invited to Framagit repo](https://gitlab.com/uploads/-/system/personal_snippet/1881729/070f10d66ba50833ccf7596b91ba12c7/Screenshot_from_2019-08-01_12-57-51.png)

2. Fill in the site config file `config.toml` with reference to the instructions
in the comments.

    Framagit users may choose `gitlab` for `gitProvider` in `config.toml`.

    In case of empty `endpoint`, the public Framagit instance will be used.

    | instance | `endpoint` |
    | --- | --- |
    | official production | `https://api.staticman.net` |
    | GitLab | `https://staticman3.herokuapp.com` |
    | Framagit | `https://staticman-frama.herokuapp.com` |

3. Proceed to the **root-level** repo config file `staticman.yml`.  Note that
the name and path of this file *can't* be changed.

    The parameter `moderation` is for comment moderation, and it defaults to
    `true`, so each new comment is created as a pull/merge request.  If it is
    switched to `false`, then Staticman will directly commit against the
    configured `branch`.

    If you are working on GitLab/Framagit and you have set `moderation: false`,
    depending on your `branch`, you might need the following steps.

    - protected branch (e.g. `master`): Go to **Settings → Repository →
      Protected Branches** and permit the GitLab bot to push against that
      branch.
    - unprotected branch (GitHub's default): *no* measures needed

4. (Optional, GitHub only) To prevent old inactive branches (representing
approved comments) from piling up, you may set up a webhook according to
[Staticman's documenation](https://staticman.net/docs/webhooks).  Make sure to
input the **Payload URL** according to your chosen `endpoint`.  For example, the
default `endpoint` is `https://staticman3.herokuapp.com`, so the corresponding
**Payload URL** should be `https://staticman3.herokuapp.com/v1/webhook`.

5. (Optional, but recommended) To stop spam bots, it's suggested to enable
[reCAPTCHA](https://developers.google.com/recaptcha/docs/display).  You may
refer to the site config file for details.

:information_source: By default, this theme uses the public Framagit instance at
v3 instead of the official instance at v2 due to

- a requests' quota issue reported in issue
  [eduardoboucas/staticman#222](https://github.com/eduardoboucas/staticman/issues/222)
  in the official instance at v2;
- abscence of the GitHub bot @staticmanapp associated with the official instance
  at v2, reported in issue
  [eduardoboucas/staticman#306](https://github.com/eduardoboucas/staticman/issues/306);
- a "too many requests" issue
  [eduardoboucas/staticman#279](https://github.com/eduardoboucas/staticman/issues/279)
  in the official instance at v3.

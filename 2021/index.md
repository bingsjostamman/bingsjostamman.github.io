---
layout: default-2021
title: Bingsjöstämman 2021
permalink: /2021/
year-index: 2021
year: 2021
hero-img: "https://res.cloudinary.com/bingsjostamman/image/upload/v1559022830/hero-2019_mgzjjl.jpg"
thumbnail: https://res.cloudinary.com/bingsjostamman/image/upload/v1558991223/programblad-2019_share_l3hgfh.jpg
description:
  "Bingsjöstämman 2021 är tyvärr inställd på grund av Coronapandemin"
---


{::options parse_block_html="true" /}
<div class="glacier">

# Bingsjöstämman 2021 ställs in

Liksom förra sommaren måste vi tråkigt nog ställa in även årets Bingsjöstämma.

Men liksom förra året kan vi inte bara ställa in och hänga fiolen på väggen i väntan på bättre tider. Onsdagen den 7 juli, stämmodagen, kommer vi därför att manifestera stämman på webben. Och vi vill göra det tillsammans med alla er som längtar efter en Bingsjöstämma, tillsammans med alla er som längtar efter att jamma med spelkompisarna i buskspelet.

Mer information kommer längre fram, men vi hoppas att ni vill göra Bingsjöstämningnen tillsammans med oss.

[Läs hela pressmeddelandet här](/2021/bingsjo-staller-in/).

Ta hand om er, vi ses!


{::options parse_block_html="false" /}
{% include menu-2021.html %}

</div>



<div class="ocean">
<div class="ocean__inner">

<h2>Nyheter</h2>

<ol class="posts">

{% for post in site.categories.2020 %}

  <li class="post">
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <p class="meta">
      <time datetime="{{post.date | date: "%Y-%m-%d"}}">
        {% assign m = post.date | date: "%-m" %}
        {{ post.date | date: "%-d" }}
        {% case m %}
          {% when '1' %}januari
          {% when '2' %}februari
          {% when '3' %}mars
          {% when '4' %}april
          {% when '5' %}maj
          {% when '6' %}juni
          {% when '7' %}juli
          {% when '8' %}augusti
          {% when '9' %}september
          {% when '10' %}oktober
          {% when '11' %}november
          {% when '12' %}december
        {% endcase %}
        {{ post.date | date: "%Y" }}
      </time>
    </p>
    <div class="content">
      {{ post.excerpt }}
    </div>
  </li>

{% endfor %}

</ol>

</div>
</div>

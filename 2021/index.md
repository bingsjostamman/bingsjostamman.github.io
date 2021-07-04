---
layout: default-2021
title: Bingsjöstämman 2021
permalink: /2021/
year-index: 2021
year: 2021
hero-img: "https://res.cloudinary.com/bingsjostamman/image/upload/v1559022830/hero-2019_mgzjjl.jpg"
thumbnail: https://res.cloudinary.com/bingsjostamman/image/upload/v1558991223/programblad-2019_share_l3hgfh.jpg
description:
  "Ingen Bingsjöstämma 2021 men vi bjuder på Bingsjöstämning"
---


{::options parse_block_html="true" /}
<div class="glacier">

# Bingsjöstämning istället för Bingsjöstämma

Liksom förra sommaren måste vi tråkigt nog ställa in även årets Bingsjöstämma. Men liksom förra året kan vi inte bara ställa in och hänga fiolen på väggen i väntan på bättre tider. Istället för Bingsjöstämma på plats i Bingsjö bjuder vi på Bingsjöstämning via digitala och sociala medier.

Häng med oss under en webbsändning, kolla in Bingsjöbesökares buskspel och allspel, och njut av en hyllning till Bingsjö från en veranda i Rättvik med Folk All-in Band.

15.00
: Bingsjöstämning



Onsdagen den 7 juli, stämmodagen, kommer vi därför att manifestera stämman på webben. Och vi vill göra det tillsammans med alla er som längtar efter en Bingsjöstämma, tillsammans med alla er som längtar efter att jamma med spelkompisarna i buskspelet.



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

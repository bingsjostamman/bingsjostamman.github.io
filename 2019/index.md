---
layout: default-2019
title: Bingsjöstämman 2019
permalink: /2019/
year-index: 2019
year: 2019
hero-img: "https://res.cloudinary.com/bingsjostamman/image/upload/v1558991482/hero-2019_g39yde.jpg"
thumbnail: https://res.cloudinary.com/bingsjostamman/image/upload/v1558991223/programblad-2019_share_l3hgfh.jpg
description:
  "Fyra scener med dansmusik, finlir på Danielsgårdens tun, konserter med några av landets bästa folkmusiker i kapellet, och självklart spontana jam och buskspel."
---


{::options parse_block_html="true" /}
<div class="glacier">

# Bingsjöstämman 2019

Året 1969 skulle det hållas orgelkonsert i Bingsjö kapell i samband med den nystartade Musik vid Siljanveckan. Lite spelmän fick det också vara efter konserten... och varför inte en mustasch­tävling?

Orgelkonsert och mustachtävling överlevde inte det första året, men det gjorde spelmännen. Inte bara överlevde, stämman växte och frodades, och har nu efter 50 år blivit en av de viktigaste mötesplatserna i folkmusiksverige.

En plats djupt ute i skogen som är laddad av folkmusikmagi, av Pekkos Per, Hjort Anders, Päkkos Gustaf och alla de andra Bingsjöspelmän som skapade låtarna och låtstilen som har en särställ­ning i svensk folkmusik. En plats som har laddats av 50 års Bingsjöstämma.

En stämma djupt rotad i traditionen, men i samtiden och med alla dörrar öppna och högt i tak.

När vi firar i år blickar vi både bakåt och framåt: I kapellkonserterna och i in­vigningprogrammet lyfter vi fram några av dem som varit med från stämmans be­gynnelse tillsammans med några av dem som kommer att vara med och forma stämman de nästkommande 50 åren.

Vi presenterar också tillsammans med Högskolan Dalarna en Virtual Reality­-skildring av av stämman Den senaste di­gitala tekniken möter vår analoga träfiol.

Men även om den nya tekniken gör det möjligt att uppleva stämman hemma i soffan så är vi inte oroliga, vi vet att spelmännen alltid kommer till Bingsjöstämman!

Välkommen!

{::options parse_block_html="false" /}
{% include menu-2019.html %}

</div>



<div class="ocean">
<div class="ocean__inner">

<h2>Nyheter</h2>

<ol class="posts">

{% for post in site.categories.2019 %}

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

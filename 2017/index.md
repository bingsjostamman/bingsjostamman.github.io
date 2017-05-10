---
layout: default-2017
title: Bingsjöstämman 2017
permalink: /2017/
year-index: 2017
year: 2017
hero-img: "/img/hero-2017b.jpg"
thumbnail: /img/programblad-2017_share.jpg
description:
  "Årets Bingsjöstämma lyfter fram vallåtar och fäbodmusik, och kvinnorna som skapade musiken. Som vanligt blir stämman till bredden fylld av musik och dans."
---


{::options parse_block_html="true" /}
<div class="glacier">

# Bingsjöstämman 2017

Fäbodar, kullor, kor och getter... bilden av fäbo­den har ofta silats genom bygderomantikens  fil­ter, liksom så många andra folkmusikföreteelser. Man får värja sig för att inte fastna i klichéer och stereotypa vykortsbilder av stintor, gärdsgårdar och blommande ängar.

Men inte desto mindre är musiken som upp­stod i arbetet på fäboden, vallmusiken, ständigt genomsyrande den musik som är anledningen till Bingsjöstämman. Vallåten och dess tonalitet är en av grundstenarna i polskans byggnad.

Och det var kvinnorna (för fäboden var kvinno­göra) som formade denna grundsten. Kvinnor vars namn oftast inte bevarats till eftervärlden.

![](/img/page/ulrika_2017.jpg)

Vi vill i år lyfta fram vallåten och hylla alla de kvinnor som skapat den. Vi lyfter fram den i ka­pellkonserterna, i vandringen till Bingsjöbergets topp, i kurserna i horn och kulning, i inslag på tun och invigningsprogram. Men liksom alla år i Bingsjö finns den överallt under stämman, in­bakad i polskorna som spelas på scenerna, på buskspelet, jammet, på hela stämmoområdet.

Välkommen!




{::options parse_block_html="false" /}
{% include menu-2017.html %}

</div>



<div class="ocean">
<div class="ocean__inner">

<h2>Nyheter</h2>

<ol class="posts">

{% for post in site.categories.2017 %}

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

---
layout: default-2020
title: Bingsjöstämman 2020
permalink: /2020/
year-index: 2020
year: 2020
hero-img: "https://res.cloudinary.com/bingsjostamman/image/upload/v1559022830/hero-2019_mgzjjl.jpg"
thumbnail: https://res.cloudinary.com/bingsjostamman/image/upload/v1558991223/programblad-2019_share_l3hgfh.jpg
description:
  "Årets Bingsjöstämma är tyvärr inställd på grund av Coronapandemin"
---


{::options parse_block_html="true" /}
<div class="glacier">

# Bingsjöstämman 2020 ställs in

Tyvärr måste vi meddela att årets Bingsjöstämma, som skulle blivit den femtioandra i ordningen, måste ställas in på grund av den samhällssitution som nu råder under Coronapandemin. De restriktioner som gäller i nuläget gör det omöjligt att arrangera Bingsjöstämman, och ingen vet idag när restriktionerna och smittspridningen minskas i samhället.

Vi blev därför tvugna att ta det tråkiga beslutet att ställa in årets stämma. Men vi laddar såklart om för att bjuda in er alla till Bingsjö nästa sommar igen. Tack till alla inblandade, alla bokade artister, alla ni som alltid ställer upp och gör att vi kunnat genomföra stämman i alla år. Och tack till alla er som besöker stämman.

[Allspelslåtarna](/2020/allspel/) finns nu ute som en liten tröst, till nästa sommar kanske de sitter ordentligt i ryggmärgen. Tänk, vilket hejdundrande allspel vi kan åstadkomma tillsammans då!

[Läs hela pressmeddelandet här](/2020/arets-bingsjostamma-stalls-in/).

Ta hand om er, så ses vi längre fram!


{::options parse_block_html="false" /}
{% include menu-2020.html %}

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

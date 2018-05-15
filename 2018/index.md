---
layout: default-2018
title: Bingsjöstämman 2018
permalink: /2018/
year-index: 2018
year: 2018
hero-img: "/img/hero-2018.jpg"
thumbnail: /img/programblad-2018_share.jpg
description:
  "Som vanligt blir stämman till bredden fylld av musik och dans."
---


{::options parse_block_html="true" /}
<div class="glacier">

# Bingsjöstämman 2018

Det är åter dags för spelmansstämma i Bingsjö! Fyra scener med dansmusik med lag från Dalarna och gästande landskap, medan lyssnarscenen på Danielsgårdens tun bjuder på finlir från solister och smågrupper.

På Danielsgårdens loge blir det finlirsdans, och i Bingsjö kapell blir det konserter med några av de bästa folkmusiker landet har att erbjuda. Och dessutom _Sång i Bingsjönatten_ med ett pärlband av sångare.

Bingsjöstämman rymmer också unga spelmän, _Ungtfolk_, Världens största internationella folkmusikungdomsläger _Ethno_ och _Bullermyrens spelmanslag_ – laget med musiker från världens alla hörn.

Och så förstås våra kära "gubbar och gummor" – hedersepitetet för dem som varit med länge och fört traditionen vidare.

Passa på att gå en kurs i dans, sång eller låtspel. Eller vandra med vallmusiker upp till Bingsjöbergets topp med milsvid utsikt. Följ med på vandring bland spelmansgårdarna i Bingsjö by.

Och räkna med buskspel och spontana jam på campingar och lindor, vid husknutar och varje hörn.

Kort sagt, det blir som vanligt i Bingsjö. Välkommen!

{::options parse_block_html="false" /}
{% include menu-2018.html %}

</div>



<div class="ocean">
<div class="ocean__inner">

<h2>Nyheter</h2>

<ol class="posts">

{% for post in site.categories.2018 %}

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

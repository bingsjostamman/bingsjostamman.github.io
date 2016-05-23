---
layout: default-2016
title: Bingsjöstämman 2016
permalink: /2016/
year-index: 2016
year: 2016
hero-img: "/img/hero-2016b.jpg"
thumbnail: /img/programblad-2016_share.jpg
description:
  "Årets Bingsjöstämma hyllar Päkkos Gustaf som föddes för 100 år sedan, och som vanligt blir stämman till bredden fylld av musik och dans."
---


{::options parse_block_html="true" /}
<div class="glacier">

# Bingsjöstämman 2016

Päkkos Gustafff var en spelman med glimten både i ögat och i stråken. Med sin starka personlighet, sitt utpräglade bingsjöspel och sitt värdskap pä Päkkosgården mitt i stämmosmeten, personifierade han på många sätt Bingsjöstämman. Han var en inspirations­källa för flera generationer av spelmän.

Han fortsätter att inspirera även idag: bl a genom Päkkos Gustafs stipendium, som delas ut på stämman till en ung spelman, nu för tjugonde året i rad.

![](/img/page/gustaf.jpg)

Gustaf skulle ha fyllt 100 i år. Så vi firar två jubiléer med anknytning till honom. I kapellet viks en konsert till hans minne. På Danielsgårdens tun får ni chansen att höra många av dem som fått hans stipendium ge­nom åren. Missa inte det, det är en lång lista av stipendia­ter som får oss stämmoarrangörer att pösa av stolthet.

Att "polska" har något med Polen att göra är kan­ ske en självklarhet. Men hur det hänger ihop är lite suddigare. I den andra kapellkonserten, "Polska Pol­ski", möter några av Sveriges vassaste polskespelare/-sjungare sina polska motsvarigheter. Kanske ges det några svar där. Det kommer i vilket fall att spelas polska, både på svenska och på polska.

För övrigt kommer stämman som vanligt att sjuda av musik och dansformer som alla har lånats in från olika håll. Musiken känner inga nationsgränser, den har i alla tider vandrat från land till land: polskor, schottisar, reinländare, hamburskor, engelskor, m m. Just denna vecka kommer de att bo i Bingsjö, och de talar ett språk som alla förstår.

{::options parse_block_html="false" /}
{% include menu-2016.html %}

</div>



<div class="ocean">
<div class="ocean__inner">

<h2>Nyheter</h2>

<ol class="posts">

{% for post in site.categories.2016 %}

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

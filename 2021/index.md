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

**15.00**
: **Bingsjöstämning**

Med en inspelning från Danielsgårdens tun i Bingsjö sänder vi stipendieutdelning och musik från vänner till Bingsjöstämman. Stipendierna Påhl Olles och Päkkos Gustafs fioler delas ut till en lovande respektive en redan etablerad spelman. Ni får en försmak av nästa års kapellkonserter i form av musikaliska hälsningar från dels _Thuva_, _Emma_ och _Thore Härdelin_ och dels _Erika Lindgren Liljenstolpe_ med spelkompisarna _Örjan Englund_ och _Robert Larsson_.

Våra stående sceninslag _Ethno_ och _Ungtfolk_ är med oss även i år och det blir även några mer långväga musikaliska hälsningar från Norge och Finland.


**18:00**
: **Det stora allspelet**

Dra på volymen, greppa fiolen eller annat intstrument och lira loss till _Det stora allspelet_. Noter till allspelet hittar du på [allspelssidan](/2021/allspel/) eller på [facebook-eventet](https://www.facebook.com/events/151631240321844).


**21:00**
: **FAB Unplugged: Bingsjö Tribute**

The Tjo Must Go On! _Folk All-in Band (FAB)_ – Live och ’Unplugged’ – i en sommarlätt fest-konstellation, sprider rejäl feststämning online i sann Bingsjö-anda, direkt ifrån sommar-scenen ’Elsy-Marie:s Terass’ i Gärdebyn, Rättvik. Den fantastiska utsikten över Rättvik och Siljan utgör fonden till denna festhyllning till årets mest älskade musikaliska och sociala höjdpunkt: Bingsjöstämman.

Ni får höra: _Lena Jonsson_, _Anna Lindblad_, _Adrian Jones_, _Jonas Bleckman_, _Daniel Reid_, _Arvid Svenungsson_, _Karl-Johan Ankarblom_, _Maria Olsson_, _Krydda Sundström_, _Jonathan Lundberg_ & _Calle Stålenbring_ + eventuella gäster!

Programmet genomförs av _Föreningen Bingsjöstämman_ som består av _Bingsjö Bystuguförening_, _[Folkmusikens Hus](https://folkmusikenshus.se)_ och _[Dalarnas Spelmansförbund](http://www.dalarnasspelmansforbund.se)_ samt [Studieförbundet Bilda](https://www.bilda.nu). Hela evenemanget är en del av [Stämmoveckan](https://stammoveckan.se)

Bingsjöstämmans huvudsponsor är [Leksands Sparbank](https://www.leksandssparbank.se)


{::options parse_block_html="false" /}
{% include menu-2021.html %}

</div>



<div class="ocean">
<div class="ocean__inner">

<h2>Nyheter</h2>

<ol class="posts">

{% for post in site.categories.2021 %}

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

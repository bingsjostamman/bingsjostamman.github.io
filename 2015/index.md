---
layout: default-2015
title: Bingsjöstämman 2015
permalink: /2015/
year-index: 2015
year: 2015
hero-img: "/img/hero-2015.jpg"
---


{::options parse_block_html="true" /}
<div class="glacier">

# Bingsjöstämman 2015

"Det är stråken som skall tala" sa Hjort Anders, den legendariske Bingsjöspelmannen som föddes för 150 år sedan. Hjort Anders dominerade spelmansscenen under sin verksamma tid. De låtar och spelsätt som han traderat in till vår tid har trollbundit generationer av spelmän. Några av dem som förtrollats medverkar i kapellkonserterna där vi förstås firar Anders.

Som vanligt bjuder stämman på en salig blandning av unga och gamla: Folkungar som riktar sig till de allra yngsta släpper skiva, ungdomarna företräds av bl a Ungtfolk, Ethno och Folkyou, spelmansnestorn Ole Hjorth med 85 digra spelmansår bakom sig medverkar i kapellet, däremellan en hög med spelmanslag, smågrupper och solister.

I år viker vi också en del av tisdagkvällens program till några grupper som balanserar på gränsen mellan folk och pop.

"Bekant och annorlunda. Självklar och komplex. Vild. Detaljer. Stor. Runt, in och ut, upp och ner, men ändå en linje..." är ord som en av kapellartisterna, Bridget Marsden, använder när hon försöker beskriva Bingsjölåtarna. Orden kan också gälla för att beskriva själva stämman. Men liksom Bingsjölåtarna är stämman svårfångad i ord, den ska upplevas, och därför låter vi stråkarna tala och bjuder in till stämma i Bingsjö!

{::options parse_block_html="false" /}
{% include menu-2015.html %}

</div>



<div class="ocean">
<div class="ocean__inner">

<h2>Nyheter</h2>

<ol class="posts">

{% for post in site.categories.2015 %}

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

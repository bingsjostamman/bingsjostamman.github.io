---
layout: default-2014
title: Bingsjöstämman 2014
permalink: /2014/
year-index: 2014
year: 2014
hero-img: "/img/hero-2014.jpg"
---


{::options parse_block_html="true" /}
<div class="glacier">

# Bingsjöstämman 2014

Än en gång välkomnar vi alla till Bingsjöstämman, på samma sätt som vi gjort i 45 år.

Att alla är välkomna har för oss alltid varit en självklarhet. Men det finns krafter som vi inte vill förknippas med som kopplar samman den svenska folkmusiken med åsikter och förhållningssätt som inte är lika välkomnande. Därför ställer sig Bingsjöstämman, tillsammans med Folkmusikens Hus och stämmorna i Delsbo och Boda, bakom den gemensamma apellen ["Spelmän mot främlingsfientlighet"](/spelman-mot-framlingsfientlighet).

Bingsjö, fiolernas Mecka, hedrar i år minnet av en mästare i låtspel på dragspel, Bingsjöspelmannen Hjärp Erik, som gick ur tiden tidigare i år. Vi lyfter fram dragspelet vid flera av våra konserter.

Och som vanligt lovar vi guld och manna i form av musikaliska möten och upplevelser, från scener och dansgolv, på tältplatser, vid stugknutar och buskar. Överallt skapas rum för musiken av spelmännen, varifrån de än kommer.

{::options parse_block_html="false" /}
{% include menu-2014.html %}

</div>



<div class="ocean">
<div class="ocean__inner">
<ol class="posts">

{% for post in site.categories.2014 %}

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

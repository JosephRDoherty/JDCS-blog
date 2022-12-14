# JDCS-Blog
JDCS-Blog is Joe Doherty's Computer Science Blog.
The name is most likely temporary.

# Why did I build JDCS-Blog?
I built this for two reasons:
The first reason was that I am wanting to start blogging, and writing more in general.
The second reason was that I wanted to build a blog to practice back-end technologies such as Node.js. I chose to build it from scratch, rather than choosing one of the *many* blog frameworks, because I wanted the challenge. I've built wordpress sites before, and doing that for my blog seemed too easy and felt disingenuous as a *Web Developer*.

So I built (or, am building) this site.

## Answers to your burning questions...

# Why are you using a JSON file instead of a database?
The biggest reason? I couldn't get MongoDB set up because my work network was blocking it.
The justification: The blogs.json file is only ever being added to when a new blog post is written, so it's really not a very common thing, and these blog posts are being uploaded AS markup, on deployment. They're not being generated by users while the site is live. So it really doesn't make sense right now to bother with that (especially given the circumstances above). So I'm currently just manually adding information to the blogs.json file as I write blog posts. Eventually maybe I'll make a wizard for this or something that can take the data straight from a tag on the view page or something.
Eventually it makes sense to add them to a database, and that will eventually happen, if I have the need. But for now...
TL;DR: It works, so it's staying for now.

# Why Node.js?
After much consideration, I decided to use Node.js as my back-end framework for a couple reasons:
Firstly, I already knew a bit of it, and use it a little bit at my work. But mostly, I found the idea of working with a single programming language enticing. Considering this project was all me, it makes sense to build the entire thing in one language. As much as I would've prefered a language OTHER than Javascript, I am (unfortunately still) forced to use it for the front-end, and despite my gripes with the language, I do know it fairly well, so it just made sense.

# Why EJS View Engine?
Once again, I chose this for an important reason: it's all javascript. Also, many of the view engines I considered (like Jade) seem to be completely detached from HTML and, being a front-end dev, it made me a bit nervous to not have the tools I'm used to ANYWHERE in this project, so I decided on EJS. EJS just impliments javascript into the views, it's pretty great.
*"It's all javascript?"*
*"Always has been"*

# Why Express.js?
After getting node.js set up, I quickly realized that it didn't send the css along with the html files. Everyone said "It's overly complicated, just download Express", and I said "OK" and now here we are. Ultimately though I like how easy it was to set up with the express generator, though there is certainly still some useless code floating around that's no longer needed. 

# Copyright 2022 Joe Doherty

This software is not free for sale or organizational use. This software IS free for individual use with revenue related to the use of this software under $100,000 or regional equivalent. Individuals fitting into this category are allowed to modify this software, as long as credit to the creator is given in a reasonably discoverable place.
For licensing, contact joseph@doherty.software.
Sale of this software by anyone other than the creator or authorized personnel is strictly prohibited.
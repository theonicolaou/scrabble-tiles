# scrabble-tiles
This is a Sass-based library of responsive Scrabble tiles that can be used as a font on your web site/web app.

To use the library you will need the following:

* Ruby - https://www.ruby-lang.org/en/
* Sass - http://sass-lang.com/
* NodeJS - https://docs.npmjs.com/getting-started/installing-node
* A build tool of your choice (Grunt is included with this library to get you started - http://gruntjs.com/getting-started)

1. Install Ruby, Sass, NPM and the Grunt CLI on your machine.
2. Clone this repo: https://github.com/theonicolaou/scrabble-tiles
3. Navigate to the root of the folder you have cloned into and check you have Grunt installed:

	```grunt -v```

4. Then, type:

	```npm install``` (this will install all the required Grunt modules)

5. Then, type:

	```grunt develop``` and this should start up a local server at port 8888 with a demo page of the Scrabble tiles.

# How to use

Make sure your HTML page has a reference to the CSS file:

``` <link rel="stylesheet" href="css/styles.css"> ```

Use the following markup for a standard tile:

```<div class="scrabble-container">
	<span class="scrabble-tile__letter">A<span class="scrabble-tile__number">1</span></span>
</div>```

You can rotate the tile using one of these classes:

```scrabble-tile__rotate-nw``` or ```scrabble-tile__rotate-ne```. The amount of rotation can be set in the _variables.scss Sass partial.

There are also some other utility classes available:
```scrabble-tile--end-letter``` applies margin-right to the tile.

```scrabble-tile--end-letter__mobile-only``` applies to 768px and up.

```scrabble-tile__new-word``` applies a ```clear: both``` to the tile so that the next tile starts on a new line.

```display--inline-block``` displays the word in the center of the screen (useful for short words that look odd when aligned left)
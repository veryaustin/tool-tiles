# Tool Tiles

> A collection of React components displaying development tools/technology logos & tiles

[![Build Status](https://travis-ci.org/veryaustin/tool-tiles.svg?branch=master)](https://travis-ci.org/veryaustin/tool-tiles)
[![Coverage Status](https://coveralls.io/repos/github/veryaustin/tool-tiles/badge.svg)](https://coveralls.io/github/veryaustin/tool-tiles)
[![npm version](https://img.shields.io/npm/v/@veryaustin/tool-tiles.svg?color=%23b6353b&style=popout-square)](https://www.npmjs.com/package/@veryaustin/tool-tiles)

## Installation:
Install this package into your project:
```
npm i @veryaustin/tool-tiles
```

---
## Components:

### Grid Component
#### Description:
Container component that displays a grid of tiles.
#### Props:
|Prop|Type|Default|Description|
|---|---|---|---|
|tools|array|null|Array of strings of the logoNames|

#### Example:
```javascript
import React from 'react';
import { Grid } from '@veryaustin/tool-tiles';

const Page = () => {
  const sampleData = [
    'html',
    'css',
    'chrome',
    'email',
    'bootstrap',
    'github',
    'adobeillustrator',
    'node',
    'react',
    'slack',
    'babel',
  ]
  return (
    <Grid tools={sampleData} />
  )
}
```
![Sample Grid](https://raw.githubusercontent.com/veryaustin/tool-tiles/master/docs/img/sampleGrid.png)


### Tile Component
#### Description:
Displays a square tile with logo.
#### Props:
|Prop|Type|Default|Description|
|---|---|---|---|
|icon|string|'pdf'|Defines the logo/tile color that will be displayed|
|color|string|logoColor of the icon|Defines the tile background color|

#### Example:
```javascript
import React from 'react';
import { Tile } from '@veryaustin/tool-tiles';

const Page = () => {
  return (
    <Tile icon="html" />
  )
}
```
![Sample Tile](https://raw.githubusercontent.com/veryaustin/tool-tiles/master/docs/img/sampleTile.png)


### Icon Component
#### Description:
Displays a SVG logo/icon.
#### Props:
|Prop|Type|Default|Description|
|---|---|---|---|
|icon|string|'pdf'|Defines the SVG logo/icon to be displayed|
|color|string|logoColor of the icon|Defines the color of the SVG/icon|

#### Example:
```javascript
import React from 'react';
import { icon } from '@veryaustin/tool-tiles';

const Page = () => {
  return (
    <Icon icon="html" color="red" />
  )
}
```
![Sample Icons](https://raw.githubusercontent.com/veryaustin/tool-tiles/master/docs/img/sampleIcon.png)


---
## Project Development:

#### Build the Project:
```bash
npm run build
```

#### View components in Storybook:
```bash
npm run storybook
```


#### Run Test Suite:
```
npm run test 
```

#### Run Test Suite in Watch Mode:
```
npm run test:watch 
```

#### Generate Test Suite Code Coverage:
```
npm run test:coverage 
```

#### Generate Test Suite Output for Storybook:
```
npm run test:generate-output
```

![Included Icons](https://raw.githubusercontent.com/veryaustin/tool-tiles/master/docs/img/iconsProof.png)

___
The names and logos of products and companies shown in this package are the property of their respective owners and may also be trademarks.

Licenses/Attribution:
* [HTML] logo is licensed from [W3C](https://www.w3c.org/html/logo) under [Creative Commons Attribution v3.0](https://creativecommons.org/licenses/by/3.0/legalcode). Logo has been adapted for this project
* [CSS] logo is licensed from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:CSS3_logo_and_wordmark.svg) under [Creative Commons Attribution v3.0 Unported](https://creativecommons.org/licenses/by/3.0/deed.en)
* [SASS] logo is licensed from [Sass](https://sass-lang.com/styleguide/brand) under [Attribution-NonCommercial-ShareAlike v3.0 Unported](https://creativecommons.org/licenses/by-nc-sa/3.0/deed.en_US)
* [JavaScript]
* [React] logo is licensed from [Facebook](https://facebook.com) under [Creative Commons Attribution v4.0 International](https://creativecommons.org/licenses/by/4.0/)
* [Redux] logo is public domain and licensed under [Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)
* [Ember] logo & name is a trademark of Tilde Inc. This package is unaffiliated with the Ember project.
* [Webpack] logo and project name are trademarks of the JS Foundation.
* [Gulp] logo is licensed from Gulp under [MIT](https://opensource.org/licenses/MIT)
* [Grunt] logo is licensed from Grunt under [MIT](https://opensource.org/licenses/MIT)
* [Travis CI] logo is a trademark of [Travis CI]
* [Jest] logo is licensed from [Facebook](https://facebook.com) under [MIT](https://opensource.org/licenses/MIT)
* [Mocha] logo is licensed under [Creative Commons Attribution v4.0 International](https://creativecommons.org/licenses/by/4.0/)
* [Chai] logo is licensed under [MIT](https://opensource.org/licenses/MIT)
* [jQuery] logo is a trademark of the jQuery Foundation.
* [Babel] logo is licensed under [MIT](https://opensource.org/licenses/MIT)
* [NPM] logo is a trademark of [npm, inc](https://npmjs.com)
* [GitHub] logo is a trademark of [Github]
* [Git] logo by Jason Long is licensed under [Creative Commons Attribution v3.0 Unported](https://creativecommons.org/licenses/by/3.0/)
* [Node] logo is a registered trademark of the [Node.js Foundation](https://foundation.nodejs.org/)
* [Bootstrap] logo is licensed under [Creative Commons Attribution v3.0 Unported](https://creativecommons.org/licenses/by/3.0/)
* [Handlebars] logo is licensed under [MIT](https://opensource.org/licenses/MIT)
* [Markdown]
* [PostgreSQL] logo is licensed under the [PostgreSQL License](https://opensource.org/licenses/postgresql)
* [Craft CMS] logo is a trademark of [Pixel & Tonic, Inc](https://pixelandtonic.com/)
* [Wordpress] logo is licensed from the [WordPress Foundation](https://wordpressfoundation.org/) under [GNU General Public License](https://www.gnu.org/copyleft/gpl.html)
* [Ghost] logo is a trademark of [The Ghost Foundation](https://ghost.org/contact/)
* [Sketch] logo is a trademark of [Bohemian Coding](http://bohemiancoding.com/)
* [Amazon Web Services] is a registered trademark of [Amazon](https://amazon.com)
* [Heroku] logo is a registered trademark of [Heroku]
* [VSCode] logo is licensed from [Microsoft] under [MIT](https://opensource.org/licenses/MIT)
* [CodeKit] logo is property of [Bryan Jones](https://twitter.com/bdkjones)
* [Slack] logo is a trademark of [Slack]
* [Trello] logo is a trademark of [Atlassian]
* [PDF]
* [Email]
* [Twitter] logo and name is a registered trademark of [Twitter]
* [LinkedIn] logo and name is a registered trademark of [Microsoft]
* [YouTube] logo and name is a registered trademark of [Alphabet]
* [Chrome] logo and name is a registred trademark of [Google]
* [Adobe Illustrator] logo is a trademark of [Adobe]
* [Adobe Photoshop] logo is a trademark of [Adobe]
* [Adobe Lightroom] logo is a trademark of [Adobe]
* [Adobe Premiere] logo is a trademark of [Adobe]
* [Adobe After Effects] logo is a trademark of [Adobe]
* [Adobe InDesign] logo is a trademark of [Adobe]
* [Adobe Dreamweaver] logo is a trademark of [Adobe]
* [Adobe Flash] logo is a trademark of [Adobe]
* [Adobe Animate] logo is a trademark of [Adobe]
* [Adobe Muse] logo is a trademark of [Adobe]
* [Adobe Audition] logo is a trademark of [Adobe]

[HTML]: https://www.w3.org/TR/html5/
[CSS]: https://www.w3.org/Style/CSS/
[SASS]: http://sass-lang.com/
[JavaScript]: https://www.w3.org/standards/webdesign/script/
[React]: https://facebook.github.io/react/
[Redux]: http://redux.js.org/
[Ember]: https://emberjs.com/
[Webpack]: https://webpack.github.io/
[Gulp]: http://gulpjs.com/
[Grunt]: http://gruntjs.com/
[Travis CI]: https://travis-ci.com/
[Jest]: https://facebook.github.io/jest/
[Mocha]: https://mochajs.org/
[Chai]: http://chaijs.com/
[jQuery]: https://jquery.com/
[Babel]: https://babeljs.io/
[NPM]: https://npmjs.com/
[GitHub]: https://github.com/
[Git]: https://git-scm.com/
[Node]: https://nodejs.org/
[Bootstrap]: http://getbootstrap.com/
[Handlebars]: https://handlebarsjs.com/
[Markdown]: http://daringfireball.net/projects/markdown/
[PostgreSQL]: https://www.postgresql.org/
[Craft CMS]: https://craftcms.com/
[Wordpress]: https://wordpress.org/
[Ghost]: https://ghost.org/
[Sketch]: https://sketchapp.com/
[Amazon Web Services]: https://aws.amazon.com/
[Heroku]: https://www.heroku.com/
[VSCode]: https://code.visualstudio.com/
[CodeKit]: https://codekitapp.com
[Slack]: https://slack.com/
[Trello]: https://trello.com
[PDF]: https://acrobat.adobe.com/us/en/acrobat/about-adobe-pdf.html
[Email]: https://en.wikipedia.org/wiki/Email
[Twitter]: https://twitter.com
[LinkedIn]: https://linkedin.com
[YouTube]: https://youtube.com
[Chrome]: https://www.google.com/chrome/
[Adobe Illustrator]: https://www.adobe.com/products/illustrator.html
[Adobe Photoshop]: https://www.adobe.com/products/photoshop.html
[Adobe Lightroom]: https://www.adobe.com/products/photoshop-lightroom.html
[Adobe Premiere]: https://www.adobe.com/products/premiere.html
[Adobe After Effects]: https://www.adobe.com/products/aftereffects.html
[Adobe InDesign]: https://www.adobe.com/products/indesign.html
[Adobe Dreamweaver]: https://www.adobe.com/products/dreamweaver.html
[Adobe Flash]: https://www.adobe.com/products/animate.html
[Adobe Animate]: https://www.adobe.com/products/animate.html
[Adobe Muse]: http://muse.adobe.com/
[Adobe Audition]: https://www.adobe.com/products/audition.html

<!-- Companies -->
[Adobe]: https://adobe.com
[Alphabet]: https://abc.xyz/
[Atlassian]: https://www.atlassian.com/
[Google]: https://google.com
[Microsoft]: htts://microsoft.com
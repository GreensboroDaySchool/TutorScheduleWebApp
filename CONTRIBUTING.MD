# GDS Tutor WebApp Contribution Guidelines

In order to create code legally as well as benefits all, you must follow these guidelines if you wish to contribute to
the GDS Tutor WebApp code base, or participate in issue tracking.

## Libraries and Templates usage
Please place all the external libraries in individual folders under the `references` folder.

Be sure to check the compatibilities of the licenses if your code contains any copied sources, and give them credits in
[README.MD](README.MD)

For example, this project contains code from [HTML5 UP](https://html5up.net), and the code copied is using
[Creative Commons Attribution 3.0](http://creativecommons.org/licenses/by/3.0/). It is compatible with our GNU GPL v3
license, then we could copy the whole template to the `references` folder and include HTML5 UP in README.

See [GNU: License List](https://www.gnu.org/licenses/license-list.en.html)

## Front related

All front related (Client-side web technologies) code should follow the guidelines below.
See [MDN Guidelines](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines).

#### HTML

**Use the HTML DOCTYPE**
```html
<!DOCTYPE html>
```

**Define character set, always use UTF-8**
```html
<meta charset="utf-8">
```

**Add viewport tag**
```html
<meta name="viewport" content="width=device-width">
```

#### CSS

**Use expanded syntax**
```css
p {
  color: #FFFFFF;
  background-color: #000000;
}
```
#### JavaScript

See [MDN Guidelines](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines).

## Back related

#### PHP

We suggest everybody to use PSR standard in PHP programming. But since most club members are new to programming, you
don't have to check the PSR guidelines, and we suggest you to focus on front related designing.

See [PSR Basic Coding Standard](
https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-1-basic-coding-standard.md)

#### NodeJs

The project mainly use PHP as it's back language, but there might be some exceptions that we need to use NodeJS. And
npm-coding-style is what we are going to use.

See [npm-coding-style](https://docs.npmjs.com/misc/coding-style)

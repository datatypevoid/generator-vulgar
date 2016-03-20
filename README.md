[![Dependency Status](https://david-dm.org/datatypevoid/generator-vulgar.svg)](https://david-dm.org/datatypevoid/generator-vulgar) [![Build Status](https://travis-ci.org/datatypevoid/generator-vulgar.svg?branch=master)](https://travis-ci.org/datatypevoid/generator-vulgar) [![GitHub release](https://img.shields.io/github/release/qubyte/rubidium.svg)](https://github.com/datatypevoid/generator-vulgar) [![Issue Stats](http://issuestats.com/github/datatypevoid/generator-vulgar/badge/pr?style=flat)](http://issuestats.com/github/datatypevoid/generator-vulgar) [![Issue Stats](http://issuestats.com/github/datatypevoid/generator-vulgar/badge/issue?style=flat)](http://issuestats.com/github/datatypevoid/generator-vulgar) [![Stack Share](http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](stackshare.io/datatypevoid/vulgar)
<p align="center">
  <a href="http://www.davidniciforovic.com" target="_blank">
    <img src="https://cloud.githubusercontent.com/assets/10481547/13734874/f4e190ea-e978-11e5-841e-2459f3f5c9e0.png" alt="MEAN with NG2 and Webpack" />
  </a>
</p>

# generator-vulgar [![Join Slack](https://img.shields.io/badge/slack-join-brightgreen.svg)](http://www.davidniciforovic.com/wp-login.php?action=slack-invitation)

## _This project is being actively developed for use under the hood of  [vulgar-cli](https://github.com/datatypevoid/vulgar-cli), a tool for generating and managing cutting-edge MEAN stack applications_

### Angular 2 Scaffolds for the Front-End

You can use `yo vulgar` to generate various Angular 2 components:

```bash
# generate a new Angular 2 component
$ yo vulgar:ng-component
```

You can find all possible scaffolds in the table below:

Scaffold  | Usage
--------- | ------------------------
Component | `yo vulgar:ng-component`

### Generating a Routable Component on the Front-end

You can generate a new route by with the following command (note the singular used in `hedgehog`):

```bash
yo vulgar:ng-route hedgehog
```

This will create a folder with a routable component (`hedgehog-root.component.ts`) with two sub-routes. The file structure will be as follows:

```
...
|-- app
|   |-- hedgehog
|   |   |-- hedgehog-detail.component.html
|   |   |-- hedgehog-detail.component.sass
|   |   |-- hedgehog-detail.component.spec.ts
|   |   |-- hedgehog-detail.component.ts
|   |   |-- hedgehog-list.component.html
|   |   |-- hedgehog-list.component.sass
|   |   |-- hedgehog-list.component.spec.ts
|   |   |-- hedgehog-list.component.ts
|   |   |-- hedgehog-root.component.spec.ts
|   |   |-- hedgehog-root.component.ts
|   |   |-- hedgehog.service.spec.ts
|   |   |-- hedgehog.service.ts
|   |-- ...
|-- app.ts
...
```

Afterwards to use the new route open your main app component, import `hedgehog-root.component.ts` and add it in the route config:

```
@RouteConfig([
  {path:'/hedgehog/...', name: 'HedgehogRoot', component: HedgehogRoot}
])
```

#### Supported Options

```bash
# set the name for your routable component, bypassing the prompt
$ yo vulgar:ng-route --name anteater
```

```bash
# set the path for your routable component, bypassing the prompt
$ yo vulgar:ng-route --path anteaters
```

```bash
# set the module for your routable component, bypassing the prompt
# note that this directory should already exist in `src/`
$ yo vulgar:ng-route --module app
```

```bash
# set the destination for your routable component, bypassing the prompt
# this is from the `root` of your application
$ yo vulgar:ng-route --dest src/app/todo
```

Visiting `http://localhost:8080/hedgehog` will show the `hedgehog` list.

# Support, Questions, or Feedback

> Contact us anytime for anything about this repo, Angular 2, or MEAN stack development in general.

- [Twitter: @datatype_void](https://twitter.com/datatype_void)

--------------------------------------------------------------------------------

enjoy -- **Da5id**

<br><br>

> Looking for corporate Angular/MEAN training, want to host us, or Angular/MEAN consulting? david.r.niciforovic@gmail.com

# License

 [MIT](/LICENSE)

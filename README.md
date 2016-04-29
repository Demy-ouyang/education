# education
学校管理系统
- 行政管理系统http://demy-ouyang.github.io/education/index.html

### 文件结构
##### 目录结构描述

>Readme.md                   // help

>css
>>main.css
>>edu-moral.css

>images

>sass
>>_base.scss
>>_mixin.scss
>>_news.scss
>>_reset.scss
>>_table.scss
>>_main.scss
>>edu-moral.scss

>index.html

#### SASS文件
sass文件的后缀名有两种形式：`.sass`和`.scss`。这两种的区别在于`.sass`文件对代码的排版有着非常严格的要求，而且没有大括号，没有分号，而`.scss`的写法和`.css`写法很相似，所以更容易理解和编写。
`.scss`文件开头一定要加上`@charset "utf-8";`，这样文件中的中文注释才能被识别和编译，否则代码中一旦出现中文就会编译报错。

SASS文件基础模块有_base.scss和_mixin.scss，这两个文件命名加前缀`__`是为了表示不需要编译成`.css`文件，直接在主要的功能模块中使用`@import "base","mixin";`引入即可。

//引入功能模块
@import"reset","main","news","table";


### 布局
左侧固定宽度，右侧自适应，并且两列等高，使用sass编译css，例如修改`$left-width`的值就可以随时变动左侧宽度并且保持布局不会错乱。


> base.scss

```scss
$normal-margin:20px;
$header-height:60px;
//left
$left-width:198px;
$left-bg:#fff;
$left-color:#585858;
$left-en-color:#585858;
$left-li-height:96px;
$left-li-cur-bg:#ebeef3;
$left-li-cur-color:#009fa8;
```

> main.scss

```scss

//两列等高
  %min-height{
    padding-bottom:2000px;margin-bottom:-2000px;
  }

.page-container{
  margin:$normal-margin; margin-top:$normal-margin+$header-height; overflow: hidden;
  //左侧
  .page-sidebar-wrapper{
    position: relative;width:$left-width + $normal-margin;float: left;margin-right: -($left-width+ $normal-margin);background-color: $left-bg;border-right:20px solid $body-bg;@extend %min-height;
     @at-root.page-sidebar{
      .page-sidebar-menu{
        width:$left-width;padding:$normal-margin 0;}
      }
  }
   //右侧
  .page-content-wrapper{
    float: right;width:100%; background-color: $left-bg;border-left:20px solid $body-bg;@extend %min-height;
    .page-content{
      margin-left:$left-width + $normal-margin;
    }
  }
}

```


> mixin.scss


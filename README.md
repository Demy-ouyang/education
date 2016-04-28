# education
学校管理系统
- 行政管理系统http://demy-ouyang.github.io/education/index.html

### 文件结构
##### 目录结构描述

>Readme.md                   // help

>css

>images

>sass

>index.html

### 布局
左侧固定宽度，右侧自适应，并且两列等高，使用sass编译css，例如修改`$left-width`的值就可以随时变动左侧宽度并且保持布局不会错乱。

> base.scss
```sass
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
```sass

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


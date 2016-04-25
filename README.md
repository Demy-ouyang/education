# education
学校管理系统
- 行政管理系统http://demy-ouyang.github.io/education/web/admin/edu_admin_index.html
- 德育管理系统http://demy-ouyang.github.io/education/web/moral/edu_moral_index.html

### 布局
左侧固定宽度，右侧自适应，并且两列等高
```sass
//
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

```css
.page-container{
  margin:$normal-margin; margin-top:$normal-margin+$header-height; overflow: hidden;
  //左侧
  .page-sidebar-wrapper{
    position: relative;width:$left-width + $normal-margin;float: left;margin-right: -($left-width+ $normal-margin);padding-bottom:2000px;margin-bottom:-2000px;background-color: $left-bg;border-right:20px solid $body-bg;
     @at-root.page-sidebar{
      .page-sidebar-menu{
        width:$left-width;padding:$normal-margin 0;}
      }
  }
   //右侧
  .page-content-wrapper{
    float: right;width:100%;padding-bottom:2000px;margin-bottom:-2000px; background-color: $left-bg;border-left:20px solid $body-bg;
    .page-content{
      margin-left:$left-width + $normal-margin;
    }
  }
}

```


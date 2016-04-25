/**
 * Created by Gnet on 2015/11/18.
 */
$(document).ready(function() {
    $('#table1').dataTable( {
        "toolbar":false,
        "ordering": true,//排序
        "info":     false,//搜索
        "bLengthChange": false, //改变每页显示数据数量
        //"bScrollCollapse": true,
        //"scrollY": "100%",//滚动条高度
        //"scrollCollapse": "true",//是否出现滚动条
        "jQueryUI": true,//展示了Datatables使用jQuery-ui主题
        "bPaginate": true, //是否显示分页
        stateSave: true,//保存最后一次分页信息、排序信息，当页面刷新，或者重新进入这个页面，恢复上次的状态
        ////////
        /*datatables定义了10个字符表示不同的组件

         l - Length changing 每页显示多少条数据选项
         f - Filtering input 搜索框
         t - The Table 表格
         i - Information 表格信息
         p - Pagination 分页按钮
         r - pRocessing 加载等待显示信息
         < and > - div elements 一个div元素
         <"#id" and > - div with an id 指定id的div元素
         <"class" and > - div with a class 指定样式名的div元素
         <"#id.class" and > - div with an id and class 指定id和样式的div元素*/
        "dom": '<"top">rt<"bottom"p><"clear">'

    } );
    $('#table2').dataTable( {
        "toolbar":false,
        "ordering": true,//排序
        "info":     false,//搜索
        "bLengthChange": false, //改变每页显示数据数量
        //"scrollY": "125px",//滚动条高度
        "scrollCollapse": "false",//是否出现滚动条
        //"jQueryUI": true,//展示了Datatables使用jQuery-ui主题
        "paging":   true ,//是否有分页
        "dom": '<"top">rt<"bottom"p><"clear">'
    } );

    $('#table3').dataTable( {
        "toolbar":false,
        "ordering": false,//排序
        "info":     false,//搜索
        "bLengthChange": false, //改变每页显示数据数量
        //"jQueryUI": true,//展示了Datatables使用jQuery-ui主题
        "bPaginate": true, //是否显示分页
        stateSave: true,//保存最后一次分页信息、排序信息，当页面刷新，或者重新进入这个页面，恢复上次的状态
        "dom": '<"top">rt<"bottom"p><"clear">'
    } );

});











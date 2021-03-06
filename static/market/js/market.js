$(function () {
    // 滚动条处理,让滚动条消失
    $('.market').width(innerWidth)


//    获取下标
//    即获取分类数据的下标
//    并且设置cookie
//    将cookie传回服务端
//    找到相应的数据

//    第一步:获取下标
//    cookie(key, value, options)
//     kindIndex = $.cookie('kindIndex')
//     console.log(kindIndex)
//     //如果下标存在,对应的分类
//     if(kindIndex){
//         $(".type-slider .type-item").eq(kindIndex).addClass('active')
//     }
//     //不存在 默认为热销榜
//     else{
//        $('.type-slider .type-item:first').addClass('active')
//     }
//
//     // 第二步:侧边栏的点击事件
//     $('.type-slider .type-item').on("click", function () {
//     //    保存下标 cookie
//         $.cookie('kindIndex', $(this).index(), { expires: 7, path: '/' } )

    // 获取下标 typeIndex
    typeIndex = $.cookie('typeIndex')
    console.log(typeIndex)
    if(typeIndex){  // 存在，对应分类
        $('.type-slider .type-item').eq(typeIndex).addClass('active')
    } else {    // 不存在，默认就是热榜
        $('.type-slider .type-item:first').addClass('active')
    }


    // 侧边栏点击处理 (页面会重新加载)
    $('.type-slider .type-item').click(function () {
        // 保存下标
        // console.log($(this).index())
        // 保存下标 cookie
        $.cookie('typeIndex', $(this).index(),{exprires:3, path:'/'})
    })














  // // 分类 和 排序
  //   var alltypebtn = false
  //   var sortbtn = false
  //
  //
  //   //    全部分类事件
  //   $('#alltypebtn').click(function () {
  //       // 取反
  //       alltypebtn = !alltypebtn
  //
  //       if (alltypebtn){ // 显示
  //           $('.bounce-view.type-view').show()
  //           $('#alltypebtn i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down')
  //
  //           sortbtn = false
  //           $('.bounce-view.sort-view').hide()
  //           $('#sortbtn i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up')
  //       } else {    // 隐藏
  //           $('.bounce-view.type-view').hide()
  //           $('#alltypebtn i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up')
  //       }
  //   })
  //
  //
  //   //    综合排序    事件
  //   $('#sortbtn').click(function () {
  //       // 取反
  //       sortbtn = !sortbtn
  //
  //       if (sortbtn){ // 显示
  //           $('.bounce-view.sort-view').show()
  //           $('#sortbtn i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down')
  //
  //           alltypebtn = false
  //           $('.bounce-view.type-view').hide()
  //           $('#alltypebtn i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up')
  //       } else {    // 隐藏
  //           $('.bounce-view.sort-view').hide()
  //           $('#sortbtn i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up')
  //       }
  //   })
  //
  //
  //   //    点击其他区域时候,应该收起两个按钮
  //
  //   $('.bounce-view').click(function () {
  //       alltypeBt = false
  //       $('.bounce-view.type-view').hide()
  //           $('#alltypebtn i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up')
  //
  //       sortbtn = false
  //       $('.bounce-view.sort-view').hide()
  //       $('.bounce-view.sort-view').hide()
  //           $('#sortbtn i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up')
  //   })
  //
  //
  //   })



 // 分类 和 排序
    var alltypeBt = false
    var sortBt = false


    //    全部分类事件
    $('#allBt').click(function () {
        // 取反
        alltypeBt = !alltypeBt

        if (alltypeBt){ // 显示
            $('.bounce-view.type-view').show()
            $('#allBt b').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down')

            sortBt = false
            $('.bounce-view.sort-view').hide()
            $('#sortBt b').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up')
        } else {    // 隐藏
            $('.bounce-view.type-view').hide()
            $('#allBt b').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up')
        }
    })

    //    综合排序分类

    $('#sortBt').click(function () {
        // 取反
        sortBt = !sortBt

        if (sortBt){ // 显示
            $('.bounce-view.sort-view').show()
            $('#sortBt b').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down')

            alltypeBt = false
            $('.bounce-view.type-view').hide()
            $('#allBt b').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up')
        } else {    // 隐藏
            $('.bounce-view.sort-view').hide()
            $('#sortBt b').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up')
        }
    })


    //    空白区域点击事件
    $('.bounce-view').click(function () {
        alltypeBt = false
        $('.bounce-view.type-view').hide()
            $('#allBt b').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up')

        sortBt = false
        $('.bounce-view.sort-view').hide()
        $('.bounce-view.sort-view').hide()
            $('#sortBt b').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up')
    })



//    减号默认隐藏
    $('.bt-wrapper>.glyphicon-minus').hide()
    $('.bt-wrapper>.num').hide()


//什么时候显示减号？
//    什么时候显示数量？
//    当数量，至少为１的时候
//    数量和减号出现
     // each 遍历操作
     $('.bt-wrapper>.num').each(function () {
        if(parseInt($(this).html())){
            $(this).show()
            $(this).prev().show()
        }
    })



//    加号按钮操作
 $('.bt-wrapper>.glyphicon-plus').click(function () {
        // 获取商品ID
        var goodsid = $(this).attr('goodsid')
        var $that = $(this) // 将this保存起来，因为在ajax请求中，this指向有问题

        // 发起ajax请求
        $.get('/axf/addcart/', {'goodsid':goodsid}, function (response) {

            // 未登录
            if (response['status'] == '-1'){
                // 跳转到登录界面
                window.open('/axf/login/', target="_self")
            } else {    // 已登录

                console.log(response)
                //显示数量
                $that.prev().html(response['number']).show()
                // 登录状态下显示减号出来
                $that.prev().prev().show()
            }
        })
    })



//    减号按钮操作
    $('.bt-wrapper>.glyphicon-minus').on('click', function () {
        var goodsid = $(this).attr('goodsid')
        var $that = $(this) // 将this保存起来，因为在ajax请求中，this指向有问题
    //    发起ajax请求
        $.get('/axf/subcart', {'goodsid': goodsid}, function (response) {
            //测试联通
            console.log(response)

             // 登录
            if(response['status'] == 1){
            //    如果数量小于１
            //    将减号隐藏
                if( parseInt(response['number'] )<1){
                    //将减号隐藏
                    $that.hide()
                //    将数量 0 隐藏
                    $that.next().hide()
                }
                else{
                    $that.next().html(response['number'])
                }
            }

        })
    })






})
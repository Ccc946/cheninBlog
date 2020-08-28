(function () {
    let hiddenProperty = 'hidden' in document ? 'hidden' :
        'webkitHidden' in document ? 'webkitHidden' :
        'mozHidden' in document ? 'mozHidden' :  null

    let title = document.title,
        hiddenTitle = '(●—●)喔哟，崩溃啦！',
        showTitle = '(/≧▽≦/)咦！又好了！',
        visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange'),
        timer = null
    let onVisibilityChange = function () {
        if (document.title !== hiddenTitle) {
            title = document.title.replace(showTitle, '')
        }
        if (!document[hiddenProperty]) {
            title = showTitle + title
            document.title = title
            timer = setTimeout(() => {
                clearTimeout(timer)
                document.title = title.replace(showTitle, '')
            }, 2000)
        } else {
            clearTimeout(timer)
            document.title = hiddenTitle
        }
    }
    document.addEventListener(visibilityChangeEvent, onVisibilityChange)
})()
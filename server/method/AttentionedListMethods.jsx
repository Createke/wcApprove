Meteor.methods({
    queryAttentionedList(){
        //查询出当日 本周
        var today = moment().format("YYYY-MM-DD");
        var todayCond = {billDate: today, status: "0"};
        var todayRs = AttentionedListMg.find(todayCond);
        //查询出本周数据
        var weekCond = {billDate: {$gte: "2016-06-13", $lte: "2016-06-19"}, status: "0"};
        var weekRs = AttentionedListMg.find(weekCond);
        //查询出全部数据
        var allCond = {status: "0"};
        var allRs = AttentionedListMg.find(allCond);
        var data =
        {
            todayObj: {
                count: todayRs.count(),
                dataList: todayRs.fetch()
            },
            weekObj: {
                count: weekRs.count(),
                dataList: weekRs.fetch()
            },
            allObj: {
                count: allRs.count(),
                dataList: allRs.fetch()
            }
        };
        return {data: data};
    }
});
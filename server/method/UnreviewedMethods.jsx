Meteor.methods({
    queryUnreviewedList(){
        //查询出当日 本周
        var today = moment().format("YYYY-MM-DD");
        var todayCond = {billDate: today, dealStatus: "0"};
        var todayRs = UnreviewedListMg.find(todayCond);
        //查询出本周数据
        var weekCond = {billDate: {$gte: "2016-06-13", $lte: "2016-06-19"}, dealStatus: "0"};
        var weekRs = UnreviewedListMg.find(weekCond);
        //查询出全部数据
        var allCond = {dealStatus: "0"};
        var allRs = UnreviewedListMg.find(allCond);
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
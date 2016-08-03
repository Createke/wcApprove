Meteor.methods({
    queryFootCount(query){
        //查询出全部数据
        var unreviewedAllCond = {status: "0"};
        var unreviewedAllRs = UnreviewedListMg.find(unreviewedAllCond);
        //查询出全部数据
        var attentionedCond = {status: "0"};
        var attentionedRs = AttentionedListMg.find(attentionedCond);
        return {UnreviewedCount:unreviewedAllRs.count(),AttentionedCount:attentionedRs.count()};
    }
});
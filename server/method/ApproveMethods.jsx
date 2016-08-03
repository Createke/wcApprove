Meteor.methods({
    queryBillKeyPoints(query){
        var billObj = UnreviewedListMg.findOne({_id:query.listId});
        var data = BillKeyPointsMg.find({listId:query.listId}).fetch();
        return {billObj:billObj,billKeyPoints: data};
    }
});

export default class ReportController{

    static async getReports(req, res, reportsModel){
        return res.status(200).json({
            data: await reportsModel.find({}).exec(),
            message: "All reports fetched successfully",
            status: "REPORTS_GET_OK"
        });
    }

     static async submitReport(req, res, reportsModel){
        console.log(req.body);
        const data = await reportsModel.create({...req.body});
        return res.status(201).json({
            data,
            message: "Report submitted successfully",
            status: "REPORTS_CREATE_OK"
        })
    }


    static async filterAggregateReports(req, res, reportsModel){

       const data =  await reportsModel.aggregate(
            [{
                '$geoNear': {
                    near: req.body.coordinates,
                    distanceField: "dist.calculated", // required
                    maxDistance: req.body.maxDistance / 6371,
                    spherical: true,
                    query: req.body.query,
                    includeLocs: "dist.location",
                    uniqueDocs: true
                }
            },
                {
                    "$limit" : parseInt(req.query.num, 10) || 10

            }]).exec();

        return res.status(200).json({
            data,
            count: data.length,
            message: `${data.length} reports were retrieved successfully`,
            status: "REPORTS_FILTER_AGGREGATE_OK"
        })
    }
}
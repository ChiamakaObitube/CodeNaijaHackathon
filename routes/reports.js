import ReportController from "../controllers/reports";

export default function(router, reportsModel){

    router.get('/', (req, res) => { ReportController.getReports(req, res, reportsModel) });
    router.post('/', (req, res) => {ReportController.submitReport(req, res, reportsModel)});
    router.post('/filter', (req, res) => {ReportController.filterAggregateReports(req, res, reportsModel)});

    return router;
}
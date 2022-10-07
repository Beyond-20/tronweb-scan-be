import express from "express"

export const healtCheckRoutes = express.Router();
healtCheckRoutes.use(express.json());

healtCheckRoutes.get('/version', (req, res) => {
    // var dd = date.format(new Date(), 'YYYYMMDDHHmm');
    var date = 'LOBBY-V2-2022_0617_1800';
    res.send(date);
});


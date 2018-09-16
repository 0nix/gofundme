//gofundme, created by 0nix
//an AsobuLab Code For Good project

const phantom = require("phantom"),
cheerio = require("cheerio");
module.exports = (() => {
    let module = {
        campaignUrl : null,
        getPageContent: async (url,callback) => {
            try{
            const instance = await phantom.create();
            const page = await instance.createPage();
            await page.open(url);
            const content = await page.property("content");
            await instance.exit();
            return callback(null, content);
            }
            catch(error){
                return callback(error);
            }
        },
        setCampaignUrl: (input) => {
            module.campaignUrl = input;
        },
        getLatestDonations: (callback) => {
            module.getPageContent("https://www.gofundme.com/mvc.php?route=donate/pagingDonationsFoundation&url=" + module.campaignUrl + "&idx=0&type=recent",(err,result) => {
                if(err) return callback(err);
                let $ = cheerio.load(result);
                let info = [];
                let listInfoNodes = $(".supporters-list").find(".supporter-info")
                for (var i = 0; i < listInfoNodes.length; i++) {
                    let e = {};
                    e.name = $(listInfoNodes[i]).find(".supporter-name").text();
                    e.amt = $(listInfoNodes[i]).find(".supporter-amount").text();
                    e.time = $(listInfoNodes[i]).find(".supporter-time").text();
                    info.push(e);
                }
                return callback(null, info);
            });
        },
        getCampaignTitle: (callback) => {
            module.getPageContent("https://www.gofundme.com/63hm6qo",(err,result) => {
                if (err) return callback(err);
                let $ = cheerio.load(result);
                let title = $("h1.campaign-title").text();
                return callback(null, title);
            });
        }
    }
    return module;
})();
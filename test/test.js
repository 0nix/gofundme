//gofundme, created by 0nix
//an AsobuLab Code For Good project

const   
expect = require("chai").expect,
cheerio = require("cheerio");

let testCampaign = "63hm6qo";
describe("#GFMbot", () => {
    it("example dot com works", () => {
        let gfm = require("../index.js");
        gfm.getPageContent("http://example.com",(err,result) => {
            let $ = cheerio.load(result);
            let exampleTitle = $("title").text();
            expect(exampleTitle).to.equal("Example Domain");
        });
    });
    it("return a blank file on non existing", () => {
        let gfm = require("../index.js");
        gfm.getPageContent("http://example.jp", (err, result) => {
            expect(result).to.equal("<html><head></head><body></body></html>");
        });
    });
    it("contains the cid", () => {
        let gfm = require("../index.js");
        gfm.setCampaignUrl("hello there");
        expect(gfm.campaignUrl).to.equal("hello there");
    });
    it("returns latest donations of donation campaign", () => {
        let gfm = require("../index.js");
        gfm.setCampaignUrl(testCampaign);
        gfm.getLatestDonations((err,result) => {
            if(err) return console.log(err);
            console.log(result);
            expect(result).to.be.a('array');
            expect(result.length).to.be.above(0);
        });
    });
    it("returns title of campaign", () => {
        let gfm = require("../index.js");
        gfm.setCampaignUrl(testCampaign);
        gfm.getCampaignTitle((err,result) => {
            if (err) return console.log(err);
            console.log(result);
            expect(result).to.be.a('string');
        });
        
    });
});
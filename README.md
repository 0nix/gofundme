# GoFundMe
======

A library to scrape GoFundMe.com donation campaigns. GoFundMe does not have a publicly available API to query about donation lists, so this library scrapes information from GoFundMe's own mvc.php API using the PhantomJS headless browser. This library is liable to break if GFM changes their API consumption endpoints

This Library is not associated to GoFundMe, Inc. in any way, shape, or form.

## Installation

    npm install gofundme

## Usage


    const gfm = require("gofundme");
    gfm.setCampaignUrl("<YOUR CAMPAIGN CODE HERE>");
    // as in https://www.gofundme.com/<YOUR CAMPAIGN CODE HERE>


    gfm.getLatestDonations((err,result) => {
        if(err) return console.log(err);
        console.log(result);
    });
    // the output should be a list of the latest donors to a campaign

## Test


    `npm test

## Contributing

Lint and test your code. This library is a work in progress. If I or other contributors of new functionality to add in order to track GoFundMe campaign progress, please submit an issue.

## Author

This has been an [AsobuLab](twitch.tv/asobulab) Code for Good Project by [0nix](twitter.com/asobulab)

## Special Thanks

This library arose as a result of the Jacksonville Landing Shooting on August 27th, 2018. A group of driven gamers from around the USA decided to hold the #GamersGiveBackGLHF charity stream in order to drum up support for the victims and the families of those who passed on. We wanted to thank people live on stream as they donated, but GoFundMe does not support any kind of live updates. This library powered an automated bot that thanked donors on stream. 


As such, I thank Defy Esports Bar for organizing the stream, as well as moderators, participants, entertainers, viewers, and donors both past and present.


If you feel compelled to donate, please do so at the [following campaign link.](https://www.gofundme.com/gamersgivebackglhf)
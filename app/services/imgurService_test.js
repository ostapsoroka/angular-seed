"use strict";
describe('imgur test', function() {
    
    var httpBackend;
    var imgurService;
    var rootScope;
    beforeEach(module("myApp.service.imgurService"));
    beforeEach(inject(function (_imgurService_, $httpBackend, $rootScope) {
        imgurService = _imgurService_;
        httpBackend = $httpBackend;
        rootScope = $rootScope;
    }));

    afterEach(function() {
      //  httpBackend.verifyNoOutstandingExpectation();
     //   httpBackend.verifyNoOutstandingRequest();
    });
  
    it('album test', function(){ 
        //httpBackend.expect("GET","test" ).respond({
        httpBackend.expect("GET","https://api.imgur.com/3/album/tdU8x" ).respond({
        "data": {
            "id": "tdU8x",
            "title": null,
            "description": null,
            "datetime": 1471894596,
            "cover": "gq3uSKR",
            "cover_width": 810,
            "cover_height": 1080,
            "account_url": null,
            "account_id": null,
            "privacy": "public",
            "layout": "blog",
            "views": 97811,
            "link": "http://imgur.com/a/tdU8x",
            "favorite": false,
            "nsfw": null,
            "section": null,
            "images_count": 1,
            "in_gallery": false,
            "is_ad": false,
            "images": [
            {
                "id": "gq3uSKR",
                "title": null,
                "description": null,
                "datetime": 1471894622,
                "type": "image/jpeg",
                "animated": false,
                "width": 810,
                "height": 1080,
                "size": 54756,
                "views": 123004,
                "bandwidth": 6735207024,
                "vote": null,
                "favorite": false,
                "nsfw": null,
                "section": null,
                "account_url": null,
                "account_id": null,
                "in_gallery": false,
                "link": "http://i.imgur.com/gq3uSKR.jpg",
                "is_ad": false
            }
            ]
        },
        "success": true,
        "status": 200
        });
        imgurService.getImgUrl("http://imgur.com/a/tdU8x").then(function(result){
            console.log('imgurServiceTest: Test result: ' + result);
            expect(result).toEqual('http://i.imgur.com/gq3uSKR.jpg');
        });
        httpBackend.flush();       
  })

   it('gallery album image test', function(){ 
        //httpBackend.expect("GET","test" ).respond({
        httpBackend.expect("GET","https://api.imgur.com/3/gallery/album/3Mte36Y" ).respond({
            "data": {
                "error": "No album was found with the ID, 3Mte36Y",
                "request": "/3/gallery/album/3Mte36Y",
                "method": "GET"
            },
            "success": false,
            "status": 404
        });
        httpBackend.expect("GET","https://api.imgur.com/3/gallery/image/3Mte36Y" ).respond(
            {
            "data": {
                "id": "3Mte36Y",
                "title": "MRW I forget my top lip and forehead are ticklish",
                "description": null,
                "datetime": 1471911269,
                "type": "image/gif",
                "animated": true,
                "width": 720,
                "height": 404,
                "size": 3345266,
                "views": 513839,
                "bandwidth": 1718928136174,
                "vote": null,
                "favorite": false,
                "nsfw": false,
                "section": "shittyreactiongifs",
                "account_url": "YoureGayForMyCodeYoureCodeGay",
                "account_id": 14861898,
                "in_gallery": true,
                "topic": "No Topic",
                "topic_id": 29,
                "gifv": "http://i.imgur.com/3Mte36Y.gifv",
                "mp4": "http://i.imgur.com/3Mte36Y.mp4",
                "mp4_size": 224239,
                "link": "http://i.imgur.com/3Mte36Y.gif",
                "looping": true,
                "is_ad": false,
                "comment_count": 113,
                "ups": 10105,
                "downs": 158,
                "points": 9947,
                "score": 10203,
                "is_album": false
            },
            "success": true,
            "status": 200
            }
       );

        imgurService.getImgUrl("http://imgur.com/gallery/3Mte36Y").then(function(result){
            console.log('imgurServiceTest: Test result: ' + result);
            expect(result).toEqual('http://i.imgur.com/3Mte36Y.gif');
        });

        httpBackend.flush();       
  })

   it('gallery album test', function(){ 
        //httpBackend.expect("GET","test" ).respond({
        httpBackend.expect("GET","https://api.imgur.com/3/gallery/album/RufuZ" ).respond({
            "data": {
                "id": "RufuZ",
                "title": "Some nice pics on a bird's-eye view",
                "description": null,
                "datetime": 1471864031,
                "cover": "IR8eSnG",
                "cover_width": 799,
                "cover_height": 1693,
                "account_url": "TheMaunomazteR",
                "account_id": 20832669,
                "privacy": "hidden",
                "layout": "blog",
                "views": 410844,
                "link": "http://imgur.com/a/RufuZ",
                "ups": 18482,
                "downs": 163,
                "points": 18319,
                "score": 18319,
                "is_album": true,
                "vote": null,
                "favorite": false,
                "nsfw": false,
                "section": "Pictures",
                "comment_count": 890,
                "topic": "The Great Outdoors",
                "topic_id": 146,
                "images_count": 18,
                "in_gallery": true,
                "is_ad": false,
                "images": [
                {
                    "id": "IR8eSnG",
                    "title": "New York",
                    "description": null,
                    "datetime": 1471860237,
                    "type": "image/jpeg",
                    "animated": false,
                    "width": 799,
                    "height": 1693,
                    "size": 497808,
                    "views": 2070434,
                    "bandwidth": 1030678608672,
                    "vote": null,
                    "favorite": false,
                    "nsfw": null,
                    "section": null,
                    "account_url": null,
                    "account_id": null,
                    "in_gallery": false,
                    "link": "http://i.imgur.com/IR8eSnG.jpg",
                    "is_ad": false,
                    "comment_count": null,
                    "ups": null,
                    "downs": null,
                    "points": null,
                    "score": null
                }
                ]
            },
            "success": true,
            "status": 200
        });

        imgurService.getImgUrl("http://imgur.com/gallery/RufuZ").then(function(result){
            console.log('imgurServiceTest: Test result: ' + result);
            expect(result).toEqual('http://i.imgur.com/IR8eSnG.jpg');
        });

        httpBackend.flush();       
  })
});
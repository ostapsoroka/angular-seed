
angular.module("myApp.service.imgurService",[]).service("imgurService",function($http, $q){
	return { 
		
		getImgUrl : function(imgurPageLink){
            //return 'http://i.imgur.com/gq3uSKR.jpg';
            var authHeader = "Authorization";
            var authHeaderValue = "Client-ID 7fcfd1c673b91d1";
            //check if this is an album, or post
            
            var parts = imgurPageLink.split("/");
                var id = parts[parts.length-1];


            var mainPromise = $q.defer();
            if (imgurPageLink.indexOf("gallery") >= 0 ){
            
            }
            if (imgurPageLink.indexOf("/a/") >= 0)
            {

                    var req = {
                        method: 'GET',
                        url: 'https://api.imgur.com/3/album/' + id ,
                        headers: {
                            'Authorization': authHeaderValue
                        }
                    }
                   $http(req).then(function(response){
                       var result = response.data.data.images[0].link;
                        console.log('imgurService: link to image : ' + result);
                        mainPromise.resolve(result);
                        //return result;
                    });
            
            }
            else if (imgurPageLink.indexOf("/gallery/") >= 0) {
                 console.log('imgurService: parsing gallery');
                 var req = {
                        method: 'GET',
                        url: 'https://api.imgur.com/3/gallery/album/' + id ,
                        headers: {
                            'Authorization': authHeaderValue
                        }
                    }
                    console.log('imgurService: parsing gallery : request to  : ' + req.url);
                   $http(req).then(function(response){
                         console.log('imgurService: parsing gallery : first response : ' + response.data.data);
                          console.log('imgurService: parsing gallery : first response : ' + response.data.status);
                       if (response.status !== 404 && response.data.status !== 404)
                       {
                           console.log('imgurService: parsing gallery : first response : resolving galery album' + response.data);
                            mainPromise.resolve(response.data.data.images[0].link);
                       }
                       else
                       {
                             
                            req = {
                                method: 'GET',
                                url: 'https://api.imgur.com/3/gallery/image/' + id ,
                                headers: {
                                    'Authorization': authHeaderValue
                                }
                            }
                            console.log('imgurService: parsing gallery : request to  : ' + req.url);
                             $http(req).then(function(secondaryResponse){
                                 console.log('imgurService: parsing gallery : secondary response  : ' + secondaryResponse.data);
                                 mainPromise.resolve(secondaryResponse.data.data.link);
                             });
                       }
                    
                    },
                    function errorCallback(response){
                         req = {
                                method: 'GET',
                                url: 'https://api.imgur.com/3/gallery/image/' + id ,
                                headers: {
                                    'Authorization': authHeaderValue
                                }
                            }
                            console.log('imgurService: parsing gallery : request to  : ' + req.url);
                             $http(req).then(function(secondaryResponse){
                                 console.log('imgurService: parsing gallery : secondary response  : ' + secondaryResponse.data);
                                 mainPromise.resolve(secondaryResponse.data.data.link);
                             });
                    }
                    );
            }
            else {
                console.log('imgurService: parsing individual image');
                  var req = {
                        method: 'GET',
                        url: 'https://api.imgur.com/3/image/' + id ,
                        headers: {
                            'Authorization': authHeaderValue
                        }
                    }
                   $http(req).then(function(response){
                       var result = response.data.data.link;
                        console.log('imgurService: link to image : ' + result);
                        mainPromise.resolve(result);
                        //return result;
                    });
            }
            return mainPromise.promise;
		}
   	}
});




var homeCtrl = function($scope, $http, $location,$rootScope, $window){
    $rootScope.background = "dark";
    $scope.ingredients = [];
    $scope.ingredientsChosen = [];
    $scope.meal = "";
    
    $http.post($rootScope.url + 'ingredients/', {
         email: $window.sessionStorage.getItem('userEmail'),
         password: $window.sessionStorage.getItem('userPassword')
    })
        .success(
        function(data){
            if(!$window.sessionStorage.getItem('userPassword')){
                $location.path('/login');
            }
            $scope.ingredients = data.data;
        }
    );

    $scope.result = function(){
        
         $http.post($rootScope.url + 'recipes/', {
             email: $window.sessionStorage.getItem('userEmail'),
             password: $window.sessionStorage.getItem('userPassword'),
             meal: $scope.meal, //possibles values: lunch, dinner, breakfast.
             ingredients: $scope.ingredients})
        .success(
        function(data){
            if(!$window.sessionStorage.getItem('userPassword')){
                $location.path('/login');
            }
            $rootScope.recipes = data.data;
            /*recipe { 
            "id": 2,
           "name": "Quiosco",
           "description": "Asquerosa.",
           "image": null,
           "pro": true,
           "cuisine_microwave": true,
           "cuisine_raw": false,
           "cuisine_boiled": false,
           "cuisine_grilled": false,
           "meal_lunch": true,
           "meal_dinner": false,
           "meal_breakfast": false,
           "creation_date": "2015-11-15, 01:47"
           "user_fav": true,
           "favs": 20
            }*/
            $location.path('/result');
        }
    );
    }
};

var resultCtrl = function($scope, $http, $window, $location, $rootScope){
    $scope.recipes = [];
    $scope.recipes = $rootScope.recipes;
    
   $scope.saveFav = function(index){
        
        if($scope.recipe.user_fav == true){
            $http.post('fav/', {
                email: $window.sessionStorage.getItem('userEmail'),
                password: $window.sessionStorage.getItem('userPassword'),
                recipe_id: $scope.recipes[index].id
            })
        .success(
        function(data){
            if(!$window.sessionStorage.getItem('userPassword')){
                $location.path('/login');
            }
            $scope.recipe.favs = data[0].favs;
        }
        );
        }
          
        else{
               $http.post('unfav/', {
                    email: $window.sessionStorage.getItem('userEmail'),
                    password: $window.sessionStorage.getItem('userPassword'),
                    recipe_id: $scope.recipes[index].id
            })
            .success(
                function(data){
                    if(!$window.sessionStorage.getItem('userPassword')){
                        $location.path('/login');
                    }
                    $scope.recipe.favs = data[0].favs;
                }
            ); 
        }
        
    };
    
    
};

var recipeCtrl = function($scope,$http, $rootScope){
    
    $scope.recipe = {};
    
    $scope.saveFav = function(index){
        
        if($scope.recipe.user_fav == true){
            $http.post('fav/', {
                email: $window.sessionStorage.getItem('userEmail'),
                password: $window.sessionStorage.getItem('userPassword'),
                recipe_id: $scope.recipes[index].id
            })
        .success(
        function(data){
            if(!$window.sessionStorage.getItem('userPassword')){
                $location.path('/login');
            }
            $scope.recipe.favs = data[0].favs;
        }
        );
        }
          
        else{
               $http.post('unfav/', {
                    email: $window.sessionStorage.getItem('userEmail'),
                    password: $window.sessionStorage.getItem('userPassword'),
                    recipe_id: $scope.recipes[index].id
            })
            .success(
                function(data){
                    if(!$window.sessionStorage.getItem('userPassword')){
                        $location.path('/login');
                    }
                    $scope.recipe.favs = data[0].favs;
                }
            ); 
        }
        
    };
    
    $scope.saveComment = function(index){
        if(!$window.sessionStorage.getItem('userId')){
            $location.path('/home');
        }
            $http.post('comment/', {
                email: $window.sessionStorage.getItem('userEmail'),
                password: $window.sessionStorage.getItem('userPassword'),
                comment: $scope.recipe.comments[index].text,
                recipe_id: $scope.recipe.id
            })
        .success(
        function(data){
            if(!$window.sessionStorage.getItem('userPassword')){
                $location.path('/login');
            }
            $scope.recipe.comments.push(
                data.data
            );
        }
    );
    }
};

var appCtrl = function($scope,$http, $rootScope){
    $rootScope.url = 'http://cookidea.co/backend/web/api/';
    $rootScope.background = "dark";
};

var loginCtrl = function($scope, $http, $location, $window, $rootScope){
    $rootScope.background = "light";
    $scope.saveUser = function(){
        $http.post('login/',
                $scope.user
            )
        .success(
        function(data){
            if(data.state == 0){
                $scope.err = 'El email o la contraseña son incorrectas';
            }
            else{
                 $window.sessionStorage.setItem({userEmail: $scope.user.email}),
                 $window.sessionStorage.setItem({userPassword: $scope.user.password})
                 $location.path('/home');
            }
        }
                
    );
    }
};

var registerCtrl = function($scope, $http, $location, $window){
    $rootScope.background = "light";
    $scope.registerUser = function(){
        $http.post('login/',
                $scope.user
            )
        .success(
        function(data){
            if(data.state == 0){
                $scope.err = 'El email o la contraseña son incorrectas';
            }
            else{
                 $window.sessionStorage.setItem({userEmail: $scope.user.email}),
                 $window.sessionStorage.setItem({userPassword: $scope.user.password})
                 $location.path('/home');
            }
        }
                
    );
    }
};


/**
 *
 * Pass all functions into module
 */
angular
    .module('inspinia')
    .controller('homeCtrl', homeCtrl)
    .controller('appCtrl', appCtrl)
    .controller('resultCtrl', resultCtrl)
    .controller('recipeCtrl', recipeCtrl)
    .controller('loginCtrl', loginCtrl)
    .controller('registerCtrl', registerCtrl);






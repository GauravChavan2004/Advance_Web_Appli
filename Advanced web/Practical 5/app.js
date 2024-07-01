angular.module('myApp', [])
    .controller('exceptionController', function ($scope, $exceptionHandler) {
        $scope.calculate = function () {
            try {
            // Ensure the input is treated as a number (supports integers and decimals)
                var inputNumber = Number($scope.num);
            // Check if the conversion results in a valid number
                if (isNaN(inputNumber)) {
                    throw new Error("Invalid input. Please enter a valid number.");
                }
                // Check for decimal numbers
                if (!Number.isInteger (inputNumber)) {
                    $scope.result = "Not Possible";
                    throw new Error("Cannot input decimal number.");
                }
                    // Check for non-negative numbers
                if (inputNumber < 0) { $scope.result = "Not Possible";
                    throw new Error("Number must be positive.");
                }
                // Calculate the square root of the input number
                $scope.result = Math.sqrt(inputNumber);
                $scope.errorMessage = "No Exceptions";
            } catch (e) {
                // Handle any exceptions that occur during calculation
                $scope.errorMessage = e.message;
                // Use AngularJS's $exceptionHandler service to log or handle the error as needed
                $exceptionHandler(e);
            }
        }
    }); 
var app = angular.module('myApp', []);
app.controller('studentController', function ($scope, $http) {
    $scope.students = [];
    var empid = 1;

    // Load students from backend
    $scope.loadStudents = function () {
        $http.get('http://localhost:3000/students')
            .then(function (response) {
                $scope.students = response.data;
            });
    };
    $scope.loadStudents(); // Initial load

    // Save or update student record
    $scope.saveRecord = function () {
        if ($scope.newStudent.id == null) {
            // Create new student
            $http.post('http://localhost:3000/students', $scope.newStudent)
                .then(function (response) {
                    $scope.students.push(response.data);
                    $scope.newStudent = {}; // Reset
                });
        } else {
            // Update existing student
            $http.put(`http://localhost:3000/students/${$scope.newStudent.id}`, $scope.newStudent)
                .then(function (response) {
                    $scope.loadStudents(); // Reload the list
                    $scope.newStudent = {}; // Reset
                });
        }
    };
    // Delete student
    $scope.delete = function(id) {
        $http.delete('http://localhost:3000/students/' + id)
        . then(function(response) {
            // Handle success
            $scope.loadStudents(); // Reload or remove the student from the list locally
        }, function(error) {
            console.error('Error deleting student:', error);
        });
    };
    // Edit student
    $scope.edit = function (id) {
        // Find student in $scope.students
        let student = $scope.students.find(student => student._id === id);
        if (student) {
            $scope.newStudent = angular.copy(student);
            $scope.newStudent.id = student._id; // Use MongoDB's_id
        }
    };
});

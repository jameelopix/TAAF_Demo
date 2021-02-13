angular
  .module("todoApp", [])
  .controller("TodoListController", function ($http) {
    var todoList = this;
    todoList.todos = [
      {
        id: "RT_UserRegistartion_08",
        text: "Register New End User",
        done: false,
      },
      {
        id: "RT_CreateAccessToken_182",
        text: "Create Access Token - Password Grant",
        done: false,
      },
      {
        id: "RT_UserAPI_05",
        text: "Retrieve details of an existing user",
        done: false,
      },
      {
        id: "RT_UserAPI_06",
        text:
          "Getting list of senders blocked by current user who has logged in",
        done: false,
      },
      {
        id: "RT_UserAPI_07",
        text: "Modify blocklist for current user - block test",
        done: false,
      },

      {
        id: "RT_UserRegistartion_08",
        text: "Register New End User",
        done: false,
      },
      {
        id: "RT_CreateAccessToken_182",
        text: "Create Access Token - Password Grant",
        done: false,
      },
      {
        id: "RT_UserAPI_05",
        text: "Retrieve details of an existing user",
        done: false,
      },
      {
        id: "RT_UserAPI_06",
        text:
          "Getting list of senders blocked by current user who has logged in",
        done: false,
      },
      {
        id: "RT_UserAPI_07",
        text: "Modify blocklist for current user - block test",
        done: false,
      },
      {
        id: "RT_UserAPI_06",
        text:
          "Getting list of senders blocked by current user who has logged in",
        done: false,
      },
      {
        id: "RT_UserAPI_07",
        text: "Modify blocklist for current user - block test",
        done: false,
      },
    ];

    todoList.addTodo = function () {
      console.log("addTodo function!!!");
      todoList.todos.push({ text: todoList.todoText, done: false });
      todoList.todoText = "";
    };

    todoList.remaining = function () {
      var count = 0;
      angular.forEach(todoList.todos, function (todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    todoList.selectedCount = function () {
      var count = 0;
      angular.forEach(todoList.todos, function (todo) {
        count += todo.done ? 1 : 0;
      });
      return count;
    };

    todoList.execute = function () {
      // console.log("Execute function!!!");
      var selected = [];
      angular.forEach(todoList.todos, function (todo) {
        if (todo.done) {
          selected.push(todo.id);
        }
      });

      if (selected.length > 0) {
        var data = {
          ids: selected,
        };

        $http.post("http:/localhost:8080/execute", JSON.stringify(data)).then(
          function successCallback(response) {
            console.log(
              "Request processed successfully!!!" + response["data"]["message"]
            );
          },
          function errorCallback(response) {
            console.log("Request processing failed!!!");
          }
        );
      }
    };
  });

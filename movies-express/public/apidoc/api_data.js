define({ "api": [
  {
    "type": "get",
    "url": "/movies/",
    "title": "Request All Movies",
    "name": "Get_All_Movies",
    "group": "Movies",
    "version": "0.9.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique ID for the movie</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the movie</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "year",
            "description": "<p>Year created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rating",
            "description": "<p>Rating for the movie</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\"id\":101,\"name\":\"Fight Club\",\"year\":1999,\"rating\":8.1},{\"id\":102,\"name\":\"Inception\",\"year\":2010,\"rating\":8.7},{\"id\":103,\"name\":\"The Dark Knight\",\"year\":2008,\"rating\":9},{\"id\":104,\"name\":\"12 Angry Men\",\"year\":1957,\"rating\":9.1}]",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/movies.js",
    "groupTitle": "Movies"
  },
  {
    "type": "get",
    "url": "/movies/",
    "title": "Request All Movies",
    "name": "Get_All_Movies",
    "group": "Movies",
    "version": "0.8.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique ID for the movie</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\"name\":\"Fight Club\"},{\"id\":102,\"name\":\"Inception\",\"year\":2010,\"rating\":8.7},{\"id\":103,\"name\":\"The Dark Knight\",\"year\":2008,\"rating\":9},{\"id\":104,\"name\":\"12 Angry Men\",\"year\":1957,\"rating\":9.1}]",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/movies.js",
    "groupTitle": "Movies"
  },
  {
    "type": "get",
    "url": "/movies/:id",
    "title": "Request specific movie",
    "name": "Get_movie",
    "group": "Movies",
    "version": "0.9.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique ID for the movie</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the movie</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "year",
            "description": "<p>Year created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rating",
            "description": "<p>Rating for the movie</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"id\":101,\"name\":\"Fight Club\",\"year\":1999,\"rating\":8.1}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/movies.js",
    "groupTitle": "Movies"
  }
] });

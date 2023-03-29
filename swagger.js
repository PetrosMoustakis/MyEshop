const m2s = require('mongoose-to-swagger')
const User = require('./models/user.model')
const Product = require('./models/product.models')

exports.options = {

    "definitions" : {
        User: m2s(User),
        Product: m2s(Product)
    },

    "swagger": "2.0",
    "info": {
        "version": "1.0.0",
        "description": "Products Project Application API",
        "title": "Products CRUD API",
    },
    "host": "localhost:3000",
    "basePath": "/",
    "tags": [
        {
            "name" : "Users",
            "description" : "API for users"
        },
        {
            "name" : "Users and products",
            "description" : "API for users and their products"
        }    
    ],
    "schemes": ["http"],
    "consumes": ["application/json"],
    "produces": ["application/json"],
    "paths": {
        "/api/user/findAll" : {
            "get": {
                "tags" : [ 
                    "Users"
                ],
                "summary" : "Gets all users from systems",
                "responses" : {
                    "200":{
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/User"
                        }
                    }
                }
            }
        },
        "/api/user/findOne/{username}" : {
            "get": {
                "tags" : [ 
                    "Users"
                ],
                "parameters": [
                    {
                        "name": "username",
                        "in": "path",
                        "required": true,
                        "description": "Username of user",
                        "type": "string"
                    }
                ],
                "summary" : "Gets one user from systems",
                "responses" : {
                    "200":{
                        "description": "User found",
                        "schema": {
                            "$ref": "#/definitions/User"
                        }
                    }
                }
            }
        },
        "api/user/create" : {
            "post": {
                "tags" : [
                    "Users"
                ],
                "description" : "Creates a new user",
                "parameters" : [{
                    "name": "create user",
                    "in": "body",
                    "description": "Users' parameters that need to be created",
                    "schema": {
                        "type" : "object",
                        "properties" : {
                            "name" : {"type": "string"},
                            "surname": {"type": "string"},
                            "password": {"type": "string"},
                            "username": {"type": "string"},
                            "email": {"type": "string"},
                            "address": {
                                    "type" : "object",
                                    "properties": {
                                        "area": {"type": "string"},
                                        "road": {"type": "string"}
                                    },
                            },
                            "phone": {
                                "type" : "array",
                                "items" : {
                                "type" : "object",
                                    "properties": {   
                                        "type": {"type": "string"},
                                            "number": {"type": "string"}
                                    },   
                                },
                            },   
                        },
                        "required" : ["username", "email"],
                    }
                }],
                "produces" : ["application/json"],
                "respones": {
                    "200": {
                        "description" : "Update user"
                    }
                }
            }
        },
        '/api/user/update': {
            "patch": {
                "tags": [
                    "Users"
                ],
                "description": "Update a user in the system",
                "parameters" : [{
                    "name" : "Update user in the system",
                    "in" : "body",
                    "description" : "User that we will update",
                    "schema" : {
                        "type" : "object",
                        "properties" : {
                            "username" : {"type": "string"},
                            "name" : {"Type" : "String"},
                            "surname" : {"Type" : "String"},
                            "emai" : {"Type" : "String"},
                            "password": {"Type" : "String"},
                            "address" : {
                                "type" : "object", 
                                    "properties": {
                                        "area" : {"Type" : "String"},
                                        "road": {"Type" : "String"}
                                },
                            },
                            "phone" : {
                                "type" : "array",
                                "items" : {
                                    "type" : "object",
                                    "properties": {
                                        "type" : {"Type" : "String"},
                                        "number" : {"Type" : "String"}
                                    },
                                },
                            },
                        },
                        "required" : ["email"]
                    }
                }],
                "produces" : ["application/json"],
                "respones": {
                    "200": {
                        "description" : "Update user"
                    }
                }
            }
        },
        "/api/user/delete/{username}": {
            "delete": {
                "tags" : [
                    "Users"
                ],
                "description": "Delete a user from the system",
                "parameters" : [{
                    "name" : "username",
                    "in": "path",
                    "description": "Username that we will delete"
                }],
                "responses": {
                    "200" : {
                        "description": "Deleted user"
                    }
                }
            }
        },
        '/api/userproducts/findOne/{username}': {
            "get": {
                "tags" :[
                    "Users and Products"
                ],
                "parameters": [{
                    "name" : "username",
                    "in" : "path",
                    "description" : "Find user's products",
                    "type": "string"
                }],
                "responses": {
                    "200": {
                        "description" : "User and Products"
                    }
                }
            }
        }
    }
}

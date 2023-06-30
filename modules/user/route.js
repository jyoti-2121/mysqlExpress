/**
 * @swagger
 * tags:
 *   name: User Management
 *   description: APIs to manage user items.
 */
const cors = require('cors'); 
const ctrl = require('./controller');
// const authenticationsApi = require('../userAuthentication/controller')
// const token = require('../../../auth/checkToken');
// const isVendorExists = require('../middlewares/checkVendor');
// const isProductExists = require('../middlewares/checkProduct');
// const checkDatabase = require('../middlewares/checkDb');
 
 
 /**
  * Init Route
  * @param {Object} app [Expressjs App Object]
  */
 exports.init = (app) => {
     /**
      * @swagger
      *  components:
      *    securitySchemes:
      *      BearerAuth:
      *        type: http
      *        scheme: bearer
      */
 
     /**
      * @swagger
      *  /api/v1/menu/product/add:
      *    post:
      *      description: This API add new product in mentioned database
      *      tags: [Menu Management]
      *      security:
      *          - BearerAuth: []
      *      content:
      *          - multipart/form-data
      *      parameters:
      *          - in: query
      *            name: db
      *            schema:
      *            type: string
      *            description: Optional. Possible values = mongodb/firebase Default = firebase
      *          - in: formData
      *            name: vendorId
      *            required: true
      *            schema:
      *            type: string
      *            description: The vendor ID
      *          - in: formData
      *            name: name
      *            required: true
      *            schema:
      *            type: string
      *            description: The name of the menu item
      *          - in: formData
      *            name: price
      *            required: true
      *            schema:
      *            type: string
      *            description: The menu item price
      *          - in: formData
      *            name: product_category
      *            required: true
      *            schema:
      *            type: string
      *            description: The menu item category name
      *          - in: formData
      *            name: description
      *            schema:
      *            type: string
      *            description: The menu item description
      *          - in: formData
      *            name: available
      *            schema:
      *            type: string
      *            description: The comma separated list of the product's availability schedule name. Example Brunch,Lunch,Dinner
      *          - in: formData
      *            name: special_instructions
      *            schema:
      *            type: boolean
      *            description: Set special_instruction field in database to true/false
      *          - in: formData
      *            name: photo
      *            required: true
      *            schema:
      *            type: file
      *            format: binary
      *            description: The menu item image. Allowed extenssion = jpg/jpeg/png/JPG/JPEG/PNG/svg/SVG
      *      responses:
      *          "200":
      *              description: API will send status and added product in the response 
      */
 
     app.post('/api/employee/getdata', cors(), ctrl.getEmp);
     app.post('/api/employee/gettotalcount', cors(), ctrl.getEmpCount);
     app.post('/api/department/getdata', cors(), ctrl.getdepartment);
     app.post('/api/employee/savedata', cors(), ctrl.saveEmp); 
     app.post('/api/employee/updatedata', cors(), ctrl.updateEmp);     
     app.post('/api/employee/deleteData', cors(), ctrl.deleteEmp);
};
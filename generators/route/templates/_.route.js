// ```
// _<%= slugifiedName %>.route.js
// (c) 2016 David Newman
// david.r.niciforovic@gmail.com
// _<%= slugifiedName %>.route.js may be freely distributed under the MIT license
// ```

// */app/routes/<%= slugifiedName %>/_<%= slugifiedName %>.router.js*

// ## <%= classifiedName %> API object

// GET | /api/<%= slugifiedName %> | Get all of the <%= classifiedName %> items
// GET | /api/<%= slugifiedName %>/:<%= camelizedName %>_id |Get a single <%= classifiedName %> item by <%= classifiedName %> item id
// POST | /api/<%= slugifiedName %> | Create a single <%= classifiedName %> item
// DELETE | /api/<%= slugifiedName %>/:<%= camelizedName %>_id | Delete a single <%= classifiedName %> item
// PUT | /api/<%= slugifiedName %>/:<%= camelizedName %>_id | Update a <%= classifiedName %> item with new info

// Load the `<%= classifiedName %>` model
import <%= classifiedName %> from '../models/<%= slugifiedName %>.model';

export default (app, router) => {

  // ### <%= classifiedName %> API Routes

  // Define routes for the <%= classifiedName %> item API

  router.route('/<%= slugifiedName %>')

    // ### Create a <%= classifiedName %> item

    // Accessed at POST http://localhost:8080/api/<%= slugifiedName %>

    // Create a <%= classifiedName %> item
    .post((req, res) => {

      <%= classifiedName %>.create({

        text : req.body.text

      }, (err, <%= camelizedName %>) => {

        if (err)
          res.send(err);

        // DEBUG
        console.log(`<%= classifiedName %> created: ${<%= camelizedName %>}`);

        <%= classifiedName %>.find((err, <%= camelizedName %>s) => {
          if(err)
            res.send(err);

          res.json(<%= camelizedName %>s);
        });
      });
    })

    // ### Get all of the <%= classifiedName %> items

    // Accessed at GET http://localhost:8080/api/<%= slugifiedName %>
    .get((req, res) => {

      // Use mongoose to get all <%= classifiedName %> items in the database
      <%= classifiedName %>.find((err, <%= camelizedName %>) => {

        if(err)
          res.send(err);

        else
          res.json(<%= camelizedName %>);
      });
    });

  router.route('/<%= slugifiedName %>/:<%= camelizedName %>_id')

    // ### Get a <%= classifiedName %> item by ID

    // Accessed at GET http://localhost:8080/api/<%= slugifiedName %>/:<%= camelizedName %>_id
    .get((req, res) => {

      // Use mongoose to a single <%= classifiedName %> item by id in the database
      <%= classifiedName %>.findOne(req.params.camelized_id, (err, <%= camelizedName %>) => {

        if(err)
          res.send(err);

        else
          res.json(<%= camelizedName %>);
      });
    })

    // ### Update a <%= classifiedName %> item by ID

    // Accessed at PUT http://localhost:8080/api/<%= slugifiedName %>/:<%= camelizedName %>_id
    .put((req, res) => {

      // use our <%= classifiedName %> model to find the <%= classifiedName %> item we want
      <%= classifiedName %>.findOne({

        '_id' : req.params.<%= camelizedName %>_id

      }, (err, <%= camelizedName %>) => {

        if (err)
          res.send(err);

        // Only update a field if a new value has been passed in
        if (req.body.text)
          <%= camelizedName %>.text = req.body.text;

        // save the <%= classifiedName %> item
        return <%= camelizedName %>.save((err) => {

          if (err)
            res.send(err);

          return res.send(<%= camelizedName %>);

        });
      });
    })

    // ### Delete a <%= classifiedName %> item by ID

    // Accessed at DELETE http://localhost:8080/api/<%= slugifiedName %>/:<%= camelizedName %>_id
    .delete((req, res) => {

      // DEBUG
      console.log(`Attempting to delete <%= camelizedName %> with id: ${req.params.<%= camelizedName %>_id}`);

      <%= classifiedName %>.remove({

        _id : req.params.<%= camelizedName %>_id
      }, (err, <%= camelizedName %>) => {

        if(err)
          res.send(err);

        console.log('<%= classifiedName %> successfully deleted!');

        <%= classifiedName %>.find((err, <%= camelizedName %>s) => {
          if(err)
            res.send(err);

          res.json(<%= camelizedName %>s);
        });
      });
    });
};

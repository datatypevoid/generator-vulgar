// ```
// <%= slugifiedName %>.model.js
// <%= slugifiedName %>.model.js may be freely distributed under the MIT license
// ```

// */app/models/<%= slugifiedName %>/<%= slugifiedName %>.model.js*

// ## <%= classifiedName %> Model

// Note: MongoDB will autogenerate an _id for each <%= classifiedName %> object created

// Grab the Mongoose module
import mongoose from 'mongoose';

// Create a `schema` for the `<%= classifiedName %>` object
let <%= camelizedName %>Schema = new mongoose.Schema({
  text: { type : String }
});

// Expose the model so that it can be imported and used in
// the controller (to search, delete, etc.)
export default mongoose.model('<%= classifiedName %>', <%= camelizedName %>Schema);

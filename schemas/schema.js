// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import artist from './artist'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'myGallery',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
	    title: 'Artwork',
	    name: 'artwork',
	    type: 'document',
	    fields: [
	    	{
	    		title: 'Title',
	    		name: 'title',
	    		type: 'string'
	    	}, {
	    		title: 'Description',
	    		name: 'description',
	    		type: 'string'
	    	}, {
	    		title: 'Photo',
	    		name: 'photo',
	    		type: 'image'
	    	}, {
	    		title: 'Author',
	    		name: 'author',
	    		type: 'reference',
	    		to: [{type: 'artist'}]
	    	}
	    ]
	}, artist
  ]),
})

// GROQ
// *[_type == 'artwork' && author._ref in *[_type == 'artist' && name match 'Yaohua']._id]{...}
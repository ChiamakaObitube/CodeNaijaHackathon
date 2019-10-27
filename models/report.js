export default function({Schema, model, Url}){
     const reportSchema = Schema({
        name: {type: String, required: true},
        location: {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
        enum: ['Point'], // 'location.type' must be 'Point'
                required: true,
            default: "Point"
        },
        coordinates: {
            index: '2dsphere',
            type: [Number],
                required: true
        }
    },
         description: {type: String, required: true},
         category: {type: String, enum: ["Roads", "Hospitals", "Banks", "Others", "Markets"], required: true},
        images: [{type: Url}]
    });
     return model('Report', reportSchema);
};